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

const BrandDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        StyleStockService.getBrand(id)
            .then((res) => {
                setBrand(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleArchive = () => {
        StyleStockService.newBrandStatus(id, 'ARCHIVE')
            .then(() => {
                setBrand({ ...brand, status: 'ARCHIVE' });
                alert('La marque est passé au statut "ARCHIVE" avec succès.');
                navigate('/Brands');
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
                        <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={handleArchive} size="large">Archive</Button>
                    </FormControl>
                        <p>
                            <b>Id :</b> {brand.id}
                        </p>
                        <p>
                            <b>Name :</b> {brand.name}
                        </p>
                        <p>
                            <b>Email:</b> {brand.email}
                        </p>
                        <p>
                            <b>Creation Date:</b> {DateUtils.formatDateNumber(brand.created_at)}
                        </p>
                        <p>
                            <b>Status :</b> {brand.status}
                        </p>
                        <p>
                            <b>Categories :</b>
                            {brand.categories.map((params) => {       
                                return (
                                <p key={params} value={params}>Name : {params.name}</p>
                                ) 
                            })}
                        </p>
                        <p>
                            <b>Social Networks :</b>
                            {brand.socialNetworks.map((params) => {       
                                return (
                                <p key={params} value={params}>Name : {params.name} <br/> Link : {params.link}</p>
                                ) 
                            })}
                        </p>
                        <p>
                            <b>Posts Numbers:</b> {brand.posts ? brand.posts.length : 0}
                        </p>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BrandDetails;