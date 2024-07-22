import React from "react";

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11221',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {


    return (
        <div class="flex justify-between flex-col w-64 mx-2 mt-0 mb-10">
            <div class="h-64 mb-4 flex flex-col justify-center overflow-hidden bg-black ">
                <img class="w-full" src={business.imageSrc} alt="" />
            </div>
            <h2 class="mt-0 mb-2 text-xl font-semibold">{business.name}</h2>
            <div class="flex justify-between">
                <div class="flex flex-col justify-between">
                    <p class="text-sm font-light leading-4 m-0">{business.address}</p>
                    <p class="text-sm font-light leading-4 m-0">{business.city}</p>
                    <p class="text-sm font-light leading-4 m-0">{business.state} {business.zipCode}</p>
                </div>
                <div class="flex flex-col justify-between text-right">
                    <h3 class="text-yellow-600 font-semibold">{business.category.toUpperCase()}</h3>
                    <h3 class="text-yellow-600 font-semibold">{business.rating} stars</h3>
                    <h3 class="text-yellow-600 font-semibold">{business.reviewCount} reviews</h3>
                </div>
            </div>
        </div>
    )
}

export default Business;