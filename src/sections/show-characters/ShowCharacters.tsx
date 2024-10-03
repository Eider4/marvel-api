import { useNavigate } from "react-router-dom";
import { characters } from "../../types/types";
type Props = {
  data: characters[];
};
const ShowCharacters: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {data.map((character: characters) => (
        <div
          key={character.id}
          className="article h-48 cursor-pointer"
          onClick={() => navigate(`/character/${character.id}`)}
        >
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-56  object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-marvel-yellow">
            {character.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ShowCharacters;
