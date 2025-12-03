import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "ReactTS_skill",
          content: "React & TypeScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "JS_skill",
          content: "JavaScript (ES6+)",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "HTMLCSS_skill",
          content: "HTML5 & CSS3",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Node_skill",
          content: "Node.js & Express",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python & Flask",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "SQL_skill",
          content: "PostgreSQL / SQL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Testing_skill",
          content: "Jest & React Testing Library",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Tools_skill",
          content: "Git, Linux, AWS (basic)",
          porcentage: "70%",
          value: "70"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am Mandy Zhang, a software engineer focused on building clean, reliable React and TypeScript frontends. I have a strong background in data-heavy applications and over ten years of combined experience across energy, AI, and software, which helps me understand complex domains and turn them into intuitive user experiences."
        },
        {
          id: "second-p-about",
          content:
            "In recent projects I have built dashboards, labeling tools, and internal platforms using React, TypeScript, Node.js, Python, and PostgreSQL. I care about component reusability, predictable state management, and clear separation of concerns, and I routinely integrate REST or GraphQL APIs, handle async data flows, and work with designers and product managers to ship features."
        },
        {
          id: "third-p-about",
          content:
            "I enjoy owning features end to end—from understanding requirements and designing the UX, to implementing, testing, and deploying. I use tools like Git, Jest, React Testing Library, and Linux/WSL in my daily work, and I am always learning new patterns and best practices to write maintainable, production-ready code."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt="Mandy Zhang"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
