import { useState } from "react"
import usePrev from "./usePrev";


export default function Prev() {


    const [count, setCount] = useState(0);

    const [trigger,setTrigger]=useState(1);



    const prev = usePrev(count);
    


    return <>
        <div>
            <p>Current value:{count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increse</button>
            <p>Prev Value:{prev}</p>

            <button onClick={()=>setTrigger(c=>c+1)}>Trigger</button>
        </div>

    </>
}