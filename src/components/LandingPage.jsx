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
        <div className='text-3xl font-extrabold'>Student Management System</div>
        <table className='border'>
          <thead>
            <tr className='border'>
              <th>ID</th>
              <th>name</th>
              <th>address</th>
              <th>course</th>
              <th>dob</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(
                student =>
                  <tr key={student.student_id}>
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>{student.address}</td>
                    <td>{student.course}</td>
                    <td>{student.dob}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}
