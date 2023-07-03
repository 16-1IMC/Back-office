import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import DateUtils from '../../util/DateUtils';
import StyleStockService from '../../service/StyleStockService';

const columns = [
    {field: 'id', headerName: 'ID', flex: 0.4},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'roles', headerName: 'Role', flex: 1, renderCell: (params) => params.value,},
    {field: 'created_at', valueGetter: (params) => DateUtils.formatDateNumber(params.row.created_at), headerName: 'Creation Date', flex: 1.4},
    {field: 'details', headerName: 'Details', sortable: false, flex: 0.5, renderCell: (cellValue) => {
        return <IconButton aria-label="details"
                           color="primary"
                           component={Link}
                           to={`/Users/${cellValue.id}`}>
            <ArrowForwardIcon />
        </IconButton>;
    }},
];

const DEFAULT_STATE = {
    loading: false,
    page: 1,
    limit: 100,
    users: [],
    availableUsers: [],
    id: '',
    email: '',
};

class UserTable extends React.Component {
    state = DEFAULT_STATE;

        componentDidMount() {
        StyleStockService.getAvailableUsers().then((res) => {
            this.setState({
                availableUsers: res.data,
            });
        }).catch(err => console.log(err))

        this.setState({
            id: this.props.id,
            email: this.props.email
        }, this.updateData);
    }

    updateId = (model) => {
        this.setState({id: model.target.value});
    }

    updateEmail = (model) => {
        this.setState({email: model.target.value});
    }

    updateData = () => {
        this.setState({loading: true}, () => {
            StyleStockService.getPageOfUser(this.state).then(res => {
                this.setState({
                    users: res.data['hydra:member'],
                });
            }).catch(err => console.log(err))
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
        });
    }

    resetFiltersAndUpdateData = () => {
        this.setState({...DEFAULT_STATE, availableUsers: this.state.availableUsers}, this.updateData);
    }

    render() {
        return (
            <Container maxWidth="xl" sx={{mt: 1}}>
              <h1>Users</h1>
                <FormControl sx={{my: 1, mx: 0.5, width: 100}}>
                    <TextField 
                      id="outlined-search"
                      label="Id"
                      type="search"
                      value={this.state.id}
                      onChange={this.updateId}/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5, width: 300}}>
                <TextField 
                      id="outlined-search"
                      label="Email"
                      type="search"
                      value={this.state.email}
                      onChange={this.updateEmail}/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button variant="outlined" style={{minHeight: '56px'}} onClick={this.updateData} size="large">Search</Button>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={this.resetFiltersAndUpdateData} size="large">Reset</Button>
                </FormControl>


                <DataGrid
                    rows={this.state.users}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 10,
                        },
                      },
                    }}
                    pageSizeOptions={[10]}
                    disableRowSelectionOnClick
                    loading={this.state.loading}
                />
            </Container>
        );
    }
}

export default UserTable;