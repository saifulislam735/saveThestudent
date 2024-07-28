
import Marquee from "react-fast-marquee";
import LeftNav from "../LeftNav/LeftNav";
import RightNav from "../RightNav/RightNav";
import ShowPost from "../ShowPost/ShowPost";


const Home = () => {
    return (
        <div>
            <div className="w-full bg-[#fff] h-10 mb-4 relative ">
                <p className="absolute bg-red-700  w-52 h-full text-white text-xl font-bold flex items-center justify-center">Breaking News</p>
                <Marquee style={{
                    clipPath: "inset(0 0 0 13rem)"
                }} className="marquee text-xl pt-1">Hi</Marquee>
            </div>

            <div className="grid grid-cols-12 gap-4 lg:gap-8">
                <div className="col-span-3">
                    <div className="sticky top-0">
                        <LeftNav></LeftNav>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="flex space-y-4 lg:space-y-24">
                        <div>
                            <ShowPost></ShowPost>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="sticky top-0">
                        <RightNav></RightNav>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
