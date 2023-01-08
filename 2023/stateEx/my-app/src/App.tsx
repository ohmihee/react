import React, {useEffect, useState} from 'react';
import './App.css';
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import ComponentEx from "./components/ComponentEx";
import { Context } from './context/Context';


function App() {

    const [ backgroundColor, setBackgroundColor ] = useState<string>('white');

  return (
    <div className="App">
        <Context.Provider value={{backgroundColor, setBackgroundColor}}>
            <ComponentEx/>
        </Context.Provider>
    </div>
  );
}

export default App;
