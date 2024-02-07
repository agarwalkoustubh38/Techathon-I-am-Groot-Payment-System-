import React, { useState, useEffect } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'
import SideBarTreeData from '../../assets/data/SideBarTreeData'
const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <>
      <Sidebar SideBarTreeData={SideBarTreeData} />
    </>
  )
}
export default Dashboard
