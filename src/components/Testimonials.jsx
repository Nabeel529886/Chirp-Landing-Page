import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { testimonials } from '../data.js'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { theme } from '../theme.js'
import useMediaQuery from '@mui/material/useMediaQuery'


function Testimonials() {
    const matches = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    return (
        <Box sx={{ backgroundColor: '#d0f0f0', py: 4}}>
            <Container>
                <Typography variant='h4' component='h1' sx={{ fontWeight: 700 }}>What our customers say</Typography>
                <Grid container gap={3} sx={{ mt: 4 }} >
                    {
                        testimonials.map(testimonial => (
                            <Grid item xs={12} sm={12} md={3.8} key={testimonial.id}>
                                <Card elevation={0} sx={{ maxWidth: "600px", padding: '10px' }}>
                                    <CardHeader
                                        avatar={
                                        <Avatar src={testimonial.avatar} sx={{ width: '56px', height: '56px'}} />
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <TwitterIcon sx={{ fill: "#00acee", width: '30px', height: '30px' }} />
                                        </IconButton>
                                        }
                                        title={testimonial.name}
                                        subheader={`@${testimonial.username}`}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" fontSize="18px">
                                            {testimonial.tweet}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteBorderOutlinedIcon sx={{ fill: 'red', mr: 1}} />
                                        <Typography variant="body2" component='span' color="text.secondary" fontSize="18px">
                                            {testimonial.likes}
                                        </Typography>

                                        </IconButton>
                                        <IconButton aria-label="share">
                                        </IconButton>
                                        <Typography variant="body2" component='span' color="text.secondary" fontSize="18px" sx={{ marginLeft: 'auto'}}>
                                            {testimonial.date}
                                        </Typography>
                                        </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Testimonials
