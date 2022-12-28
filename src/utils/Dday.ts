const Dday = (expiryDate: any) => {
  // D-Day 날짜 지정
  const setExpiryDate = new Date(expiryDate);

  // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  const now = new Date();

  const distance = setExpiryDate.getTime() - now.getTime();

  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  // 밀리초 값이기 때문에 1000을 곱한다.
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  const dday = Math.floor(distance / (1000 * 60 * 60 * 24));

  return dday + 1;
};

export default Dday;
