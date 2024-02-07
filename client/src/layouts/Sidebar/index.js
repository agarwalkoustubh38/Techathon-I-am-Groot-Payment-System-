import React, { useState, useEffect } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import SidebarTree from '../../components/SideBarTree'
const Sidebar = ({ SideBarTreeData }) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
      {SideBarTreeData.map(item => (
        <SidebarTree node={item} key={item.id} />
      ))}
    </div>
  )
}
export default Sidebar
