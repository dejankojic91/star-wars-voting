import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { fetchGoogleImages } from '../../utils/api';


const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
}));

const AvatarImg = ({ name }) => {

    const classes = useStyles();
    const [googleImage, setGoogleImage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            await fetchGoogleImages(name)
                .then(({ data }) => {
                    if (data && data.items) {
                        const rnd = Math.floor(Math.random() * data.items.length)
                        setGoogleImage(data.items[rnd].link)
                    }
                }).catch(err => {
                    console.log(err)
                })
        };

        fetchData();
    }, [name])

    return (
        <Avatar alt={name} className={classes.large} src={googleImage} />
    )
}

export default AvatarImg;

AvatarImg.propTypes = {
    name: PropTypes.string.isRequired
}