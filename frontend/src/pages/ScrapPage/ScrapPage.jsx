import React from 'react'
import "./scrappage.css"
import ScrapForm from '../../components/ScrapForm/ScrapForm'

const ScrapPage = () => {
  return (
    <div className='container'>
      <div className="row min-vh-100 align-items-center text-center text-md-left main_con">
          
          <div className="col-md-6 pr-md-3 content">
            <h1 className="mainH">Sell your old unwanted things with <span>De-SCRAP</span></h1>
            <h2 className="secondH">Easy booking and pickup at your convenience </h2>
            <h4 className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              soluta quas ratione itaque minima repellat ullam quod numquam a
              aut!
            </h4>
          </div>
          <div className="col-md-6 pl-md-3">
            <img src="/img/about.png" width="100%" alt="" />
          </div>
          <div>
            <ScrapForm/>
          </div>
        </div>
    </div>
  )
}

export default ScrapPage
