import { AxiosResponse } from 'axios';
import { fetchData } from './fetchData';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');

export async function getListOfAuto(url: string) {
  return fetchData(url).then((res: AxiosResponse) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const objects: any[] = [{ searchUrl: url }];
    // const statsTable = $('.address');
    const price = $('.size15 .bold[data-currency="USD"]');
    const milage = $('.item-char.js-race');
    const year = $('.address');
    const link = $('.address');
    const dataAddCar = $('.footer_ticket span span');
    for (
      let i = 0;
      i < Math.min(year.length, milage.length, price.length, dataAddCar.length);
      i++
    ) {
      const object = {
        milage: Number(
          $(milage)
            .eq(i)
            .text()
            .replace(/[^0-9.-]+/g, ''),
        ),
        year: $(year).eq(i).text().trim().split(' ')[3],
        price: Number(
          $(price)
            .eq(i)
            .text()
            .replace(/[^0-9.-]+/g, ''),
        ),
        link: $(link).eq(i).attr('href'),
        dataAddCar: $(dataAddCar).eq(i).text(),
      };
      objects.push(object);
    }
    return objects;
  });
}
