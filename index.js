let score=0;
let wicket=0;
let array=[]

// function addOne(){
//       score+=1
//       rootElement.render(<><App/></>)

// }
 let addScore=(num)=>{
    if(wicket<10){
   score+=num;
   array.push(num);
   rootElement.render(<><App/></>)

    }
 }
 let addWicket=(num)=>{
    if(wicket<10){
    wicket+=1;
    array.push("w");
    rootElement.render(<><App/></>)
    }
  }


const App=()=>(
   <>
        <h1>Score Keeper</h1>
        <h2>Score:{score}/{wicket}</h2>
        <button onClick={()=>addScore(0)}>0</button>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={()=>addWicket(wicket)}>W</button><br/>
        <hr/>
        {array.map((score,i)=>
        (<>
         {i%6===0?<br/>:null}
         <button key={i}>{score===0 ? <strong>.</strong>:score}</button>
          </>
        )}
       </>
   )
  
        
           

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<><App/></>)