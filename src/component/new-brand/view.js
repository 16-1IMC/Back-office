import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import StyleStockService from '../../service/StyleStockService';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import DateUtils from '../../util/DateUtils';

const NewBrandDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [newbrand, setNewBrand] = useState(null);

    useEffect(() => {
        StyleStockService.getNewBrand(id)
            .then((res) => {
                setNewBrand(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleAccept = () => {
        StyleStockService.newBrandStatus(id, 'APPROVED')
            .then(() => {
                setNewBrand({ ...newbrand, status: 'APPROVED' });
                alert('La marque est passé au statut "APPROVED" avec succès.');
                navigate('/NewBrands');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRefuse = () => {
        StyleStockService.newBrandStatus(id, 'REFUSED')
            .then(() => {
                setNewBrand({ ...newbrand, status: 'REFUSED' });
                alert('La marque est passé au statut "REFUSED" avec succès.');
                navigate('/NewBrands');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Container maxWidth="xl" sx={{ my: 2 }}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" width={100} />
                    <Skeleton variant="text" width={300} />
                    <Skeleton variant="text" width={200} />
                    <Skeleton variant="rectangular" height={118} />
                </Stack>
            ) : (
                <Card sx={{ boxShadow: 4 }}>
                    <CardContent>
                    <FormControl sx={{my: 1, mx: 0.5}}>
                    <Button variant="outlined" style={{minHeight: '56px'}} onClick={handleAccept} size="large">Accept</Button>
                    </FormControl>

                    <FormControl sx={{my: 1, mx: 0.5}}>
                        <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={handleRefuse} size="large">Refuse</Button>
                    </FormControl>
                        <p>
                            <b>Id :</b> {newbrand.id}
                        </p>
                        <p>
                            <b>Name :</b> {newbrand.name}
                        </p>
                        <p>
                            <b>Email:</b> {newbrand.email}
                        </p>
                        <p>
                            <b>Creation Date:</b> {DateUtils.formatDateNumber(newbrand.created_at)}
                        </p>
                        <p>
                            <b>Status :</b> {newbrand.status}
                        </p>
                        <p>
                            <b>Categories :</b>
                            {newbrand.categories.map((params) => {       
                                return (
                                <p key={params} value={params}>Name : {params.name}</p>
                                ) 
                            })}
                        </p>
                        <p>
                            <b>Social Networks :</b>
                            {newbrand.socialNetworks.map((params) => {       
                                return (
                                <p key={params} value={params}>Name : {params.name} <br/> Link : {params.link}</p>
                                ) 
                            })}
                        </p>
                        <p>
                            <b>Posts Numbers:</b> {newbrand.posts ? newbrand.posts.length : 0}
                        </p>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default NewBrandDetails;