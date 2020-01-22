import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8001/api',
})

export const addContact = payload => api.post(`/contact`, payload)
export const updateContactById = (id, payload) => api.put(`/contact/${id}`, payload)
export const deleteContactById = id => api.delete(`/contact/${id}`)
export const getAllContacts = () => api.get(`/contacts`)

const apis = {
    addContact,
    getAllContacts,
    updateContactById,
    deleteContactById,
}

export default apis