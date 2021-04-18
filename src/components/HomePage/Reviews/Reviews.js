import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import aliza from '../../../Images/aliza.png';
import wilson from '../../../Images/wilson.png';
import ema from '../../../Images/ema.png';
import { Carousel, Container, Row } from 'react-bootstrap';


const ReviewsData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    }
]


const Reviews = () => {
    const [allReview, setAllReview] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-crag-72285.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => {
            setAllReview(data);
            console.log({data});
        })
    }, [])

    return (
        <section style={{ marginTop: "100px" }} className="container">
            <h1 className="brandTitle">Some Happy Faces {allReview.length}</h1>
            <h1 className="mb-5 brandTitle">________</h1>
            <div className="row d-flex mt-5">
                {
                    allReview.map(review=> <Review review={review}></Review>)
                }
            </div>
            


        </section>
    );
};

export default Reviews;