import * as Yup from 'yup';

interface fetchDataProps {
  url: string;
  validationScheme?: Yup.Schema;
}

export async function fetchData({ url, validationScheme }: fetchDataProps) {
  const response = await fetch(url);
  const fetchedData = await response.json();

  const validatedData = validationScheme
    ? await validationScheme.validate(fetchedData, { stripUnknown: true })
    : fetchedData;

  return validatedData;
}
