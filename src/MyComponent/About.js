//call fake api in reducer toolkit 
import React,{useEffect} from 'react'
import { getPost } from '../Redux/Postreducer';
import { useDispatch,useSelector } from 'react-redux';

const About = () => {
    const dispatch=useDispatch();
    const {Posts,loading}=useSelector((state)=>state.Post)
    console.log("data",Posts)
    useEffect(() => {
       dispatch(getPost());

       
    }, [])
    if (loading){
        return <h2>Loading....</h2>
    }
  return (
    <div>
     {
       Posts?.map((x,id)=>(
         <span>
           <p>{id}</p>
         <p key={id}>{x.title}</p>
         </span>
       ))
     }
    </div>
  )
}


export default About;