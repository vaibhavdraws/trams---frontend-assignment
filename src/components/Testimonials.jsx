import avatar from "../assets/AVATAR1.jpg"
import group from "../assets/g1.jpg"
import group2 from "../assets/group2.jpg"

function Testimonials() {

    return (

        <section className="testimonials">

            {/* Light Decorative People Image */}
            <img
                src={group}
                alt="community"
                className="group-image"
            />

            <div className="container">

                {/* Heading */}
                <div className="testimonial-heading">

                    <span className="tag">
                        Testimonials
                    </span>

                    <h2>
                        What our partners
                        say about us
                    </h2>

                </div>


                {/* Testimonial Card */}
                <div className="testimonial-box">

                    <img
                        src={avatar}
                        alt="partner"
                        className="main-avatar"
                    />

                    <p>
                        TRAMS helped organizations build meaningful
                        partnerships and improve collaboration through
                        innovative digital solutions. Their commitment
                        to accessibility, usability, and impactful
                        execution makes them highly reliable.
                    </p>

                </div>


                {/* About Section */}
                <div className="about-trams">

                    <img
                        src={group2}
                        alt="team"
                        className="about-image"
                    />

                    <h3>
                        About Trams
                    </h3>

                    <p>
                        TRAMS is a nonprofit organization focused on
                        fostering collaboration between organizations,
                        leaders, and communities. Through innovation,
                        partnerships, and knowledge-sharing, TRAMS aims
                        to create sustainable impact and empower
                        businesses with meaningful opportunities
                        for growth.
                    </p>

                </div>

            </div>

        </section>

    )

}

export default Testimonials