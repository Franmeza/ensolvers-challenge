import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL;

export const getNotesRequest = () => axios.get(`${baseURL}`);
export const filterNotesRequest = (category) =>
  axios.get(`${baseURL}?category=${category}`);
export const getNoteRequest = (id) => axios.get(`${baseURL}/${id}`);
export const createNoteRequest = (data) => axios.post(`${baseURL}`, data);
export const deleteNoteRequest = (id) => axios.delete(`${baseURL}/${id}`);
export const updateNoteRequest = (id, note) =>
  axios.put(`${baseURL}/${id}`, note);
export const updateNoteCategoryRequest = (id, category) =>
  axios.patch(`${baseURL}/category/${id}`, { category });

export const archiveToggleRequest = (id, archived) =>
  axios.patch(`${baseURL}/${id}?archived=${archived}`);
