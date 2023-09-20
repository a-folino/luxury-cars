import './styles.scss';

export const About = (): JSX.Element => {
    return (
        <div className="about-container">
            <div className="left-about">
                <div className="left-about-top">
                    <h1>Auto Emporium Melbourne</h1>
                    <h3>The home of luxury.</h3>
                </div>
                <div className="left-about-bottom">
                    <p>Founded by a team of dedicated enthusiasts, Auto Emporium Melbourne is more than just a dealership; it's a destination for those who appreciate the finer things in life. With decades of collective experience in the luxury automotive industry, our founders set out to create a haven for those seeking the epitome of refinement, performance, and style.</p>
                    <p>Explore our carefully curated collection of luxury vehicles, featuring prestigious brands like Audi, Lamborghini, Ferrari, Tesla, BMW, Porsche, and more. Each vehicle is handpicked for its outstanding quality and craftsmanship, ensuring that you have access to the finest automobiles on the market.</p>
                    
                </div>
            </div>

            <div className="right-about">
                <img src={require('../../assets/about-car.webp')} alt="lamborghini" />
            </div>
        </div>
    )
}