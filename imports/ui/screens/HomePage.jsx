import React, { PropTypes } from 'react'



import "/public/assets/js/libs/jquery-1.9.1.min.js";
import "/public/assets/js/libs/modernizr.min.js";
import "/public/assets/js/libs/bootstrap.min.js"
import "/public/assets/js/jquery.easing.1.3.min.js"
import "/public/assets/js/waypoints.min.js"
import "/public/assets/js/jquery.easypiechart.js"
import "/public/assets/js/twitterFetcher_min.js"
import "/public/assets/js/jquery.flexslider.min.js"
import "/public/assets/js/jquery.fitvids.js"
import "/public/assets/js/contact.js"

import "/public/assets/js/scripts.js"
// import "/public/assets/js/style-switcher.js"




class HomePage extends React.Component {


  render () {
    return(
      <div data-spy="scroll" data-target="#main-nav" data-offset="400">

    		{/*=== PAGE PRELOADER ===*/}
    		<div id="page-loader"><span className="page-loader-gif"></span></div>

    		{/* ==============================================
    		MAIN NAV
    		=============================================== */}
    		<div id="main-nav" className="navbar navbar-fixed-top">
    			<div className="container">

    				<div className="navbar-header">

    					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#site-nav">
    						<span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
    					</button>

    					{/* ======= LOGO ========*/}
    					<a className="navbar-brand scrollto" href="#home"><img src="" alt="" /></a>

    				</div>

    				<div id="site-nav" className="navbar-collapse collapse">
    					<ul className="nav navbar-nav navbar-right">
    						<li>
    							<a href="#projects" className="scrollto"><i className="fa fa-desktop"></i>Code projects</a>
    						</li>
    						<li>
    							<a href="#portfolio" className="scrollto"><i className="fa fa-pencil"></i>Journalism</a>
    						</li>
                <li>
                  <a href="#about" className="scrollto"><i className="fa fa-commenting"></i>About</a>
                </li>
    						<li>
    							<a href="#contact" className="scrollto"><i className="fa fa-envelope"></i>Contact</a>
    						</li>
    					</ul>
    				</div>{/*End navbar-collapse */}

    			</div>{/*End container */}

    		</div>{/*End main-nav */}

    		{/* ==============================================
    		HEADER
    		=============================================== */}
    		<header id="home">

    			<div className="container">

    				<div className="row">

    					<div className="col-sm-10 col-sm-offset-1 text-center">

    						<h1 className="scrollimation fade-down d1">Jordan England-Nelson</h1>
    						<h2 className="scrollimation fade-down d3"><span className="main-color">D</span>eveloper | <span className="main-color">W</span>riter | <span className="main-color">R</span>esearcher</h2>

    					</div>

    				</div>

    				<div className="header-img scrollimation fade-up d1">
    					<img className="img-responsive" src="assets/images/header-img.png" alt="" />
    				</div>

    			</div>

    		</header>{/*End header */}

    		<div id="main-content">

    			<div className="scroll-down">
    				<a href="#services" className="scrollto">Learn More</a>
    			</div>



    			{/* ==============================================
    			LATEST PROJECTS
    			=============================================== */}

    			<section id="projects" className="big-padding gray-bg">

    				<div className="container">

    					<h1 className="section-title">Latest Projects<span className="main-color">2</span></h1>

    					<div className="row">

    						<div className="col-sm-5 push-down scrollimation fade-right">

    							<h2 className="row-title">SpecialEd Goal Tracker</h2>

    							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lorem orci. Suspendisse posuere tincidunt dui vel tempus. Fusce ut vulputate ipsum, id sodales arcu. Praesent ultricies pretium sem, fermentum sagittis.</p>

    							<p><a className="btn btn-dc btn-small btn-main-color" href="#link">Visit Website</a></p>

    						</div>

    						<div className="col-sm-6 col-sm-offset-1 scrollimation fade-left">

    							<img className="img-responsive" src="assets/images/login_facing_left.png" alt="" />

    						</div>

    					</div>

    					<hr />

    					<div className="row">

    						<div className="col-sm-6 col-sm-push-6 push-down scrollimation fade-left">

    							<h2 className="row-title">Graphista  - Personal Portfolio</h2>

    							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lorem orci. Suspendisse posuere tincidunt dui vel tempus. Fusce ut vulputate ipsum, id sodales arcu. Praesent ultricies pretium sem, fermentum sagittis.</p>

    							<p>Suspendisse posuere tincidunt dui vel tempus. Fusce ut vulputate ipsum, id sodales arcu. Praesent ultricies pretium sem, fermentum sagittis.</p>

    							<p><a className="btn btn-dc btn-small btn-main-color" href="#link">Visit Website</a></p>

    						</div>

    						<div className="col-sm-6 col-sm-pull-6 scrollimation fade-right">
    							<img className="img-responsive" src="assets/images/featured-1.png" alt="" />
    						</div>

    					</div>

    				</div>

    			</section>


    			{/* ==============================================
    			CALL TO ACTION
    			=============================================== */}
    			<section id="cta1" className="bg-main-color cta">

    				<div className="container text-center scrollimation fade-up">

    					<p>It's not about ideas. Its about making ideas happen.</p>

    					<a className="btn btn-dc btn-white scrollto" href="#contact">Contact Me</a>

    				</div>

    			</section>



    			{/* ==============================================
    			PORTFOLIO
    			=============================================== */}
    			<section id="portfolio" className="big-padding" >

    				<div className="container">

    					<h1 className="section-title">Journalism</h1>
    					<p className="subtitle">Before I started writing user stories, I wrote articles for newspaper users.</p>

    					{/*==== Portfolio Filters ====*/}

    					<div className="text-center scrollimation fade-up">
    						<div id="filter-works" className="btn-group">
    							<button data-filter="*" type="button" className="btn btn-default active">All Items<span className="project-count"></span></button>
    							<button data-filter=".web" type="button" className="btn btn-default">Web<span className="project-count"></span></button>
    							<button data-filter=".print" type="button" className="btn btn-default">Print<span className="project-count"></span></button>
    							<button data-filter=".video" type="button" className="btn btn-default">Video<span className="project-count"></span></button>
    						</div>
    					</div>

    				</div>

    				<div className="container scrollimation fade-up">

    					<div id="projects-container" className="row">

    						{/* ==============================================
    						SINGLE PROJECT ITEM
    						=============================================== */}

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 web" href="#?slider-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-1.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Project with Slider</h2>{/*Project Title */}
    								<p>Brochure design</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 web" href="#?youtube-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-2.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Video project</h2>{/*Project Title */}
    								<p>Youtube video</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 web" href="#?images-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-3.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Fullwidth images</h2>{/*Project Title */}
    								<p>Professional Web Design</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 web" href="#?vimeo-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-4.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Another Video project</h2>{/*Project Title */}
    								<p>Vimeo video</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 print" href="#?slider-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-6.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Project with Slider</h2>{/*Project Title */}
    								<p>Modern Business Card</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 print" href="#?images-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-7.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Fullwidth images</h2>{/*Project Title */}
    								<p>Poster Design</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 print" href="#?slider-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-8.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Project with Slider</h2>{/*Project Title */}
    								<p>Personal Business Card</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 print" href="#?vimeo-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-5.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Video project</h2>{/*Project Title */}
    								<p>Vimeo video</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 video" href="#?slider-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-9.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Project with Slider</h2>{/*Project Title */}
    								<p>Professional Brand Identity</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 video" href="#?vimeo-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-10.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Another Video project</h2>{/*Project Title */}
    								<p>Vimeo video</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 video" href="#?images-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-11.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Fullwidth images</h2>{/*Project Title */}
    								<p>Creative Business Card</p>{/*Project Subtitle */}
    							</div>

    						</a>

    						<a className="project-item col-sm-6 col-md-4 col-lg-3 video" href="#?youtube-project.html">

    							<img className="img-responsive project-image" src="assets/images/projects/thumb-12.jpg"  alt="" />

    							<div className="hover-title">
    								<h2 className="project-title">Video project</h2>{/*Project Title */}
    								<p>Youtube video</p>{/*Project Subtitle */}
    							</div>

    						</a>

    					</div>

    					<p className="lead text-center">Like what you see? Contact me to discuss about your project!</p>
    					<p className="text-center"><a className="btn btn-dc btn-main-color scrollto" href="#contact">Contact Me</a></p>

    				</div>

    			</section>

    			{/* ==============================================
    			TWITTER
    			=============================================== */}
    			<section id="twitter-feeds" className="bg-main-color">

    				<div className="container text-center scrollimation fade-right">

    					<div className="row">

    						<div className="col-sm-10 col-sm-offset-1">

    							<h1>Latest tweets</h1>
    							<p><i className="fa fa-twitter"></i></p>

    							<div id="twitter-slider" className="flexslider" data-widget-id="386017398488186880" data-max-tweets="5"></div>

    							<p><a href="https://twitter.com/qthemes" data-toggle="tooltip" data-placement="bottom" title="Follow Me on Twitter" target="_blank">@johndoe</a></p>

    						</div>

    					</div>

    				</div>

    			</section>


          {/* ==============================================
          ABOUT
          =============================================== */}
          <section id="about" className="big-padding">

            <div className="container">

              <h1 className="section-title">About<span className="main-color">3</span></h1>

              <div className="row profile">

                <div className="col-sm-10 col-sm-offset-1 text-center">

                  <figure className="hover-wrapper scrollimation fade-right">
                    <img className="img-responsive img-circle profile-img" src="assets/images/profile-img.jpg" alt="" />
                    <figcaption className="hover-text">That's Me!</figcaption>
                  </figure>

                  <h2 className="scrollimation fade-left">John Doe</h2>
                  <h3 className="scrollimation fade-left">UI / UX Expert</h3>

                  <p className="margin-top scrollimation fade-right">I am Jonathan Doe, a twenty five year old designer from NY. I have graduated with a Bachelor degree of Graphic & Web Design, from the University of Pasadena. I have a passion for creating challenging, intuitive and beautiful products. My design process is very hands-on and visual.</p>

                  <p className="lead margin-top scrollimation fade-left">Creating is not just a job for me, it's a passion. </p>
                  <p className="scrollimation fade-left"><a className="btn btn-dc btn-main-color scrollto" href="#portfolio">My Portfolio</a></p>

                </div>

              </div>

            </div>

          </section>


    			{/* ==============================================
    			CONTACT
    			=============================================== */}
    			<section id="contact" className="big-padding light-typo color-overlay">

    				<div className="container">

    					<h1 className="section-title">Contact Me<span className="main-color">6</span></h1>

    					<div className="row">

    						<div className="col-sm-6 col-md-5 scrollimation fade-right">

    							<p className="lead">I am available for freelance. <br/>{"Can't wait for the next exciting project! Could it be yours?"}</p>

    							<p>
    								John Doe<br/>
    								W325 State Road 123<br/>
    								Mondovi, WI(Wisconsin) 98746-54321<br/>
    								(123) 456 - 7890 <br/>
    							</p>

    							<div className="social-links">
    								<a href="#"><i className="fa fa-fw fa-twitter"></i></a>
    								<a href="#"><i className="fa fa-fw fa-facebook-square"></i></a>
    								<a href="#"><i className="fa fa-fw fa-linkedin-square"></i></a>
    							</div>

    							<p><a className="mail-styled" href="mailto:mail@example.com">contact@johndoe.com</a></p>

    						</div>

    						{/*=== Contact Form ===*/}

    						<form id="contact-form" className="col-sm-6 col-md-offset-1 scrollimation fade-left" action="contact.php" method="post">

    							<div className="form-group">
    								<div className="controls">
    									<input id="contact-name" name="contactName" className="form-control requiredField" type="text" data-error-empty="is required" />
    									<label className="control-label" htmlFor="contact-name">Name</label>
    								</div>
    							</div>{/* End name input */}

    							<div className="form-group">
    								<div className="controls">
    									<input id="contact-mail" name="email" className="form-control requiredField" type="email" data-error-empty="is required" data-error-invalid="is invalid" />
    									<label className="control-label" htmlFor="contact-mail">Email</label>
    								</div>
    							</div>{/* End email input */}

    							<div className="form-group">
    								<div className="controls">
    									<textarea id="contact-message" name="comments" className="form-control requiredField" rows="6" data-error-empty="is required"></textarea>
    									<label className="control-label" htmlFor="contact-message">Message</label>
    								</div>
    							</div>{/* End textarea */}

    							<button name="submit" type="submit" className="btn" data-error-message="Please fill the required fields" data-sending-message="Sending Message" data-ok-message="Your Message has been sent!">Send It</button>
    							<input type="hidden" name="submitted" id="submitted" value="true" />

    						</form>{/* End contact-form */}

    					</div>

    				</div>

    			</section>

    			{/* ==============================================
    			FOOTER
    			=============================================== */}

    			<footer id="main-footer">

    				<div className="container">

    					<div className="row">

    						<div className="col-sm-2">

    							<a className="logo-link scrollto" href="#home">
    								<img className="img-responsive" src="assets/images/logo-bw.png" alt="" />
    							</a>

    						</div>

    						<div className="col-sm-8">

    							<nav>

    								<ul className="footer-nav">
    									<li><a className="scrollto" href="#home">Home</a></li>
    									<li><a className="scrollto" href="#services">Services</a></li>
    									<li><a className="scrollto" href="#portfolio">Portfolio</a></li>
    									<li><a className="scrollto" href="#contact">Contact</a></li>
    								</ul>

    							</nav>

    						</div>

    						<div className="col-sm-2 text-right social-links">

    							<a href="#" data-toggle="tooltip" title="Follow me on Twitter"><i className="fa fa-fw fa-twitter"></i></a>
    							<a href="#" data-toggle="tooltip" title="Follow me on Facebook"><i className="fa fa-fw fa-facebook"></i></a>
    							<a href="#" data-toggle="tooltip" title="Follow me on LinkedIn"><i className="fa fa-fw fa-linkedin"></i></a>

    						</div>

    					</div>

    				</div>

    			</footer>

    		</div>

    		<div id="project-viewer" className="modal fade">

    			<span id="close-project-viewer" data-dismiss="modal">&times;</span>

    			<div className="container">

    				<div id="project-viewer-content"></div>

    				<div id="project-viewer-footer">

    					<div className="project-nav">

    						<span className="previous-project" data-toggle="tooltip" data-placement="bottom" title="Previous Project"><i className="fa fa-long-arrow-left"></i></span>
    						<span className="back-to-portfolio" data-toggle="tooltip" data-placement="bottom" title="Back to Portfolio" data-dismiss="modal"><i className="fa fa-th-large"></i></span>
    						<span className="next-project" data-toggle="tooltip" data-placement="bottom" title="Next Project"><i className="fa fa-long-arrow-right"></i></span>

    					</div>
    				</div>

    			</div>

    		</div>{/* /.modal */}


    		{/* ==============================================
    		SCRIPTS
    		=============================================== */}


    	</div>
    );
  }
}

export default HomePage;
