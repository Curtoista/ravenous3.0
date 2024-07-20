import React from "react";

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {


    return (
        <div className="BusinessCard">
            <div>
                <img src={business.imageSrc} alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className="BusinessInfo">
                <div className="BusinessAddress">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div>
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3>{business.rating} stars</h3>
                    <h3>{business.reviewCount} reviews</h3>
                </div>
                <div className="BusinessReviews"></div>
            </div>
        </div>
    )
}

export default Business;