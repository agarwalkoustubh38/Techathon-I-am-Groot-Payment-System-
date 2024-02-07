import React, { useState, useEffect } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'
import down_arrow from '../../assets/images/down_arrow.png'
import SideBarTreeMap from '../SideBarTreeMap'
function SideBarTree ({ node }) {
  const { label, child, image } = node
  const [showChildren, setShowChildren] = useState(false)

  const handleClick = () => {
    // console.log(child)
    setShowChildren(!showChildren)
  }

  const navigate = useNavigate()
  return (
    <>
      <div onClick={handleClick} className='SideBarLabel'>
        <span className='SideBarDesign'>
          <img className='SideBarDesignImage' src={image}></img>
        </span>
        <span>{label}</span>
        {child.length > 0 ? (
          <span className='SideBarDesign'>
            <img className='SideBarDesignImage' src={down_arrow} />
          </span>
        ) : (
          <></>
        )}
      </div>
      <div>{showChildren && <SideBarTreeMap SideBarTreeData={child} />}</div>
    </>
  )
}
export default SideBarTree
