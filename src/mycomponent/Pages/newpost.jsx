
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Newpost() {
    let navigate = useNavigate()
    function addrecorddone(e){
        e.preventDefault()
        // console.log(typeof(data))
        // let newid = document.getElementById("newId").value
        let newtittle = document.getElementById("newtitle").value
        let newdetails = document.getElementById("newdetails").value
        let newworkID = document.getElementById("newworkID").value
        let newdoc = document.getElementById("newdoc").value
        let assignee = document.getElementById("assignee").value
        let checker = document.getElementById("checker").value
        let newrecord = {
       
          "workID" : newworkID,
          "title" : newtittle,
          "details" : newdetails,
          "doa"   : "27/09/2023",
          "doc" :  newdoc,
          "assndetails": { "doer" : assignee, "checker" : checker},
          "status" : "pending"

      }
      console.log (newrecord)

      axios.post("https://crm-backend-2-ectg.onrender.com/app/work", newrecord)
      .then((res) => {alert("New record added")
          console.log(res)
    })
      .catch((err) => console.log(err))
      // navigate('/classifiedposts/latest')
      }

  return (
    <>
    <h1 className='text-center text-primary'>Create New Work</h1>

    <form id = "newpostform" >
          {/* <h2> Id</h2>
          <br />
          <input type="text" id = "newId" readOnly = {true} defaultValue = { }/>
          <br /> */}
          <br />
          <h2> Work ID</h2>
          <br />
          <input type="text" id ="newworkID"  style={{width : "60vw"}} />
          <br />
          <br />
          <h2> Title</h2>
          <br />
          <input type="text" id ='newtitle' style={{width : "60vw"}} />
          <br />
          <br />
          <h2> Details</h2>
          <br />
          <input type="text" id ='newdetails' style={{width : "60vw"}} />
          <br />
          <br />
          <h2> Date of completion</h2>
          <br />
          <input type="text" id ='newdoc' style={{width : "60vw"}} />
          <br />
          <br />
          
          <h2 style={{display: "inline-block", marginRight : "20vw"}}> Assignee</h2> <h2 style={{display: "inline-block"}}> Checker</h2>
          
          <br />
          <input type="text" id ='assignee' style={{width : "20vw", marginRight: "9vw"}} />
          <input type="text" id ='checker' style={{width : "20vw"}} />
          <br />
          <br />
          <button className='btn btn-info'style={{fontSize : "20px"}} onClick={(e) => addrecorddone(e)}>Create</button>
        </form>
    </>
  )
}
