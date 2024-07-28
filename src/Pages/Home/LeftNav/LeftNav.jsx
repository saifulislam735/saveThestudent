// import React from 'react';

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Sohid from "../../SohidInfo/Sohid";
import { useEffect, useState } from "react";

const LeftNav = () => {
    const [sohids, setSohids] = useState([])
    useEffect(() => {
        async function fetchShoidInfo() {
            const url = '/sahidInfo.json'; // Replace with your API endpoint
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSohids(data);
            } catch (error) {
                console.error('Error fetching ShoidIndfo:', error);
            }
        }
        fetchShoidInfo();
    }, []);

    return (
        <div>
            <div className=" w-full gap-3 text-white space-y-2 ">
                <div className=" bg-[#9b2226]   h-16  flex-grow place-items-center text-center p-2">
                    Total Martyrs <br />
                    <strong className="text-xl">
                        209+
                    </strong>
                </div>
                <div className=" bg-[#fca311]  h-16  flex-grow place-items-center text-center p-2">
                    Students Injured
                    <br />
                    <strong className="text-xl">
                        20000+
                    </strong>
                </div>
                <p className="text-right">
                    <Link to='/shoidInfo' className="text-blue-500 text-xs  underline">see more..</Link>
                </p>
            </div>

            <div>
                <Marquee >
                    <div className="flex gap-2 w-8/12">
                        {
                            sohids.map((sohid, index) =>
                                <Sohid key={index} sohid={sohid} n={index + 1}></Sohid>
                            )
                        }
                    </div>
                </Marquee>
                <p className="text-right">
                    <Link to='/shoidInfo' className="text-blue-500 text-xs  underline">see more..</Link>
                </p>
            </div>

        </div >
    );
};

export default LeftNav;