import './styles.scss';

export const Contact = (): JSX.Element => {

    return (
        <div className="contact-container">
            <div className="left-contact">
                <h1>We'd love to hear from you.</h1>
                <div className="contact-details">
                    <div>
                        <h3>Visit Our Showroom</h3>
                        <p>123 Melbourne Place<br/>3000, Victoria, Australia</p>
                    </div>
                    <div>
                        <h3>Opening Hours</h3>
                        <p>Monday - Friday: 9:00AM - 6:00PM<br/>Saturday: 10:00AM - 4:00PM<br/>Sunday: Closed</p>
                    </div>
                    <div>
                        <h3>Our Office</h3>
                        <p>Phone: 9400 0000<br/>Email: info@autoemporium.com.au</p>
                    </div>
                    <div className="socials">
                        <h3>Connect with Us</h3>
                        <div className="icons">
                            <img src={require('../../assets/facebook.png')} alt="facebook" />
                            <img src={require('../../assets/instagram.png')} alt="instagram" />
                            <img src={require('../../assets/linkedin.png')} alt="linkedin" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="center-contact">
                <h2>Want to chat? Fill out the form below and we will get back to you!</h2>
                    <form action="" method="post">
                        <div className="form-section">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="email">Phone:</label>
                            <input type="tel" name="phone" id="phone" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="email">Message:</label>
                            <textarea name="message" id="message" required />
                        </div>
                        <div className="form-section">
                            <input type="submit" value="SUBMIT" />
                        </div>
                    </form>
            </div>

            <div className="right-contact">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0178363947257!2d144.9759963!3d-37.813051200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c696e85e65%3A0xa844d73b92d5684e!2sTreasury%20Pl%2C%20East%20Melbourne%20VIC%203002!5e0!3m2!1sen!2sau!4v1695176616940!5m2!1sen!2sau" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
            </div>
        </div>
    )
}