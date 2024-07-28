// import React from 'react';

import { useEffect, useState } from "react";
import Sohid from "./Sohid";
import { Link } from "react-router-dom";

const SohidInfo = () => {
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
    }, []); // Empty dependency array to run the effect only once


    // console.log(sohids)
    return (
        <div>
            <div>
                Give data <br />
                <p className="my-4">
                    following website for sohid info:
                    <Link
                        to="https://shohid.info/"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-semibold underline transition duration-300 ease-in-out"
                    >
                        Sohid.Info
                    </Link>
                </p>

            </div>
            <div className="lg:flex w-full gap-3 text-white space-y-2 lg:space-y-0">
                <div className=" bg-[#9b2226]  grid h-20  flex-grow place-items-center text-center p-4">
                    Total Martyrs <br />
                    <strong className="text-3xl">
                        209+
                    </strong>
                </div>
                <div className=" bg-[#fca311]  grid h-20 flex-grow place-items-center text-center p-4">
                    Students Injured
                    <br />
                    <strong className="text-3xl">
                        20000+
                    </strong>
                </div>
                <div className=" bg-[#e63946]  grid h-20 flex-grow place-items-center text-center p-4">
                    Missing <br />
                    <strong className="text-3xl">
                        unknown+
                    </strong>
                </div>
                <div className=" bg-[#1f77b4]  grid h-20 flex-grow place-items-center text-center p-4">
                    Arrested <br />
                    <strong className="text-3xl">
                        6000+
                    </strong>
                </div>

            </div>

            {/* sohids information */}
            <div className="  m-4">
                <div className=" px-4">
                    <h2 className="text-3xl font-bold   text-center p-4">
                        List of Martyrs in the Movement
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {
                            sohids.map((sohid, index) =>
                                <Sohid key={index} sohid={sohid} n={index + 1}></Sohid>
                            )
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SohidInfo;