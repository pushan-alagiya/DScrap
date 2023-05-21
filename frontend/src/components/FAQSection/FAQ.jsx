import React from 'react'
import "./faq.css"

const FAQ = () => {
  return (
    <div>
         <section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What is De-SCRAP?</a>
              <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  DSCRAP is a platform that allows a user to book a hassle-free sale, pick-up and call for any type of scrap. You can schedule a pick-up call through our website at a time and date that is convenient for you. Local Vendors will arrive at your home on the scheduled date and buy all scrap available (conditions apply) at a pre-determined rate list. Junk refers to scrap that you will sell online to help keep our motherland clean, and this masterpiece tends to provide the help to eliminate scrap from your home in return for some valuable cash.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">What is D-Money? </a>
              <div id="faq-list-2" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  D-Money is our digital wallet wherein in you can utilise this money to buy groceries from our vendor tieups.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">How can we order a Pickup? </a>
              <div id="faq-list-3" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  There are two ways for doing the same.
                  You can either locate a local vendor and chat with him in our application or you can otp for our special location based pickup service.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">What is Scrape Rate Card?</a>
              <div id="faq-list-4" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  Scrape rate card is a one stop solution for finding rates which are accepted accross industries.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">How can we use Scrape Calculator?</a>
              <div id="faq-list-5" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  You can select all catagories of scrap and finally add on the calculator button for final submission. 
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
      
    </div>
  )
}

export default FAQ
