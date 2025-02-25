import axios from "axios";

const REST_API_URL = "https://1razfjds52.execute-api.us-east-1.amazonaws.com/dev/students";

export const listStudents = () => axios.get(REST_API_URL);

export const addStudent = (student) => axios.post(REST_API_URL, student);

export const deleteStudent = (studentId) => axios.delete(REST_API_URL + '/' + studentId);