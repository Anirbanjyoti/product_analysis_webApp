import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const Reviews = (props) => {
    const [reviews, setReviews] =useState([]);
    useEffect(()=>{
        fetch ('reviews.json')
        .then (res => res.json())
        // .then (data => console.log(data))
        .then (data => setReviews(data))
    }, [])
    
    return (
        <div>
            <h1>This is reviews Page</h1>
            {
                            reviews.map(review => 
                            <div key={review.phone_id}>
                                <Image src={review.thumbnailUrl}></Image>
                                <p>{review.phone_name}</p>
                                <h3>Customer :{review.buyer_name}</h3>
                                <h2>Ratings: {review.Ratings}</h2>
                                <p>Feedback:{review.statement}</p>
                            </div> 
                            )
                            
                        }
        </div>
    );
};

export default Reviews;