import { apikey, hash, ts, urlMain } from "../enpoints-utils/enpointsUtils";

export async function obtenerPersonajesConImagen(type: String) {
  const personajesConImagen = [];
  let offset = 0;

  // Construcción de la URL base con autenticación
  const urlBase = `${urlMain}${type}?ts=${ts}&apikey=${apikey}&hash=${hash}`;

  while (personajesConImagen.length < 12) {
    try {
      // Agregar el offset para la paginación
      const response = await fetch(`${urlBase}&offset=${offset}`);
      const data = await response.json();
      const personajes = data.data.results;

      // Filtrar personajes con imágenes válidas
      const personajesValidos = personajes.filter((personaje: any) => {
        return !personaje.thumbnail.path.includes("image_not_available");
      });

      // Añadir personajes válidos al array
      personajesConImagen.push(...personajesValidos);

      // Aumentar el offset para la siguiente solicitud
      offset += personajes.length;
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      break;
    }
  }

  // Devolver solo los primeros 12 personajes
  return personajesConImagen.slice(0, 12);
}
