import { useEffect, useState } from "react";

const useReview = () =>{
const [reviews, setReviews] = useState([]);
useEffect(()=>{
    fetch ('reviews.json')
    .then (res => res.json())
    // .then (data => console.log(data))
    .then (data => setReviews(data))
}, [])
return [reviews, setReviews];
}
export default useReview;