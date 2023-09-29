



import React, { useEffect }  from 'react'
import {useState} from 'react'
import axios from 'axios'
import react from 'react'
// import { Alert } from 'bootstrap'
import {Link} from 'react-router-dom'

export default function Axiosap_idemo() {
    
    const [data, setdata] = useState()
    let currentdata = []
    useEffect(() => {
      console.log("useEffect called")
      axios.get("https://crm-backend-2-ectg.onrender.com/app/work")
        .then((res) => {setdata(res.data.works)
              //  setcurrentposts(data.length)
              })
        .catch((err) => console.log(err))
    }, [ ])
    function newrow(element){
            // console.log("newrow called");
            

            // let _idedit = element._id + "100"
            let workIDnormal = element.workID + "10"
            // let currtitle = element.title
            // let currbody = element.body
           
            // function setbody(e){
            //   e.preventDefault()
            //   setbodybeingedited(e.target.value)

            // }
            // console.log(element.title)
            return(
              
            <tr span = "row" className = {element.workID} key = {element.workID}>
                <th>
                <p className = {workIDnormal} style={{display: "inline-block"}}>{element.workID} </p>
                <Link to = {`/posts/${element.workID}`}> More</Link>
                </th>
                {/* <th className = {element._id}>{element._id}</th> */}
                <td> 
                <p className = {workIDnormal}>{element.title} </p>
                {/* <textarea className = {_idedit} style = {{display : "none" ,}} cols="30" rows="10"   defaultValue = {element.title} onChange={(event) => (settitle(event.target.value))}></textarea> */}
                </td>
                <td>
                <p className = {workIDnormal}>{element.assndetails.doer} </p>
                </td>
                <td>
                <p className = {workIDnormal}>{element.assndetails.checker} </p>
                </td>
                <td> 
                {/* <p className = {_idnormal}>{element.body} </p> */}
                {/* <textarea className= {_idedit} style = {{display : "none" }} cols="30" rows="10"   defaultValue = {element.body} onChange={(event) => (setbody(event.target.value))}></textarea> */}
                </td>
                {/* <td className = {_idnormal}><button className='btn btn-danger btn-sm' onClick={() => editdetails(_idnormal, _idedit)}>Edit</button></td>
                <td className= {_idedit} style = {{display : "none" }}><button className='btn btn-info btn-sm' onClick={() => editingdone(element._id, _idnormal, _idedit)}>Save</button></td>          
                <td className = {_idnormal}><button className='btn btn-success btn-sm' onClick={() => deletepost(element)}>delete</button></td> */}
            </tr>)
    }
        

  return (
        <>
        <h1  className= 'text-center text-primary'> All works</h1>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">workID</th>
      <th scope="col">Title</th>
      <th scope="col">Assignee</th>
      <th scope="col">Checker </th>
      {/* <th scope="col">Body</th> */}
      {/* <th scope="col" colSpan={2} style={{textAlign : "center"}}>Actions</th> */}
    </tr>
  </thead>
  <tbody>
  {
            data &&
            data.map((element) => (

                // console.log(element.title),
                newrow(element)
            
            ))

        }
  </tbody>
</table>


        </>
  )}
