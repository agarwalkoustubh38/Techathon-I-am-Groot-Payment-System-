import React, { useState, useEffect } from 'react'
import './index.css'
import logout_icon from '../../assets/images/logout_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import SidebarTree from '../../components/SideBarTree'
import SideBarTreeMap from '../../components/SideBarTreeMap'
import person_profile_sample from '../../assets/images/person_profile_sample.png'
const Sidebar = ({ SideBarTreeData }) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
      <div className='UserData'>
        <div className='Profile'>
          <div>
            <div className='UserDataName'>Jhanvi</div>
            <div className='UserDataType'>Allocation</div>
          </div>
          <div>
            <span>
              <img className='ProfileImage' src={person_profile_sample}></img>
            </span>
          </div>
        </div>
        <div className='UserDataCode'>MCCPL - svdsf - asfdas - afasdf</div>
      </div>
      <SideBarTreeMap SideBarTreeData={SideBarTreeData}></SideBarTreeMap>
      <div className='Logout'>
        <div className='LogoutImage'>
          <img src={logout_icon}></img>
        </div>
        <div>Logout</div>
      </div>
    </div>
  )
}
export default Sidebar
