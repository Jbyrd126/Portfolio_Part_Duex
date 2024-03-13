import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardContent, Typography } from '@mui/material';

const items = [
  {
    image: '/notetaker.jpg',
    link: 'https://note-taker-your-time-has-come-09b860a11c6c.herokuapp.com/',
    name: 'Note Taker',
    description: 'Express App For Taking Notes',
  },
  {
    image: '/weather.gif',
    link: 'https://github.com/Jbyrd126/WeatherForecaster',
    name: 'Weather Forecaster',
    description: 'Weather Forecaster',
  },
  {
    image: '/jerry.gif',
    link: 'https://wharf-rat-11de69f4736c.herokuapp.com',
    name: 'Wharf Rats',
    description: 'MySQL app for storing, organizing, updating and adding Grateful Dead concert set lists',
  },
];

const MyCarousel = () => {
  return (
    <Card sx={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', marginTop: '20px' }}>
      <CardContent sx={{ padding: 0 }}>
        <Carousel>
          {items.map((item, index) => (
            <Paper key={index} sx={{ borderRadius: '25px', overflow: 'hidden', position: 'relative', maxHeight: '80vh' }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '20px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '50%', 
                    objectFit: 'cover', 
                    borderRadius: '20px', 
                  }}
                />
                <div style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', color: 'white' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '5rem', marginBottom: '8px' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    {item.description}
                  </Typography>
                </div>
              </a>
            </Paper>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default MyCarousel;