import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Skeleton,
    Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";

const SkeletonCard = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const Img = styled('img')({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    });

    const urlApi = 'https://test.cmc-software.com/test.json';

    useEffect(() => {
        (async () => {
            setLoading(true);
            let api = await fetch(urlApi)
                .then((data) => data.json())
                .catch((error) => {
                    throw error;
                });

            setData(api);

            setLoading(false);
        })();
    }, [urlApi]);


    return (
        <Card sx={{ backgroundColor: '#323232', width: '400px', }}>
            {
                loading ? (
                    <CardHeader
                        avatar={
                            <Skeleton variant="circular" width={45} height={45} animation="wave" sx={{ bgColor: 'primary.grey.100' }} />
                        }
                        title={
                            <Skeleton variant="text" sx={{ fontSize: '.7rem', width: '80%' }} animation="wave" />
                        }
                        subheader={
                            <Skeleton variant="text" sx={{ fontSize: '.7rem', width: '45%' }} animation="wave" />
                        }
                    />
                ) : (
                    <CardHeader
                        avatar={
                            <Avatar sx={{ width: '45px', height: '45px' }} aria-label="recipe">
                                <Img src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" alt="Profile-image" />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon sx={{ color: 'primary.main' }} />
                            </IconButton>
                        }
                        title={
                            <Typography variant="subtitle2" color="primary.main">{data.title}</Typography>
                        }
                        subheader={
                            <Typography variant="body2" color="primary.grey.100">{data.time} ago</Typography>
                        }
                    />
                )
            }
            {
                loading ? (
                    <Skeleton variant="rectangular" width={400} height={225} animation="wave" sx={{ bgColor: 'primary.grey.100' }} />
                ) : (
                    <CardMedia height='192px' image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt='TEDtalk' component="img" />
                )
            }
            <CardContent>
                {
                    loading ? (
                        <>
                            <Skeleton variant="text" sx={{ fontSize: '.7rem', width: '100%' }} animation="wave" />
                            <Skeleton variant="text" sx={{ fontSize: '.7rem', width: '85%' }} animation="wave" />
                        </>
                    ) : (
                        <Typography variant="body1" color="#fff">
                            {data.description}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    );
}

export default SkeletonCard;
