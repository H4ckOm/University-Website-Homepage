import Head from 'next/head'
import React, { Component } from "react";
import ReactDOM from "react-dom";
class Home extends Component {

    componentDidMount() {
        $(window).on('load', function () {
            $('.preloader').fadeOut(200);
        });
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://omkardeshmukh.now.sh/assets/js/main.js"
        document.body.appendChild(script1);
    }
    render() {
        return (
            <div>
                <head>
                    <meta charset="utf-8" />
                    <title>Indian Institute of Information Technology Kota</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/venobox/1.8.6/venobox.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                    <link href="/assets/css/style.css" rel="stylesheet" />
                    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
                    <link rel="icon" href="assets/img/favicon.png" type="image/x-icon" />
                </head>

                <body>
                    <div class="preloader">
                        <img src="https://media.giphy.com/media/kzVL1ZLuGfEfm/giphy.gif" alt="preloader" width="15%" />
                    </div>
                    <header class="fixed-top header">
                        <div class="top-header py-2">
                            <div class="container">
                                <div class="row no-gutters">
                                    <div class="col-lg-4 text-center text-lg-left mt-2">
                                        <ul class="list-inline d-inline">
                                            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i
                                                class="ti-facebook"></i></a></li>
                                            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i
                                                class="ti-twitter-alt"></i></a></li>
                                            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i
                                                class="ti-linkedin"></i></a></li>
                                            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i
                                                class="ti-instagram"></i></a></li>
                                            <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i
                                                class="ti-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-8 text-center text-lg-right">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                                                href="">notice</a></li>
                                            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                                                href="">research</a></li>
                                            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                                                href="">SCHOLARSHIP</a></li>
                                            <li class="list-inline-item"><a class="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                                                href="#google_translate_element">HINDI</a></li>
                                            <li class="list-inline-item">
                                                <form class="form-inline my-2 my-lg-0 ml-auto">
                                                    <input class="form-control search" type="search" placeholder="Search" aria-label="Search" />
                                                    <button class="form-control search" type="submit"><i class="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" id="navbar">
                            <nav class="navbar navbar-expand-lg navbar-dark">
                                {/* <a class="navbar-brand" href="#">IIIT Kota</a> */}
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Students
                </a>
                                            <div class="dropdown-menu dropdown-primary bg-black" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Faculty
                </a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Alumni
                </a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Media
                </a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Industry
                </a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <section class="hero-section overlay bg-cover" data-background="assets/img/banner/banner.jpeg">
                        <div class="container">
                            <div class="hero-slider">
                                <div class="hero-slider-item">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <h1 class="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInLeft" data-delay-in=".1">Indian Institute of Information Technology Kota</h1>
                                            <p class="text-muted mb-3 pt-4 fs20" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInLeft" data-delay-in=".4">An Institute of National
                                                Importance under an Act of
                  Parliament. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero-slider-item">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <h1 class="text-white" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInDown" data-delay-in=".1">Indian Institute of Information Technology Kota</h1>
                                            <p class="text-muted mb-4" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInDown" data-delay-in=".4">Our Mission 🚀 :<br />
                  To create technical manpower for meeting the current and future demands of industry: </p>
                                            <a href="#" class="btn btn-primary" data-animation-out="fadeOutUp" data-delay-out="5"
                                                data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".7">Yearn your Limits</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero-slider-item">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <h1 class="text-white" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInUp" data-delay-in=".1">Indian Institute of Information Technology Kota</h1>
                                            <p class="text-muted mb-4" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3"
                                                data-animation-in="fadeInUp" data-delay-in=".4">Our Vision👀 : <br />To create a center for imparting
                  technical
                  education of international standards and conduct research at the cutting edge of technology to meet the
                  current and future challenges of technological development.</p>
                                            <a href="#" class="btn btn-primary" data-animation-out="fadeOutDown" data-delay-out="5"
                                                data-duration-in=".3" data-animation-in="zoomIn" data-delay-in=".7">Yearn to Endure</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-gray">
                        <div class="container-fluid p-0">
                            <div class="row no-gutters">
                                <div class="col-xl-4 col-lg-5 align-self-end">
                                    <img class="img-fluid w-100" src="assets/img/stud.png" alt="banner-feature" />
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="row feature-blocks bg-gray justify-content-between">
                                        <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                            <i class="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                            <h3 class="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad</p>
                                        </div>
                                        <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                            <i class="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                            <h3 class="mb-xl-4 mb-lg-3 mb-4">Notice Board</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad</p>
                                        </div>
                                        <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                            <i class="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                            <h3 class="mb-xl-4 mb-lg-3 mb-4">Achievements</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad</p>
                                        </div>
                                        <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                                            <i class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                                            <h3 class="mb-xl-4 mb-lg-3 mb-4">Admission Criteria</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6 order-2 order-md-1">
                                    <h3 class="section-title">Welcome to Indian Institute of Information Technology Kota</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat </p>
                                    <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem</p>
                                    <a href="" class="btn btn-primary-outline">Explore More</a>
                                </div>
                                <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                                    <img class="img-fluid w-100" src="assets/img/backgrounds/grp.png" alt="about image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section bg-cover" data-background="assets/img/backgrounds/bg1.jpeg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-4 position-relative success-video">
                                    <a class="play-btn venobox" href="https://www.youtube.com/watch?v=Vir9JdfDK6E" data-vbtype="video">
                                        <i class="ti-control-play"></i>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-sm-8">
                                    <div class="bg-white p-5">
                                        <h2 class="section-title">Success Stories</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section bg-gray">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="d-flex align-items-center section-title justify-content-between">
                                        <h2 class="mb-0 text-nowrap mr-3">Upcoming Events</h2>
                                        <div class="border-top w-100 border-primary d-none d-sm-block"></div>
                                        <div>
                                            <a href="" class="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">see all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <div class="card-img position-relative">
                                            <img class="card-img-top rounded-0" src="assets/img/events/event-1.jpg" alt="event thumb" />
                                            <div class="card-date"><span>18</span><br />December</div>
                                        </div>
                                        <div class="card-body">
                                            <p><i class="ti-location-pin text-primary mr-2"></i>Malviya Nagar, Jaipur</p>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <div class="card-img position-relative">
                                            <img class="card-img-top rounded-0" src="assets/img/events/event-2.jpg" alt="event thumb" />
                                            <div class="card-date"><span>21</span><br />December</div>
                                        </div>
                                        <div class="card-body">
                                            <p><i class="ti-location-pin text-primary mr-2"></i>Malviya Nagar, Jaipur</p>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <div class="card-img position-relative">
                                            <img class="card-img-top rounded-0" src="assets/img/events/event-3.jpg" alt="event thumb" />
                                            <div class="card-date"><span>23</span><br />December</div>
                                        </div>
                                        <div class="card-body">
                                            <p><i class="ti-location-pin text-primary mr-2"></i>Malviya Nagar, Jaipur</p>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center">
                                    <a href="" class="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section pt-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="section-title">Latest News</h2>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div
                                        class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/blog/post-1.jpg" alt="Post thumb" />
                                        <div class="card-body">
                                            <ul class="list-inline mb-3">
                                                <li class="list-inline-item mr-3 ml-0">Jan 26, 2020</li>
                                                <li class="list-inline-item mr-3 ml-0">By Reporter</li>
                                            </ul>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                            </a>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                            <a href="" class="btn btn-primary btn-sm">read more</a>
                                        </div>
                                    </div>
                                </article>
                                <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div
                                        class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/blog/post-2.jpg" alt="Post thumb" />
                                        <div class="card-body">
                                            <ul class="list-inline mb-3">
                                                <li class="list-inline-item mr-3 ml-0">Jan 26, 2020</li>
                                                <li class="list-inline-item mr-3 ml-0">By Reporter</li>
                                            </ul>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                            </a>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                            <a href="" class="btn btn-primary btn-sm">read more</a>
                                        </div>
                                    </div>
                                </article>
                                <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div
                                        class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/blog/post-3.jpg" alt="Post thumb" />
                                        <div class="card-body">
                                            <ul class="list-inline mb-3">
                                                <li class="list-inline-item mr-3 ml-0">Jan 26, 2020</li>
                                                <li class="list-inline-item mr-3 ml-0">By Reporter</li>
                                            </ul>
                                            <a href="">
                                                <h4 class="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
                                            </a>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                            <a href="" class="btn btn-primary btn-sm">read more</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section class="section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h2 class="section-title">Our Teachers</h2>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/teachers/teacher-1.jpg" alt="teacher" />
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Prof. Vijay Nuniya</h4>
                                            </a>
                                            <p>Teacher</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-facebook"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-google"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/teachers/teacher-2.jpg" alt="teacher" />
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Prof. Ankit Pulkit</h4>
                                            </a>
                                            <p>Teacher</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-facebook"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-google"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="card border-0 rounded-0 hover-shadow">
                                        <img class="card-img-top rounded-0" src="assets/img/teachers/teacher-3.jpg" alt="teacher" />
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Prof. Gyan Sir</h4>
                                            </a>
                                            <p>Teacher</p>
                                            <ul class="list-inline">
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-facebook"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-google"></i></a></li>
                                                <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div class="footer bg-footer section border-bottom">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-8 mb-5 mb-lg-0">
                                        <a class="logo-footer" href="index.html"><img class="img-fluid mb-4" src="assets/img/logo.png" alt="logo" /></a>
                                        <ul class="list-unstyled" >
                                            <li class="mb-2">Made with <i class="fas fa-heart"></i> & <i class="fas fa-coffee"></i> by:
                </li>
                                            <li class="mb-2">Omkar Deshmukh</li>
                                            <li class="mb-2">ID: 2019kucp1009</li>
                                            <li class="mb-2">+91 7066997723</li>
                                            <li class="mb-2">64 Hostel Ganga, MNIT Campus,<br />Jaipur, Rajasthan</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                                        <h4 class="text-white mb-5">ACADEMICS</h4>
                                        <ul class="list-unstyled">
                                            <li class="mb-3"><a class="text-color" href="">Academic Calender</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Central Library</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Entrance Exams</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Academic Divisions</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                                        <h4 class="text-white mb-5">RESEARCH</h4>
                                        <ul class="list-unstyled">
                                            <li class="mb-3"><a class="text-color" href="">R&D Jobs</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Internships</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Publications</a></li>
                                            <li class="mb-3"><a class="text-color" href="">Area of Expertise</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                                        <h4 class="text-white mb-5">Explore IIITKota</h4>
                                        <ul class="list-unstyled">
                                            <li class="mb-3"><a class="text-color" href="#">Campus Map</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Photo Gallery</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Student Events</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Campus Diary</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                                        <h4 class="text-white mb-5">Quick Find</h4>
                                        <ul class="list-unstyled">
                                            <li class="mb-3"><a class="text-color" href="#">Faculty Recruitment</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Career/Jobs</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Facilities</a></li>
                                            <li class="mb-3"><a class="text-color" href="#">Internal Links</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row mt-3 float-right">
                                    <div class="translator" id="google_translate_element"></div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright py-4 bg-footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-7 text-sm-left text-center">
                                        <p class="mb-0">Copyright
                <script>
                                                var CurrentYear = new Date().getFullYear()
                                                document.write(CurrentYear)
                </script>
                © Indian Institute of Information Technology Kota</p>
                                    </div>
                                    <div class="col-sm-5 text-sm-right text-center">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><a class="d-inline-block p-2" href="#"><i
                                                class="ti-facebook text-primary"></i></a></li>
                                            <li class="list-inline-item"><a class="d-inline-block p-2" href="#"><i
                                                class="ti-twitter-alt text-primary"></i></a></li>
                                            <li class="list-inline-item"><a class="d-inline-block p-2" href="#"><i
                                                class="ti-linkedin text-primary"></i></a></li>
                                            <li class="list-inline-item"><a class="d-inline-block p-2" href="#"><i
                                                class="ti-instagram text-primary"></i></a></li>
                                            <li class="list-inline-item"><a class="d-inline-block p-2" href="#"><i class=""></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <script type="text/javascript"
                        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
                    <script src="plugins/jQuery/jquery.min.js"></script>
                    <script src="plugins/bootstrap/bootstrap.min.js"></script>
                    <script src="plugins/slick/slick.min.js"></script>
                    <script src="plugins/aos/aos.js"></script>
                    <script src="plugins/venobox/venobox.min.js"></script>
                    <script src="plugins/filterizr/jquery.filterizr.min.js"></script>
                </body>
            </div>
        );
    }
}

export default Home
