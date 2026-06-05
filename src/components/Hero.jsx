import heroImage from "../assets/first.jpg"

function Hero() {

    return (

        <section className="hero">

            <div className="container hero-container">

                <div className="hero-left">

                    <span className="hero-tag">
                        Empowering Partnerships
                    </span>

                    <h1>
                        Building Meaningful
                        Business Partnerships
                    </h1>

                    <p>
                        Connecting organizations, leaders, and communities
                        through collaboration, innovation, and impactful
                        partnerships.
                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">
                            Join Us
                        </button>

                        <button className="secondary-btn">
                            Explore
                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <img
                        src={heroImage}
                        alt="Trams Partnership"
                    />

                </div>

            </div>

        </section>

    )

}

export default Hero