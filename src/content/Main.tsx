import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { commonAxios } from "../api/CommonAxios";
import { UserRequest } from "../api/model/User";
import { useFetchUser } from "../store/reactQuery/query/userQuery";
import { userCountState } from "../store/recoil/atom/userState";

function Main(): JSX.Element {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useRecoilState<number>(userCountState);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //react query로 호출
  const userList = useFetchUser({
    enabled: false, //바로 호출하지 않음
    onSuccess: (response) => {
      setUserCount(response?.data?.length);
      console.log(response);
    },
  });

  //유저리스트 호출
  function getUser() {
    userList.refetch();
  }
  //유저등록
  function setUser() {
    const userRequest: UserRequest = {
      title: title,
      content: content,
    };
    commonAxios.post("/user", userRequest).then((response) => {
      console.log(response);
      userList.refetch();
      setTitle("");
      setContent("");
    });
  }

  /**
   * 이벤트 함수들
   */
  //타이틀 변경 이벤트
  function titleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  //상세내용 변경 이벤트
  function contentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }
  //상세진입
  function goDetail(it: UserRequest) {
    navigate(`/view/user/${it._id}`);
  }
  return userList.isLoading ? (
    <div>로딩중...</div>
  ) : (
    <div>
      <input
        type="text"
        value={title}
        placeholder="타이틀"
        onChange={titleChange}
      />
      <br />
      <br />
      <textarea
        placeholder="내용"
        defaultValue={content}
        onChange={contentChange}
      ></textarea>
      <br />
      <button onClick={setUser}>저장</button>
      <br />
      <button onClick={getUser}>목록 호출</button>
      <br />
      <ul>
        {userList?.data?.data?.map((it, i) => {
          return (
            <li key={i} onClick={(e) => goDetail(it)}>
              {it.title}
            </li>
          );
        })}
      </ul>
      <div>{userCount}개</div>
    </div>
  );
}
export default Main;
