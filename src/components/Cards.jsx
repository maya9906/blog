import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/card.css';

function Cards({ text, nasaImageData, title }) {
  return (
    <div className="blog-card">
      
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
        <CardMedia
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
              gutterBottom
              variant="h6"
              component="div">
              {title}
            </Typography>
            <Typography
              sx={{ maxWidth: 345 }}
              variant="body2"
              color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Delete
          </Button>
          <Button size="small" color="primary">
            Modify
          </Button>
        </CardActions>
      </Card>
      
    </div>
  );
}



export default Cards;


// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import '../css/card.css';

// function Cards({ text, nasaImageData, title }) {
//   return (
//     <div className="blog-card">
//       <Card sx={{ Width: 345 }}>
//         <CardActionArea>
//           {nasaImageData && (
//             <CardMedia
//               component="img"
//               height="150"
//               image={nasaImageData.url}
//               alt={nasaImageData.title}
//             />
//           )}
//           <CardContent>
//             <Typography
//               gutterBottom
//               variant="h6"
//               component="div">
//               {title}
//             </Typography>
//             <Typography
//               sx={{ maxWidth: 345 }}
//               variant="body2"
//               color="text.secondary">
//               {text}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Delete
//           </Button>
//           <Button size="small" color="primary">
//             Modify
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// export default Cards;



// // Cards.js
// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import '../css/card.css';

// function Cards({ text, nasaImageData, title }) {
//   return (
//     <div className="blog-card">
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="150"
//             image={nasaImageData.url}
//             alt={nasaImageData.title}
//           />
//           <CardContent>
//             <Typography
//               gutterBottom
//               variant="h6"
//               component="div">
//               {title}
//             </Typography>
//             <Typography
//               sx={{ maxWidth: 345 }}
//               variant="body2"
//               color="text.secondary"
//               multiline
//               maxRows={10}>
//               {text}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Delete
//           </Button>
//           <Button size="small" color="primary">
//             Modify
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// export default Cards;