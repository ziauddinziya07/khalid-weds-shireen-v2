import React from "react";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="row">
                <div className="col-lg-6  left" data-aos="fade-down">
                    <h1>Shukrana</h1>
                    <h4>
                        On Saturday, 26<sup>th</sup> February, 2022.
                    </h4>
                    <h5>Time: 08:00 PM</h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>

            <div className="row">
                <div className="col-lg-6 left"></div>
                <div
                    className="col-lg-6 right"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <h1>Nikaah</h1>
                    <h4>
                        On Sunday, 27<sup>th</sup> February, 2022.
                    </h4>
                    <h5>Time: 11:30 AM</h5>
                    <h2>Venue:</h2>
                    <h5>
                        KKSR Function Hall,
                        <br /> Near Weekly Bazar,
                        <br /> Lingsugur.
                    </h5>
                </div>
            </div>

            <div className="row">
                <div
                    className="col-lg-6 left"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    <h1>Valima</h1>
                    <h4>
                        On Wednesday, 2<sup>nd</sup> March, 2022.
                    </h4>
                    <h5>Time: 02:00 PM</h5>
                    <h2>Venue:</h2>
                    <h5>
                        Danish Function Hall,
                        <br /> By Pass Road,
                        <br /> Adoni.
                    </h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>
        </section>
    );
}

export default Timeline;
