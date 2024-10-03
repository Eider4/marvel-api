export async function GetFetch(url: string) {
  try {
    const response = await fetch(url);
    const contador: number = parseInt(localStorage.getItem("contador") || "0");
    const newContador = contador + 1;
    localStorage.setItem("contador", newContador.toString());
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
