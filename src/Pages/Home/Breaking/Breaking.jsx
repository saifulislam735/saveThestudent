// import React from 'react';

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Breakings = () => {
    const [breakings, setbreakings] = useState([])
    const breakingNews = breakings.demands;
    // console.log(breakingNews)
    useEffect(() => {
        async function fetchBreaking() {
            const url = '/breaking.json'; // Replace with your API endpoint
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setbreakings(data);
            } catch (error) {
                console.error('Error fetching ShoidIndfo:', error);
            }
        }
        fetchBreaking();
    }, []); 

    return (
        <div>
            <Marquee style={{
                clipPath: "inset(0 0 0 13rem)"
            }} className="marquee text-xl pt-1">
                {
                    breakingNews?.map((breaking, index) =>
                        <p key={index}>
                            {breaking.description}
                            <span className=" text-red-500"> | </span>
                        </p>

                    )
                }
            </Marquee>
        </div>
    );
};

export default Breakings;