import { useState } from "react"
import Grandefathercomponent from "./grandeFathercomponent"

const Fathercomponent = () => {
    const [data,setData] = useState("aman")
    return(
        <div>
             {data}
             <Grandefathercomponent data = {data} setData = {setData} />
        </div>
    )
}
export default Fathercomponent