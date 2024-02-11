import camelcaseKeys from 'camelcase-keys';

export const snakeToCamelObjectKeys = (
  object: Object | Object[],
  isDeep: boolean | undefined = true,
) => camelcaseKeys(object, {deep: isDeep});

export const camelizeInterceptor = (response: any) => {
  if (response.config.params && response.config.params.withoutCamelize) {
    return response;
  }

  response.data = snakeToCamelObjectKeys(response.data);
  return response;
};
