import { useEffect, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NativeFunction } from "../utils/NativeFunction";

const BottomNavWrap = styled.ul`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 0.05rem solid rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  z-index: 110;
`;

const Lists = styled.li`
  width: 100%;
  text-align: center;
  padding-bottom: 0.6rem;
`;

const ImageWrap = styled.div`
  width: 9.3rem;
  height: 5.4rem;
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
    imgUrl: "/images/home_off.png",
    selectedImgUrl: "/images/home_on.png",
    link: "/home",
  },
  // {
  //   id: 1,
  //   name: '기록',
  //   imgUrl: '/images/note_off.png',
  //   selectedImgUrl: '/images/note_on.png',
  //   link: '/note',
  // },
  {
    id: 2,
    name: "코칭",
    imgUrl: "/images/coaching_off.png",
    selectedImgUrl: "/images/coaching_on.png",
    link: "/coaching",
  },
  {
    id: 3,
    name: "프로그램",
    imgUrl: "/images/program_off.png",
    selectedImgUrl: "/images/program_on.png",
    link: "/program",
  },
  {
    id: 4,
    name: "MY",
    imgUrl: "/images/my_off.png",
    selectedImgUrl: "/images/my_on.png",
    link: "/my",
  },
];

const BottomNav = () => {
  const { pathname } = useLocation();
  let firstPath = pathname.split("/")[1];

  useLayoutEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      NativeFunction("routeNativeScreen", "off");
    };
  }, []);

  return (
    <BottomNavWrap>
      {bottomNavData.map(item => {
        return (
          <Lists key={item.id}>
            <NavLink to={item.link} replace={true}>
              <ImageWrap>
                <img
                  src={`/${firstPath}` === item.link ? item.selectedImgUrl : item.imgUrl}
                  width="100%"
                  height="100%"
                  alt={item.name}
                />
              </ImageWrap>
            </NavLink>
          </Lists>
        );
      })}
    </BottomNavWrap>
  );
};

export default BottomNav;
