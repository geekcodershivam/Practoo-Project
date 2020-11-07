import React from 'react';
import {Link} from "react-router-dom"; 
import { useState } from 'react';
import { useEffect } from 'react';
import '../navbar/navbar.css'



function Navbar() {
  const [isSticky,setIsSticky] = useState(false);
    const [isCollapse,setIsCollapse] = useState(null);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50)
            {
                setIsSticky(true)
            }
            else
            {
                setIsSticky(false)
            }
        })
    },[])
  return (
    // <div className={classes.root} >
    //    <AppBar position="static" className='appbar'>
    //     <Toolbar>
    //         <Typography variant="h6" className={classes.title} style={{textAlign:"left", fontFamily:'Roboto'}}>
    //         <Link to =  '/'>
    //         <Button className="log"> <b>  MediCore </b>  </Button>
    //         </Link>
    //       </Typography>
          
    //       <Link to =  '/patient/register'>
    //       <Button className="btn">Patient Register</Button>
    //       </Link>
    //       <Link to =  '/patient/login'>
    //       <Button className="btn"> Patient Login </Button>
    //       </Link>
    //       <Link to =  '/doctor/register'>
    //       <Button className="btn">Doctor Register</Button>
    //       </Link>
    //       <Link to =  '/doctor/login'>
    //       <Button className="btn">Doctor Login </Button>
    //       </Link>
          
    //     </Toolbar>
    //   </AppBar>
    // </div>
  
  <nav className={(isSticky) ?"shadow-sm navbar navbar-expand-sm navbar-light bg-white py-3 fixed-top":"navbar navbar-expand-sm navbar-light py-4 fixed-top"}>
  <div className="container">
      <Link className="navbar-brand" to="/">
         <strong>Practoo</strong>
      </Link>
      <button onClick={()=>setIsCollapse(!isCollapse && 'show')} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isCollapse}`} id="navbarText">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <Link className="nav-link"  to="/patient/register">Patient Register</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link"  to="/patient/login">Patient Login</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/doctor/register"> Doctor Register </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/doctor/login"> Doctor Login </Link>
              </li>
              
          </ul>
      </div>
  </div>
</nav>
  
  
  
  
  
  
  
  
  
  
  );
}

export default Navbar;