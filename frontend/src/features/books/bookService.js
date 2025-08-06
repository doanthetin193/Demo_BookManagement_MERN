import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API = API_BASE + '/books';

console.log('Books API URL:', API); // Debug log

export const getBooks = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const createBook = async (book) => {
  try {
    const res = await axios.post(API, book);
    return res.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API}/${id}`);
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};
