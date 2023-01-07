import React, {useEffect, useState} from 'react';
import './App.css';
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import ComponentEx from "./components/ComponentEx";


function App() {

    const [title, setTitle] = useState<string>("title");
    const [count, setCount] = useState<number>(0);

    useEffect(()=>{
        return (
            setCount(0)
        )
    }, [title])
  return (
    <div className="App">
        <ComponentEx/>
    </div>
  );
}

export default App;
