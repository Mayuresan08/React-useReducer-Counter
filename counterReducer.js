import { useReducer } from "react";
const reducer=(prevCount,action)=>{
    console.log(prevCount,action)
    switch(action)
    {
        case "increment":{
            return prevCount+1
        }
        case "decrement":{
            if(prevCount > 0) return prevCount-1
            return prevCount
        }
        case "reset":{
            return 0
        }
        default:{
            return action
        }
    }

}
function CounterReducer()
{
    const inc="increment";
    const dec="decrement";
    const res="reset";
    const [count,dispatch]=useReducer(reducer,0)
 return(
     <>
     <h3>Counter:{count}</h3>
     <button onClick={()=>dispatch(inc)}>Increment</button>
     <button onClick={()=>dispatch(dec)}>Decrement</button>
     <button onClick={()=>dispatch(res)}>Reset</button>
     </>
 )
}
export default CounterReducer