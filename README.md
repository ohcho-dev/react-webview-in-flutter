# Repo 소개

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e645e2d89e6d4a418f199e543c336332)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=dev-lumanlab/eltern-mobile-web&utm_campaign=Badge_Grade)

### 엘턴 앱 웹뷰를 위한 repository입니다. ✨

## 목차

1. [프로젝트 빌드](#how-to-use)
2. [개발 규칙](#dev-rules)
   1. [브랜치](#branch)
   2. [커밋 메시지 형식](#commit)
3. [CSS 규칙](#css)

## 프로젝트 빌드 <a name="how-to-use"></a>

**프로젝트 clone**

```
$ git clone git@github.com:luman-lab/ssuktore-frontend-webview.git
$ git checkout dev
```

**npm 설치**

```
npm install
```

**개발 환경 실행**

```
npm start
```

**배포용 생성**

```
npm run build
```

### 브랜치 <a name="branch"></a>

- product
  - 정의: 현재 라이브 서비스 코드와 동일 버전
  - 직접 커밋 no!
  - stage branch 통해서 merge
- stage
  - 정의 : 라이브 가기 직접 라이브 DB랑 연결 해서 서비스 확인
  - 직접 커밋 no!
  - dev branch 통해서 merge
- dev
  - 정의 : 여기서 branch 따고 개발하고 branch 머지 한다.
  - 직접 커밋 yes!

### 커밋 메시지 형식 <a name="commit"></a>

깃 커밋 메시지 앞에 어떤 유형의 커밋인지 정의를 권장

- feat: 기능 개발
- fix: 버그 픽스
- refact: 리팩토링
- typo: 문구 수정
- test: 테스링 관련
- docs: 문서 작업
- chore: 기타 todo

## CSS 규칙<a name="css"></a>

### Z-index

애니메이션 효과를 위해 모든 부분에 position: fixed; 를 적용

- 10 - TitleBar
- 20 - BottomBar
- 100 - 상세페이지 진입
- 150 - 바텀 모달
- 200 - 공통 모달

### 반응형 기준

- html { font-size: 2.66666667vw } 적용 (핸드폰 가로일 경우는 font-size: 62.5%)
- rem 단위 사용 (1rem = 10px)

## 엘턴 피그마

- 설계: https://www.figma.com/file/J9CtDX2VB2OoFyCoF8cVYK/%EA%B8%B0%ED%9A%8D
- 디자인: https://www.figma.com/file/A6oZ2ekhqiuwF4UZMSKjoS/%EB%94%94%EC%9E%90%EC%9D%B8?node-id=103%3A18&t=PadbO6Py0kOBOyvz-0
