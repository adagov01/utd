import Number from "./Number"
import Button from "./Button"
import { useState } from "react"

const Main = () => {

    const [counter, setCounter] = useState(0)

    return(
        <div className="main">
            <Number counter={counter}/>
            <Button counter={counter} setCounter={setCounter}/>
        </div>
    )
}

export default Main