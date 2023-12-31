import React from 'react';
import '../App.css';
import Sobor from '../znamenskiy-sobor.jpg'

const MostPlace = () => {
    return (
        
        <div className="mostPlace">
            <h2>Главная достопримечательность</h2>
            <h3>Знаменский собор</h3>
            <div className="mostPlace-image">
                <img src={Sobor} alt="Знаменский собор"/>
            </div>
            <p>Величественное здание собора, считающегося одной из визитных карточек Курска, является памятником архитектуры федерального значения. Храм освятили в 1826 г. в честь чудесно обретенного образа Божией Матери «Знамение», а также в ознаменование победы России в Отечественной войне 1812 г.</p>
            <p>Сооружение в стиле торжественного классицизма действительно впечатляет. Его огромный купол возвышается на 48 м над землей, а вес главного колокола составляет 1380 кг. Здание блистает колоннами, позолотой ажурных луковок.</p>
            <p>Интерьеры собора украшает восхитительная роспись, изящная лепнина, потрясающие витражи. Храмовая икона находится ныне в США, но в церкви можно увидеть ее точный список. Главными реликвиями собора считаются образа Иоанна Шанхайского, Матроны Московской, Серафима Саровского, содержащие частицы мощей святых.</p>      
            
                        
        </div>  
    );
}
export default MostPlace;