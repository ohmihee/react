/*const Hello = function(){
    <p>Hello</p>
}
*/
/*
const Hello = ()=>{<p>Hello</p>}
*/

/*export default Hello;*/
import World from './World';
import styles from './Hello.module.css';



export default function Hello(){ 
    function showMoney(){
        console.log('money')
    }
    function showName(name){
        console.log(name)
    }
    function showText(e){
        console.log(e.target.value)
    }
    let realName = 'algml'
    function getRealName(){
        realName=realName==='algml'?'algml2':'algml'
    }

    
    return (
        <>
            <header>
                <div className={styles.box}>hello  <World /></div>
                <button onClick={showMoney}>show me the money</button>
                <button 
                    onClick={()=>{ 
                        console.log('jobjob')
                    }}>show me the job</button>
                <button onClick={()=>showName('algml')}>show name</button>
                <input type="text" onChange={showText}/>
            </header>
            <div>
                <h1>state</h1>
                <h2>{realName}</h2>
                <button onClick={getRealName}>changeName</button>
            </div>         
        </>   
    )
     
}

