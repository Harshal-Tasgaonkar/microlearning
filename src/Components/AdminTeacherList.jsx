import React from 'react'
import AdminSidebar from './AdminSidebar'

import TeacherList from './TeacherList'
import AdminFooter from './AdminFooter'

const AdminTeacherList = () => {
  return (
   
   <>
   <AdminSidebar/>
   <TeacherList/>
   <AdminFooter/>
  </>
  )
}

export default AdminTeacherList