import * as S from "../../src/components/units/board/auth/login/login.Styles";
import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ErrorModal, SuccessModal } from "../../src/commons";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { accessTokenState, isLoginState } from "../../src/commons/store";
import { useRouter } from "next/router";
import Image from "next/image";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

interface ILoginProps {
  onclickIsOpne: MouseEventHandler<HTMLImageElement> | undefined;
  email?: string;
}

export default function LoginPage(props: ILoginProps) {
  const router = useRouter();
  const focusRef = useRef<any>();
  const [email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onClickLabel = () => {
    focusRef.current?.focus();
  };
  const onClickjoin = () => {
    void router.push("/join");
    setIsLogin(!isLogin);
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 해서 accessToken 받아오기
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;

      // 2. accessToken을 globalState에 저장하기
      if (!accessToken) {
        ErrorModal("로그인에 실패했습니다. 다시 시도해 주세요.");
        return;
      }
      // setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      SuccessModal("로그인에 성공하였습니다.");
      setAccessToken(accessToken);
      setIsLogin(!isLogin);
    } catch (error) {
      ErrorModal(error as string);
    }
  };
  return (
    <>
      <S.BgLayer>
        <S.LoginModal>
          <S.BtnX>
            <Image
              onClick={props.onclickIsOpne}
              src="/ico_close.png"
              alt="close 아이콘"
              width={30}
              height={30}
            />
          </S.BtnX>
          <div>
            <Image
              src="/ico_window.png"
              alt="로고 아이콘"
              width={40}
              height={49}
            />
            <S.LoginForm>
              <div>
                <S.FormInput email={email}>
                  {EmailError}
                  <input
                    type="text"
                    name="tbuser_id"
                    onChange={onChangeEmail}
                    required={true}
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>Email</label>
                </S.FormInput>
                <S.FormInput style={{ marginTop: "30px" }} password={password}>
                  {passwordError}
                  <input
                    type="password"
                    name="tbuser_pw"
                    onChange={onChangePassword}
                    required={true}
                    ref={focusRef}
                  />
                  <label onClick={onClickLabel}>passWord</label>
                </S.FormInput>
                <S.btnForm onClick={onClickLogin}>
                  <span>LOGIN</span>
                </S.btnForm>
              </div>
            </S.LoginForm>
          </div>
          <S.BtnJoin>
            <p onClick={onClickjoin}>회원가입</p>
          </S.BtnJoin>
        </S.LoginModal>
      </S.BgLayer>
    </>
  );
}
