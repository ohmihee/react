# planner
https://cocoon1787.tistory.com/796
https://ko.reactjs.org/docs/hooks-reference.html
https://velog.io/@yes3427/React-Side-Effect
https://github.com/excalidraw/excalidraw/blob/master/src/scene/selection.ts
[ 리엑트 관련 개념 학습 ] -------------------------------------------------------------- 리엑트 관련 훅 종류와 개념 및 사용법 습득

### useState
- [ title, setTitle] = useState<string>("");
  
### useEffect
- useEffect는 side effect관련한 작업들을 실행해주는 리엑는 hook이다.
  
useEffect(()=>{
  return()  
},[])
  
// https://cocoon1787.tistory.com/796

useCallback
- 
useCallback(()=>{

},[])
useRef
- 
useContext 
-
useMemo
-
useImperativeHandle
- 
useLayoutEffect
-
useDebugValue
-
useDeferredValue
-
useTransition
-
useId
-
상태 관리 관련 라이브러리 종류 비교 및 선택

[ 프론트엔드와 백엔드 기본 폴터 트리 구축 ] --------------------------------------------------

프론트엔드
CLI 명령어를 통한 기본 틀 구축
tsconfig.json 파일 필요에 맞게 수정
상태 관리 관련 기본 예제 파일 작성
// 해당 작업 내용은 github에 올릴 예정

백엔드
intellij의 기능을 사용하여 gradle 프로젝트 생성
각 기능별 모듈 생성 board-api // 화면과 직접 연동 및 서버 실행 역할 board-core // entity와 데이터베이스 연동 관련 파일 위치한 디렉토리 board-exception // 에러 관련 처리 board-service // 실질적인 service로직 및 공통 기능 위주의 메서드 제공하는 파일 관리하는 디렉토리
setting.gradle 파일 확인
최상위 디렉토리의 build.gradle 파일 내용 변경 build.gradle 설정 관련 기본 내용 공식 문서와 기타 블로그 참고 build.gradle 학습 내용을 바탕으로 해당 파일 내용 적용 및 변경
데이터베이스 mongoRepository 연동 관련 기본 예제 파일 생성 -- 적용 시 에러 나는 부분 별도 정리 
// 해당 작업 내용 github에 올라갈 예정이며, 별도로 개념 관련 내용 블로그에 정리

[ uml 관련 개념 학습 및 uml 설계 ] -------------------------------------------------------------
uml 관련 개념 학습 -- uml이란 무엇인가에 대한 기본 개념 습득 -- uml 유형 학습 -- nextree 공식 블로그에 올라온 uml 관련 글 참고 -- 학습 내용을 바탕으로 최소한의 uml 설계

[ uml 설계를 바탕으로 기본 entity 및 vo 실제 코드 구현]---------------------------------------
기존 uml 설계 기반 entity와 vo 코드 구현 -- 구현 과정에서 uml 설계 수정 작업 가능
데이터 베이스 연동
테스트용 컨트롤러 파일 생성 후 insomnia 활용하여 데이터 베이스 연동 테스트

------------------------------------------------------------------------------------------------------------------------------------------------------
# 
1. yarn create react-app my-app --template typescript
2. yarn add zustand 
- 상태 관리는 zustand 라이브러리 사용
3. yarn add @mui/material
- 스타일 관련 라이브러리
