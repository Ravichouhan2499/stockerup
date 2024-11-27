import React from 'react'

export default function Team() {
  return (
    <div>
      <section id="team">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="intro">
            <h6>Team</h6>
            <h1>Team Members</h1>
            <p className="mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8">
          <div className="team-member">
            <div className="image">
              <img src="img/team_1.jpg" alt />
              <div className="social-icons">
                <a href="#"><i className="bx bxl-facebook" /></a>
                <a href="#"><i className="bx bxl-twitter" /></a>
                <a href="#"><i className="bx bxl-instagram" /></a>
                <a href="#"><i className="bx bxl-pinterest" /></a>
              </div>
              <div className="overlay" />
            </div>
            <h5>Marvin McKinney</h5>
            <p>Marketing Coordinator</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="team-member">
            <div className="image">
              <img src="img/team_2.jpg" alt />
              <div className="social-icons">
                <a href="#"><i className="bx bxl-facebook" /></a>
                <a href="#"><i className="bx bxl-twitter" /></a>
                <a href="#"><i className="bx bxl-instagram" /></a>
                <a href="#"><i className="bx bxl-pinterest" /></a>
              </div>
              <div className="overlay" />
            </div>
            <h5>Kathryn Murphy</h5>
            <p>Ethical Hacker</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-8">
          <div className="team-member">
            <div className="image">
              <img src="img/team_3.jpg" alt />
              <div className="social-icons">
                <a href="#"><i className="bx bxl-facebook" /></a>
                <a href="#"><i className="bx bxl-twitter" /></a>
                <a href="#"><i className="bx bxl-instagram" /></a>
                <a href="#"><i className="bx bxl-pinterest" /></a>
              </div>
              <div className="overlay" />
            </div>
            <h5>Darrell Steward</h5>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
