import { NavLink, useLocation } from "react-router-dom";
import * as S from "./BottomNav.styled";
import UseImgix from "../../common/Imgix";

const bottomNavData = [
  {
    id: 0,
    name: "홈",
    imgUrl: "/images/home_off.svg",
    selectedImgUrl: "/images/home_on.svg",
    link: "/home",
  },
  {
    id: 1,
    name: "기록",
    imgUrl: "/images/note_off.svg",
    selectedImgUrl: "/images/note_on.svg",
    link: "/record",
  },
  {
    id: 2,
    name: "코칭",
    imgUrl: "/images/coaching_off.svg",
    selectedImgUrl: "/images/coaching_on.svg",
    link: "/new-coaching",
  },
  {
    id: 3,
    name: "프로그램",
    imgUrl: "/images/program_off.svg",
    selectedImgUrl: "/images/program_on.svg",
    link: "/program",
  },
  {
    id: 4,
    name: "MY",
    imgUrl: "/images/my_off.svg",
    selectedImgUrl: "/images/my_on.svg",
    link: "/my",
  },
];

const BottomNav = () => {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/")[1];

  return (
    <S.BottomNavWrap>
      {bottomNavData.map(item => {
        return (
          <S.Lists key={item.id}>
            <NavLink to={item.link} replace={true}>
              <S.ImageWrap>
                <UseImgix
                  srcUrl={`/${firstPath}` === item.link ? item.selectedImgUrl : item.imgUrl}
                  alt={item.name}
                  style={{ width: "3.6rem" }}
                />
              </S.ImageWrap>
              <S.Text selected={`/${firstPath}` === item.link}>{item.name}</S.Text>
            </NavLink>
          </S.Lists>
        );
      })}
    </S.BottomNavWrap>
  );
};

export default BottomNav;
