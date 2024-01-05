import axios from "axios";

const key = import.meta.env.VITE_API_KEY

export const useApi = () => ({
    pegarClima: async (cidade: string) => {
        try{
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&mode=json&appid=${key}`, {});
            return {...data.main, speed: data.wind.speed, name: data.name}
        } catch(e: any){
            console.log(e.response.data.message);
        }
    },
});