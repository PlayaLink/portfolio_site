import React from 'react';

export default class Contact extends React.Component {

  render(){
    return (
      <div>
        <section id="contact" className="big-padding light-typo color-overlay">

          <div className="container">

            <div className="row">

              <div className="col-sm-6 col-sm-offset-3 col-md-5 scrollimation fade-right text-center">

                <p>You can find me on:</p>

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

                <br />

                <p>Or you can <a className="mail-styled" href="mailto: &#106;&#111;&#114;&#100;&#097;&#110;&#046;&#101;&#110;&#103;&#108;&#097;&#110;&#100;&#046;&#110;&#101;&#108;&#115;&#111;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">email</a> me</p>

              </div>

            </div>

          </div>

        </section>

      </div>
    );
  }
}
