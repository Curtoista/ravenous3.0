import React from "react";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};


function SearchBar() {
    function renderSortByOptions() {
        return (
            Object.keys(sortByOptions).map((sortByOption) => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li key={sortByOptionValue} class="cursor-pointer w-18 border-b-1 border-solid border-black pt-0 px-10 pb-1.5 leading-4 text-center font-semibold text-sm list-none transition duration-250  ">{sortByOption}</li>
            })
        )
    };

    return (
        <div class="flex flex-col justify-center h-96 bg-cover bg-[url('/background_search_desktop.jpg')]">
            <div><ul class="flex justify-center text-yellow-600 mb-9">{renderSortByOptions()}</ul></div>
            <div class="flex justify-center mb-11"><input placeholder="Search Business" class="w-80 py-2.5 px-4 mr-9 border-1 border-solid border-white rounded text-xs font-medium"></input>
                <input placeholder="Where?" class="w-80 py-2.5 px-4 mr-0 border-1 border-solid border-white rounded text-xs font-medium"></input></div>
            <div class="flex justify-center"><button class="text-center justify-center"><a class="rounded py-3 px-7 bg-yellow-600 text-black font-semibold">Let's Go</a></button></div>
        </div>
    )

}







export default SearchBar;