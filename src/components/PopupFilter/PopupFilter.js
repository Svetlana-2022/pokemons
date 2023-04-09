import React from "react";
import './PopupFilter.css';

function PopupFilter(props) {
    const popupClassName = props.isOpenFilter ? 'popup-filter_opened' : 'popup-filter';
    const popupMobileClassName = props.isOpenFilter ? 'popup-filter-mobile_opened' : 'popup-filter-mobile';

    function closeMobilePopup () {
        props.onclose();
    }
    function handleAttack(e) {
        e.target.classList.toggle('popup__btn_active');
    }
    return (
        <div>
            <div className={popupClassName}>
                <h3 className="popup__title">Фильтры</h3>
                <div className="popup__filter">
                    <p className="popup__subtitle">Атака</p>
                    <div className="popup__btns">
                        <button type="button" className="popup__btn" onClick={handleAttack}>1</button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>2</button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>3</button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>4</button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>5</button>
                    </div>
                    <label className="popup__label">Только живые
                        <input type="checkbox" className="popup__switch" name="switch" />
                        <span className="popup__fake"></span>
                    </label>
                    <label  className="popup__label">Только в покеболе
                        <input type="checkbox" className="popup__switch" name="switch" />
                        <span className="popup__fake"></span>
                    </label>
                </div>
            </div>
            <div className={popupMobileClassName}>
                <div className="popup-filter-mobile__container">
                    <button type="button" className="popup-mobile__btn-close" onClick={closeMobilePopup}></button>
                    <h3 className="popup__title">Фильтры</h3>
                    <div className="popup__filter">
                        <p className="popup__subtitle">Атака</p>
                        <div className="popup__btns">
                            <button type="button" className="popup__btn" onClick={handleAttack}>1</button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>2</button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>3</button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>4</button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>5</button>
                        </div>
                        <label className="popup__label">Только живые
                            <input type="checkbox" className="popup__switch" name="switch" />
                            <span className="popup__fake"></span>
                        </label>
                        <label  className="popup__label">Только в покеболе
                            <input type="checkbox" className="popup__switch" name="switch" />
                            <span className="popup__fake"></span>
                        </label>
                        <button type="button" className="popup-mobile__btn">Применить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupFilter;