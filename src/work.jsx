import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Works from './works.json';
import './work.css';
import { makeStyles } from '@material-ui/core/styles';

function Work() {
    const useStyles = makeStyles((theme) => ({
        card: {
            width: 300,
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.1)',
            },
        },
        media: {
            height: 200,
        },
    }));

    const classes = useStyles();
    const [expandedIndex, setExpandedIndex] = useState(null);

    function alerting(){
        const newLocal = "This is not available to live";
        alert(newLocal)
    }
    
    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        setExpandedIndex(null);
    };

    return (
        <div className='work'>
            {Works.map((item, index) => {
                return (
                    <div key={index} className='workitem'>
                        <Card
                            className={`${classes.card} ${expandedIndex === index ? 'expanded' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            sx={{ maxWidth: 390 }}>
                            <CardMedia
                                component="img"
                                height="160"
                                image={item.imag}
                                alt="Infosys"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.desig}
                                </Typography>
                                {expandedIndex === index && (
                                    <React.Fragment>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.descr}
                                        </Typography>
                                    </React.Fragment>
                                )}
                            </CardContent>
                            <CardActions>
                                {
                                    item.link === "" ?
                                        <Button size="small" color='primary' onClick={alerting} variant='outlined'>WORK</Button>
                                        :
                                        <Button size="small" href={item.link} color='primary' variant='outlined'>WORK</Button>
                                }
                            </CardActions>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Work;
