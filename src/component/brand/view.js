import React from 'react';
import StyleStockService from '../../service/StyleStockService';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import DateUtils from '../../util/DateUtils';
import {withSnackbar} from 'notistack';

class BrandDetails extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        StyleStockService.getBrand(this.props.id).then((res) => {
            this.setState({brand: res.data});
        }).then(() => {
            this.setState({loading: false});
        }).catch(() => {
        
        });
    }

    render() {
        return (
            <Container maxWidth="xl" sx={{my: 2}}>
                {this.state.loading
                    ? (
                        <Stack spacing={1}>
                            <Skeleton variant="text" width={100}/>
                            <Skeleton variant="text" width={300}/>
                            <Skeleton variant="text" width={200}/>
                            <Skeleton variant="rectangular" height={118}/>
                        </Stack>
                    ) : (
                        <Card sx={{boxShadow: 4}}>
                            <CardContent>

                                <p><b>Id :</b> {this.state.brand.id}</p>
                                <p><b>Name :</b> {this.state.brand.name}</p>
                                <p><b>Email:</b> {this.state.brand.email}</p>
                                <p><b>Creation Date:</b> {DateUtils(this.state.brand.created_at)}</p>
                                <p><b>Categories:</b> {this.state.brand.categories}</p>
                                <p><b>Posts Numbers:</b> {this.state.brand.post.length}</p>
                             
                            </CardContent>
                        </Card>
                    )
                }
            </Container>
        );
    }
}

export default withSnackbar(BrandDetails);