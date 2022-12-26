import React from 'react';
import Card from './Card';
import characters from '../data';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         { characters.map( character => (
            <Card
               key={character.name}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            />
         ))}
      </div>
   );
}
