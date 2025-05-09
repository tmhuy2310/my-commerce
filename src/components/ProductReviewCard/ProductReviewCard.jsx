import { GifIcon } from '@heroicons/react/20/solid';
import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 2, md:1 }} alignContent='center'>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid size={{ xs: 9 }}>
                    <div className="space-y-2">
                        <div>
                            <p className='font-semibold text-lg'>ABC</p>
                            <p className='opacity-70'>April 29, 2025</p>
                        </div>
                    </div>
                    <Rating value={3.5} name="half-rating" readOnly precision={0.5}/>
                    <p>Good service</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductReviewCard;
