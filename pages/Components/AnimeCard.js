import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AnimeCard({anime}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
              <img src = {anime.images.jpg.image_url}></img>      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {anime.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Rating : {anime.rating}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Episodes : {anime.episodes}
        </Typography>
      </CardContent>
    </Card>
  );
}
