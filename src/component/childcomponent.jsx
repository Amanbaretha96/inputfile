const Childcomponent = (props) =>{
    const{data,setData} = props
    const{rahul,setRahul} = props
    const Bet =()=> {
        setData("vivek")
        setRahul("raj")
    }
    return(
        <div>
          <button onClick={Bet} >onclick</button>
        </div>
    )
}
export default Childcomponent