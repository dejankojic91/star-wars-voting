import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import { fetchStarWarsData, searchStarWarsActor } from './utils/api';
import CardContainer from './components/Card/Card';
import Actor from './components/Actor/Actor';
import Navbar from './components/Navbar/Navbar';
import './App.scss'

const App = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      await fetchStarWarsData('people')
        .then(({ data }) => {
          const results = data.results.filter((result, i, results) => {
            return results.length - 1 !== i;
          })
          setActors(results)
        }).catch(err => {
          console.log(err)
        })
    };

    fetchActors();
  }, [])

  const handleSearchChange = async (e) => {
    await searchStarWarsActor('people', e)
      .then(({ data }) => {
        setActors(data.results)
      }).catch(err => {
        console.log(err)
      })
  }

  const ActorsList = actors.map(actor => (
    <CardContainer key={actor.name} name={actor.name}>
      <Actor data={actor} />
    </CardContainer>
  ));

  return (
    <>
      <Navbar handleChange={e => handleSearchChange(e.target.value)} />
      <Container maxWidth="sm" className="container">
        {ActorsList}
      </Container>

    </>
  );
}

export default App;
