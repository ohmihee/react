import React from 'react';
import { Container, Grid } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';

interface Props {
  //
}

const testData = [
  {},
];

const BoardContentsView = ({

}:Props)=>{
  return (
    <Grid container sx={{ backgroundColor:'white' }}>s
      <AgGridReact>

      </AgGridReact>
    </Grid>
  );
};

export default BoardContentsView;
