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
import 'bootstrap/dist/css/bootstrap.min.css';
import StyleStockService from '../../service/StyleStockService';

const columns = [
    {field: 'id', headerName: 'ID', flex: 0.4},
    {field: 'title', headerName: 'Title', flex: 2},
    {field: 'author', headerName: 'Brand', flex: 1, renderCell: (params) => (
        <Link to={`/Marques/${params.value}`}>{params.value}</Link>
      )},
    {field: 'created_at', valueGetter: (params) => DateUtils.formatDateNumber(params.row.created_at), headerName: 'Creation Date', flex: 1.4},
    {field: 'details', headerName: 'Details', sortable: false, flex: 0.5, renderCell: (cellValue) => {
        return <IconButton aria-label="details"
                           color="primary"
                           component={Link}
                           to={`/Publications/${cellValue.id}`}>
            <ArrowForwardIcon />
        </IconButton>;
    }},
];

const DEFAULT_STATE = {
    loading: false,
    page: 1,
    limit: 100,
    posts: [],
    availablePosts: [],
    id: null,
    title: '',
};

class PostTable extends React.Component {
    state = DEFAULT_STATE;

        componentDidMount() {
        StyleStockService.getAvailablePosts().then((res) => {
            this.setState({
                availablePosts: res.data,
            });
        }).catch(() => {
            
        });

        this.setState({
            id: this.props.id,
            title: this.props.title
        }, this.updateData);
    }

    updateId = (model) => {
        this.setState({id: model.target.value});
    }

    updateTitle = (model) => {
        this.setState({title: model.target.value});
    }

    updateData = () => {
        this.setState({loading: true}, () => {
            StyleStockService.getPageOfPost(this.state).then(res => {
                this.setState({
                    posts: res.data['hydra:member'],
                    totalPages: res.data.totalPages,
                    page: res.data.number,
                    rowCount: res.data.totalElements,
                });
            }).catch(() => {
                
            }).finally(() => {
                this.setState({
                    loading: false,
                });
            });
        });
    }

    resetFiltersAndUpdateData = () => {
        this.setState({...DEFAULT_STATE, availableBrands: this.state.availableBrands}, this.updateData);
    }

    render() {
        return (
            <Container maxWidth="xl" sx={{mt: 1}}>
              <h1>Publications</h1>
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
                      label="Titre"
                      type="search"
                      value={this.state.title}
                      onChange={this.updateTitle}/>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button variant="outlined" style={{minHeight: '56px'}} onClick={this.updateData} size="large">Search</Button>
                </FormControl>

                <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={this.resetFiltersAndUpdateData} size="large">Reset</Button>
                </FormControl>

                <DataGrid
                    rows={this.state.posts}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 20,
                        },
                      },
                    }}
                    pageSizeOptions={[20]}
                    disableRowSelectionOnClick
                    loading={this.state.loading}
                />

            </Container>
        );
    }
}

export default PostTable;