import { commonAxios } from "./CommonAxios";
import { UserResponse } from "./model/User";
export async function fetchUser(): Promise<UserResponse> {
  return await commonAxios.get("/user");
}
