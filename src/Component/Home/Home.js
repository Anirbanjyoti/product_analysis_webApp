import React, {} from 'react';
import { Image } from 'react-bootstrap';
import display_img from "../../Capture.PNG";
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';

const Home = () => {

const [reviews, setReviews] = useReview();
    return (
        <div>
            <Container>
                    <Row className='display-section'>
                        <Col sm={12} md={8} className="phone-des">
                        <h1>Your Best Iphone 13 Pro</h1>
                        <p>Why buy Apple iPhone 13 Pro Max

                <ul>
                    <li>  Huge 1TB Storage helps you to store your files easily</li>
                    <li>iOS 15 ensures smooth usage</li>
                    <li>iOS 15 ensures smooth usage</li>
                    <li>LiDAR Scanner enhances its efficiency</li>
                    <li>A15 Bionic Chip to install and run multiple apps</li>
                    <li>6GB RAM ensures efficient performance</li>
                    <li>Triple Rear Camera with a single front camera takes stunning pictures</li>
                </ul>
                
                Get ready to capture cinematic shots as the Apple iPhone 13 Pro Max features a new Cinematic mode. This smartphone takes your photography experience to a new height. It comes with an amazing combination of 12 MP (telephoto camera), 12 MP (wide camera), and 12 MP (ultra-wide camera). Snap memorable moments in clear detail with the 12 MP wide camera. This phone is made for low light. The Wide camera adds a wider aperture and our largest sensor yet and it leverages the LiDAR Scanner for Night mode portraits. With its redesigned lens and powerful autofocus system, the new Ultra-Wide camera can focus at just 2 centimeters making even the</p> 
                                <Button className='demo' variant="primary" size="sm">View Demo</Button>
                </Col>
                        <Col md={4} sm={12}>
                            <Image className="phone-image" src={display_img} alt='image'></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <h2 className='cus-rev'>Customer Reviews (3)</h2>
                    
                            {
                            reviews.slice(0, 3).map(review => 
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

                            <div className="all_reviews">
                            <Link to='/Reviews'><Button variant="primary" size="lg">View All Reviews</Button></Link>
                                
                            </div>
                        </Col>
                    </Row>
                    </Container>
        </div>
    );
};

export default Home;