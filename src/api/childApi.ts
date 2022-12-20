import { request } from '.';

export const getChildrenList = (param?: object) => {
  return request({
    method: 'GET',
    url: '/v1/children',
    params: param,
  });
};

export const getSelectedChild = (id: string) => {
  return request({ method: 'GET', url: `/v1/children/${id}` });
};

export const createChild = (data: object) => {
  return request({ method: 'POST', url: '/v1/children', data });
};
