import './styles.scss';

export const Home = (): JSX.Element => {
    return (
        <div className="home-container">
            <video id="background-video" loop autoPlay muted>
                <source src={require('../../assets/homepage.mp4')} type="video/mp4" />
            </video>
            <div className="overlay">
                <img src={require('../../assets/logo.png')} alt="logo" className="logo" />
            </div>
        </div>
    )
}