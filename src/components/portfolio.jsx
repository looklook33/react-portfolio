import React from "react";

// import project thumbnails (你之后可以换成真实截图或 logo)
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Selected projects showcasing my UI/UX work, design process,
                  and the React-focused engineering stack I use.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Snorkel AI */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={stock}
                    alt="Snorkel AI Labeling Platform"
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">
                        Snorkel AI – Multi-Stage Labeling & Dataset Dashboard
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Tech Stack: React · TypeScript · Redux Toolkit ·
                          GraphQL · Node.js · PostgreSQL
                        </span>
                        <br />
                        <span className="w-ctegory">
                          Designed and built labeling workflows, review queues,
                          and progress dashboards for enterprise AI customers,
                          working closely with ML engineers and designers.
                        </span>
                        <br />
                        <a
                          href={process.env.PUBLIC_URL + "/case-studies/snorkel-ai.html"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                          style={{ fontWeight: "bold", textDecoration: "underline" }}
                        >
                          View Full Case Study
                        </a>
                        <br />
                        <span className="w-ctegory">
                          (Internal product – code is private.)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wayfair */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={stock1}
                    alt="Wayfair Product Experience"
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">
                        Wayfair – Product Discovery & PDP Modernization
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Tech Stack: React · TypeScript · Next.js · GraphQL ·
                          Design System
                        </span>
                        <br />
                        <span className="w-ctegory">
                          Implemented and iterated on product listing and detail
                          page components, collaborating with UX and product to
                          optimize layout, accessibility, and experiment
                          variants.
                        </span>
                        <br />
                        <a
                          href={process.env.PUBLIC_URL + "/case-studies/wayfair-pdp.html"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                          style={{ fontWeight: "bold", textDecoration: "underline" }}
                        >
                          View Full Case Study
                        </a>
                        <br />
                        <span className="w-ctegory">
                          (Commercial platform – code is private.)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Budget Dashboard
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={stock2}
                    alt="Smart Budget Dashboard"
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">Smart Budget Dashboard</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Tech Stack: React · TypeScript · React Router · REST
                          API · PostgreSQL
                        </span>
                        <br />
                        <span className="w-ctegory">
                          A responsive budgeting app with rollover logic and
                          category breakdowns, designed to replace complex
                          spreadsheets with a clear, visual dashboard.
                        </span>
                        <br />
                        <a
                          href="/case-studies/smart-budget.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory" 
                          style={{ fontWeight: "bold", textDecoration: "underline" }}
                        >
                          View Full Case Study
                        </a>
                        <br />
                        <a
                          href="https://github.com/looklook33/smart-budget-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                        >
                          View Code on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Gym Scheduling System
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={stock3}
                    alt="Gym Scheduling System"
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">Gym Scheduling System</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Tech Stack: React · Redux · Flask · SQLAlchemy ·
                          PostgreSQL
                        </span>
                        <br />
                        <span className="w-ctegory">
                          Multi-role web app for members, trainers, and
                          managers to view and manage gym schedules with
                          role-based UI and booking flows.
                        </span>
                        <br />
                        <a
                          href="/case-studies/gym-schedule.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                          style={{ fontWeight: "bold", textDecoration: "underline" }}
                        >
                          View Full Case Study
                        </a>
                        <br />
                        <a
                          href="https://github.com/looklook33/gym-scheduling-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                        >
                          View Code on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* ABNB Project */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={stock4}
                    alt="ABNB Listings App"
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">ABNB – Airbnb-style Listings</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Tech Stack: React · React Router · Node.js · Express ·
                          PostgreSQL
                        </span>
                        <br />
                        <span className="w-ctegory">
                          Property listings app with search, filters, and
                          detail pages, focused on clear hierarchy and
                          mobile-friendly booking experience.
                        </span>
                        <br />
                        <a
                          href="/case-studies/abnb.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                          style={{ fontWeight: "bold", textDecoration: "underline" }}
                        >
                          View Full Case Study
                        </a>
                        <br />
                        <a
                          href="https://github.com/looklook33/ABNB-Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-ctegory"
                        >
                          View Code on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
