import React from 'react';
import { Typography } from '@mui/material';

const dogs = [
    {
        title: "Siberian Husky",
        age: '13',
        breed: 'Mixed',
        image: 'https://i.ibb.co/VV1yxdy/dog-1.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "German Shepherd",
        age: '8',
        breed: 'Mixed',
        image: 'https://i.ibb.co/tZcvfCd/dog-2.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Golden Retriever",
        age: '5',
        breed: 'Mixed',
        image: 'https://i.ibb.co/YPHDzsb/dog-3.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Bulldog",
        age: '6',
        breed: 'Mixed',
        image: 'https://i.ibb.co/bjty4nS/dog-4.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Irish Setter",
        age: '9',
        breed: 'Mixed',
        image: 'https://i.ibb.co/QPSnF0t/dog-5.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Brussels Griffon",
        age: '4',
        breed: 'Mixed',
        image: 'https://i.ibb.co/z5kJHB2/dog-6.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Newfoundland",
        age: '15',
        breed: 'Mixed',
        image: 'https://i.ibb.co/mD4CtfC/dog-7.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "French Bulldog",
        age: '7',
        breed: 'Mixed',
        image: 'https://i.ibb.co/PCQT44S/dog-8.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Beagle",
        age: '12',
        breed: 'Mixed',
        image: 'https://i.ibb.co/XLvC5BW/dog-9.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    },
    {
        title: "Poodle",
        age: '15',
        breed: 'Mixed',
        image: 'https://i.ibb.co/rxMv41c/dog-10.jpg',
        price: 700,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, magni ab. Sed aut nesciunt neque laudantium culpa sit? Possimus, id.'
    }
]

const Dogs = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Dogs Waiting for you to adapt
            </Typography>
        </div>
    );
};

export default Dogs;