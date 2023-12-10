import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { useStyles } from './NewsComponent.styles';
import NewsCardComponent from './NewsCardComponent';
import newsService from '../../async/services/newsService';
import { useQuery } from 'react-query';

function NewsComponent() {
    const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () => newsService());
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <Typography variant="h2" component="h2" >
                Noticias y Novedades
            </Typography>
            <Box className={classes.containerDesktop} >
                <ImageList cols={2} gap={50}>
                    {!isLoading && !error ? data.map((item) => (
                        <>
                            <ImageListItem>
                                <NewsCardComponent data={item} />
                            </ImageListItem>
                        </>
                    )) : null}
                </ImageList>
            </Box>
            <Box className={classes.containerMovile} >
                <ImageList cols={1} gap={25}>
                    {!isLoading && !error ? data.map((item) => (
                        <>
                            <ImageListItem>
                                <NewsCardComponent data={item} />
                            </ImageListItem>
                        </>
                    )) : null}
                </ImageList>
            </Box>
        </Box>
    )
}

export default NewsComponent