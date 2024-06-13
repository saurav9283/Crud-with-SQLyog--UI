import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import CardList from './CardList';

function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get('http://localhost:5000/create');
        setData(response.data);
      } catch (error) {
        console.log(error, "ERROR===============");
      }
    };

    fetchDataAsync();
  }, []);

  const handlePostSaveItem = async (itemId) => {
    const id = localStorage.getItem('userId');
    try {
      const response = await axios.post('http://localhost:5000/save', { id, itemId });
      console.log(response.data);
    } catch (error) {
      console.log(error, "ERROR===============");
    }
  };

  return (
    <Grid container spacing={2} className='overflow-hidden'>
      <CardList data={data} handlePostSaveItem={handlePostSaveItem} />
    </Grid>
  );
}

export default List;
