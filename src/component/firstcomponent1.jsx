import { useState } from "react"
// import Firstpage from "../pages/firstpage"
import Firstpage1 from "../pages/firstpage1"

const Firstcomponent1 = () => {
const [data , setData] = useState("Aman")
console.log(data)

    return(
        <div>
        {data}
        <Firstpage1 setData={setData}/>
        </div>
    )
} 
export default Firstcomponent1