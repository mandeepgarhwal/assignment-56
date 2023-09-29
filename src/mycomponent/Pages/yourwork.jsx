import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Yourwork() {
    let navigate = useNavigate()
    const [displayposts, setdisplayposts] = useState([])
    const [ID, setID] = useState()
    
    useEffect(() => {
        setID(sessionStorage.getItem("peopleID"))
        console.log(ID)
      axios.get("https://crm-backend-2-ectg.onrender.com/app/work")
        .then((res) => {
            let posts = res.data.works,


            usedposts = posts.filter ((post) => post.assndetails.doer == `${ID}` || post.assndetails.doer == `${ID}`)
            
            setdisplayposts (usedposts)})
        .catch((err) => console.log(err))
    }, [ ])
   

    function newrow(element){
        console.log("function is called")
        // let idedit = element.id + 100
        // let idnormal = element._id + 10
        return(
    <tr>
        <th scope="row" className='col-md-1'>{element.workID}</th>
        <td className='col-md-3'>{element.title}</td>
        <td className='col-md-4'>{element.assndetails.doer}</td>
        <td className='col-md-4 text-center'>
        {element.assndetails.checker}
        
        {/* <td className = 'col-md-2 text-center'>
        <i className="fa fa-thumbs-down" style= {{fontSize : "30px", color : "red"}}aria-hidden="true" onClick={() => (postunlike(element))}></i>
            {/* <button className='btn btn-success btn-sm' onClick={() => (postunlike(element))}>Unlike</button> */}
            </td> 
      </tr>
            
        )
    }

  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">WorkID</th>
      <th scope="col">Title</th>
      <th scope="col">Assignee</th>
      <th scope="col">Checker</th>
      {/* <th scope="col" colSpan={2} style={{textAlign : "center"}}>Actions</th> */}

    </tr>
  </thead>
  <tbody className="table-group-divider">
  {
            displayposts &&
            displayposts.length != 0 ?(
            displayposts.map((element) => (

                // console.log(element.title),
                newrow(element)
            
            ))) : 
            <tr>
                <td className='text-center text-primary' colSpan={5}>No existing record </td>
            </tr>

        }


  </tbody>
</table>

    
    </>
  )
}
