import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardContent, Typography } from '@mui/material';

const items = [
  {
    name: 'Blah Blah',
    description: 'Why wont the image display',
    image: '/tapper.gif',
  },
  {
    name: 'Item 2',
    description: 'Description for item 2',
    image: '/stealy.jpg', 
  },
  {
    name: 'Item 3',
    description: 'Description for item 3',
    image: '/skele.jpg', 
  },
];

const MyCarousel = () => {
  return (
    <Card>
      <CardContent>
        <Carousel>
          {items.map((item, index) => (
            <Paper key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height:'90vh'}} />
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Paper>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default MyCarousel;