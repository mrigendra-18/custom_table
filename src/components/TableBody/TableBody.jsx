const TableBody = ({ data, columns, styles }) => {
    return (
      <tbody style={{ backgroundColor: styles.bodyBgColor, color: styles.bodyFontColor, fontSize: styles.bodyFontSize }}>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default TableBody;
  