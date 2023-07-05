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

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        StyleStockService.getUser(id)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleDelete = () => {
        StyleStockService.deleteUser(id)
        .then(() => {
            alert('Le User a été supprimé avec succès.');
            navigate('/Users');
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
                        <Button color="warning" variant="outlined" style={{minHeight: '56px'}} onClick={handleDelete} size="large">Delete</Button>
                    </FormControl>
                        <p>
                            <b>Id :</b> {user.id}
                        </p>
                        <p>
                            <b>Email :</b> {user.email}
                        </p>
                        <p>
                            <b>Creation Date:</b> {DateUtils.formatDateNumber(user.created_at)}
                        </p>
                        <p>
                            <b>Roles :</b> {user.roles}
                        </p>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default UserDetails;