import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "../pages/main-page/MainPage";
import CharactersDetail from "../pages/character-detail/CharactersDetail";
import CharactersPages from "../pages/characters-pages/CharactersPages";
import { SerieDetail } from "../pages/serie-detail/SerieDetail";
import { ComicsDetail } from "../pages/comics-detail/ComicsDetail";
import { CreatorDetail } from "../pages/creator-detail/CreatorDetail";
import { EventDetal } from "../pages/event-detail/EventDetal";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/character/:id" element={<CharactersDetail />} />
        <Route path="/pages/:page" element={<CharactersPages />} />
        <Route path="/serie/:id" element={<SerieDetail />} />
        <Route path="/comics/:id" element={<ComicsDetail />} />
        <Route path="/creator/:id" element={<CreatorDetail />} />
        <Route path="/event/:id" element={<EventDetal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
