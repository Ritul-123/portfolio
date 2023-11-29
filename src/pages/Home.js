import React from 'react';
import bg from "../asset/image.jpeg";
import btnimg from "../asset/803_lock.jpg";
import './Home.css';
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    

      <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
       <span className="introtext">I'm  <span className='name'> Ritul</span> <br/>Web Developer</span>
       <p className='introPara'> I have been working as a web developer for quite some time now. <br/>I believe I am a very ambitious person who loves to work on making the website work well. <br/>Working on the web is my passion as I love to work on exciting projects.</p>
       <Link ><button className="btn"><img src={btnimg} alt="hire me" className='lockimg'></img>Hire me</button></Link> 
      </div>
    
          <img src={bg} alt='profile' className ="bg"></img>  

      </section>
  
  
    
  );
}
