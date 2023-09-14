import { autoMark } from 'src/autoMark';
import { findCarModelsArray } from 'src/carMo';

export function findAutoMark(id: string): number {
  try {
    const res = autoMark?.find(
      (el) => el.name.toLocaleLowerCase() === id.toLocaleLowerCase(),
    );
    return res.value;
  } catch (error) {
    return null;
  }
}

export function findAutoModel(
  arr: { name: string; value: number }[],
  model: string,
) {
  if (arr) {
    const res = arr?.find(
      (el) => el.name.toLocaleLowerCase() === model.toLocaleLowerCase(),
    );
    return res;
  }
}

export const findCarModelsId = (mark: number, model: string) => {
  const carModelsArray = findCarModelsArray(mark);
  const result = findAutoModel(carModelsArray, model);
  return result;
};
