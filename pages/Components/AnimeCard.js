import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AnimeCard({anime}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg?w=2000"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rating : {anime.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Episodes : {anime.episodes}
        </Typography>
      </CardContent>
    </Card>
  );
}
