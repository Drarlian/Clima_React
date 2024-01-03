import { createContext, useState } from "react";
import { useApi } from "../hooks/useApi";

type ClimaContextType = {
    clima: {
        feels_like: number,
        humidity: number,
        name: string,
        pressure: number,
        speed: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    };
    receberClima: (cidade: string) => void;
}

export const ClimaContext = createContext({} as ClimaContextType);

const ClimaProvider = ({children}: {children: React.ReactNode}) => {
    const [clima, setClima] = useState(null!);
    const { pegarClima } = useApi();

    async function receberClima(cidade: string) {
        const obj = await pegarClima(cidade);
        await setClima(obj);
    }


    return <ClimaContext.Provider value={{clima, receberClima}}>{children}</ClimaContext.Provider>
}

export default ClimaProvider;