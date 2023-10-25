import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/card.css';

function Cards({ text, nasaImageData, title, onDelete }) {
  const deleteCard = () => {
    // カードを削除するための処理
    onDelete();
  };
  return (
    <div className="blog-card">
      
      <Card sx={{ maxWidth: 400 }} >
        <CardActionArea>
        <CardMedia
          className='cardmedia'
          component="img"
          height="150"
          image={nasaImageData ? nasaImageData.url : ''} // 画像がある場合に URL を設定
          alt={nasaImageData ? nasaImageData.title : ''} // タイトルがある場合に alt テキストを設定
        />
          {/* <CardMedia
            component="img"
            height="150"
            image={nasaImageData.url}
            alt={nasaImageData.title}
          /> */}
          <CardContent>
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "pre-wrap", // テキストが折り返されるように制御
                wordWrap: "break-word", // 長い単語を適切に折り返すための制御
              }}
              gutterBottom
              variant="h6"
              component="div">
              {title}
            </Typography>
            <Typography
              sx={{
                maxWidth: 345,
                overflow: "hidden",
                whiteSpace: "pre-wrap", // テキストが折り返されるように制御
                wordWrap: "break-word", // 長い単語を適切に折り返すための制御
              }}
              variant="body2">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={deleteCard} className='deletebtn'>
            Delete
          </Button>
        </CardActions>
      </Card>
      
    </div>
  );
}



export default Cards;

