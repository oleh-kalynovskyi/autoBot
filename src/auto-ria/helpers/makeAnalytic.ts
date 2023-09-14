import { typeObjCar } from 'src/types/type';

function calculateQuartileAverages(array: typeObjCar[]) {
  const sortedArr = array.slice().sort((a, b) => a.price - b.price);
  const quartileSize = Math.floor(sortedArr.length / 4);
  const quartiles = [
    sortedArr.slice(0, quartileSize),
    sortedArr.slice(quartileSize, 2 * quartileSize),
    sortedArr.slice(2 * quartileSize, 3 * quartileSize),
    sortedArr.slice(3 * quartileSize),
  ];
  // const quartileAverages = quartiles.map((quartile: typeObjCar[]) => {
  //   const total = quartile.reduce((sum, car) => sum + car.price, 0);
  //   return (total / quartile.length).toFixed();
  // });
  const quartileAveragesObject = quartiles.map((quartile: typeObjCar[]) => {
    const averageIndex = Math.round(quartile.length / 2);
    return quartile[averageIndex];
  });
  return { quartileAveragesObject };
}

function commonAveragePrice(array: typeObjCar[]): string {
  const totalPrice = array.reduce((sum, car) => sum + car.price, 0);
  return (totalPrice / array.length).toFixed();
}

function calculateAverageMilage(array: typeObjCar[]): string {
  if (array.length === 0) {
    return '0';
  }
  const sum = array.reduce((sum, car) => sum + car.milage, 0);
  const average = sum / array.length;
  return average.toFixed();
}

export function makeAnalytic(array: typeObjCar[]) {
  const clearArray = array.slice(1);
  const averagePrice = commonAveragePrice(clearArray);
  const averageMilage = calculateAverageMilage(clearArray);
  const { quartileAveragesObject } = calculateQuartileAverages(clearArray);

  const sortedArrByMilage = clearArray
    .slice()
    .sort((a, b) => a.milage - b.milage);
  const sortedArrByPrice = clearArray.slice().sort((a, b) => a.price - b.price);

  if (quartileAveragesObject.length) {
    return (
      `Вдалось знайти ${array.length} оголошень в Львівській обл. \n` +
      `Загальна середня ціна -- $${averagePrice} \n` +
      `Середня ціна в оголошенні: \n ${quartileAveragesObject?.map(
        (el, i) =>
          `${i + 1} квартиль: $${el?.price} ${el?.milage}тис.км. ${
            el?.year
          } року,  <a href="${el?.link}">подивитись</a>\n`,
      )}` +
      `Найдешевший автомобіль -- $${sortedArrByPrice[0]?.price}, ${sortedArrByPrice[0]?.milage}тис.км, ${sortedArrByPrice[0]?.year}року, <a href="${sortedArrByPrice[0]?.link}">подивитись</a> \n` +
      `Найдорощий автомобіль -- $${
        sortedArrByPrice[sortedArrByPrice.length - 1]?.price
      }, ${sortedArrByPrice[sortedArrByPrice.length - 1]?.milage}тис.км, ${
        sortedArrByPrice[sortedArrByPrice.length - 1]?.year
      }року, <a href="${
        sortedArrByPrice[sortedArrByPrice.length - 1]?.link
      }">подивитись</a>  \n` +
      `Середній пробіг -- ${averageMilage}тис.км \n` +
      `Авто з найменшим пробігом -- $${sortedArrByMilage[0]?.price}, ${sortedArrByMilage[0]?.milage}тис.км, ${sortedArrByMilage[0]?.year}року,  <a href="${sortedArrByMilage[0]?.link}">подивитись</a> \n` +
      `Авто з найбільшим пробігом -- $${sortedArrByMilage.at(-1)?.price}, ${
        sortedArrByMilage.at(-1)?.milage
      }тис.км, ${sortedArrByMilage.at(-1)?.year}року, <a href="${
        sortedArrByMilage.at(-1)?.link
      }">подивитись</a> \n` +
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      `Посилання на пошук -- <a href="${array[0].searchUrl}">ТУТ</a>`
    );
  }
}
