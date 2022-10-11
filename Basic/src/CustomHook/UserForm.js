
import useInput from "./useInput";

function UserForm(){
    // const [fname,setFname]=useState("")
    // const [lname,setLname]=useState("")
    const [fname,fnamebind,resetfname]=useInput("")
    const [lname,lnamebind,resetlname]=useInput("")
    
    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${fname} ${lname}`)
        resetfname()
        resetlname()
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <label>First Name</label>
            {/* <input type="text" onChange={e=> setFname(e.target.value)} value={fname} /> 
            we have to use spread operator to replace the value and onChange attributes of input*/}
            <input type="text" {...fnamebind} value={fname} />
            <label>Last Name</label>
            {/* <input type="text" onChange={e=> setLname(e.target.value)} value={lname} /> */}
            <input type="text" {...lnamebind} value={lname} />
            <button>Submit</button>
            </form>
        </div>
    )
}
export default UserForm