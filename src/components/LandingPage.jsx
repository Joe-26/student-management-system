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
        <div className='text-3xl font-extrabold my-4'>Student List</div>
        <div>
          <button className='bg-blue-400 rounded-lg p-2 my-3 flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <div className='font-bold'>Add Student</div>
          </button>
        </div>
        <table className='border'>
          <thead>
            <tr className='border bg-blue-200'>
              <th className='border'>ID</th>
              <th className='border'>Full Name</th>
              <th className='border'>Address</th>
              <th className='px-3 border'>Course</th>
              <th className='border'>Dob</th>
              <th className='px-3 border'>Actions</th>
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
                    <td className='border place-items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}
