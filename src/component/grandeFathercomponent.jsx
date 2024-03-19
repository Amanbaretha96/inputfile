import { useState } from "react"
import Childcomponent from "./childcomponent"

const Grandefathercomponent = (props) => {
    const[rahul,setRahul] = useState("kumar")
    const {data,setData} = props
    console.log(props)
    return(
        <div>
        {rahul}
            <Childcomponent data ={data} setData={setData} rahul = {rahul} setRahul={setRahul} />
        </div>
    )
}
export default Grandefathercomponent