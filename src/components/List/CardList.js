import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Rating } from '@mui/material';

function CardList({ data, handlePostSaveItem }) {
  return (
    <Grid container spacing={2}>
      {data && data.map((item) => (
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
            {typeof window !== 'undefined' && window.localStorage.getItem('token') && (
              <CardActions>
                <Button 
                  size="small" 
                  sx={{ backgroundColor: 'lightgreen', '&:hover': { backgroundColor: 'lightgreen' } }} 
                  onClick={() => handlePostSaveItem(item.id)}
                >
                  Save
                </Button>
              </CardActions>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
