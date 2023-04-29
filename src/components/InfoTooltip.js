import SuccessIcon from "../images/success-icon.svg";
import FailIcon from "../images/fail-icon.svg";
import React from "react";

function InfoToolTip(props) {

    return (
        <div className={`popup popup_type_tooltip ${props.isOpen ? "popup_opened" : ""}`} >
            <div className="popup__message-container">
                {props.isSuccess ? (
                    <>
                        <img
                            className="popup__tooltip-image"
                            src={`${SuccessIcon}`}
                            alt="Вы успешно зарегистрировались!"
                        />
                        <p className="popup__tooltip-message">
                            Вы успешно зарегистрировались!
                        </p>
                    </>
                ) : (
                    <>
                        <img
                            className="popup__tooltip-image"
                            src={`${FailIcon}`}
                            alt="Не удалось зарегестрироваться."
                        />
                        <p className="popup__tooltip-message">
                            Что-то пошло не так. Попробуйте ещё раз!
                        </p>
                    </>
                )}

                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть всплывающее окно"
                    onClick={props.onClose}>
                </button>
            </div>
        </div>
    );
}

export default InfoToolTip;