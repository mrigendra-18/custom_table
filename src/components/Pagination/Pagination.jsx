const Pagination = ({ totalRows, rowsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
  
    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  