# Repo 소개

### Flutter 앱 내에 사용할 React 기반 Webview repository입니다. ✨

## 목차

1. [프로젝트 빌드](#how-to-use)
2. [개발 규칙](#dev-rules)
   1. [브랜치](#branch)
   2. [커밋 메시지 형식](#commit)
3. [CSS 규칙](#css)

## 프로젝트 빌드 <a name="how-to-use"></a>

### 이 프로젝트는 submodule을 사용하였습니다.

**프로젝트 clone**

```
$ git clone ...
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

- titlebar = 30
- bottom-nav = 110
- mainpage = 20
- detailpage = 100 or 110
- detailpage bottom-btn-wrap = 110
- custom-bottom-modal = 150
- slide-transition = in: 110 out: 100 (페이지 전환 애니메이션)

### 반응형 기준

- html { font-size: 2.6666vw } 적용 (핸드폰 가로일 경우는 font-size: 62.5%)
- rem 단위 사용 (1rem = 10px)


## .gitmodules 파일은 있지만 경로에 폴더나 파일이 없을때 명령어

- git submodule update --init --recursive
