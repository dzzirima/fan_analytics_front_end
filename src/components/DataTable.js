import  React from 'react';
import { DataGrid,
    GridToolbarContainer,
    GridToolbarExport} from '@material-ui/data-grid';
import DownLoadHeader from './DownloadFile'
import TextField from '@material-ui/core/TextField';


const columnsForLocationReport = [
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


const columnsForMileageReport = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Reg Number', width:200 },
  { field: 'mileage', headerName: 'Current Mileage (Km)', width: 300 },
];

const columnsForParkedReport = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Reg Number', width:200 },
  { field: 'parkedTime', headerName: 'Parked Time', width: 300 },
  { field: 'group', headerName: 'Time-Range', width: 300 },
];




export function LocationPageTable( props) {
  return (
    <div style={{ height: 550, width: '95%' }}>
      <DataGrid rows={props.data}
       columns={columnsForLocationReport}
        pageSize={20} 
      rowHeight = {38}
      components= {{
          Toolbar:DownLoadHeader,
      }}
      />
     
    </div>
  );
}


export function ParkedPageTable( props) {
  return (
    <div style={{ height: 550, width: '95%' }}>
      
      <DataGrid rows={props.data}
       columns={columnsForParkedReport}
        pageSize={20} 
      rowHeight = {38}
      components= {{
          Toolbar:DownLoadHeader,
      }}
      />
     
    </div>
  );
}

export function MileagePageTable( props) {
  return (
    <div style={{ height: 550, width: '95%' }}>
      <DataGrid rows={props.data}
       columns={columnsForMileageReport}
        pageSize={20} 
      rowHeight = {38}
      components= {{
          Toolbar:DownLoadHeader,
      }}
      />
     
    </div>
  );
}
