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
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'status', headerName: 'Status', flex: 1},
    {field: 'created_at', valueGetter: (params) => DateUtils.formatDateNumber(params.row.created_at), headerName: 'Creation Date', flex: 1.4},
    {field: 'details', headerName: 'Details', sortable: false, flex: 0.5, renderCell: (cellValue) => {
        return <IconButton aria-label="details"
                           color="primary"
                           component={Link}
                           to={`/NewBrands/${cellValue.id}`}>
            <ArrowForwardIcon />
        </IconButton>;
    }},
];

const DEFAULT_STATE = {
    loading: false,
    page: 1,
    limit: 100,
    newbrands: [],
    availableNewBrands: [],
    id: '',
    name: '',
};

class NewBrandTable extends React.Component {
    state = DEFAULT_STATE;

    componentDidMount() {
        StyleStockService.getAvailableNewBrands().then((res) => {
            this.setState({
                availableNewBrands: res.data,
            });
        }).catch((error) => {
            console.log(error);
        });

        this.setState({
            id: this.props.id,
            name: this.props.name
        }, this.updateData);
    }

    updateId = (model) => {
        this.setState({id: model.target.value});
    }

    updateName = (model) => {
        this.setState({name: model.target.value});
    }

    updateData = () => {
        this.setState({loading: true}, () => {
            StyleStockService.getPageOfNewBrand(this.state).then(res => {
                this.setState({
                    newbrands: res.data['hydra:member'],
                });
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.setState({
                    loading: false,
                });
            });
        });
    }

    resetFiltersAndUpdateData = () => {
        this.setState({...DEFAULT_STATE, availableNewBrands: this.state.availableNewBrands}, this.updateData);
    }

    render() {
        return (
            <Container maxWidth="xl" sx={{mt: 1}}>
              <h1>New Brands</h1>
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
                      label="Name"
                      type="search"
                      value={this.state.name}
                      onChange={this.updateName}/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button variant="outlined" style={{minHeight: '56px'}} onClick={this.updateData} size="large">Search</Button>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={this.resetFiltersAndUpdateData} size="large">Reset</Button>
                </FormControl>

                <DataGrid
                    rows={this.state.newbrands}
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

export default NewBrandTable;