import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import { Menulist } from './Menulist';
import './Navbar.css';

const Navbar = () => {
 

 const menulist = Menulist.map(({url,title},index)=> {
    return (
        <li key={index}>

      <Link className="nav-link" to={url}>{title}</Link>
        </li>
    )  
  });

  const [click , setClick] = useState(false);


 const handleclick = () => {
     setClick(!click);
 }



    return (
        <nav>
            <div className="logo">
                Perez <font>Hotel</font>
            </div>

            <div className="nav-icon" onClick={handleclick}>

            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              
              </div>

            <ul className={click ? 'nav-links' : 'nav-links close'} >
             {menulist}
            </ul>
        </nav>
    )
}

export default Navbar
