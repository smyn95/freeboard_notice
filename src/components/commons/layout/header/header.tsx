import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import LoginPage from "../../../../../pages/login";
import { accessTokenState, isLoginState } from "../../../../commons/store";
import * as S from "../../../../commons/styles";
import { IQuery } from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { FETCH_USER_LOGGED_IN } from "../layout.query";
import { IHeaderProps } from "../layouy.types";

export default function LayoutHeader(props: IHeaderProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [myPage, setMyPage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [accessToken] = useRecoilState(accessTokenState);

  const { onClickMoveToPage } = useMoveToPage();

  const onClickMyPage = () => {
    setMyPage(!myPage);
  };
  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <>
      <S.Inner>
        <S.Header>
          <S.Logo>
            <Link href="/main">
              <Image
                src="/maket_logo.png"
                alt="shinmimall 로고"
                width={110}
                height={100}
              />
            </Link>
          </S.Logo>
          <S.Navi>
            <S.Navibx>
              <li onClick={onClickMoveToPage("/product/new")}>게시글 등록</li>
              <li onClick={onClickMoveToPage("/board")}>게시판</li>
            </S.Navibx>
          </S.Navi>
          <S.TopSearch className={props.inputClass}>
            {accessToken ? (
              <>
                <S.UserImg src="/avatar.png" alt="유저아이콘"></S.UserImg>
                <S.LoginName>{data?.fetchUserLoggedIn.name}</S.LoginName>
                <S.MyPage>
                  <CaretDownOutlined onClick={onClickMyPage} />
                  {myPage && (
                    <S.MyPageTrue>
                      <div>
                        <S.UserImg
                          src="/avatar.png"
                          alt="유저아이콘"
                        ></S.UserImg>
                        <S.UserPage>
                          {data?.fetchUserLoggedIn.name}
                          <p>0 &nbsp;P</p>
                        </S.UserPage>
                      </div>
                      <S.Logout>
                        <li>
                          <DollarOutlined /> 충전하기
                        </li>
                        <li>
                          <LogoutOutlined />
                          로그아웃
                        </li>
                      </S.Logout>
                    </S.MyPageTrue>
                  )}
                </S.MyPage>
              </>
            ) : (
              <S.Login
                onClick={props.onclickIsOpne}
                src="/mypage.svg"
                alt="마이페이지 아이콘"
              />
            )}
            <Image
              src="/cart.svg"
              alt="장바구니 아이콘"
              width={45}
              height={45}
            />
            <input type="text" />
            <S.Material onClick={props.onClickText}>
              <Image
                src="/search.png"
                alt="검색아이콘"
                width={25}
                height={25}
              />
            </S.Material>
          </S.TopSearch>
          <S.Badges>
            <S.Badge>
              <Image src="/badge_01.png" alt="Badge" width={146} height={96} />
            </S.Badge>
            <S.Badge>
              <Image src="/badge_02.png" alt="Badge" width={146} height={96} />
            </S.Badge>
          </S.Badges>
        </S.Header>
        {isLogin && <LoginPage onclickIsOpne={onclickIsOpne} />}
      </S.Inner>
    </>
  );
}
