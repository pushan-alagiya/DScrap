import React from 'react'
import "./testimonial.css"

const Testimonial = () => {

   
      



  return (
    <div>
       <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="/assets/img/WhatsApp Image 2022-11-19 at 10.06.51.jpeg" class="testimonial-img" alt=""/>
                <h3>Pushan Alagiya</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  I had a vision to do something for this world. This is my small initiative for recycling plastic and also make theearth a better place by the principle of Reuse and Recycle.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="" class="testimonial-img" alt=""/>
                <h3>Dron Kishor</h3>
                <h4>Store Owner</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Testimonial
