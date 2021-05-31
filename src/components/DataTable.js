import  React from 'react';
import { DataGrid,
    GridToolbarContainer,
    GridToolbarExport} from '@material-ui/data-grid';
import DownLoadHeader from './DownloadFile'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Reg Number', width: 150 },
  { field: 'location', headerName: 'Latest Location', width: 500 },
  {
    field: 'lastUpdateTime',
    headerName: 'lastUpDateTime',
    width:200,
  },
  {
    field: 'state',
    headerName: 'Status',
    width:150,
    description: 'This column has a value getter and is not sortable.',
  },
];
export default function LocationPage( props) {
  return (
    <div style={{ height: 550, width: '95%' }}>
      <DataGrid rows={props.data}
       columns={columns}
        pageSize={20} 
      rowHeight = {38}
      components= {{
          Toolbar:DownLoadHeader,
      }}
      />
     
    </div>
  );
}
