import React from "react";
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";

export default function UserEvents(){
    return (
        <>
        <UserNavBar/>
        <div class="container p-5 border rounded-top rounded-3 shadow-lg mt-5 mb-5">
        <div>
            <div class="text-center mb-5 p-5">
                <p class="fw-bold fs-3 eventT">LEGENDARY EVENTS, STUNNING CELEBRATIONS, WORTHY CAUSES</p>
                <p class="fw-bold eventP">Once upon a time, in a beige office conference room far far away, bored
                    employees
                    gathered over cold sandwiches pausing their conversation only to clap politely at their bored boss.
                    They
                    thought to themselves, “Do events always have to be so...boring!?”
                    No, they don't!</p>
                <p class="eventP">At onlypans we bring you both mouth-watering, stomach-filling, mexican delights while
                    enjoying the
                    music-filled environment while hanging out with fun-loving, music-vibing generation. In addition, we
                    join us one with the nation in holding worthy causes to help those in need.
                </p>
                <p class="fw-bold fs-3 eventT">WATCH THIS PAGE TO JOIN US IN OUR EVENTS AND CAUSES</p>
            </div>

            <div class="container-fluid">
                
                <div
                    class="row m-2 d-flex flex-md-row flex-sm-column flex-align-items-center justify-content-evenly eventTwo">
                    <div class="col">
                        <div class="card cardI mb-3">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <img src="/img/Events/Events 1/Event A resized.png"
                                        class="img-fluid rounded-start content_img" alt="poster"/>
                                </div>
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <div>
                                            <h5 class="card-title cardTitle fs-3">Sampiro Festival</h5>
                                            <h5 class="card-title cardTitle">Poblacion Fiesta x Street Party</h5>
                                            <h5 class="card-title cardTitle">Date: 07-02-2022</h5>
                                            <p class="card-text">So thrilled to hit the streets with this awesome
                                                neighborhood!
                                                💙
                                                Tomorrow, 0702, come join us as we bring back the iconic Población
                                                street
                                                Party
                                                after 2 long years! Catch us in Don Pedro & Alfonso street!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardI mb-3">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <img src="/img/Events/Events 3/Pop Up resized.png"
                                        class="img-fluid rounded-start content_img" alt="events"/>
                                </div>
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <div>
                                            <h5 class="card-title cardTitle fs-3">onlypans Pop-Up Shop</h5>
                                            <h5 class="card-title cardTitle">The Courtyard, Molito Lifestyle Center,
                                                Alabang
                                            </h5>
                                            <h5 class="card-title cardTitle">Date: Aug 19 & 20</h5>
                                            <p class="card-text">South friends!!! We’ll be having our first ever pop up
                                                kitchen
                                                on
                                                Friday & Saturday at Molito! We’re serving our Birria, Smoked Meat,
                                                Camaron
                                                &
                                                our
                                                Vegan Tacos! See ya Alabangers! Come say hi 💃🏾 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                
                
                <div
                    class="row m-2 d-flex flex-md-row flex-sm-column flex-align-items-center justify-content-evenly eventTwo">
                    <div class="col">
                        <div class="card cardI mb-3">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <img src="/img/Events/Events 2/Typhoon Odette.png"
                                        class="img-fluid content_img rounded-start" alt="poster"/>
                                </div>
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <div>
                                            <h5 class="card-title cardTitle fs-3">Taco for a Cause</h5>
                                            <h5 class="card-title cardTitle">100% total sales will be donated</h5>
                                            <h5 class="card-title cardTitle">Date: 12-28-2021</h5>
                                            <p class="card-text">Come say hi at New Deli by Kashmir - Sitio Uno, Lio
                                                Estate,
                                                El
                                                Nido
                                                Palawan from 11am to 9pm. The entire 100% of sale will be donated for
                                                the
                                                Odette
                                                typhoon victims. Help us help them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardI mb-3">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <img src="/img//Events/Events 2/Pride Month resized.png"
                                        class="img-fluid content_img rounded-start" alt="events"/>
                                </div>
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <div>
                                            <h5 class="card-title cardTitle fs-3">Metro Manila Pride</h5>
                                            <h5 class="card-title cardTitle">Poblacion, Makati City</h5>
                                            <h5 class="card-title cardTitle">Date: June 24</h5>
                                            <p class="card-text">A part of our proceeds will benefit Metro Manila Pride
                                                Organization, in support of the organization and our friends from the
                                                LGBTQIA+
                                                community.
                                                Join us as we celebrate at the same time help our friends.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <UserFooter/>
    </>
    )
}