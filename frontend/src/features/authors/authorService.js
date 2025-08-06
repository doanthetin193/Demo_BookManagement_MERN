import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API = API_BASE + '/authors';

console.log('API URL:', API); // Debug log

export const getAuthors = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const createAuthor = async (author) => {
  try {
    const res = await axios.post(API, author);
    return res.data;
  } catch (error) {
    console.error('Error creating author:', error);
    throw error;
  }
};
