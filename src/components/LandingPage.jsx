import React, { useEffect, useState } from 'react'
import { listStudents } from '../services/StudentService'

export default function LandingPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, [])

  function getAllStudents() {
    listStudents().then((response) => {
      setStudents(response.data);
      console.log(response.data);
    }).catch((e) => {
      console.error(e);
    })
  }

  return (
    <div className='px-10 py-2'>
        <div className='text-3xl font-extrabold my-4'>Student Management System</div>
        <table className='border'>
          <thead>
            <tr className='border bg-blue-200'>
              <th className='border'>ID</th>
              <th className='border'>Full Name</th>
              <th className='border'>Address</th>
              <th className='px-3 border'>Course</th>
              <th className='border'>Dob</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(
                student =>
                  <tr key={student.student_id}>
                    <td className='px-3 border'>{student.student_id}</td>
                    <td className='px-3 border'>{student.name}</td>
                    <td className='px-3 border'>{student.address}</td>
                    <td className='text-center border'>{student.course}</td>
                    <td className='px-3 border'>{student.dob}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}
