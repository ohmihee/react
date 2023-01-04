
# 참고하기 유용한 블로그나 사이트 url
### 자바스크립트 이벤트 버블링과 캡쳐
https://jungpaeng.tistory.com/69
### 이벤트 델리게이션 패턴
상위 엘리먼트에 하위 엘리먼트의 리스너를 작성하는 방식을 의미한다.
https://jungpaeng.tistory.com/78
# planner


[ 리엑트 관련 개념 학습 ] -------------------------------------------------------------- 리엑트 관련 훅 종류와 개념 및 사용법 습득

### useState
- const [count, setCount] = useState<number>(0);
특정 값을 저장하고, 해당 값을 변경하는 함수를 반환하여 주는 역할을 하는 hook이다.
import React, { useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@mui/material';

const HomeContainer = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <Grid container sx={{ width:'100%', pl:10, pr:10 }}>
      <div>{count}</div>
      <button onClick={()=>setCount(prev=>prev + 1)}>plus</button>
      <button onClick={()=>setCount(prev=>prev - 1)}>minus</button>
    </Grid>
  );
};

export default observer(HomeContainer);
// setCount 와 같은 state의 값을 갱신하여 주는 set함수의 경우에 현재 state의 값을 인자를 통해 받을 수 있다.
  
### useEffect
- useEffect는 side effect관련한 작업들을 실행해주는 리엑트 hook이다.
  
useEffect(()=>{
  return()  
},[])
  
```
import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { BoardContentsView, BoardHeaderView } from '~/comp/view/board/home/view';
import { Grid } from '@mui/material';

interface Props {
  //
}

const HomeContainer = ({
}: Props) => {

  const [ count, setCount ] = useState<number>(0);
  const [ result, setResult ] = useState<boolean>(false);

  console.log('1');

  useEffect(()=>{
    console.log('두번째인자x');
  });

  useEffect(()=>{
    console.log('[]');
  }, []);

  useEffect(()=>{
    console.log('[result]: ', result);
    return () => {
      console.log('return value');
    };
  }, [result]);


  return (
    <Grid container sx={{ width:'100%', pl:10, pr:10 }}>
      <>
        {console.log('4')}
        {count}
      </>
      <button onClick={()=>setCount(count + 1)}>button</button>
      <button onClick={()=>setResult(!result)}>change state</button>
    </Grid>
  );
};

export default observer(HomeContainer);

      
- 사용법
useEffect(fn, []);
useEffect는 기본적으로 최초 렌더링시에 무조건 실행된다. 그리고 이후에 컴포넌트가 마운트(mount)될 때에는 두 번째 인자에 따라 실행 여부가 달라지게 된다.
  1. 두 번째 인자를 주지 않은 경우 
  마운트가 이루어질 때마다 해당 함수가 실행된다.
  2. 두번째 인자에 빈 배열([])을 준 경우
최초 렌더링시에만 실행이 되고 이후에 렌더링시에는 실행이 되지 않는다., 두 번째 인자의 배열에 dependency 즉 state값을 준 경우에는 해당 state가 변경될 때마다 해당 useEffect가 실행된다. 
  * 특이점은 useEffect 내부에 있는 return 부분이다. useEffect 내부의 return은 렌더링이 unmount 될 때에 실행된다. 때문에 최초 렌더링시에는 실행되지 않고, 무조건 한 번 렌더링이 이루어진 후에 재렌더링이 일어나면서 기존의 렌더링된 것이 unmount 될 때에 실행된다. 
~ 위의 코드 실행 시 최초 화면 렌더링 시에 콘솔이 찍히는 순서는 1 -> 4 -> 두번째인자x -> [] -> [result]: false  이다. 이를 통해 알 수 있는 것은 기본적으로 함수 컴포넌트 함수가 실행되는 순서는 return 밖의 영역이 가장 먼저 실행되고, 그 이후에 화면이 그려지는 return 부분이 실행되고,그 이후에 다시 useEffect와 같은 hook이 실행된다. 
그리고 이후에는 useEffect의 두번째 인자에 따라 실행값이 달라지게 된다. button을 누르는 경우 1 -> 4 -> 두번째인자x 가 출력된다. 이는 setCount에 의해 state인 count가 변하면서 렌더링이 이루어졌고, 기본 순서에 따라 1과 4가 출력되고, 두번째 인자가 없어 매 렌더링마다 실행되는 두번째 인자x 가 출력된 것이다. (빈배열을 넣어준 useEffect는 최소 렌더링시에만 실행되고, 두번째인자에 [result]로 result를 dependency로 준 useEffect는 실행되지 않는다.). change state를 누르는 경우에는 1 -> 4 -> return value -> 두번째 인자x -> [result]: true 가 출력된다. 이는 setResult를 통해 result state 가 변경되면서 렌더링 순서대로 1, 4를 출력하고 새롭게 렌더링 되는 과정에서 이전의 컴포넌트는 unmount 되는데 이때에 실행되는 return value 가 실행되고, 이후에 두번째 인자를 주지 않아 매 렌더링마다 실행되는 두번째 인자x 출력하고 이후에 result: true를 출력하는 것이다. useEffect는 기본적으로 두번째 인자로 준 값에 따라 실행 여부가 결정되며, 실행이 확정된 useEffect들의 순서는 위에서 아래로 코드가 작성된 순서대로 실행되며, 그 안에서 useEffect 내부에 return이 존재하는 경우에는 컴포넌트가 unmount 될 때에 실행되므로, 뒤에 작성된 경우라 할지라도 해당 return 함수가 먼저 실행된다. 그 이후에는 다시 순서대로 실행된다.

```
  
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
  
  
  # 공부할 것 
ag-grid / spreadjs / react / kafka / java / spring / gradle
