import { Outlet } from "react-router-dom";

import React from 'react'

const layout = ({movies}) => {
  return (
    <main>
      <Outlet context={{movies}}/>
    </main>
  )
}

export default layout
