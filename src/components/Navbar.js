import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../App.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
          <IconContext.Provider value={{ color: 'darkblue' }}>
            <div className='navbar'>
              <Link to='#' class='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav class={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul class='nav-menu-items' onClick={showSidebar}>
                <li class='navbar-toggle'>
                  <Link to='#' class='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} class={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
      );
    }

export default Navbar;
