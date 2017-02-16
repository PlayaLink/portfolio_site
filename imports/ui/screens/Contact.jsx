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
