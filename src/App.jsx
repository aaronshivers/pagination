import React from 'react';
import MyTable from './components/MyTable';
import MyPaginator from './components/MyPaginator';
import MyContainer from './components/MyContainer';
import Heading from './components/Heading';
import data from './assets/MOCK_DATA.json';
import usePagination from './hooks/usePagination';

const ITEMS_PER_PAGE = 10;

const App = () => {
  const {
    currentPage, getCurrentData, changePage, pageCount,
  } = usePagination(data, ITEMS_PER_PAGE);

  const onPageChange = (event, value) => changePage(value);

  return (
    <MyContainer>
      <Heading />
      <MyTable rows={getCurrentData()} />
      <MyPaginator
        itemCount={data.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={onPageChange}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </MyContainer>
  );
};

export default App;
