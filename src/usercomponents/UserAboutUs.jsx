import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";

export default function UserAboutUs () {
    return (
<div className="container-fluid m-0 p-0">
<UserNavBar/>

<Carousel className="mt-5">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/img/AboutUs1resized.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/img/AboutUs2resized.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/img/AboutUs3resized.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="container">
        <div className="text-center my-5 p-5 ourStory border border-2" style={{borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.02)'}}>
                <p className="fw-bold fs-2">Our Story</p>
            <div className="container w-75">
                <p>Before being none for its tacos Onlypans started, not with a physical restaurant establishment as it is
                    today, but as a food delivery business with only one recipe: sushi bake. This was during the height of
                    the pandemic in the year 2020.</p>
                <p>Upon encouragement of an acquintance, and due to the prevalance of sushi bake at that time, the owner
                    decided to start baking and selling sushi bake, initially friends serving as customers, without
                    expecting any returns.</p>
                <p>However, to the surprise of the owner, the feedback was overwhemingly positive! Thus, business grew.</p>
                <p>Two years after, Onlypans opens its physical store in Barangay Poblacion-a hip cultural district in
                    Makati City, with an entirely new menu of mexican food. Similary to its humble beginnings, its tacos and
                    other menu items received and continue to earn rave reviews.
                </p>
            </div>
        </div>
    </div>

    <hr className="w-75 mx-auto my-5"/>

    <div className="container mt-5 mb-5 textForm">
        <div className="row g-0 d-flex flex-lg-row flex-md-column flex-sm-column flex-lg-nowrap">
            <div className="col-12 border-1 border-dark flex-fill">

            
                <h5 className="fs-3 text-center mx-2 mb-4"> Location Map</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.621015610933!2d121.02928795048636!3d14.563651989776085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c96b4c1d5447%3A0xbddd5f124b4d3a35!2sOnlypans%20Taqueria%20Poblacion!5e0!3m2!1sen!2sph!4v1663731544660!5m2!1sen!2sph" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="col-12 border-1 border-dark flex-fill textForm">
                <div className="col border-1 border-dark">
                    <h5 className="fs-3 ms-2 text-center"> Contact Us</h5>
                    <div className="container mt-2">
                        <form action="https://formspree.io/f/xvoygrjr" id="test-form" method="POST">
                            <div className="form-group">
                                <label for="firstName">First Name:</label>
                                <input className="form-control" type="text" id="firstName" name="firstName"/>
                            </div>
                            <div className="form-group">
                                <label for="lastName">Last Name:</label>
                                <input className="form-control" type="text" id="lastName" name="lastName"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input className="form-control" type="email" id="email" name="email"/>
                            </div>
                            <div className="form-group">
                                <label for="message">Message:</label>
                                <textarea className="form-control" name="message" id="message" rows="10"
                                    maxlength="200"></textarea>
                            </div>
                            <div className="container m-0 p-0 text-end">
                            <button className="btn btn-danger mt-2" id="test-form-submit">Submit</button>
                            </div>
                        </form>
                        <div id="status" className="mt-2 text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <UserFooter/>
</div>
)
}
