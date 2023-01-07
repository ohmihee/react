import React, {ChangeEvent, useState} from 'react';

const ComponentEx = () => {
    const [ item, setItem ] = useState<string>('')
    const [ list, setList ] = useState<string[]>([]);

    const handleSetItem = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setItem(e.target.value)
    };

    const addItemClick = () => {
        const newList = [...list];
        newList.push(item);
        setList(newList);
    }

    return (
        <>
            {
                list.map((ele, index) =>(
                    <div key={index}>
                        {ele}
                    </div>
                ))
            }
            <input type="text" onChange={handleSetItem}/>
            <button onClick={addItemClick}>아이템 추가</button>
        </>
    );
}

export default ComponentEx;


// const addItemClick = () => {
//     //list[0] = item;
//     const newList = [...list];
//     newList.push(item);
//     setList(newList)
// }