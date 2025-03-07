import { useState } from "react"
import Button from "./Compontents/Button"
import Card from "./Compontents/Card"


function App() {
 let [show,setshow] = useState(true);
  return (
    <>
      <div style={{display:'flex',justifyContent:"center",alignItems:"center",margin:'20px'}} >
    <h3>If You went Hide or Show Card! Click here : 
     <Button  title ={show? 'HideCard':'ShowCard'}   onClick={()=> setshow(!show)}>{show? 'hide':'show'} </Button></h3> 
      </div>
       {show ? 
       <div style={{display:'flex',justifyContent:"center",alignItems:"center",gap:'20px'}}>
      <Card title="High-Performance Laptop" description="Ideal for gaming and work" image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSG2rO-0w2wEhg40S_E-lIclKCfrXqMFXrqe-RTr2xT6JqRdTEb1Dr79MtQywT51VoHc&usqp=CAU'} />

<Card title="Sleek Ultrabook" description="Lightweight and powerful" image={'https://tinyurl.com/3j5t9f5d'} />


<Card title="Workstation Laptop" description="Designed for professionals" image={'https://tinyurl.com/ysm856uy'} />

<Card title="Student-Friendly Laptop" description="Affordable and reliable" image={'https://tinyurl.com/mux948xs'} />

<Card title="2-in-1 Convertible" description="Touchscreen and flexible design" image={'https://tinyurl.com/yucfrydb'} />

      </div> : <h1 style={{textAlign:'center'}}>Hide Card Click Show to See...</h1>}
      {/* <Button title="Purchase" bg="red" click={Click}/> */}
     
     
    </>
  )
}

export default App
