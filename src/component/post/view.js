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

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    useEffect(() => {
        StyleStockService.getPost(id)
            .then((res) => {
                setPost(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleDelete = () => {
        StyleStockService.deletePost(id)
        .then(() => {
            alert('Le Post a été supprimé avec succès.');
            navigate('/Posts');
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
                            <b>Id :</b> {post.id}
                        </p>
                        <p>
                            <b>Author :</b> {post.author.name}
                        </p>
                        <p>
                            <b>Creation Date:</b> {DateUtils.formatDateNumber(post.created_at)}
                        </p>
                        <p>
                            <b>Title :</b> {post.title}
                        </p>
                        <p>
                            <b>Content :</b> {post.content}
                        </p>
                        <p>
                            <b>Likes Numbers :</b> {post.likes}
                        </p>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default PostDetails;