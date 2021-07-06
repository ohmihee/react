import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';




// HMR => Hot Module Replacement(HMR)
function App() {
  const algml = {
    name:'algml',
    age:26,
    hobby:'sleep'
  }
  const naver = {
    name:'네이버',
    url:'https://naver.com'
  }
  // 변수는 return문 전에 작성
  return ( 
    <div className="App">
      <p><a href={naver.url}>{naver.name}</a></p>
      <header className="App-header">
        <h1 style={{
          color:"powderblue",
          backgroundColor:'blue'}}>hello react</h1>
          hello
          <p>name : {algml.name }</p>
          <p>age : {algml.age}</p>
          <p>hobby : {algml.hobby}</p>
          <p>2+3={2+3}</p> 
      </header>
      <div>
        <Welcome/>
      </div>
      <footer>
        <div className={styles.box}>css check</div>
        <Hello />
      </footer>
   
    </div>
  );
}


export default App;
