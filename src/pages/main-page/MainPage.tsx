import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-marvel-black text-white flex flex-col items-center pt-10">
      <h1 className="text-5xl font-bold text-marvel-red mb-8">
        Marvel Characters
      </h1>
      <p
        onClick={() => navigate("/pages/1")}
        className="text-marvel-yellow cursor-pointer"
      >
        Go to page 1
      </p>
    </div>
  );
}
