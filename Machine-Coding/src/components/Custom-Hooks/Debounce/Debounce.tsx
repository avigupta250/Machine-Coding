import { useEffect, useState } from "react"
import useDebounce from "./useDebounce";




export default function Debounce() {


    const [value, setValue] = useState("");
    const delay = 500;
    const debouncedValue = useDebounce({ value, delay })


    useEffect(() => {
        if (debouncedValue) {
            console.log("Do backend call")
        }
    }, [debouncedValue])

    return <div>



        <div>
            <div>
                <input value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} type="text" placeholder="Enter " />
            </div>
        </div>
    </div>


}