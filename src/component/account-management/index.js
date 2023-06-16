import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import DateUtils from '../../util/DateUtils';

const columns = [
    {field: 'id', headerName: 'ID', flex: 0.4},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'admin', headerName: 'Admin', flex: 0.7},
    {field: 'creationDate', valueGetter: (params) => DateUtils.formatDateNumber(params.row.startTime), headerName: 'Creation Date', flex: 1.4},
    {field: 'details', headerName: 'Details', sortable: false, flex: 0.5, renderCell: (cellValue) => {
        return <IconButton aria-label="details"
                           color="primary"
                           component={Link}
                           to={``}>
            <ArrowForwardIcon />
        </IconButton>;
    }},
];

const DEFAULT_STATE = {
    loading: false,
    pageSize: 20,
    totalPages: 0,
    page: 0,
    rowCount: 0,
    rowsPerPage: [20, 50, 100],
};

class UserTable extends React.Component {
    state = DEFAULT_STATE;

    updateModelOnSortChange = (model) => {
        this.setState({sortProperty: model[0]?.field, sortOrder: model[0]?.sort}, this.updateData);
    }

    updateModelOnPageChange = (model) => {
        this.setState({page: model}, this.updateData);
    }

    updateModelOnPageSizeChange = (model) => {
        this.setState({pageSize: model}, this.updateData);
    }

    updateData = () => {
    }

    resetFiltersAndUpdateData = () => {

    }

    render() {
        return (
            <Container maxWidth="xl" sx={{mt: 1}}>
              <h1>Utilisateurs</h1>
                <FormControl sx={{my: 1, mx: 0.5, width: 100}}>
                    <TextField 
                      id="outlined-search"
                      label="Id"
                      type="search"/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5, width: 300}}>
                <TextField 
                      id="outlined-search"
                      label="Email"
                      type="search"/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5, width: 300}}>
                    <InputLabel id="demo-multiple-name-label">Admin</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={this.state}
                        input={<OutlinedInput label="Name" />}
                        //renderValue={(selected) => selected.join(', ')}
                        onChange={this.state}
                    >
                        {/* {this.state.map((category) => {
                            return <MenuItem
                                key={category}
                                value={category}
                            >
                                <Checkbox checked={this.state.indexOf(category) > -1} />
                                <ListItemText primary={category}/>
                            </MenuItem>
                        })} */}
                    </Select>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button variant="outlined" style={{minHeight: '56px'}} onClick={this.updateData} size="large">Search</Button>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={this.resetFiltersAndUpdateData} size="large">Reset</Button>
                </FormControl>

                <DataGrid
                    autoHeight={true}
                    disableColumnFilter={true}
                    rows={this.state}
                    columns={columns}
                    paginationMode={'server'}
                    sortingMode={'server'}
                    filterMode={'server'}
                    rowCount={this.state.rowCount}
                    pageSize={this.state.pageSize}
                    page={this.state.page}
                    rowsPerPageOptions={this.state.rowsPerPage}
                    onSortModelChange={this.updateModelOnSortChange}
                    onPageChange={this.updateModelOnPageChange}
                    onPageSizeChange={this.updateModelOnPageSizeChange}
                    loading={this.state.loading}
                />
            </Container>
        );
    }
}

export default UserTable;