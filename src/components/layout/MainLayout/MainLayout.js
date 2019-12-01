import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNavContainer';

const MainLayout = (props) => (
  <div>
  <PageNav />
	 {props.children}
	
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
