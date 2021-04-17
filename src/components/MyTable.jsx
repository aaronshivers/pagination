import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const MyTable = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Id</TableCell>
          <TableCell align="center">First</TableCell>
          <TableCell align="center">Last</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ id, firstName, lastName }) => (
          <TableRow key={id}>
            <TableCell align="center">{id}</TableCell>
            <TableCell align="center">{firstName}</TableCell>
            <TableCell align="center">{lastName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

MyTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })).isRequired,
};

export default MyTable;
