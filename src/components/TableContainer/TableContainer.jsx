import  { useState, useMemo } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';
import Pagination from '../Pagination/Pagination';
import './TableContainer.css';

const TableContainer = ({ data, columns, rowsPerPage = 5 }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'default' });
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [styles, setStyles] = useState({
    headerFontSize: '16px',
    bodyFontSize: '14px',
    headerBgColor: '#f0f0f0',
    bodyBgColor: '#fff',
    headerFontColor: '#000',
    bodyFontColor: '#333',
  });

  const sortedFilteredData = useMemo(() => {
    let filteredData = data;

    for (let key in filters) {
      if (filters[key]) {
        filteredData = filteredData.filter(item =>
          item[key].toString().toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    }

    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (sortConfig.direction === 'ascending') {
          return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        } else if (sortConfig.direction === 'descending') {
          return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredData;
  }, [data, filters, sortConfig]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedFilteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="table-container">
      <TableHeader
        columns={columns}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        filters={filters}
        setFilters={setFilters}
        styles={styles}
      />
      <TableBody data={paginatedData} columns={columns} styles={styles} />
      <Pagination
        totalRows={sortedFilteredData.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableContainer;
