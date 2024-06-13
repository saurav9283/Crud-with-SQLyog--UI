import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import CardList from '../List/CardList';

function SaveItem() {
  const [data, setData] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/save/${localStorage.getItem('userId')}`);
        setData(response.data);
      } catch (error) {
        console.log(error, "ERROR=============");
      }
    };

    fetchDataAsync();
  }, [shouldFetch]);

  const bool = true;

  const handlePostSaveItem = async (itemId) => {
    const id = localStorage.getItem('userId');
    try {
      const response = await axios.post('http://localhost:5000/save', { id, itemId });
      console.log(response.data);
      setShouldFetch(!shouldFetch); 
    } catch (error) {
      console.log(error, "ERROR===============");
    }
  };

  const handleRemove = async (itemId) => {
    const id = localStorage.getItem('userId');
    try {
      const response = await axios.delete(`http://localhost:5000/save/${id}/${itemId}`);
      console.log(response.data);
      setShouldFetch(!shouldFetch);
    } catch (error) {
      console.log(error, "ERROR===============");
    }
  };

  return (
    <Grid container spacing={2} className='overflow-hidden'>
      <CardList data={data} handlePostSaveItem={handlePostSaveItem} bool={bool} handleRemove={handleRemove} />
    </Grid>
  );
}

export default SaveItem;
