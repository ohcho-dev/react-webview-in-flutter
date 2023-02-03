import { request } from ".";

export const getHomeData = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/home",
    params: param,
  });
};

export const deleteProfilImageApi = (id: string) => {
  return request({
    method: "DELETE",
    url: `/v1/children/${id}/image`,
  });
};
