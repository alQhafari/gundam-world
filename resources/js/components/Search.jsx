import React from "react";
import Funner from "@heroicons/react/24/outline/FunnelIcon";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import LoveIcon from "@heroicons/react/24/outline/HeartIcon";
import ShopIcon from "@heroicons/react/24/outline/ShoppingCartIcon";

const Search = () => {
    return (
        <div className="container-small">
            <div className="w-full h-fit flex flex-row justify-between gap-2 lg:gap-4 py-6 lg:py-12">
                <div className="grow-0 rounded-lg bg-white p-2">
                    <Funner className="w-[20px] h-[20px]  lg:w-[30px] lg:h-[30px] " />
                </div>
                <div className="relative grow rounded-lg bg-white text-gray-600">
                    <input
                        className="border-2 w-full h-full border-gray-300 bg-white px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search all you want..."
                    />
                    <button
                        type="submit"
                        className="absolute w-[30px] h-full right-0 top-0 mr-5"
                    >
                        <SearchIcon className="h-full w-full" />
                    </button>
                </div>
                <div className="grow- p-2">
                    <LoveIcon className="w-[20px] h-[20px]  lg:w-[30px] lg:h-[30px] text-white" />
                </div>
                <div className="grow-0 p-2">
                    <ShopIcon className="w-[20px] h-[20px]  lg:w-[30px] lg:h-[30px] text-white " />
                </div>
            </div>
        </div>
    );
};

export default Search;
