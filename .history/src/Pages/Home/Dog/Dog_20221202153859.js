import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Dog = (props) => {
    const {title, age, breed, image, price, description} = props.dog
    return (
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    // height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Get Now</Button>
                    <Button size="small">
                        <Link
                        style={{ textDecoration:'none', color:'red' }}
                        to = '/appointment'>
                            Learn More
                        </Link>
                    </Button>
                    <Link 
                        style={{ textDecoration:'none', color:'red' }}
                        to = '/appointment'>
                        <Button sx={{mx:1}} color="inherit">Appointment</Button>
                    </Link>
                </CardActions>
                </Card>
        </div>
    );
};

export default Dog;