
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

export default function Login() {

    const [logindetails, setlogindetails] = useState({"userID": " ",
    "password": " "})
    const [users, setusers] = useState([])
    useEffect(() => {
        console.log("useEffect called")
  
  
          axios.get("https://crm-backend-2-ectg.onrender.com/app/crmusers")
          .then((res) => {setusers(res.data.crmuserss)

                console.log(res.data.crmuserss)

              
          })
          .catch((err) => console.log(err))
  
      }, [ ])
    function loginprocess(){
        
        console.log("login function called")
        console.log(logindetails.userID)
        console.log(users[2].userID)
        let finduser = users.find((u)=> u.userID == logindetails.userID)
        console.log(finduser)
        if (finduser)
            {
                if (finduser.password == logindetails.password)
                {
                    
                    console.log("user exists")
                    sessionStorage.setItem("role", finduser.role)
                    sessionStorage.setItem("peopleID", finduser.peopleID)
                    console.log(finduser.peopleID)
                    alert(`Welcome ${finduser.userID}.`)
                    
                    window.location.assign("/home")
                }
                else{
                    alert("wrong password")
                }
            }
            else{
                alert("No user found. Please register yourself")
            }
            document.getElementById("staticEmail").value = ""
            document.getElementById("inputPassword").value = ""
        }

    
    // function register(){
    //     <Navigate to = "/register"/>
    //     // window.location.assign("/register")
    // }
    
    return (
        <>
            <h1 className='text-center text-primary'>Enter your details</h1>
            <div className='col-md-12'>
                <div className='col-md-6 offset-md-3'>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User Id</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" id="staticEmail" placeholder="email@example.com" onChange={(e) => (setlogindetails({...logindetails, userID : e.target.value}))}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => (setlogindetails({...logindetails, password : e.target.value}))} />
                        </div>
                    </div>
                    <button className='btn btn-success mx-3'onClick={loginprocess}>Log In</button>
                    <button className='btn btn-success mx-3'><Link to={"/register"} style={{color: "white", textDecoration: "none"}}>Register</Link></button>

                </div>
            </div>
        </>
    )
}
