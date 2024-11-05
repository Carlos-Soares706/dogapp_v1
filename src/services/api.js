// src/services/api.js
import { DOG_API_KEY } from '@env';

const API_URL = "https://api.thedogapi.com/v1";

export const fetchDogs = async () => {
  try {
    const response = await fetch(`${API_URL}/breeds`, {
      headers: {
        'x-api-key': DOG_API_KEY
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados dos cães:", error);
    return [];
  }
};