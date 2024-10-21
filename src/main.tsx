import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <img
      className=" fixed top-0 left-0 w-full h-full z-[-1]"
      src="https://www.mubis.es/media/users/13585/230216/intro-de-marvel-studios-editada-con-cierto-personaje-en-capitana-marvel-spoiler-original.jpg"
      alt=""
    />
  </StrictMode>
);
