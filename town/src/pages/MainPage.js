import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../App.css';

const MainPage = () => {
    return (
        <div className="mainPage">
            <h1>Наш город - Курск</h1>
            <ul className="menu__list">
                <li className="menu__item"><Link to="/" className='menu__item-link'>Информация о городе</Link></li>
                <li className="menu__item"><Link to="/mostPlace" className='menu__item-link'>Главная достопримечательность</Link></li>
                <li className="menu__item"><Link to="/otherPlaces" className='menu__item-link'>Другие достопримечательности</Link></li>
                <li className="menu__item"><Link to="/townPhotos" className='menu__item-link'>Фотогаллерея</Link></li>
                <li className="menu__item"><Link to="/photoUploadForm" className='menu__item-link'>Загрузить фото</Link></li>
            </ul>
        </div>       
    );
}
export default MainPage;