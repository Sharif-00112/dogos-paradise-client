import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
                    <Typography gutterBottom variant="body1" component="div">
                        Age: {age} months
                        <br />
                        Breed: {breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price} $
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" style={{backgroundColor: 'orange'}}>
                        Get Now
                    </Button>
                    <Button size="small" variant="contained" style={{backgroundColor: 'gray'}}>
                        Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    );
};

export default Dog;