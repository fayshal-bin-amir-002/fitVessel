import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import Featured from "../../components/Home/Featured/Featured";
import About from "../../components/Home/About/About";
import FeaturedClasses from "../../components/Home/FeaturedClasses/FeaturedClasses";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import LatestComPost from "../../components/Home/LatestComPost/LatestComPost";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";
import Team from "../../components/Home/Team/Team";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Fit Vessel</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
            <Testimonials></Testimonials>
            <LatestComPost></LatestComPost>
            <NewsLetter></NewsLetter>
            <Team></Team>
        </div>
    );
};

export default Home;