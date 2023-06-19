import "slick-carousel/slick/slick.css";
import LayoutMainPage from "../../../layouts/LayoutMainPage";
import ClassList from "./ClassList";
import CoachingList from "./CoachingList";
import * as S from "./programList.styled";

const ProgramListPage = () => {
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1300,
  //   autoplaySpeed: 3000,
  //   mobileFirst: false,
  //   cssEase: "ease-out",
  // };

  return (
    <LayoutMainPage>
      <S.ProgramPageWrapper>
        {/* <CarouselSection>
          <Slider {...settings}>
            <SliderContainer
              onClick={() => {
                console.log("1");
              }}
            >
              <img alt="banner 1" src="/images/banner-1.svg" />
            </SliderContainer>
            <SliderContainer
              onClick={() => {
                console.log("2");
              }}
            >
              <img alt="banner 1" src="/images/banner-example.png" />
            </SliderContainer>
          </Slider>
        </CarouselSection> */}
        <S.CouchingSection>
          <CoachingList />
        </S.CouchingSection>
        <S.ClassSection>
          <ClassList />
        </S.ClassSection>
      </S.ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramListPage;
