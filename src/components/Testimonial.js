import { Card, CardMedia, Typography, CardContent,Grid} from '@mui/material';
import React from 'react';
import testimonialData from '../Data/testimonialdata';
const TestimonialCard = ({title, picture, body}) => {
  return(
          <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                  component="img"
                  height="140"
                  image={picture}
                  alt={title}
                  />
                  <CardContent>
                          <Typography gutterBottom variant='h5' component="div">
                                  {title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                                  {body}
                          </Typography>
                  </CardContent>

          </Card>
  );
};
const Testimonial=()=> {
        return(
                <Grid container spacing={4}>
                        {testimonialData.map((data)=>(
                              <Grid item xs={3}>
                                        <TestimonialCard picture= {data.picture} title={data.title} body={data.body}/>
                                </Grid>
                                )
                        )}
                </Grid>
        )
}
export default Testimonial;
