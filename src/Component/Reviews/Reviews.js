import React, {} from 'react';
import { Image } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import './Reviews.css';

const Reviews = (props) => {
    const [reviews] =useReview();
    
    return (
        <div className='allReviews'>
            {
                            reviews.map(review => 
                            <div className='single_review' key={review.phone_id}>
                            <div className="client_img">
                                <Image src={review.thumbnailUrl}></Image>
                            </div>
                            <div className="client_review">
                                <p>{review.phone_name}</p>
                                <h3>Customer :{review.buyer_name}</h3>
                                <h2>Ratings: {review.Ratings}</h2>
                                <p>Feedback:{review.statement}</p>
                            </div>
                            </div> 
                            )
                            
                        }
        </div>
    );
};

export default Reviews;