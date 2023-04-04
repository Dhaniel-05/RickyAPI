import React, { useState } from "react";
import "./Characters.css";

const Characters = () => {
  const [character, setCharacter] = useState({
    id: "",
    name: "",
    gender: "",
    status: "",
    species: "",
    origin: "",
    type: "",
    location: "",
    image: "",
  });
  const [characterList, setCharacterList] = useState([]);
  var [listavacia, setlistavacia] = useState(0);
  var [idsObtenidos, setidsObtenidos] = useState([]);
  const [primeraConsulta, setPrimeraConsulta] = useState(true);

  const generateCharacter = () => {
    console.log("lista vacia " + listavacia);
    setPrimeraConsulta(false);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        let randomIndex = Math.floor(Math.random() * data.results.length);
        if (idsObtenidos.includes(data.results[randomIndex].id)) {
          randomIndex++;
        }
        setidsObtenidos(idsObtenidos.concat(data.results[randomIndex].id));
        const randomCharacter = data.results[randomIndex];
        setCharacter({
          id: randomCharacter.id,
          name: randomCharacter.name,
          gender: randomCharacter.gender,
          status: randomCharacter.status,
          species: randomCharacter.species,
          origin: randomCharacter.origin.name,
          type: randomCharacter.type,
          location: randomCharacter.location.name,
          image: randomCharacter.image,
        });
      });
    setCharacterList(characterList.concat(character));
    setlistavacia(listavacia + 1);
  };

  return (
    <>
      <div className="mainCharacters">
        <div className="botondiv">
          <button onClick={generateCharacter}>Generate</button>
        </div>
        {primeraConsulta ? (
          <div className="Informacion">
            <h1 className="message">
              Por favor dale click a "Generate" para generar un personaje
              aleatorio
            </h1>
          </div>
        ) : (
          <div className="Informacion">
            <div className="profileFoto">
              <img src={character.image} alt="" />
            </div>
            <div className="info">
              <h1>{character.name}</h1>
              <h2>Information:</h2>
              <p>
                <strong>Gender:</strong> <br /> {character.gender}
              </p>
              <p>
                <strong>Status:</strong> <br />
                {character.status}
              </p>
              <p>
                <strong>Specie:</strong>
                <br /> {character.species}
              </p>
              <p>
                <strong>Origin:</strong> <br />
                {character.origin}
              </p>
              <p>
                <strong>Location:</strong>
                <br /> {character.location}
              </p>
            </div>
          </div>
        )}
        <div className="ListaGenerada">
              <div>
                <h2>Personajes generados</h2>
              </div>
              <div className="PersonajeRegistrado">
                <table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th>Species</th>
                      <th>Origin</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {characterList.map((char) => (
                      <tr key={char.name}>
                        <td>
                          <img src={char.image} alt={char.name} />
                        </td>
                        <td>
                          <h3>{char.name}</h3>
                        </td>
                        <td>
                          <p>{char.gender}</p>
                        </td>
                        <td>
                          <p>{char.status}</p>
                        </td>
                        <td>
                          <p>{char.species}</p>
                        </td>
                        <td>
                          <p>{char.origin}</p>
                        </td>
                        <td>
                          <p>{char.location}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
