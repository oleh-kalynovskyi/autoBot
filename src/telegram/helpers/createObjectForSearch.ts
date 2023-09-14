export function parseVehicleInfo(input: string) {
  const parts = input.split(' ');
  const year = parseInt(parts[0]);
  const mark = parts[1];
  const model = parts.slice(2).join(' ');

  const vehicleObject = {
    year: isNaN(year) ? null : year,
    mark: mark ? mark.toLowerCase() : null,
    model: model ? model.toLowerCase() : null,
  };

  return vehicleObject;
}
