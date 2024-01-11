import axios from "axios";

const URL = "http://localhost:3000/api/notes";

export const getNotesRequest = () => axios.get(`${URL}`);
export const filterNotesRequest = (category) =>
  axios.get(`${URL}?category=${category}`);
export const getNoteRequest = (id) => axios.get(`${URL}/${id}`);
export const createNoteRequest = (data) => axios.post(`${URL}`, data);
export const deleteNoteRequest = (id) => axios.delete(`${URL}/${id}`);
export const updateNoteRequest = (id, note) => axios.put(`${URL}/${id}`, note);
export const updateNoteCategoryRequest = (id, category) => {
  return axios.patch(`${URL}/category/${id}`, { category });
};
export const archiveToggleRequest = (id, archived) =>
  axios.patch(`${URL}/${id}?archived=${archived}`);
