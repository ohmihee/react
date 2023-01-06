
# 참고하기 유용한 블로그나 사이트 url
### 자바스크립트 이벤트 버블링과 캡쳐
https://jungpaeng.tistory.com/69
### 이벤트 델리게이션 패턴
상위 엘리먼트에 하위 엘리먼트의 리스너를 작성하는 방식을 의미한다.
https://jungpaeng.tistory.com/78
# planner


[ 리엑트 관련 개념 학습 ] -------------------------------------------------------------- 리엑트 관련 훅 종류와 개념 및 사용법 습득
## Hook 이란?
React 16.8에 새롭게 추가된 기능으로 공식 문서에 따르면 React state와 Hook은 state 관리와 다른 react 기능을 사용하기 편리하게 만들어준 메서드이다.

### useState
- const [count, setCount] = useState<number>(0);
특정 값을 저장하고, 해당 값을 변경하는 함수를 반환하여 주는 기능을 제공하는 역할을 하는 hook이다.
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
useEffect는 기본적으로 최초 렌더링시에 무조건 실행된다. 그리고 이후에 컴포넌트가 마운트(mount)될 때에는 두 번째 인자에 따라 useEffect의 실행 여부가 달라지게 된다.
  * 마운트(mount)란: 쉽게 이야기하면 컴포넌트가 브라우저에 나타나는 것을 의미하며, 반대로 언마운트(unmount)란 브라우저에서 컴포넌트가 제거되는 것을 의미한다.
  1. 두 번째 인자를 주지 않은 경우 
  마운트가 이루어질 때마다 useEffect()가 실행된다.
  2. 두 번째 인자에 빈 배열([])을 준 경우
  최초 렌더링시에만 실행이 되고 이후에 마운트시에는 해당 useEffect()가 실행이 되지 않는다.
  3. 두 번째 인자의 배열에 dependency 즉 state값을 준 경우에는 해당 state가 변경될 때마다 해당 useEffect가 실행된다. 
  
  * 특이점은 useEffect 내부에 있는 return 부분이다. useEffect 내부의 return은 언마운트(unmount), 즉 컴포넌트가 브라우저에서 제거 될 때에 실행된다. 때문에 최초 렌더링시에는 실행되지 않고, 무조건 한 번 렌더링이 이루어진 후에 컴포넌트가 리렌더링 되는 과정에서 기존의 컴포넌트를 언마운트하고, 다시 마운트하면서, useEffect() 내부의 return문이 실행된다. 
  
~ 위의 코드 실행 시 최초 화면 렌더링 시에 콘솔이 찍히는 순서는 1 -> 4 -> 두번째인자x -> [] -> [result]: false  이다. 이를 통해 기본적으로 함수 컴포넌트 함수가 실행되는 순서는 (컴포넌트의) return 밖의 영역이 가장 먼저 실행되고, 그 이후에 화면이 그려지는 return 부분이 실행되고,그 이후에 다시 useEffect와 같은 hook이 실행된다는 것을 확인할 수 있다.
  
그리고 이후에는 useEffect의 두번째 인자에 따라 실행값이 달라지게 된다. button을 누르는 경우 1 -> 4 -> 두번째인자x 가 출력된다. 이는 setCount에 의해 state인 count가 변하면서 마운트(mount)가 이루어졌고, 기본 순서에 따라 1과 4가 출력되고, 두번째 인자가 없어 매 마운트가 이루어질 때마다 실행되는 두번째 인자x 가 출력된 것이다. (빈 배열을 넣어준 useEffect는 최소 렌더링시에만 실행된다.). change state를 누르는 경우에는 1 -> 4 -> return value -> 두번째 인자x -> [result]: true 가 출력된다. 이는 setResult를 통해 result state 가 변경되면서 렌더링 순서대로 1, 4를 출력하고 새롭게 렌더링 되는 과정에서 이전의 컴포넌트는 unmount 되는데 이때에 실행되는 return value 가 실행되고, 이후에 두번째 인자를 주지 않아 매 렌더링마다 실행되는 두번째 인자x 출력하고 이후에 result: true를 출력하는 것이다. useEffect는 기본적으로 두번째 인자로 준 값에 따라 실행 여부가 결정되며, 실행이 확정된 useEffect들의 순서는 위에서 아래로 코드가 작성된 순서대로 실행되며, 그 안에서 useEffect 내부에 return이 존재하는 경우에는 컴포넌트가 unmount 될 때에 실행되므로, 뒤에 작성된 경우라 할지라도 해당 return 함수가 먼저 실행된다. 그 이후에는 다시 순서대로 실행된다.

```
  
// https://cocoon1787.tistory.com/796

  * 메모이제이션(Memoization)
  https://ssminji.github.io/2020/02/05/the-cake-thief/
  : 메모이제이션이란 특정 값이나 연산을 메모리에 저장해두고 재사용하는 것을 의미한다. 메모리에 저장해둔 특정 값이나 연산을 사용함으로써 프로그램의 실행 속도를 높일 수 있다. 
useCallback
 - 메모이제이션 된 함수를 반환해주는 기능을 한다. 
useCallback(fn,[]);
  
useRef
- 
useContext 
-
useMemo
- 메모이제이션된 값을 반환해주는 기능을 한다. (특정한 입력값에 대한 결과값을 메모리에 저장해두었다가 동일한 입력값이 들어오면 메모리에 저장된 결과값을 재사용한다.)
  const memoizedValue = useMemo(()=>fn,[]) 
  기본적으로 위와 같이 사용되며, 두 번째 인자로 배열을 주지 않는 경우 매 렌더링 때마다 연산이 이루어진다. 배열에는 해당 함수에서 필요한 의존성(state 값)을 넣어주며, 
  해당 의존성(state 값)이 변경될 때에만 해당 값으로 새롭게 연산이 이루어진다. useMemo는 복잡한 연산 등의 계산을 위해 사용되며 api 요청과 같은 비동기 작업의 경우는 useMemo   를 사용해서는 안 된다. 비동기 작업 등은 useEffect()를 통해 처리되어야 한다. 또한 의존성 값이 자주 변경되는 경우에도 useMemo()의 사용을 지양한다. 
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
  
 # 기타
  @Value 값이 null로 들어가는 경우
  ~ static으로 선언된 정적 변수는 injection 할 수 없다.
https://wildeveloperetrain.tistory.com/143
  
  
  @Configuration / @Bean / @PostConstruct / @Value
  
- 문자열 배열 비교하기
  const list = ['cocoa', 'coffee', 'icecream', 'chocolate'];
  const mapped = (arr) => {
    return arr.map((ele) => ele.toLowerCase());
  };
  const mapSorted = (arr, condition) => {
    let result = 1;
    if (condition === 'abc') {
      result = -1;
    }
    return arr.sort((a, b) => {
      if (a < b) return result;
      else return -(result);
    });
  };
  console.log(getValue(mapSorted(mapped(list), 'abc')));
  // console.log(mapSorted(mapped(list), 'cba'));                            

- string 타입의 숫자 정렬하기
# sort
  배열.sort((a,b)=>)
  
  sort 함수 이용시 기본적으로 본래의 배열이 정렬되는 것으로, 복사본을 생성하지는 않는다.
  const strArr =  ['1.2', '1.0', '1.11', '1.1', '2.1', '9', '80'];
  strArr.sort((a,b)=>{
    if (a < b) return -1;
    else return 1;
  })
  위와 같이 작성시 결과값은 ['1.0', '1.1', '1.11', '1.2', '2.1', '80', '9']이 된다.
  이는 현재 sort 함수가 비교하는 것은 문자열이기 때문에, unicode를 통해 값을 비교하게 되는데, 숫자에서는 80이 9보다 크지만,
  unicode를 통해 비교하면 9가 80보다 크기때문에 위와 같은 결과가 출력된다.
              
  위와 같은 문제를 방지하기 위해 문자열을 숫자 형태로 바꾸어 비교하였다.
  // 오름차순
  const strARr = ['1.2', '1.0', '1.11', '1.1', '2.1', '9', '80'];
  strArr.sort((a,b) => {
    if (parseFloat(a)<parseFloat(b)) return -1;
    else return 1;
  })
                                     
  // 내림차순
  const strARr = ['1.2', '1.0', '1.11', '1.1', '2.1', '9', '80'];
  strArr.sort((a,b) => {
    if (parseFloat(a)<parseFloat(b)) return 1;
    else return -1;
  })
     
  sort() 함수는인자에 아무것도 넣어주지 않는 경우 각 요소의 문자열 변환에 따라 각 문자의 유니코드표에 대응하는 값을 비교한다.
  그러나 위와 같이 문자열 비교나, 특별한 정렬 조건이 존재하는 경우에는 sort에 인자로 정렬을 위한 함수를 넣어주어야 한다.
  반환값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬하고, 0보다 큰 경우에는 a를 b보다 높은 색인으로 정렬하게 된다.
  때문에 내림차순의 코드를 보면 a가 b보다 작다면 1을 주어 a의 색인을 b보다 높게 하여, 배열의 뒤로 갈수록 수가 작아지도록 정렬이 되게 하였다.
                                     
# localeCompare()
  
                                  
# 게시판
  mongo
    L doc
    L repository
         - mongoRepository interface
    - store구현체
  - store
                                     
 게시판 참고 github
 https://github.com/Doping7/bootcamp_basic   
 https://github.com/ZeroWastePlatform/BackEnd/tree/develop/src/main/java/com/greenUs/server
