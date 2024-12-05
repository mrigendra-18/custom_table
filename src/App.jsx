
import TableContainer from './components/TableContainer/TableContainer';

const data = [
  { id: 1, name: 'John', age: 28, score: 85 },
  { id: 2, name: 'Jane', age: 22, score: 92 },
  
];

const columns = [
  { title: 'ID', key: 'id', sortable: true, filterable: true },
  { title: 'Name', key: 'name', sortable: true, filterable: true },
  { title: 'Age', key: 'age', sortable: true, filterable: false },
  { title: 'Score', key: 'score', sortable: true, filterable: true },
];

function App() {
  return (
    <div className="App">
      <h1>Custom Table Component</h1>
      <TableContainer data={data} columns={columns} rowsPerPage={5} />
    </div>
  );
}

export default App;
