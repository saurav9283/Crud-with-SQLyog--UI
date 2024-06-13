import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    // console.log(id,"ID====================")
    const id = localStorage.getItem('userId');
    try {
      const response = await axios.post('http://localhost:5000/save', { id ,itemId});
      console.log(response.data);
    } catch (error) {
      console.log(error, "ERROR===============");
    }
  };

  return (
    <Grid container spacing={2} className='overflow-hidden'>
      {
        data && data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ 
              width: '100%', 
              height: '100%', 
              m: 2, 
              boxShadow: 3, 
              transition: 'transform 0.2s', 
              '&:hover': { transform: 'scale(1.05)' } 
            }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Rating name="read-only" value={item.rating} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              {
                typeof window !== 'undefined' && window.localStorage.getItem('token') && (
                  <CardActions>
                    <Button 
                      size="small" 
                      sx={{ backgroundColor: 'lightgreen', '&:hover': { backgroundColor: 'lightgreen' } }} 
                      onClick={() => handlePostSaveItem(item.id)}
                    >
                      Save
                    </Button>
                  </CardActions>
                )
              }
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default List;
