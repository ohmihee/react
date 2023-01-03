import React from 'react';
import { observer } from 'mobx-react';
import { Container, Grid } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';

interface Props {
  //
}

const testData = [
  {},
];

const BoardContentsView = observer(({

}:Props)=>{
  return (
    <Grid container sx={{ backgroundColor:'white' }}>
      <AgGridReact>

      </AgGridReact>
    </Grid>
  );
});

export default BoardContentsView;
