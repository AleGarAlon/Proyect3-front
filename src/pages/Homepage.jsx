import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import "./Homepage.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1>Welcome!</h1>
                    <p>
                        This is a platform where we connect homeless cats to
                        loving homes. Use the navigation bar to view all
                        available cats, see our shelters, participate in our
                        forum, or view your profile.
                    </p>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
