import React from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import AvatarImg from '../AvatarImg/AvatarImg';
import Voating from '../Voting/Voting';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '20px auto'
  }
}));

const CardComponent = ({ name, children }) => {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <AvatarImg name={name} />
        }
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          {/* Children */}
        {children}
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* Voting */}
        <Voating name={name} />
      </CardActions>
    </Card>
  )
}

export default CardComponent;

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}