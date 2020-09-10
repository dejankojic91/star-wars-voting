import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Button from '@material-ui/core/Button';

import { setVotingData, getVotingData } from '../../utils/api';

const Voating = ({ name }) => {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const [handleVote, setHandleVote] = useState(false);

    useEffect(() => {
        getVotingData(name).on('value', (snapshot) => {
            const voats = snapshot.val();
            if (voats && voats.upvote) {
                setUpvote(voats.upvote);
                setHandleVote(false)
            }

            if (voats && voats.downvote) {
                setDownvote(voats.downvote)
                setHandleVote(false)
            }
        });
    }, [name]);

    useEffect(() => {
        handleVote && setVotingData(name, upvote, downvote)
    }, [name, upvote, downvote]);

    const handleUpvote = () => {
        setHandleVote(true)
        setUpvote(upvote + 1)
    }

    const handleDownvote = () => {
        setHandleVote(true)
        setDownvote(downvote + 1)
    }

    return (
        <>
            <Button
                size="large"
                onClick={handleUpvote}
                startIcon={<ThumbUpAltIcon style={{ color: 'green' }} />}
            >
                {upvote}
            </Button>
            <Button
                size="large"
                onClick={handleDownvote}
                startIcon={<ThumbDownAltIcon style={{ color: 'red' }} />}
            >
                {downvote}
            </Button>
        </>
    )
}

export default Voating


Voating.propTypes = {
    name: PropTypes.string.isRequired
}