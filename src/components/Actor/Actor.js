import React from 'react'
import PropTypes from 'prop-types';

const Actor = ({ data: { height, mass, hair_color, skin_color, birth_year, gender } }) => (
    <>
        <ul>
            <li>
                Height: {height}
            </li>
            <li>
                Mass: {mass}
            </li>
            <li>
                Hair color: {hair_color}
            </li>
            <li>
                Skin color: {skin_color}
            </li>
            <li>
                Year of birth: {birth_year}
            </li>
            <li>
                Gender: {gender}
            </li>
        </ul>
    </>
)

export default Actor

Actor.propTypes = {
  data: PropTypes.object.isRequired
}