import React, { useState, useEffect } from 'react'
import './index.css'
import SideBarTree from '../SideBarTree'

function SideBarTreeMap ({SideBarTreeData}) {
  return (
    <>
      {SideBarTreeData.map(item => (
        <SideBarTree node={item} key={item.id} />
      ))}
    </>
  )
}
export default SideBarTreeMap
