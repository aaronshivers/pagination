import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A hook for handling pagination
 * @param {Array} data - An Array to be paginated
 * @param {number} itemsPerPage - The number of items per page
 */
const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemCount = data.length;

  /**
   * Returns data for the current page
   * @returns {Array}
   */
  const getCurrentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);
  };

  /**
   * Sets the current page
   * @param {number} pageNumber - The current page number
   */
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /**
   * The total page count
   * @type {number}
   */
  const pageCount = Math.ceil(itemCount / itemsPerPage);

  return {
    currentPage, getCurrentData, changePage, pageCount,
  };
};

usePagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default usePagination;
