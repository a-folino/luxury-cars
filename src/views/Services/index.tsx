import './styles.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../../data/data';

export const Services = (): JSX.Element => {

    const slideStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px',
        width: '700px'
    }
    return (
        <div className="services-container">
            <h1>Services</h1>

            <div className="slideshow-container">
                <Slide easing="ease" autoplay={true} duration={3000} cssClass="slide-wrapper" canSwipe={false} >
                    {slideImages.map((image, index) => {
                        return (
                            <div key={index}>
                                <div style={{ ...slideStyle, backgroundImage: `url(${image.url})` }}></div>
                            </div>
                        )
                    })}
                </Slide>
            </div>

            <div className="cards">
                <div className="card first">
                    <h2>Vehicle Sales</h2>
                    <p>Discover a curated selection of the world's finest luxury automobiles. Our showroom showcases a range of prestigious brands, each meticulously chosen for its superior craftsmanship, performance, and style.</p>
                </div>
                <div className="card second">
                    <h2>Personalised Consultations</h2>
                    <p>Our team of experts is here to provide personalized guidance tailored to your unique preferences. Whether you're seeking a performance-driven sports car, a luxurious SUV, or a timeless classic, we'll assist you in finding the perfect match.</p>
                </div>
                <div className="card third">
                    <h2>Trade-In and Upgrade</h2>
                    <p>Looking to part ways with your current luxury vehicle? We offer competitive trade-in appraisals, allowing you to seamlessly transition to the latest model or a different luxury car within our collection.</p>
                </div>
                <div className="card fourth">
                    <h2>Financing and Leasing</h2>
                    <p>Our flexible financing options and leasing solutions are designed to make your dream car a reality. We work with trusted financial partners to ensure you secure the best terms and rates.</p>
                </div>
                <div className="card fifth">
                    <h2>Maintenance and Servicing</h2>
                    <p>Trust your prized possession to our certified technicians who understand the intricacies of luxury vehicles. Our state-of-the-art service center is equipped to handle everything from routine maintenance to complex repairs.</p>
                </div>
                <div className="card sixth">
                    <h2>Detailing and Customisation</h2>
                    <p>Enhance the aesthetics of your luxury car with our professional detailing and customization services. From paint protection to bespoke interiors, we'll help you personalize your vehicle to perfection.</p>
                </div>
            </div>
        </div>
    )
}