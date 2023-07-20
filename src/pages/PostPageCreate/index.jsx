import React, { Component, useState } from 'react'
import Container from '../../components/Container'
import PostForm from '../../components/PostForm';
import { Navigate, useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import  axios  from 'axios';




function CreateStorePage() {
  const [name, setName] = useState('');
  const [cities, setCities] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'name') {
          setName(value);
      } else if (name === 'cities') {
          setCities(value);
      }
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      const data = { name, cities };
      if (!name.trim() || !cities.trim()) {
          return;
      }

      setIsLoading(true);
      setError(null);

      try {
          await axios.post('https://some-data.onrender.com/stores', data);
          setIsLoading(false);
          setIsSubmitted(true);
      } catch (error) {
          setIsLoading(false);
          setError('Error While Create Store');
      }
  };

  isSubmitted && navigate('/stores/all');

  return (
      <div>
          <Container>
              <h1 >Create Store</h1>
              <form    onSubmit={handleSubmit}>
                  <label>
                      Name:
                      <input className='input' type='text' name='name' value={name} onChange={handleInputChange} />
                  </label>
                  <label>
                      Cities:
                      <input className='input' type='text' name='cities' value={cities} onChange={handleInputChange} />
                  </label>
                  <button type='submit' disabled={isLoading}> {isLoading ? 'Submitting...' : 'Submit'} </button>
              </form>
              <span>{error}</span>
          </Container>
      </div>
  );
}

export default CreateStorePage;
