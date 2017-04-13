import React from 'react';

export default class Contact extends React.Component {

  render(){
    return (
      <div>

        <section id="about" className="big-padding">

          <div className="container">


            <div className="row profile">

              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">

                <figure className="scrollimation">
                  <img className="img-responsive img-circle profile-img" src="assets/images/portfolio_headshot_portrait.png" alt="Jordan England-Nelson" />
                </figure>

                <br/>

                {/*Social media*/}
                <div className="social-icon-list">
                  <div className="social-media-icon">
                    <a href="https://www.linkedin.com/in/jordan-england-nelson-05283494" data-toggle="tooltip" title="Follow me on LinkedIn" target="_blank"><h2><i className="fa fa-fw fa-linkedin"></i></h2></a>
                  </div>

                  <div className="social-media-icon">
                    <a href="https://github.com/playalink" data-toggle="tooltip" title="Follow me on Github" target="_blank"><h2><i className="fa fa-fw fa-github"></i>        </h2></a>
                  </div>

                  <div className="social-media-icon">
                    <a href="https://twitter.com/jordanenelson" data-toggle="tooltip" title="Follow me on Twitter" target="_blank"><h2><i className="fa fa-fw fa-twitter"></i>      </h2></a>
                  </div>
                </div>

                <br/>


                <div className="text-left scrollimation">
                  <p>I am a freelance software engineer with experience developing full-stack web applications using <span className="main-color">JavaScript</span>, <span className="main-color">jQuery</span>, <span className="main-color">React</span>, <span className="main-color">Node</span>, RESTful APIs, web sockets and <span className="main-color">Bootstrap</span>. I also have a background in journalism, digital marketing and product development.</p>
                  <p>Journalism taught me to empathize with users and to distill technical information for a lay audience. These skills have mapped well to the roles I’ve held in tech: user researcher, content marketer, technical writer, software developer.</p>
                  <p>Five years living in Europe taught me how to work with people from different backgrounds and cultures, thrive in unfamiliar environments, and pick up new languages.</p>
                  <p>Full working proficiency in Spanish, French, and JavaScript.</p>
                </div>


              </div>

            </div>

          </div>

        </section>

      </div>
    );
  }
}
