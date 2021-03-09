import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import welcome from '../../assets/image/welcome.jpeg';
import './welcome_card.scss';


export default function SimpleCard() {

    return (
        <Card className="card-container" >
            {/* <CardContent>
                <img src={welcome} className="welcome-Image" alt="welcome" />
            </CardContent> */}
            {/* <CardActions className="welcome-card" > */}
                <Typography className="welcome-message" >Welcome to K12 Inventory Managment</Typography>
            {/* </CardActions> */}
        </Card>
    );
}
