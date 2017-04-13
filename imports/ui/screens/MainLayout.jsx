import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '/imports/ui/screens/NavBar.jsx';

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


export const MainLayout = ({content}) => (
  <div data-spy="scroll" data-target="#main-nav" data-offset="400">

    {/*=== PAGE PRELOADER ===*/}
    <div id="page-loader"><span className="page-loader-gif"></span></div>

    <header>
      <NavBar />
    </header>

    <main>
      <div>
        {content}
      </div>
    </main>

  </div>
);

MainLayout.propTypes = {
  content: React.PropTypes.object,
};
