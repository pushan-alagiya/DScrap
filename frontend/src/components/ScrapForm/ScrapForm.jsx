import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ScrapForm = () => {

  const [data,setData]=useState({
    name:"",
    product_name:"",
    image:""
  })

  const getData=(e)=>{
    const {value,name}=e.target;
    
    setData(()=>{
      return{
        ...data,
        [name]:value
      }
    })
  }

  return (
    <div>
     <section className="vh-100 signinsec">
          <div className="container h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
            
              <div className="col-md-9 col-lg-8 col-xl-6 ">
              
                <form >
                  <div className="sign_in fw-bolder">Scrap Price</div>
                  <hr />

                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control form-control-lg inp"
                      placeholder="Enter a valid Name"
                      name="name"
                    />
                  </div>

                  <div className="form mb-4">
                    <label className="form-label lab" for="form3Example3">
                      Product name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control form-control-lg inp"
                      placeholder="Enter a Product Name"
                      name="pro_name"
                    />
                  </div>

                  <div className="form mb-3">
                    <label className="form-label lab" for="form3Example4">
                      Product Image
                    </label>
                    <input
                      type="file"
                      id="form3Example4"
                      className="form-control form-control-lg inp"
                      placeholder="Enter password"
                      autoComplete="off"
                      name="image"
                    />
                  </div>

                 

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <div className='d-flex justify-content-center align-items-center' >

                    <button
                      type="button"
                      className="signin-button btn btn-lg bt "
                      >
                      Submit
                    </button>
                        </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ScrapForm
