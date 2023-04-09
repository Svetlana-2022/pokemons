import React from 'react';   
import './Pokemon.css';
import search from '../../images/search.svg';
import PopupSort from '../PopupSort/PopupSort';
import PopupFilter from '../PopupFilter/PopupFilter';

function Pokemon() {
    const [popupOpen, setPopupOpen] = React.useState(false);
    const [popupOpenFilter, setPopupOpenFilter] = React.useState(false);
    const popupClassName = popupOpen ? 'pokemon__sort_active' : '';

    function closePopup() {
    setPopupOpen(false);
    setPopupOpenFilter(false);
    }
    return (
        <section className="pokemon">
            <div className="pokemon__container">
                <h1 className="pokemon__title">Покемоны</h1>
                <div className={`pokemon__sort ${popupClassName}`}>
                    <p className="pokemon__text">Сначала новые</p>
                    {popupOpen ? (
                        <div type="button" className="pokemon__img-close" onClick={() => setPopupOpen(false)}></div>
                    ) : (
                        <div type="button" className="pokemon__img" onClick={() => setPopupOpen(true)}></div>
                    )}
                    <PopupSort isOpen={popupOpen} onclose={closePopup} />
                </div>
            </div>
            <div className="pokemon__container-form">
                <form className="form" name="search">
                    <img className="form__img" src={search} alt="лупа"/>
                    <input type="text" className='form__input' placeholder='Поиск'/>
                </form>
                {popupOpenFilter ? (
                    <div type="button" className="pokemon__filter-btn pokemon__filter-btn_active" onClick={() => setPopupOpenFilter(false)}></div>
                ) : (
                    <div type="button" className="pokemon__filter-btn" onClick={() => setPopupOpenFilter(true)}></div>
                )}
                <PopupFilter isOpenFilter={popupOpenFilter} onclose={closePopup}/>
            </div>
        </section>
    )
}

export default Pokemon;