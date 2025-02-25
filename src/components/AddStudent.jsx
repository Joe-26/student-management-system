import React, { useState } from 'react'
import { addStudent } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
    const [name, SetName] = useState('');
    const [address, SetAddress] = useState('');
    const [course, SetCourse] = useState('');
    const [dob, SetDob] = useState('');

    const navigator = useNavigate();
    const [errors, setErrors] = useState({
        name: '',
        address: '',
        course: '',
        dob: ''
    })

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors};

        if(name.trim()) {
            errorsCopy.name = '';
            
        }else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }
        if(address.trim()) {
            errorsCopy.address = '';
        }else {
            errorsCopy.address = 'Address is required';
            valid = false;
        }
        if(course.trim()) {
            errorsCopy.course = '';
        }else {
            errorsCopy.course = 'course is required';
            valid = false;
        }
        if(dob.trim()) {
            errorsCopy.dob = '';
        }else {
            errorsCopy.dob = 'dob is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function saveStudent(e) {
        e.preventDefault(); // Prevent page refresh
        if (validateForm()) {
            const student = {name, address, course, dob};
            console.log('Student: ', student);
            navigator('/')
            addStudent(student).then((response) => {
                console.log(response.data);
            }).catch((e) => {
                console.error(e);
            })
        }
        
    }

  return (
    <div className='px-4 sm:px-96'>
        <div className='text-3xl font-extrabold my-4'>Add Student</div>
        {/* Form */}
        <div className='mt-4 border shadow-2xl border-r-6 border-b-6 p-4 rounded-xl'>
            <form className='flex flex-col gap-4 font-[Gudea]'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='font-[Monda]'>Name</label>
                    <input 
                    type='text' 
                    id='name' 
                    className='border rounded-lg px-3 py-1' 
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    />
                    {errors.name && <div className='text-red-500 text-xs'>{errors.name}</div>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='address' className='font-[Monda]'>Address</label>
                    <textarea 
                    id='address' 
                    className='border rounded-lg px-3 py-1' 
                    placeholder='472 Peachtree Rd, Atlanta, GA'
                    value={address}
                    onChange={(e) => SetAddress(e.target.value)}
                    />
                    {errors.address && <div className='text-red-500 text-xs'>{errors.address}</div>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='course' className='font-[Monda]'>Course</label>
                    <input 
                    type='text' 
                    id='name' 
                    className='border rounded-lg px-3 py-1' 
                    placeholder='VII'
                    value={course}
                    onChange={(e) => SetCourse(e.target.value)}
                    />
                    {errors.course && <div className='text-red-500 text-xs'>{errors.course}</div>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='dob' className='font-[Monda]'>Date Of Birth</label>
                    <input 
                    type='text' 
                    id='name' 
                    className='border rounded-lg px-3 py-1' 
                    placeholder='mm-dd-yyyy'
                    value={dob}
                    onChange={(e) => SetDob(e.target.value)}
                    />
                    {errors.dob && <div className='text-red-500 text-xs'>{errors.dob}</div>}
                </div>
                
                <button className='border rounded-lg py-2 px-4 bg-blue-600 text-white text-sm font-[Gudea] font-bold' onClick={saveStudent}>ADD</button>
            </form>
        </div>
    </div>
  )
}
