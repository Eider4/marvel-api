import ReactLoading from "react-loading";

export const StateLoading: React.FC = () => {
  // "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
  return (
    <div className={"fixed top-0 left-0 w-full h-full bg-black/50 z-50"}>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ReactLoading type={"spokes"} color="#ddd" />
      </span>
    </div>
  );
};
