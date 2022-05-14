import * as React from 'react';
// import { Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Works from './works.json';
import './work.css';
function work() {
    function alerting(){
        
        const newLocal = "This is not available to live";
        alert(newLocal)
        
    }
    return(
        <div className='work'>
            {Works.map((item,index)=>{
                return(
                    <div key={index} className='workitem'>
                    <Card  sx={{ maxWidth: 390 }}>
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
                        <Typography variant="body2" color="text.secondary">
                        {item.descr}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {
                            item.desig!=="SYSTEM ENGINEER SPECIALIST TRAINEE, INFOSYS" ? <Button size="small" href='https://www.infosysequinox.com/'color='primary'  variant='outlined'>Infosys Equinox</Button>:<Button size="small" color='primary' onClick={alerting}  variant='outlined'>Infosys</Button>
                        }
                        {/* <Button size="small" href='https://www.infosysequinox.com/'color='primary'  variant='outlined'>Infosys Equinox</Button> */}
                    </CardActions>
                    </Card>  
                    </div>
                )
            })}
        </div>
    )
}
export default work