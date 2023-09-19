import { useRef } from 'react';
import './styles.scss';

export const Home = (): JSX.Element => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    return (
        <div className="home-container">
            <h1 ref={titleRef}>Unparalleled Luxury</h1>
            <p>At Auto Emporium Melbourne, we redefine automotive excellence. Our exclusive selection of luxury cars represents the pinnacle of craftsmanship, performance, and sophistication.</p>
            <img src={require('../../assets/ferrari.webp')} alt="ferrari" />
            
            <div className="stripes">
                <div className="stripe stripe-first"></div>
                <div className="stripe stripe-second"></div>
                <div className="stripe stripe-third"></div>
            </div>
        </div>
    )
}