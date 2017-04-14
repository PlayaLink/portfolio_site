import React from 'react';

export default class Journalism extends React.Component {

  componentDidMount(){
    $('.scrollimation').waypoint(function(){
      $(this).addClass('in');
    },{offset:'95%'});
  }

  render(){
    return (
      <div>
        <section id="portfolio" className="big-padding" >

          <div className="container">

            <h1 className="section-title">Journalism</h1>
            <p className="subtitle">Before I wrote code for users, I wrote stories for readers.</p>

            {/*==== Filters ====*/}

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
              Clips
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
      </div>
    );
  }
}
