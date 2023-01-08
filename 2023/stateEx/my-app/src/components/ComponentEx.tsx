import React, {useEffect, useMemo, useState} from 'react';
import ContextEx from "./ContextEx";

const ComponentEx = () => {

    const [value, setValue] = useState<number>(0);
    const [secondValue, setSecondValue] = useState<number>(0);

    const addValue = () => {
        return value + 1;
    }

    const onClickAddValue = () => {
        console.log('add value')
        setValue(addValue);
    }

    const addSecondValue = useMemo(() => {
        console.log('add second value')
        return value + secondValue + 1;
    }, [value]);

    const onClickAddSecondValue = () => {
        console.log('onclick add second value');
        setSecondValue(addSecondValue);
    }

    return (
        <>
            <p>{value}</p>
            <button onClick={onClickAddValue}>button</button>
            <p>{secondValue}</p>
            <button onClick={() => onClickAddSecondValue()}>second button</button>
        </>
    );
}

export default ComponentEx;
