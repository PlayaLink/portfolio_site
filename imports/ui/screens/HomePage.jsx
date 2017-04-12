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

  componentDidMount(){
    Meteor.setTimeout(() => {
      $('li.active').removeClass('active');
    }, 700);
  }

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
                  <a href="#about" className="scrollto"><i className="fa fa-commenting"></i>About</a>
                </li>
    						<li>
    							<a href="#projects" className="scrollto"><i className="fa fa-desktop"></i>Code</a>
    						</li>
    						<li>
    							<a href="#portfolio" className="scrollto"><i className="fa fa-newspaper-o"></i>Journalism</a>
    						</li>
    						<li>
    							<a href="https://medium.com/@jordanenelson/leave-journalism-learn-to-code-64ae08745ec3" ><i className="fa fa-pencil"></i>Blog</a>
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
    						{/*<h2 className="scrollimation fade-down d3">Software <span className="main-color">Developer</span> | Technical <span className="main-color">Writer</span></h2>*/}
    						<h2 className="scrollimation fade-down d3"><span className="main-color">S</span>oftware <span className="main-color">D</span>eveloper | <span className="main-color">T</span>echnical <span className="main-color">W</span>riter</h2>
                <div className="header-img scrollimation fade-up d1" style={{top: "140px"}}>
                  <img className="img-responsive" src="assets/images/portfolio_headshot_header.png" alt="" />
                </div>
            </div>

    				</div>



    			</div>

    		</header>{/*End header */}

    		<div id="main-content">

    			<div className="scroll-down">
    				<a href="#services" className="scrollto"></a>
    			</div>


          {/* ==============================================
          ABOUT
          =============================================== */}
          <section id="about" className="big-padding">

            <div className="container">


              <div className="row profile">

                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">

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

                  <div className="text-left scrollimation fade-left">
                    <p>I am a software engineer with experience developing full-stack web applications using <span className="main-color">JavaScript</span>, <span className="main-color">jQuery</span>, <span className="main-color">React</span>, <span className="main-color">Node</span>, RESTful APIs, web sockets and <span className="main-color">Bootstrap</span>. I also have a background in journalism, digital marketing and product development.</p>
                    <p>Journalism taught me to empathize with users and to distill technical information for a lay audience. These skills have mapped well to the roles I’ve held in tech: user researcher, content marketer, technical writer, software developer.</p>
                    <p>Five years living in Europe taught me how to work with people from different backgrounds and cultures, thrive in unfamiliar environments, and pick up new languages.</p>
                    <p>Full working proficiency in Spanish, French, and JavaScript.</p>
                  </div>


                </div>

              </div>

            </div>

          </section>


    			{/* ==============================================
    			CODE PROJECTS
    			=============================================== */}

    			<section id="projects" className="big-padding gray-bg">

    				<div className="container">

    					<h1 className="section-title">Code</h1>

        {/* Special Ed Goal Tracker */}
    					<div className="row">
    						<div className="col-sm-4 col-sm-offset-2 scrollimation fade-right" id="iep-description">
          {/*Project name + description */}
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="row-title">SpecialEd Goal Tracker</h2>
                  <div className="text-left">
                    <p>Web app that helps teachers manage academic and behavioral goals for students with special needs.</p>
                    <p>I gathered requirements from teachers and built the entire app with <span className="main-color">Node</span>, <span className="main-color">React</span>, <span className="main-color">Bootstrap</span>, and <span className="main-color">Websockets</span>.</p>
                    <p>Currently user testing at the Orange County Department of Education's primary special needs campus in Fountain Valley.</p>
                  </div>
                </div>
              </div>

                {/* Screenshot triptych */}
                  <div className="row">
                    <div className="screenshot-triptych">

                      <div className="col-xs-4 scrollimation fade-left">
                        <img className="img-responsive" src="assets/images/specialEd/dashboard_facing_right1.png" alt="" />
                      </div>

                      <div className="col-xs-4 scrollimation fade-left">
                        <img className="img-responsive" src="assets/images/specialEd/goal_detail_portrait1.png" alt="" />
                      </div>

                      <div className="col-xs-4 scrollimation fade-left">
                        <img className="img-responsive" src="assets/images/specialEd/evaluation_facing_left1.png" alt="" />
                      </div>

                    </div>
                  </div>
              {/* Learn more button */}
                  <div id="iep-learn-more" className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                      <p><a className="btn btn-dc btn-small btn-main-color source-code-button" href="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53">Learn more </a></p>
                    </div>
                  </div>

    						</div>
            {/* App demo iframe video*/}
    						<div className="col-xs-5 col-xs-offset-1 scrollimation fade-left">
                  <iframe width="414" height="736" src="assets/vid/iep-goal-tracker-demo.webm" frameborder="0" allowfullscreen></iframe>
    						</div>


    					</div>

    					<hr style={{margin: "40px"}} />

          {/*RapiDoc*/}
    					<div className="row">

    						<div className="col-xs-6 col-sm-3 scrollimation fade-left">

    							<h2 className="row-title">RapiDoc</h2>
                  <div className="text-left project-description">
                    <p>A healthcare marketplace app that helps patients find providers willing to accept discount rates in exchange for paying cash for service.
                    Currently testing with 100 practices.</p>
                    <p>I converted the UI from <span className="main-color">Blaze</span> templates to <span className="main-color">React</span> components.</p>
                  </div>

    						</div>

    						<div className="col-xs-6 col-sm-3 scrollimation fade-right">
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                      <img className="img-responsive project-image" src="assets/images/rapidoc_screenshot.jpg" alt="" />
                    </div>
                  </div>
    						</div>

    {/*Spliffen*/}
                <div className="col-xs-6 col-sm-3 scrollimation fade-right">

    							<h2 className="row-title">Spliffen</h2>

                  <div className="text-left">
      							<p>White-label SAAS product that helps marijuana dispensaries manage monthly subscriptions and online sales.</p>
      							<p>I built out the front-end with <span className="main-color">React</span>.</p>
                  </div>

    						</div>

                <div className="col-xs-6 col-sm-3 scrollimation fade-left">
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                      <img className="img-responsive project-image" src="assets/images/spliffen_screenshot.png" alt="" />
                    </div>
                  </div>
    						</div>

    					</div>


    				</div>

    			</section>



    			{/* ==============================================
    			PORTFOLIO
    			=============================================== */}
    			<section id="portfolio" className="big-padding" >

    				<div className="container">

    					<h1 className="section-title">Journalism</h1>
    					<p className="subtitle">Before I wrote code for users, I wrote stories for readers.</p>

    					{/*==== Portfolio Filters ====*/}

    					<div className="text-center scrollimation fade-up">
    						<div id="filter-works" className="btn-group">
    							<button data-filter="*" type="button" className="btn btn-default active">All stories<span className="project-count"></span></button>
    							<button data-filter=".tech" type="button" className="btn btn-default">Tech<span className="project-count"></span></button>
    							<button data-filter=".digital-media" type="button" className="btn btn-default">Digital Media<span className="project-count"></span></button>
    							<button data-filter=".travel" type="button" className="btn btn-default">Travel<span className="project-count"></span></button>
    						</div>
    					</div>

    				</div>

    				<div className="container scrollimation fade-up">

    					<div id="projects-container">

    						{/* ==============================================
    						SINGLE PROJECT ITEM
    						=============================================== */}

                <div className="row">

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 travel tech" href="http://www.dailybreeze.com/lifestyle/20140905/burning-man-2014-reporter-survives-festival-returns-a-burner" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/burningman.jpg"  alt="burning man jordan england-nelson" />

      							<div className="hover-title">
      								<h2 className="project-title">Burning Man</h2>{/*Project Title */}
      								<p>My coverage from 2014</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 digital-media" href="http://www.insidesocal.com/technology/2015/04/02/how-ad-agency-mistress-creative-uses-social-media/" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/hotwheels.jpg"  alt="hot wheels mistress creative" />

      							<div className="hover-title">
      								<h2 className="project-title">Digital Mad Men</h2>{/*Project Title */}
      								<p>How ad agency Mistress Creative harnesses social media</p>{/*Project Subtitle 283x212*/}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 travel" href="http://www.ocregister.com/articles/aubrey-606672-one-day.html" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/romance.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Romance On A Shoestring</h2>{/*Project Title */}
      								<p>A broke journalist takes his girfriend to Oakland for Valentine's Day</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 tech" href="http://www.dailybreeze.com/business/20140529/spacex-unveils-first-commercial-capsule-capable-of-manned-flight" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/spacex.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">The Race to ISS</h2>{/*Project Title */}
      								<p>Elon Musk unveils his Dragon V2 manned spaceship</p>{/*Project Subtitle */}
      							</div>

      						</a>





      						<a className="project-item col-sm-6 col-md-4 col-lg-3 travel" href="http://www.ocregister.com/articles/bar-598267-friend-dance.html" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/tijuana.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Tijuana By Night</h2>{/*Project Title */}
      								<p>After drug violence scared off American tourists, Tijuana's arts and music scene exploded</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 tech" href="http://www.dailybreeze.com/environment-and-nature/20140713/automakers-begin-to-embrace-hydrogen-fuel-cell-technology" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/fuelcell.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Riding on Hot Air</h2>{/*Project Title */}
      								<p>SoCal's hydrogen fuel cell experiment</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 travel" href="http://www.dailybreeze.com/lifestyle/20141025/how-a-vacation-time-share-can-become-a-money-drain-for-owners" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/timeshare.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Timeshare Fraud</h2>{/*Project Title */}
      								<p>It's a bigger problem than you think</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 tech" href="http://www.insidesocal.com/technology/2015/04/03/3d-digital-scanning-promises-eternal-youth-in-hollywood/" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/virtual_reality.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Virtual Reality</h2>{/*Project Title */}
      								<p>3D scanning promises eternal youth in Hollywood</p>{/*Project Subtitle */}
      							</div>

      						</a>




      						<a className="project-item col-sm-6 col-md-4 col-lg-3 tech" href="#?http://www.dailybreeze.com/technology/20140626/los-angeles-south-bay-tech-companies-merge-virtual-reality-with-skydiving" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/skydive.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Virtual Free Fall</h2>{/*Project Title */}
      								<p>Startup uses Microsoft Kinect to train smokejumpers and Special Forces</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 digital-media" href="http://www.insidesocal.com/technology/2015/03/30/how-teens-are-making-thousands-per-month-on-social-media/" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/teens.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Teenage Influencers</h2>{/*Project Title */}
      								<p>The economics of social media marketing and sponsored content</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 digital-media" href="http://www.dailynews.com/toy-design" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/toys.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">Child's Play</h2>{/*Project Title */}
      								<p>A five-part series about Southern California's massive toy industry</p>{/*Project Subtitle */}
      							</div>

      						</a>

      						<a className="project-item col-sm-6 col-md-4 col-lg-3 tech" href="http://www.ocregister.com/articles/march-597529-car-water.html" target="_blank">

      							<img style={{width: '358px', height: '270px', objectFit: 'cover'}} className="img-responsive project-image" src="assets/images/journalism/watercar.jpg"  alt="" />

      							<div className="hover-title">
      								<h2 className="project-title">WaterCar</h2>{/*Project Title */}
      								<p>An entrepreneur drives to Catalina Island on his latest invention</p>{/*Project Subtitle */}
      							</div>

      						</a>

      					</div>
              </div>

    					{/*<p className="lead text-center">Like what you see? Contact me to discuss about your project!</p>
    					<p className="text-center"><a className="btn btn-dc btn-main-color scrollto" href="#contact">Contact Me</a></p>*/}

    				</div>

    			</section>



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

      </div>

    		{/* ==============================================
    		SCRIPTS
    		=============================================== */}


    	</div>
    );
  }
}

export default HomePage;
