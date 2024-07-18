
import RightNav from "../RightNav/RightNav";
import ShowPost from "../ShowPost/ShowPost";


const Home = () => {
    return (
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-8">
                <div className="flex space-y-4 lg:space-y-24">
                    <div>
                        <ShowPost></ShowPost>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="sticky top-0">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
