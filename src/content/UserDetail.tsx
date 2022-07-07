import { useRecoilState, useRecoilValue } from "recoil";
import { userCountState } from "../store/recoil/atom/userState";

function UserDetail(): JSX.Element {
  const userCount = useRecoilValue<number>(userCountState);

  return (
    <div>
      <div>{userCount}개</div>
    </div>
  );
}
export default UserDetail;
