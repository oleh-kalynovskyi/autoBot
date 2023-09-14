import { Injectable } from '@nestjs/common';
import { transformYear } from './helpers/transformYear';
import { findAutoMark } from './helpers/findAutoDetails';

import { writeFileSync } from 'fs';
import { getModelByMark } from './helpers/getModelByMark';
import { getListOfAuto } from './helpers/getListOfAuto';
import { makeAnalytic } from './helpers/makeAnalytic';
import { typeObjCar } from 'src/types/type';
const filePath = 'src/mockData.json';

@Injectable()
export class AutoRiaService {
  async getPathOfAdvertisement(message: {
    year: number;
    mark: string;
    model: string;
  }) {
    if (message.mark && message.model && message.year) {
      const [startYear, endYear]: number[] = transformYear(message.year);
      const autoMark: number = findAutoMark(message.mark);
      const modelId: number = getModelByMark(autoMark, message.model);
      const state = 5; // lviv region
      const size = 100; // count of response items
      const url = `https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&year[0].gte=${startYear}&year[0].lte=${endYear}&categories.main.id=1&brand.id[0]=${autoMark}&model.id[0]=${modelId}&country.import.usa.not=-1&region.id[0]=${state}&price.currency=1&abroad.not=0&custom.not=1&page=0&size=${size}`;
      const listAuto: typeObjCar[] = await getListOfAuto(url);
      const analytic = makeAnalytic(listAuto);
      return analytic;
    }
  }
}

// const jsonData = JSON.stringify(listAuto, null, 2);
// try {
//   writeFileSync(filePath, jsonData, 'utf8');
//   console.log('Data successfully saved to disk');
// } catch (error) {
//   console.log('An error has occurred ', error);
// }
