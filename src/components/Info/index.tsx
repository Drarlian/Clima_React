import { useContext } from 'react';
import { DivInfo } from './styles.ts';
import { ClimaContext } from '../../contexts/ClimaContext.tsx';
import { BsThermometerSnow } from "react-icons/bs";
import { BsThermometerSun } from "react-icons/bs";
import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const Info: React.FC = () => {

    const { clima } = useContext(ClimaContext);

    return (
    <DivInfo>
        <div className='info-principal'>
            <div className='info-temperatura'>
                <h3>{clima?.name}</h3>
                <h1>{clima?.temp.toFixed(0)}°C</h1>
            </div>
            <div className='info-extras'>
                <div className='info-titulo'>
                    <h1>Mais Informações</h1>
                </div>
                <div className='info-quadrados'>
                    <div>
                        <p><BsThermometerSnow className="icone-clima" /></p>
                        <p>{clima?.temp_min.toFixed(0)}°C</p>
                    </div>
                    <div>
                        <p><BsThermometerSun className="icone-clima" /></p>
                        <p>{clima?.temp_max.toFixed(0)}°C</p>
                    </div>
                    <div>
                        <p><WiHumidity className="icone-clima" /></p>
                        <p>{clima?.humidity}%</p>
                    </div>
                    <div>
                        <p><RiWindyLine className="icone-clima" /></p>
                        <p>{clima?.speed}Km/h</p>
                    </div>
                </div>
            </div>
        </div>
    </DivInfo>
    );
}

export default Info;