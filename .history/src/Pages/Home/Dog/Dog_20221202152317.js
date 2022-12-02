import React from 'react';

const Dog = (props) => {
    const {title} = props.dog
    return (
        <div>
            {title}
        </div>
    );
};

export default Dog;