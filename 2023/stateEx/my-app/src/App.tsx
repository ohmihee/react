import React,{useState} from 'react';
import './App.css';
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";


function App() {

    const [title, setTitle] = useState<string>("title");

    console.log("rerender")
  return (
    <div className="App">
      <header className="App-header">
        <div>블로그</div>
          <h2>{title}</h2>
          <div onClick={()=>setTitle("title1")}>button</div>
      </header>
        <>
            {console.log('tets')}
        </>
    </div>
  );
}

export default App;
