import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminCourseListBody from './AdminCourseListBody'
import AdminFooter from './AdminFooter'

const AdminCourseList = () => {
  return (
   
    <>
    <AdminSidebar/>
    
    <AdminCourseListBody/>
    <AdminFooter/>
    </>
  )
}

export default AdminCourseList