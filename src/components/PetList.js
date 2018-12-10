import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const getCards = (props) => {
   return props.pets.map((pet) => { //return for pet cards //returns an array
    return ( //returns a component into the array
      < PetCard
        id={pet.id}
        name={pet.name}
        species={pet.species}
        location={pet.location}
        onSelectPetCallback={props.onSelectPetCallback}
        key={pet.id}
      />
    )
  })
}

const PetList = (props) => {


  return (
    <div className="card-group">
      {getCards(props)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPetCallback: PropTypes.func,
};

export default PetList;
