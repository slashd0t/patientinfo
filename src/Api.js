import Axios from 'axios';

const client = Axios.create({
    baseURL: 'http://localhost:3030',
    headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyIsInR5cGUiOiJhY2Nlc3MifQ.eyJ1c2VySWQiOiI1OThlZWJlMmJkZDEwOTEzNGI1YjA5MTgiLCJpYXQiOjE1MDI4MDU4MTIsImV4cCI6MTUwMjg5MjIxMiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIn0.q1SkV2pFB_xhA0Cb2G4BoBll7hmIHdU1LUqrODaRsEU'
    }
});

export const PatientsApi = {
    findAll: () => client.get(`/patients`).then(res => res.data.data),
    create: data => client.post(`/patients`, data).then(res => res.data),
    findOneById: id => client.get(`/patients/${id}`).then(res => res.data),
    update: (id, data) => client.patch(`/patients/${id}`, data).then(res => res.data)
};