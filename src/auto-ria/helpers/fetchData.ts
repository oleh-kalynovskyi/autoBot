import axios from 'axios';

export async function fetchData(url) {
  const response = await axios(url).catch((err) => console.log(err));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (response?.status !== 200) {
    console.log('Error occurred while fetching data');
    return;
  }
  return response;
}
