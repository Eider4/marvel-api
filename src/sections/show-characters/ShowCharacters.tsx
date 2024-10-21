import { useNavigate } from "react-router-dom";
import { characters } from "../../types/types";
import { useState } from "react";
type Props = {
  data: characters[];
  type: string;
};
const ShowCharacters: React.FC<Props> = ({ data, type }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {data.map((character: characters) => (
        <div key={character.id}>
          <CardCharacters character={character} type={type} />
        </div>
      ))}
    </div>
  );
};

export default ShowCharacters;

export const CardCharacters = ({
  character,
  type,
}: {
  character: characters;
  type: string;
}) => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
        key={character.id}
        className="relative h-80 w-72 cursor-pointer"
        onClick={() => navigate(`/${type}/${character.id}`)}
      >
        {active ? (
          <>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="w-72 h-80  object-cover rounded-md mb-4"
            />
            <h2
              style={{ fontFamily: "Marvel", letterSpacing: "0.1em" }}
              className="text-7xl font-bold text-black absolute bottom-0 left-0 right-0 text-center"
            >
              {character.name}
            </h2>
          </>
        ) : (
          <>
            <div className="h-80 w-72 object-cover rounded-md mb-4 text-black">
              <p>{character.name}</p>
              <p>{character.description}</p>
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt={character.name}
                className="w-72 h-80 object-cover"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
