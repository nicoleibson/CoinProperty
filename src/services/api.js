
import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

export const getCoins = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coins:", error);
    return [];
  }
};
