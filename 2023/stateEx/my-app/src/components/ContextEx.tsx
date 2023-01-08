import React, { useContext } from 'react';
import {Context} from "../context/Context";

const ContextEx = () =>{

    const {backgroundColor, setBackgroundColor} = useContext(Context);

    const onClickChangeColor = () => {
        setBackgroundColor("black");
    }

    return (
        <div style={{
            width:'100vw',
            height:'100vh',
            backgroundColor:backgroundColor
        }}>
            <button onClick={onClickChangeColor}>
                background change
            </button>
        </div>
    );
}

export default ContextEx;

