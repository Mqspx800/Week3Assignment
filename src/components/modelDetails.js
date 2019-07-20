import * as React from 'react'
import PropTypes from 'prop-types';

export default function modelDetails (props) {
  return (
    props.models? 
    <div>
        {props.models.map((item) => {
          return <ul key ={Math.ceil(Math.random(1,50)*10000)}>
          <li>{'name:'+ item.name}</li>
          <li>{'manufacturer:'+ item.manufacturer}</li>
          <li>{'year:'+ item.year}</li>
          <li>{'origin:'+ item.origin}</li>
          </ul>
        })}
    </div>:'...')
}

modelDetails.propTypes = {
  models: PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
  })).isRequired,
}


