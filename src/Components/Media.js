import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { motion } from 'framer-motion';

const Media = ({data}) => {
    if(data){
      var name = data.name;
      var city = data.address.city;
      var state = data.address.state;
      var phone= data.phone;
      var email = data.email;
      var message = data.contactmessage;
      var networks= data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         
      })
    }

    const location = useLocation();
    const { root } = location.state;

    const pageTransition = 
      root > 5 ? { 
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 0,
            x: "100vh"
         },
         initial: {
            opacity: 0,
            x: "-100vh"
         }
      } : root < 5 ? {
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 0,
            x: "100vh"
         },
         initial: {
            opacity: 0,
            x: "100vh"
         }
      } : {
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 1,
         },
         initial: {
            opacity: 1,
         }
      };

    return (
      <section id="media">

         <nav id="nav-wrap">

         <ul id="nav" className="nav-wrap">
            <li>
               <Link to={{
                  pathname: "/",
                  state: {
                     root: 5,
                  }
               }}><a>Home</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/About",
                  state: {
                     root: 5,
                  }
               }}><a>About</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Resume",
                  state: {
                     root: 5,
                  }
               }}><a>Resume</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Portfolio",
                  state: {
                     root: 5,
                  }
               }}><a>Works</a></Link>
            </li>
            <li className="current">
               <Link to={{
                  pathname: "/Media",
                  state: {
                     root: 5,
                  }
               }}><a>Media</a></Link>
            </li>
         </ul>

         </nav>

         <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransition}className="row section-head"
         >



            <h1 className="lead">{message}</h1>


         </motion.div>

         <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransition}
            className="row"
         >
         <ul className="social">
            {networks}
         </ul>
         <br/>
                  <ul className="social-description">
                     <li><a>linkedin</a></li>
                     <li><a>Instagram</a></li>
                     <li className="github"><a>Github</a></li>
                  </ul>
      </motion.div>
      <p className="scrollleft">
      <Link to={{
         pathname: "/Portfolio",
         state: {
           root: 5,
         }
      }}><a><i className="icon-left-circle"></i></a></Link>
      </p>
   </section>
   );
}

export default Media;
