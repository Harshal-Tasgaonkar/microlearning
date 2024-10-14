import React from 'react'
import AdminSidebar from './AdminSidebar'

import CreateCourseForm from './CreateCourseForm'
import AdminFooter from './AdminFooter'

const CreateCourse = () => {
  return (
    <>
   <AdminSidebar/>
   
   <CreateCourseForm/>
   <AdminFooter/>
   </>
  )
}

export default CreateCourse