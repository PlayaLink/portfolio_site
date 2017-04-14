import React from 'react';

export default class Contact extends React.Component {

  componentDidMount(){
    $('.scrollimation').waypoint(function(){
      $(this).addClass('in');
    },{offset:'95%'});
  }

  render(){
    return (
      <div>

        <section id="about" className="big-padding">

          <div className="container">


            <div className="row profile">

              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center scrollimation fade-up">
                <br />
                <figure>
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
                  <p>I am a software engineer with strong UX skills and experience developing full-stack web applications using <span className="main-color">JavaScript</span>, <span className="main-color">jQuery</span>, <span className="main-color">React</span>, <span className="main-color">Node</span>, RESTful APIs, web sockets and <span className="main-color">Bootstrap</span>.</p>
                  <p>My experience as a journalist honed my ability to empathize with readers and present information in the clearest, most intuitive way possible.</p>
                  <p>As a digital content marketer, I learned how to identify customer pain points. As a software engineer, I've acquired the technical skills to help solve those pain points.</p>
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
