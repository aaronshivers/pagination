import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const MyPaginator = ({
  pageCount, onPageChange, currentPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={pageCount}
        onChange={onPageChange}
        page={currentPage}
        color="primary"
        className={classes.pagination}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

MyPaginator.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default MyPaginator;
