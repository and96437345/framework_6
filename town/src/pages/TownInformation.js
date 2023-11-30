import React from 'react';
import '../App.css';
import Data from './Data';

const TownInformation = () => {
    return (
        <div className="townImformation">
            <h2>Информация о городе</h2>
            <h3>Название города:</h3>
            <p>{ Data.name}</p>
            <div className="image">
                <img src={ Data.flag } alt="Курск"/>
            </div>
            <h3>Количество жителей:</h3>
            <p>{ Data.citizens }</p>
            <h3>Название страны:</h3>
            <p>{ Data.countryName }</p>
            <div className="image">
                <img src={ Data.countryFlag } alt="Россия"/>      
            </div> 
        </div>  
    );
}
export default TownInformation;
