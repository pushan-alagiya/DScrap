import React from 'react'
import "./deatilsection.css"
const DetailsSection = () => {
  return (
    <div>
      <section id="details" class="details">
      <div class="container">

        <div class="row content">
          <div class="col-md-4" data-aos="fade-right">
            <img src="/img/details-1.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-8 pt-4" data-aos="fade-up">
            <h3>Virtual Support with assistantce for Navigation</h3>
            <p class="fst-italic">
              Navigate our site with following steps
            </p>
            <ul>
              <li><i class="bi bi-check"></i> Sign up or Log in with your Account.</li>
              <li><i class="bi bi-check"></i> Enter your Location.</li>
              <li><i class="bi bi-check"></i> Enquire with selecting your rate card.</li>
              <li><i class="bi bi-check"></i> Find the mode of Pickup or delivery.</li>
              <li><i class="bi bi-check"></i> Choose your reward option.</li>
            </ul>
            <p>
              For any further assistance you can always contact our Call centre or email us.
            </p>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="/img/details-2.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Access your choise at your fingertips</h3>
            <p class="fst-italic">
              We provide wide variety of features at yout remote access and easy few steps to order a Pickup from any place.
            </p>
          </div>
        </div> 
      </div>
    </section>
    </div>
  )
}

export default DetailsSection
