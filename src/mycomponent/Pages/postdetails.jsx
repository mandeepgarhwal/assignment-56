import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Postdetails() {

    const {ID} = useParams()
    console.log(ID)
    const [currentdata, setcurrentdata] = useState()
    // const data = {}
    useEffect(() =>{
        console.log("post details called")
        axios.get(`https://crm-backend-2-ectg.onrender.com/app/work/${ID}`)
        .then((res) => { console.log(res.data.details)
            const currentpost = res.data.details
            console.log(currentpost)
            // Postdetails.currentpost = currentpost
            setcurrentdata(currentpost)
                
              
  
            //   console.log(currentdata)
              
        })
        .catch((err) => console.log(err))
    }, [ ])
    // function newrow (element) {
    //     return(
    //         <>
    //     <h2>ID</h2>
    //     <p> {element.id}</p>
    //     <br />
    //     <br />
    //     <h2>Title</h2>
    //     <p> {element.title}</p>
    //     <br />
    //     <br />
    //     <h2>Body</h2>
    //     <p> {element.body}</p> 
    //     </>        )
    // }
  return (
        <>
        <h1 className='text-center text-primary'> Work details page</h1>
        <h2>ID</h2>
        {currentdata &&
        <>
        <p> {currentdata[0].workID}</p>
        <br />
        <br />
        <h2>Title</h2>
        <p> {currentdata[0].title}</p>
        <br />
        <br />
        <h2>Details</h2>
        <p> {currentdata[0].details}</p> 
        </>
        
}

        </>
  )
}


