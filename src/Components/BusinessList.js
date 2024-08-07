import React from "react";
import Business from "./Business";

function BusinessList({businesses}) {
    return (
        <div class="grid grid-cols-3 m-8 p-10 ">
            <Business business={businesses[0]} />
            <Business business={businesses[1]} />
            <Business business={businesses[2]}/>
            <Business business={businesses[3]}/>
            <Business business={businesses[4]}/>
            <Business business={businesses[5]}/>
        </div>
    )
}

export default BusinessList;