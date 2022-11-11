import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='App'>
      
    <Sidebar/>
    
    <div className="page">
        <span className="tags top-tags">&lt;/react&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/javascript&gt;
          <br />
          <span className="bottom-tag-html">&lt;/sass&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout