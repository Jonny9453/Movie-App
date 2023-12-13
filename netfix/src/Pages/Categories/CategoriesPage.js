import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function CategoriesPage() {
  return (
    <>
      <nav>
        <Link to="/Categories">English</Link>
        <Link to="/Categories/Hindi">Hindi</Link>
      </nav>
      <Outlet/>
    </>
  )
}
