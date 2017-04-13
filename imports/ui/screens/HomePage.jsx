import React, { PropTypes } from 'react';



class HomePage extends React.Component {


  render () {
    return(
      <div>
        <div id="home">

    			<div className="container">

    				<div className="row">

    					<div className="col-sm-10 col-sm-offset-1 text-center">

    						<h1 className="scrollimation fade-down d1">Jordan England-Nelson</h1>
    						{/*<h2 className="scrollimation fade-down d3">Software <span className="main-color">Developer</span> | Technical <span className="main-color">Writer</span></h2>*/}
    						<h2 className="scrollimation fade-down d3"><span className="main-color">S</span>oftware <span className="main-color">E</span>ngineer</h2>
                <div className="header-img scrollimation fade-up d1" style={{top: "140px"}}>
                  <img className="img-responsive" src="assets/images/portfolio_headshot_header.png" alt="" />
                </div>
            </div>

    				</div>



    			</div>

    		</div>

    		<div id="main-content">


    			{/* ==============================================
    			Portfolio
    			=============================================== */}

    			<section id="portfolio" className="big-padding gray-bg">

    				<div className="container">

    					<h1 className="section-title">Portfolio</h1>

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
                      <p>
                        <a className="btn btn-dc btn-small btn-main-color source-code-button"
                          href="https://medium.com/@jordanenelson/a-goal-tracking-app-for-students-with-special-needs-6fe5334d2a53">
                          Learn more</a>
                      </p>
                    </div>
                  </div>

    						</div>
            {/* App demo iframe video*/}
    						<div className="col-xs-5 col-xs-offset-1 scrollimation fade-left">
                  <iframe width="414" height="736" src="assets/vid/iep-goal-tracker-demo.webm" autoPlay></iframe>
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


        </div>
      </div>
    );
  }
}

export default HomePage;
