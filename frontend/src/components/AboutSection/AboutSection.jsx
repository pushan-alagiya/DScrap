import React from 'react'
import "./aboutsection.css";

const AboutSection = () => {
  return (
    <div>
      <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>Track your Pickup</h3>
            <img src="" alt=""/>
            <p>Monitor and find Scrape rates at your fingertips and find industrial rates that you get on the sell. Convenient call feature for assistance.</p>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i class='bx bx-fingerprint'></i></div>
              <h4 class="title"><a href="">Easy Scrap Matching</a></h4>
              <p class="description">If you cannot find rate then try our new live scrap rate detection where you just send us a photo and we will get to you with its industrial Scrape rate.</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Recycling Aids</a></h4>
              <p class="description">We also accept your contribution in making our planet green. We pickup the plastic from your home and deliver it to Recycling factories.</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Get Your Money via Different Sources</a></h4>
              <p class="description">We Provide different sources for rewarding your contribution in Making this earth Green. E-payment, D-money, Grocereies....</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default AboutSection
