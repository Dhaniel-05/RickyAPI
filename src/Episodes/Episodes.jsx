import React, { useState, useEffect } from 'react'
import './Episodes.css'

const Episodes = () => {

    const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      });
  }, []);

  const handleChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() !== "") {
      const filtered = characters.filter((char) =>
        char.name.toLowerCase().includes(term)
      );
      setFilteredCharacters(filtered);
    } else {
      setFilteredCharacters(characters);
    }
  };
      return (
        <div className="mainEpisodes">
          <div className="SearchDiv">
            <textarea
              onChange={handleChange}
              name="SearchBar"
              id="SearchBar"
              cols="40"
              rows="1"
              placeholder="Search"
            ></textarea>
          </div>
          <div className="ResultsDiv">
            {filteredCharacters.length > 0 ? (
              filteredCharacters.map((char, index) => (
                <div className="infoCard" key={char.id}>
                  <div className="imgDiv">
                    <img src={char.image} alt="" />
                  </div>
                  <div className="info">
                    <h3>{char.name} </h3>
                    <h4>Episodes:</h4>
                    {char.episode.map((episodeUrl) => (
                      <p key={episodeUrl}>{episodeUrl}</p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className='NotFound'>No se encontraron resultados</p>
            )}
          </div>
        </div>
      );
    }

export default Episodes