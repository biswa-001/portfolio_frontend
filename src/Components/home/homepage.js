import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
function Homepage() {
    const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Computer Science student', '&amp; full-stack developer '],
      typeSpeed: 50,
    });

    return () => {
      
      typed.destroy();
    };
  }, []);

    return ( 
    
   <div className='container mb-5'>
    <div className='row mt-5'>
     <div className='col-7 mt-5'>
  <h1>Hi, I'm Biswajit </h1>
  <p className='fs-5'>A passionate <span ref={el} style={{color:"purple"}}/></p>
  <p className='fs-5'>I build clean and responsive websites that turn ideas into reality.</p>
  <Link to={"/project"}><button class="btn btn-primary" >View My Work</button> </Link>
  <div className='social-icon mt-3'>
 <Link to={""}><i className="fa-brands fa-facebook me-3 text-primary"></i></Link> 
 <Link to={"https://www.instagram.com/biswa_.1.3/profilecard/?igsh=MTZoZnloZzJycjg3eQ=="}><i className="fa-brands fa-instagram me-3 text-danger"></i></Link> 
 <Link to={"https://www.linkedin.com/in/biswajit-ghosh-2448b0276/"}><i className="fa-brands fa-linkedin me-3 text-primary" ></i></Link> 
  </div>
  
        </div>
        <div className='col-5 mt-5 '>
            <img src='./media/images/pic1.jpg' alt='mypic' style={{width:"65%",borderRadius:"50%"}}/>
        </div>
    </div>

   </div>
    
    
     );
}

export default Homepage;