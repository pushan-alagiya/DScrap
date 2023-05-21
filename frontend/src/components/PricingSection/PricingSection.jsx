import React from 'react'
import "./pricing.css"

const PricingSection = () => {
  return (
    <div>
       <section id="pricing" class="pricing">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Rate Card</h2>
          <p>Industrial Rates</p>
        </div>

        <div class="row" data-aos="fade-left">               
              <img src="/img/pricing-1.png" alt=""/>
              {/* <img src="/img/pricing-2.png" alt=""/> */}
              {/* <img src="/img/pricing-3.png" alt=""/> */}
              {/* <img src="/img/pricing-4.png" alt=""/> */}
        </div>

      </div>
    </section>
    </div>
  )
}

export default PricingSection
