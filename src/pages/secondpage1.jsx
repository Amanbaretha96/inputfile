import { useState } from "react";
// import Firstpage1 from "./firstpage1";

const Secondpage1 = (props) => {
    const {data,setData} = props
    const {rahul,setRahul} = props
    const Name = () => {
        setData("baretha")
        setRahul("kumar")
    }
    return(
           <div>
           {/* <Firstpage1/> */}
                  <button onClick={Name} >tak a shot</button>
           </div>
    )
}
export default Secondpage1;