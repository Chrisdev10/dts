import { useEffect, useState } from 'preact/hooks';
import './auth.scss';
import { Response } from '@Dto/response';

import axios from 'axios';

export function Auth() {
  interface FormData {
    username: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  // Handle form input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding field
    });
  };

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  const [data, setData] = useState<Response<Object>>();

  const fetchData = async () => {
    const url = import.meta.env.VITE_LOCAL_URL_BACKEND;
    const response = await axios.post(`${url}/user/signin`, formData);
    console.log(response.data);
  };
  return (
    <div class="pages_c">
      <div class="sign">
        <div class="container d-flex justify-content-center align-items-center pt-2 pb-3">
          <h2>Se connecter</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <input
              type="text"
              name="username"
              class="form-control"
              value={formData.username}
              placeholder="Identifiant"
              onChange={handleChange}
              required
            />
          </div>

          <div class="mb-3">
            <input
              name="password"
              type="password"
              class="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
            />
          </div>

          <button type="submit" class="sign-in w-100 p-2 mb-2">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
