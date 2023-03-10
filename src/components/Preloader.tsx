import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export const Preloader = () => {
  const [loaderText, setLoaderText] = useState("");

  const textArray = [
    "Buscando informações...",
    "Aguarde, estamos quase prontos...",
    "Finalizando...",
  ];

  useEffect(() => {
    async function setText() {
      for (const text of textArray) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoaderText(text);
      }
    }
    setText();
  }, []);

  return (
    <div className="bg-white flex items-center flex-col justify-center h-full gap-4">
      <Spinner />
      <div
        className={`opacity-0 transition-opacity duration-500 ${
          loaderText && "!opacity-100"
        }`}
      >
        <span className="font-semibold text-lg">{loaderText}</span>
      </div>
    </div>
  );
};
