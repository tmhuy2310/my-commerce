import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: 6, mt: 8 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Store Information */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                            PhoneStore
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body2">123 Main Street, Anytown, ST 12345</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body2">(555) 123-4567</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body2">contact@phonestore.com</Typography>
                        </Box>
                    </Grid>

                    {/* Shop Buttons */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography className="pb-5" variant="h5" sx={{ mb: 2 }}>
                            Shop
                        </Typography>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Blog
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Press
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Jobs
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Partners
                            </Button>
                        </div>
                    </Grid>

                    {/* Support Buttons */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography className="pb-5" variant="h5" sx={{ mb: 2 }}>
                            Solutions
                        </Typography>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Marketing
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Analytics
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Commerce
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Insights
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Supports
                            </Button>
                        </div>
                    </Grid>
                    {/* Support Buttons */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography className="pb-5" variant="h5" sx={{ mb: 2 }}>
                            Documentation
                        </Typography>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                Guides
                            </Button>
                        </div>
                        <div>
                            <Button color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                                API Status
                            </Button>
                        </div>
                    </Grid>

                    {/* Newsletter */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Stay Updated
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Subscribe to our newsletter for the latest deals and phone releases.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                            <TextField
                                size="small"
                                placeholder="Your email"
                                variant="outlined"
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'transparent',
                                        },
                                    },
                                }}
                            />
                            <Button variant="contained" color="secondary" sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
                                Join
                            </Button>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <IconButton color="inherit" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                {/* Bottom Section */}
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    direction={{ xs: 'column', sm: 'row' }}
                >
                    <Grid sx={{ xs: 12, sm: 6 }}>
                        <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            &copy; 2025 PhoneStore. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid sx={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-end' } }}
                        >
                            <Button color="inherit" underline="hover" sx={{ mr: { xs: 1, sm: 2 } }}>
                                Privacy Policy
                            </Button>
                            <Button color="inherit" underline="hover" sx={{ mr: { xs: 1, sm: 2 } }}>
                                Terms of Service
                            </Button>
                            <Button color="inherit" underline="hover">
                                Sitemap
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
