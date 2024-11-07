import React from 'react'
import Title from './Title'
function Tours() {
  return (
    <section className="section" id="tours" >
        <Title main_title="Gundam" sub_title="Info" /> 
    <div className="section-center featured-center">
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="../static_page/images/Strike-freedom-v2.png"  className="tour-img" alt="" />
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Strike Freedom</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-brands fa-android"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="../static_page/images/Infinite-Justice-Gundam-v2.png" className="tour-img" alt="" />
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Infinite Justice Gundam</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-brands fa-android"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="../static_page/images/Destiny-Gundam-v2.png" className="tour-img" alt="" />
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Destiny Gundam</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-brands fa-android"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="../static_page/images/Legend-Gundam-v2.png" className="tour-img"  alt="" />
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Legend Gundam</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-brands fa-android"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
</div>
    </section>
      )
}

export default Tours