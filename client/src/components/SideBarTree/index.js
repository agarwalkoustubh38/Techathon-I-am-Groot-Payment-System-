import React, { useState, useEffect } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'
import down_arrow from '../../assets/images/down_arrow.png'
function SideBarTree ({ node }) {
  const { label, child } = node
  const [showChildren, setShowChildren] = useState(false)

  const handleClick = () => {
    // console.log(child)
    setShowChildren(!showChildren)
  }

  const navigate = useNavigate()
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: '10px' }}>
        <span>{label}</span>
        {/* <span>
          <img src={down_arrow} />
        </span> */}
      </div>
      <div style={{ paddingLeft: '10px', borderLeft: '1px solid black' }}>
        {showChildren && <Sidebar SideBarTreeData={child} />}
      </div>
    </>
  )
}
export default SideBarTree
