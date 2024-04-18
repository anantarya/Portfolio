import React from "react";
import "./Projects.css";
import Spin from 'react-reveal/Spin'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          These are my recent and Top projects
        </p>
        {/* card design */}
        <div className="row" id="ads">
          
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Ecommerce Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/anantarya/Ecommerce.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/1942997950/display_1500/stock-photo-edtech-education-technology-distance-learning-online-concept-1942997950.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NextJS</span>

                  <span className="card-detail-badge">TypeScript </span>
                  <span className="card-detail-badge">PostgreSQL</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">EdTech LMS Tutorial</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/anantarya/LMS-Edtech.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ReactJS</span>

                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Web Sockets</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">WebRTC Realtime Voice Chat</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/anantarya/clubhouse.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            
        </div>
      </div>
      
    </>
  );
};

export default Projects;