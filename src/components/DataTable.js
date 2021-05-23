import  React from 'react';
import { DataGrid,
    GridToolbarContainer,
    GridToolbarExport} from '@material-ui/data-grid';
import DownLoadHeader from './DownloadFile'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'lastName',
    headerName: 'Full name',
    width:150,
    description: 'This column has a value getter and is not sortable.',
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 45 },
  { id: 6, lastName: 'Melisandre', firstName: "Hello ", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'David', firstName: 'Harvey', age: 65 },
];

export default function LocationPage() {
  return (
    <div style={{ height: 550, width: '80%' }}>
      <DataGrid rows={rows}
       columns={columns}
        pageSize={5} 
      rowHeight = {38}
      components= {{
          Toolbar:DownLoadHeader,
      }}
      />
    </div>
  );
}
