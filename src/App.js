import { Welcomepage } from "./mycomponent/welcomepage";
import { Home } from "./mycomponent/Pages/home";
import { About } from "./mycomponent/Pages/about";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Axiosapidemo from "./mycomponent/Pages/posts";
import Pagenotfound from "./mycomponent/Pages/pagenotfound";
import Postdetails from "./mycomponent/Pages/postdetails";
import Classifiedposts from "./mycomponent/Pages/classifiedposts";
import Newpost from "./mycomponent/Pages/newpost";
import Login from "./mycomponent/Pages/login";
import Register from "./mycomponent/Pages/register";
import Yourwork from "./mycomponent/Pages/yourwork";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Welcomepage/>
      <Routes>
      <Route path="/" element = {<Navigate to = "/home"/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/posts" element = {<Axiosapidemo/>}/>
        <Route path = "/posts/:ID"  element = {<Postdetails/>}/>
        <Route path="*" element = {<Pagenotfound/>}/>
        <Route path="/classifiedposts/*" element = {<Classifiedposts/>}/>
        <Route path="/classifiedposts" element = {<Navigate to = "/classifiedposts/latest"/> }/>
        <Route path="/newpost" element = {<Newpost/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/yourwork" element = {<Yourwork/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
