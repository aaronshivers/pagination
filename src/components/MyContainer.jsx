import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const MyContainer = ({ children }) => (
  <>
    <CssBaseline />
    <Container maxWidth="sm">
      {children}
    </Container>
  </>
);

MyContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyContainer;
