import { AxiosResponse } from 'axios';
import { fetchData } from './fetchData';
import { findAutoModel, findCarModelsId } from './findAutoDetails';
import { writeFileSync } from 'fs';

const filePath = 'src/carModels.json';

export function getModelByMark(mark: number, model: string): number {
  if (mark) {
    const { value: modelId } = findCarModelsId(mark, model);
    return modelId;
  }

  // return fetchData(
  //   `https://developers.ria.com/auto/categories/1/marks/${24}/models?api_key=${autoRiaApi}`,
  // ).then((response: AxiosResponse) => {
  //   const jsonData = JSON.stringify(response.data, null, 2);
  //   try {
  //     writeFileSync(filePath, jsonData, 'utf8');
  //     console.log('Data successfully saved to disk');
  //   } catch (error) {
  //     console.log('An error has occurred ', error);
  //   }
  // }); // findAutoModel(response.data, model)); //
}
