// import React from 'react';
import sohidImageAvatar from '../../assets/sohid.jpg'
const Sohid = ({ sohid, n }) => {
    // console.log(sohid?.en?.profession)
    return (
        <div className="bg-white rounded-lg shadow-lg flex flex-col relative">
            <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img className="object-cover w-full h-full rounded-lg" src={sohid?.en?.image || sohidImageAvatar} alt={`${sohid?.en?.name} photo`} />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="text-xl absolute top-0 right-0 bg-red-500 text-gray-100  font-bold  w-7 h-7 flex items-center justify-center p-1">{n}</div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[18px] font-bold text-gray-900">{sohid?.en?.name}</h3>
                <p className="text-gray-500 text-sm mt-2 flex-grow">{sohid?.profession || sohid?.en.fallbackInfoWithSource},{sohid?.en?.education}</p>
                <p className='text-xs text-right mt-1'>{sohid?.diedDate}</p>
            </div>
        </div>


    );
};

export default Sohid;