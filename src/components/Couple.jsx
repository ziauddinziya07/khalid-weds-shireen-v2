import React from "react";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/khalid.jpeg"
                        alt="Groom_img"
                    />
                    <div className="info">
                        <h3>
                            B. Khalid Ahmed, <sub>(B. Tech)</sub>
                        </h3>
                        <p>
                            Maternal Grand S/O Janab B. Ahmed Khan Sahab (Late)
                        </p>
                        <p>
                            Paternal Grand S/O Janab B. Hazrath Sahab (Late)
                        </p>
                        <p>S/O Janab B. Basheer Ahmed Sahab (Late)</p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-in "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart-mid.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/hijaab-girl.png"
                        alt="Bride_img"
                    />

                    <div className="info">
                        <h3>D. Shireen Anjum, <sub>(D. Pharma)</sub></h3>
                        <p>D/O Al-haaj Janab D. Abdul Hameed Sahab </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
