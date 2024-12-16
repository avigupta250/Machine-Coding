import { useEffect, useState } from "react"

interface HookProps{
    value?:string,
    delay:number
}

export default function useDebounce( { value,delay }: HookProps){

  
    const [debouncedValue,setDebouncedValue]=useState(value)


    useEffect(()=>{
        console.log("useEffect called")
        const timer=setTimeout(()=>{
          setDebouncedValue(value)
        },delay)


        return ()=>clearTimeout(timer)
    },[value])


    return debouncedValue;
}