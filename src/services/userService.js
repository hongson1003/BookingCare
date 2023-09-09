import axios from "../axios";

let handleCheckLogin = async (email, password) => {
    let data = await axios.post('/api/login', {
        email, password
    });
    return data;
}

let getUsers = async (id) => {
    return await axios.get(`/api/get-users?id=${id}`)
}
let createNewAUser = async (user) => {
    return await axios.post('/api/create-newuser', user);
}
let deleteUser = async (id) => {
    let response = await axios.delete('/api/delete-user', {
        data: {
            id: id,
        }
    })
    return response;
}

let editUser = (item) => {
    return axios.put('/api/update-user', item);
}

let getAllCode = async (type) => {
    return await axios.get(`/api/getAllCode?type=${type}`);
}
let getTopDoctors = async (limit) => {
    return await axios.get('/api/get-top-doctor');
}
let getAllDr = async () => {
    return await axios.get('/api/get-all-doctor');
}
let insertDetailDr = async (data) => {
    return await axios.post('/api/create-detail-doctor', data)
}
let getDetailDoctor = async (id) => {
    return await axios.get('/api/get-detail-doctor-by-id?id=' + id);
}

let updateDetailDoctor = async (data) => {
    return await axios.put('/api/update-detail-doctor', data);
}

let createSchedule = async (data) => {
    return await axios.post('/api/create-schedule', data);
}
let getScheduleById = async (doctorId, date) => {
    return await axios.get('/api/get-schedule-by-id?doctorId=' + doctorId + '&date=' + date);
}
let getDoctorInfo = async (doctorId) => {
    return await axios.get('/api/get-doctor-info?doctorId=' + doctorId);
}
export {
    handleCheckLogin, getUsers, createNewAUser, deleteUser, editUser, getAllCode,
    getTopDoctors, getAllDr, insertDetailDr, getDetailDoctor, updateDetailDoctor,
    createSchedule, getScheduleById, getDoctorInfo
};