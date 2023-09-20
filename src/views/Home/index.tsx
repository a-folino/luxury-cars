import './styles.scss';

export const Home = (): JSX.Element => {
    return (
        <div className="home-container">
            <video id="background-video" loop autoPlay muted>
                <source src={require('../../assets/homepage.mp4')} type="video/mp4" />
            </video>
            <div className="overlay">
                <img src={require('../../assets/logo.png')} alt="logo" className="logo" />
                {/* <h1 ref={titleRef}>Unparalleled Luxury</h1>
                <h3>At Auto Emporium Melbourne, we redefine automotive excellence. Our exclusive selection of luxury cars represents the pinnacle of craftsmanship, performance, and sophistication.</h3> */}
                {/* <img src={require('../../assets/ferrari.webp')} alt="ferrari" className="ferrari" /> */}
            </div>
        </div>
    )
}