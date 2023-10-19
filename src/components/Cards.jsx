// Cards.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Cards({ text, image, title }) {
  return (
    <div className="blog-card">
      <Card sx={{ maxWidth: 345  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={URL.createObjectURL(image)}
            alt="green iguana"
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h6" 
              component="div">
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              multiline
              maxRows={10}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Delate
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
