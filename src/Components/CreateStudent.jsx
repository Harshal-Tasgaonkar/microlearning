import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminCreateStudentForm from './AdminCreateStudentForm'
import AdminFooter from './AdminFooter'

const CreateStudent = () => {
  return (
    <>
   <AdminSidebar/>
   <AdminCreateStudentForm/>
   <AdminFooter/>
   </>
  )
}

export default CreateStudent