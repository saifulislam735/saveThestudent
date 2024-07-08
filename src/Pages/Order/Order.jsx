//import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderImage from '../../assets/assets/images/services/2.jpg'
import OrderTable from './OrderTable';
// import { useState } from 'react';
const Order = () => {
    const getOrdersData = useLoaderData()
    // console.log(getOrderData)
    // const [oderInfo, setOrderInfo] = useState([]);


    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to right, #000000, rgba(21, 21, 21, 0.00)), url(${OrderImage})`,
                    backgroundSize: 'cover',
                    height: '200px',
                    width: '100%',
                }}
                className="bg-no-repeat flex flex-col justify-center items-center relative"
            >
                <h2 className="text-white text-[45px] mt-10 text-center pt-4 relative z-10">
                    Ordered Services
                </h2>
                <div className="relative flex justify-center items-center w-full h-full z-10">
                    <svg
                        className="absolute bottom-[-1.5px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="296"
                        height="50"
                        viewBox="0 0 296 50"
                        fill="none"
                    >
                        <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                    </svg>
                    <p className="text-white text-xl absolute text-center font-semibold bottom-2">
                        Home/Service
                    </p>
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-bold'>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            getOrdersData?.map(oderInfo => <OrderTable key={oderInfo._id} oderInfo={oderInfo}></OrderTable>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;