import React, { useState, useEffect } from 'react';
import ApiCard from '../components/ApiCard/ApiCard';  

function NewsApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <article className='container'>
      <div className="container-cards">
      <div className="title">
          <h2>Our News & Article</h2>
      </div>
        <div className="list-group">
          {users.map((user, index) => (
            <ApiCard key={index} {...user} /> 
          ))}
        </div>  
         
      </div>
    </article>
  );
}

export default NewsApi;




