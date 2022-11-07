# Repo 소개

쑥토어 웹뷰를 위한 repository입니다.

## 목차

1. [프로젝트 빌드](#how-to-use)
2. [개발 규칙](#dev-rules)
   1. [브랜치](#branch)
   2. [커밋 메시지 형식](#commit)

## 프로젝트 빌드 <a name="how-to-use"></a>

**프로젝트 clone**

```
$ git clone git@github.com:luman-lab/ssuktore-frontend-webview.git
$ git checkout dev
```

**npm 설치**

```
npm install --force or npm install --legacy-peer-deps
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

- Feat: 기능 개발
- Fix: 버그 픽스
- Refact: 리팩토링
- Typo: 문구 수정
- Test: 테스링 관련
- Docs: 문서 작업
- Chore: 기타 todo
- Rese: 조사 할 것 들

### 쑥토어 피그마

- https://www.figma.com/file/J9CtDX2VB2OoFyCoF8cVYK/%EA%B8%B0%ED%9A%8D
