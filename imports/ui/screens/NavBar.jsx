import React from 'react';

export default class NavBar extends React.Component {

  componentDidMount(){
    Meteor.setTimeout(() => {
      $('li.active').removeClass('active');
    }, 700);

    $('#site-nav li').click(function(e){
      $('.navbar-toggle').click();
    });

  }

  addIn(){
    $(function() {
      $('scrollimation').addClass('in');
    });
  }

  render(){
    return (
      <div id="main-nav" className="navbar navbar-fixed-top center">
        <div className="container">

          <div className="navbar-header">

            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#site-nav">
              <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>

            {/* ======= LOGO ========*/}
            <a className="navbar-brand scrollto" href="#home"><img src="" alt="" /></a>

          </div>

          <div id="site-nav" className="navbar-collapse collapse">
            <div className="navbar-inner">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/" className="scrollto"><i className="fa fa-home"></i>Home</a>
                </li>
                <li>
                  <a href="/about" className="scrollto"><i className="fa fa-user"></i>About</a>
                </li>
                <li>
                  <a href="/journalism-portfolio" onClick={this.addIn()}><i className="fa fa-newspaper-o"></i>Journalism</a>
                </li>
                <li>
                  <a href="https://medium.com/@jordanenelson/" ><i className="fa fa-pencil"></i>Blog</a>
                </li>
                <li>
                  <a href="/contact" className="scrollto"><i className="fa fa-commenting"></i>Contact</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
