import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const BottomNavWrap = styled.ul`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 0.05rem solid rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  z-index: 20;
`;

const Lists = styled.li`
  width: 100%;
  text-align: center;
  padding-top: 0.8rem;
`;

const ImageWrap = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2.2rem;
  letter-spacing: 0.04rem;
  color: #747474;
`;

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
    link: "/note",
  },
  {
    id: 2,
    name: "코칭",
    imgUrl: "/images/coaching_off.svg",
    selectedImgUrl: "/images/coaching_on.svg",
    link: "/coaching",
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
  return (
    <BottomNavWrap>
      {bottomNavData.map((item) => {
        return (
          <Lists key={item.id}>
            <NavLink to={item.link} replace={true}>
              <ImageWrap>
                <img
                  src={
                    pathname === item.link ? item.selectedImgUrl : item.imgUrl
                  }
                  width="90%"
                />
              </ImageWrap>
              <Text style={pathname === item.link ? { color: "#000" } : {}}>
                {item.name}
              </Text>
            </NavLink>
          </Lists>
        );
      })}
    </BottomNavWrap>
  );
};

export default BottomNav;
