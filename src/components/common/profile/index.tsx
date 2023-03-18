import React, { useEffect } from "react";
import { useGetMember } from "../../../querys/member/member.query";
import {
  FiledContainer,
  FiledImg,
  FiledItemWrap,
  FiledName,
  LogoutText,
  MyInfoPathContainer,
  MyInfoPathImg,
  MyInfoPathText,
  ProfileBarContainer,
  UserGrade,
  UserInfo,
  UserName,
  UserProfile,
} from "./style";
import aprofile from "../../../assets/images/aprofile.png";
import { FILEDITEM } from "../../../constants/filed/filed";
import copy from "../../../assets/images/copy.svg";
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../../hooks/logout/useLogOut";
import { useRecoilState } from "recoil";
import { USERID, USERPROFILE } from "../../../recoil/user/UserAtom";

const ProfileBar = () => {
  const { data } = useGetMember();
  const navigate = useNavigate();
  const { onLogOut } = useLogOut();
  const [userId,SetUserId] = useRecoilState<number>(USERID); //댓글 수정에 필요한 아이디가져오기
  const [userProfile,SetUserProfile] = useRecoilState<string>(USERPROFILE); // 게시글 수정에 필요한 프로필 정보가져오기

  useEffect(()=>{
    SetUserId(data?.data.userId!!);
  },[SetUserId,data?.data.userId]);

  useEffect(()=>{
    SetUserProfile(data?.data.profileImage!!);
  },[SetUserProfile,data?.data.profileImage]);
  
  return (
    <ProfileBarContainer>
      <UserInfo>
        <UserProfile
          src={data?.data.profileImage ? data?.data.profileImage : aprofile}
        />
        {data?.data ? (
          <div>
            <UserName>{data?.data.name}</UserName>
            <UserGrade>{`${data?.data.stdInfo.grade}학년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</UserGrade>
          </div>
        ) : (
          <div>학생정보가 없습니다.</div>
        )}
      </UserInfo>
      <FiledContainer>
        {FILEDITEM.map((item) => (
          <div
            key={item.color}
            onClick={() => navigate(`/tag/${item.title.toUpperCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <FiledItemWrap>
              <FiledImg src={item.image} />
              <FiledName>{item.title}</FiledName>
            </FiledItemWrap>
          </div>
        ))}
      </FiledContainer>
      <MyInfoPathContainer>
        <MyInfoPathImg src={copy} />
        <MyInfoPathText onClick={() => navigate("/mypage")}>
          내가 쓴 멘토 요청글
        </MyInfoPathText>
      </MyInfoPathContainer>
      <LogoutText onClick={onLogOut}>로그아웃</LogoutText>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
