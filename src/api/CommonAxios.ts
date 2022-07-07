import axios, { AxiosInstance } from "axios";

export class CommonAxios {
  private static instance: CommonAxios;

  public commonAxios: AxiosInstance = axios.create();

  private constructor() {
    //도메인
    this.commonAxios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    //get 중첩 파마리터 처리
    this.commonAxios.defaults.paramsSerializer = (paramObj) => {
      const params: URLSearchParams = new URLSearchParams();
      for (const key in paramObj) {
        params.append(key, paramObj[key]);
      }
      return params.toString();
    };
    //요청 인터셉터
    this.commonAxios.interceptors.request.use(
      (config) => {
        console.log("설정", config);
        //요청 보내기전
        console.time(config.url);
        console.log(
          "%cRequest url:" + config.url,
          "color:blue;font-weight:bold;font-size:1rem;"
        );
        if (config.data) console.table(config.data);
        if (config.params) console.table(config.params);
        return config;
      },
      (error) => {
        //오류 요청 보내기전
        console.log("%cRequest", "color:red;font-weight:bold;font-size:1rem;");
        console.table(error);
        return Promise.reject(error);
      }
    );
    //응답 인터셉터
    this.commonAxios.interceptors.response.use(
      (response) => {
        //응답 보내기전
        console.log(
          "%cResponse url:" + response.config.url,
          "color:green;font-weight:bold;font-size:1rem;"
        );
        console.timeEnd(response.config.url);
        console.table(response.data);

        return response;
      },
      (error) => {
        //오류 응답 보내기전
        console.log("%cResponse", "color:red;font-weight:bold;font-size:1rem;");
        console.table(error?.response?.data);
        console.timeEnd(error?.config?.url);
        return Promise.reject(error);
      }
    );
  }

  public static getInstance() {
    if (!CommonAxios.instance) {
      CommonAxios.instance = new CommonAxios();
    }
    return CommonAxios.instance;
  }
}

export const commonAxios = CommonAxios.getInstance().commonAxios;
