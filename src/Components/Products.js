import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import product_list from '../JSON/products.json';
import { Grid } from '@mui/material'; // Import Grid component
import Fab from '@mui/material/Fab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite'
import "../Styles/products.css";

export default function Products() {
  console.log("product_list: ", product_list);
  
  if (product_list.length > 0) {
    return (
      <div>
        {/* Use Grid container to create rows */}
        <Grid container spacing={2} sx={{ padding: '2%' }}>
          {product_list.map((item, key) => (
            <Grid item xs={12} sm={6} md={3} key={key} maxHeight={'100vh'}>
              {/* Card for each product */}
              <Card sx={{ 
                width: '100%',
                height: '100%', // Ensure cards take up the full height of the grid item
                display: 'flex',
                flexDirection: 'column', // Arrange content vertically
               }}>
                
                <Box sx={{ 
                display: 'flex',
                flexDirection: 'row-reverse', // Arrange content vertically
                justifyContent: 'space-evenly'
               }}>
                    <Box sx={{ '& > :not(style)': { m: 1 }, backgroundColor:'transparent', display: 'flex',flexDirection:'column', alignContent:'space-around', justifyContent:'center' }}
                    >
                        <Fab color="primary" aria-label="add" size="small" sx={{
                            alignItems:'right',
                            transition: 'transform 0.3s ease-in-out', // Smooth zoom effect
                                '&:hover': {
                                    transform: 'scale(1.2)', // Zoom in by 20%
                                }
                            }}
                        >
                            <AddShoppingCartIcon />
                        </Fab>
                        <Fab color="error" aria-label="edit" size="small" sx={{
                            alignItems:'right',
                            transition: 'transform 0.3s ease-in-out', // Smooth zoom effect
                                '&:hover': {
                                    transform: 'scale(1.2)', // Zoom in by 20%
                                }
                            }}
                        >
                          <FavoriteIcon />
                        </Fab>
                    </Box>
                    
                    <CardMedia
                        sx={{
                            height: 200, // You can adjust the height as needed
                            objectFit: 'contain', // Ensures the image is fully visible and not cropped
                            width: 200, // Ensures the image width stretches to fill the container
                            alignItems: 'center',
                            // marginRight: '5%',
                            marginTop: '10%',
                            marginLeft: '10%',
                            marginBottom: '10%',
                            transition: 'transform 0.3s ease-in-out', // Smooth zoom effect
                            '&:hover': {
                            transform: 'scale(1.2)', // Zoom in by 20%
                            }
                            
                            // marginRight: '5%'
                        }}
                        image={item?.image}
                        title={item?.category}
                    />
                </Box>
        
                <CardContent
                    sx={{
                        marginLeft: '5%',
                        marginRight: '5%',
                        textAlign: 'justify'
                    }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item?.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <b>$ {item?.price}</b>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item?.stock} available
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        No Products
      </div>
    );
  }
}
