const PYTHON_API =
  "https://teach-game-analisis-datos-python.vercel.app";

export async function obtenerDatosLimpios() {
  const response = await fetch(
    `${PYTHON_API}/api/interno/datos-limpios`
  );

  if (!response.ok) {
    throw new Error("Error al obtener datos");
  }

  return response.json();
}