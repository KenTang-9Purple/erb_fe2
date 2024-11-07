import React from 'react'
import Title from './Title'
import {services} from "./data"
function Service() {
  return (
    <section className="section" id="services">
    <Title main_title="our" sub_title="services" /> 

        <div className="section-center services-center">
             {/* <!-- first icon --> */}
            {
                services.map((service)=>{return(
                    <article className="service">
                <span className="service-icon">
                    <i className={service.icon}></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">
                        {service.title}
                    </h4>
                    <p className="service-text">{service.text}</p>
                </div>
                </article>
            

                )})
            } 
        </div>
    </section>
  )
}

export default Service