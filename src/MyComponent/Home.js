//for update ,name ,age and data in use redux toolkit
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

 const Homes = () => {
    const dispatch=useDispatch();
    const {name,age,data}=useSelector((state) => state?.Data);
   const UpdateName =(name)=>{
       dispatch({type:"Update_name",payload:name})
   }
   const UpdateAge=(age)=>{
       dispatch({type:"Update_Age",payload:age})
   }
   const UpdateData=(data)=>{
       dispatch({type:'Update_Data',payload:data})
   };
  return (
    <div>
     <h2>{name}</h2>
     <h4>{age}</h4>
     <h6>{data}</h6>
     <button onClick={()=>UpdateName("Sona")}>UpdateName</button>
     <button onClick={()=>UpdateAge(40)}>UpdateAge</button>
     <button onClick={()=>UpdateData("data-15")}>UpdateData</button>

    </div>
  )
}
export default Homes;
