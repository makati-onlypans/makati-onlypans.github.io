import React from "react"
import { Link } from 'react-router-dom';
// import { ElfsightWidget } from 'react-elfsight-widget';
import './style.css';

function UserHome() {

    return (
        <>
            <div className="mt-1 mb-5">
                <img alt="" src="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/308513978_605411891323167_655469283823557726_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=NRG6wpJmk-kAX-u_8L5&_nc_ht=scontent.ffjr1-3.fna&oh=00_AT_KT7OArJa1CuFx8OZ4S9Aqgu00OM-CcAF6ChAeYdzgcg&oe=63309B1F" className="img-fluid opacity-75" style={{ borderBottom: '8px solid rgba(0, 0, 0, 1)'}}/>
            </div>
            <div className="container sectionOneFavorite">
                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 ">
                    <div className="col imgFavorite1">
                        <img src="/img/Menu/Home/quesabirriataco.png" className="card-img-top container1" alt="..." style={{ border: '2px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                    <div className="col">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-start text-center mt-3 mt-md-0" style={{ borderRadius: 5 }}>Quesa Birria Taco</h5>
                        <p className="textFavorite text-md-start text-center">Easily our best seller, everyone who comes to OnlyPans come to have a taste of
                            this delectible dish.</p>
                        <p className="textFavorite text-md-start text-center">To serve this dish USDA beef is slowly cooked in authentic mexican chills and 16
                            spices with top grade mozzarella cheese, 3 kinds of sauces, pico de gallo & lime.</p>
                        <p className="textFavorite text-md-start text-center">Our customers who have tried our Quesa Birria Taco always come back to have a
                            bite of this dish. </p>
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 pt-3" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.08)' }}>
                    <div className="col ">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-end text-center" style={{ borderRadius: 5 }}>Cartinas Taco</h5>
                        <p className="textFavorite text-md-end text-center">For those who opt to savor the flavor of pork we have Cartinas Taco to satisfy
                            your cravings.</p>
                        <p className="textFavorite text-md-end text-center">Made from slow cooked top grade pork meat aat our house special recipe, topped
                            with pickled onions and chipotle barbecue sauce.</p>
                        <p className="textFavorite text-md-end text-center">Truly, Cartinas Taco is an experience you will never forget.</p>
                    </div>
                    <div className="col imgFavorite2 mb-3">
                        <img src="/img/Menu/Home/carnitastaco.png" className="card-img-top container1" alt="..." style={{ border: '2px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 ">
                    <div className="col imgFavorite1">
                        <img src="/img/Menu/Home/camaronshrimptostadas.png" className="card-img-top img-fluid container1" alt="..." style={{ border: '2px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                    <div className="col">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-start text-center mt-3 mt-md-0" style={{ borderRadius: 5 }}>Camaron Tostadas</h5>
                        <p className="textFavorite text-md-start text-center">We you are a seafood type of person Camaron Tostadas will definitely suite your
                            tastebud.</p>
                        <p className="textFavorite text-md-start text-center">This selection is cooked with fresh shrimp in house special marinade, dipped in
                            beer batter & served with homemade coleslaw, alfalfa, red radish & pickled onions.</p>
                        <p className="textFavorite text-md-start text-center">You will, for sure, enjoy our offer.</p>
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 pt-2" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.08)' }}>
                    <div className="col ">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-end text-center" style={{ borderRadius: 5 }}>Quesadillas</h5>
                        <p className="textFavorite text-md-end text-center">After experiencing our best seller you might want to venture into our other
                            choices. Quesadillas is definitely one of our best.</p>
                        <p className="textFavorite text-md-end text-center">Made with soft tortillas with your choice of meat filled with cheese and spices,
                            served with house special sauces and pico de gallo.</p>
                        <p className="textFavorite text-md-end text-center">For the meat you can select beef, shrimp, pork, chicken or cheese. Truly, you
                            would not get tired of it.</p>
                    </div>
                    <div className="col imgFavorite2 mb-3">
                        <img src="/img/Menu/Home/quesadillas.png" className="card-img-top container1" alt="..." style={{ border: '2px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                </div>




                <div className="container d-md-flex p-5 mb-5" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.05)' }}>
                    <div className="container text-center">
                        <Link to="https://www.facebook.com/"><img className="my-3" src="/img/scooter.png" style={{ width: 70, height: 70, borderRadius: 5 }} alt="" /></Link><br />
                        <p className="fs-4">
                            Order Online:
                        </p>
                        <div className="container d-flex justify-content-center text-center border border-2" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.09)' }}>
                            <a href="https://www.foodpanda.ph/restaurant/j5oj/onlypans-taqueria?fbclid=IwAR3goy-k2e684ob48wgGMnWWlVNdfEOGsv1jieacVKHkjsj-SqFdMZ8Cjjk"><img src="/img/foodpandalogo.svg" style={{ width: 100, height: 100 }} alt="" /></a><br />
                            <div className="vr mx-5"></div>
                            <a href="https://food.grab.com/ph/en/restaurant/onlypans-taqueria-poblacion-available-for-long-distance-delivery-delivery/2-C3AYC8CJMGJUHE"><img src="/img/GrabFoodLogo.svg" style={{ width: 100, height: 100 }} alt="" /></a><br />
                        </div>
                    </div>
                    <hr className="w-75 mx-auto my-5 d-block d-md-none" />

                    <div className="vr mx-5 d-none d-md-block" style={{ opacity: 150 }}></div>
                    <div className="container mt-4">
                        <div className="container text-center" >
                            <a href="https://www.facebook.com/onlypansph"><img className="img-fluid mx-2" src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png" style={{ width: 60 }} /></a>
                            <a href="https://www.instagram.com/onlypanspoblacion/?hl=en&fbclid=IwAR0C_9yi4DyvZnjXOmpH3dqxYZDJCQ_9R3Ru5kqrXOJxDL4O3Jy06OXkyCs"><img className="img-fluid mx-2" src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" style={{ width: 60 }} /></a>
                        </div>
                        <p className="mt-5 text-center fs-1">
                            Visit Us!
                        </p>
                    </div>

                    <hr className="w-75 mx-auto my-5 d-block d-md-none" />

                    <div className="vr mx-4 d-none d-md-block" style={{ opacity: 150 }}></div>
                    <div className="container text-center my-5">
                        <img src="https://img.icons8.com/color/48/000000/discount--v1.png" style={{ width: 70 }} />
                        <p className="mt-4 text-center fs-4">
                            Promos ending soon! Hurry up!
                        </p>
                    </div>
                </div>
            </div>
            <script src="//code.tidio.co/ovhukj0pgjzcrvi6arlddnoklwfdxfvx.js" async></script>
        </>
    )
}

export default UserHome
