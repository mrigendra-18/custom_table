
import FilterInput from '../FilterInput/FilterInput';

const TableHeader = ({ columns, sortConfig, setSortConfig, filters, setFilters, styles }) => {
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = 'default';
      key = null;
    }
    setSortConfig({ key, direction });
  };

  return (
    <thead style={{ backgroundColor: styles.headerBgColor, color: styles.headerFontColor, fontSize: styles.headerFontSize }}>
      <tr>
        {columns.map((col) => (
          <th key={col.key} onClick={() => col.sortable && handleSort(col.key)}>
            {col.title}
            {sortConfig.key === col.key && (
              <span>
                {sortConfig.direction === 'ascending' ? ' ▲' : sortConfig.direction === 'descending' ? ' ▼' : ''}
              </span>
            )}
            {col.filterable && (
              <FilterInput
                value={filters[col.key] || ''}
                onChange={(value) => setFilters((prev) => ({ ...prev, [col.key]: value }))}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
