import { useNavigate } from "react-router-dom";

type Props = {
  series: any;
  type: string;
};

export const CardObjects: React.FC<Props> = ({ series, type }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap overflow-y-auto max-h-[30em] gap-1">
      {series &&
        series.length > 0 &&
        series.map((serie: any) => (
          <div
            className="h-36 article cursor-pointer"
            key={serie.id}
            onClick={() => {
              if (type === "series") return navigate(`/serie/${serie.id}`);
              if (type === "comics") return navigate(`/comics/${serie.id}`);
              if (type === "creators") return navigate(`/creator/${serie.id}`);
              if (type === "events") return navigate(`/event/${serie.id}`);
              if (type === "characters")
                return navigate(`/character/${serie.id}`);
            }}
          >
            {serie.thumbnail && (
              <img
                title={serie.name}
                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                alt={serie.name}
                className="h-24 object-contain rounded-lg "
              />
            )}
          </div>
        ))}
    </div>
  );
};
