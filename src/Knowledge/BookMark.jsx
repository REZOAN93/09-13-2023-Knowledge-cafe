import React from 'react';

const BookMark = ({mark}) => {
    const {title}=mark;
    return (
        <div>
            <div className=' bg-white m-5 p-2 rounded-lg'>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default BookMark;