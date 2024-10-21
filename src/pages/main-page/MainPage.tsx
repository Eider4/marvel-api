import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./main-page.module.css";
import { obtenerPersonajesConImagen } from "../../utils/getCharacters";
import ReactLoading from "react-loading";

export default function MainPage() {
  const [data, setData] = useState<[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>("characters");
  const navigate = useNavigate();

  const handleGet = async (type: string) => {
    setData([]);
    const response: any = await obtenerPersonajesConImagen(type);
    setData(response);
  };

  useEffect(() => {
    handleGet("characters");
  }, []);

  const handleItemClick = (type: string) => {
    setActiveItem(type);
    handleGet(type);
  };

  return (
    <div className="min-h-screen text-black flex flex-col items-center pt-10">
      <h1 className="texto-con-fondo ">Marvel</h1>
      <div className="absolute top-[16rem] pb-10">
        <ul className={`flex justify-center flex-wrap ${styles.modalList}`}>
          {["characters", "comics", "creators", "events", "series"].map(
            (type) => (
              <li key={type}>
                <p
                  onClick={() => handleItemClick(type)}
                  data-text={type.charAt(0).toUpperCase() + type.slice(1)}
                  className={`mr-10 my-0 ${
                    activeItem === type ? styles.active : ""
                  }`} // Clase activa
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
              </li>
            )
          )}
        </ul>
        <div className="relative">
          <p
            onClick={() => navigate("/pages-" + activeItem + "/1")}
            className="text-marvel-yellow cursor-pointer absolute top-[-20px] right-3"
          >
            more {activeItem}
          </p>
          <section className={`${styles.section} `}>
            {data && data.length > 0 ? (
              data.map((item: any) => (
                <img
                  key={item.id}
                  className={styles.section_img}
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  alt={item.name}
                />
              ))
            ) : (
              <div className="relative w-[900px] h-[400px]">
                <span className="absolute center1">
                  <ReactLoading type={"bars"} color="#999" />
                </span>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
