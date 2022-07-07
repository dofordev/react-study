import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { fetchUser } from "../../../api/commonApi";
import { ErrorResponse } from "../../../api/model/ErrorResponse";
import { UserResponse } from "../../../api/model/User";

//유저목록조회
export const useFetchUser = (
  options?: UseQueryOptions<
    UserResponse,
    AxiosError<ErrorResponse>,
    UserResponse,
    "fetchUser"
  >
): UseQueryResult<UserResponse, AxiosError<ErrorResponse>> =>
  useQuery("fetchUser", () => fetchUser(), options);
