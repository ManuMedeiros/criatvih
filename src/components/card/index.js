import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Image } from '@chakra-ui/react';


const MovieCard = ({ movie }) => {

    return (
        <Card h={200} margin="0 10px" sx={{ maxWidth: 250, position: "relative" }}>
            <Box sx={{ position: 'relative'}}>
                <Image
                    height="auto"
                    src={movie.img}
                />
            </Box>
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
}

export default MovieCard;