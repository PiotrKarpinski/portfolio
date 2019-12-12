import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNavContainer';
import Footer from '../Footer/Footer';


const MainLayout = (props) => (
  <div>
  <PageNav />
	 {props.children}
	<Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
