//Подключение модулей
import { openModal, closeModal } from "./modules/modal-window.js";
//Объявление переменных
const callBtns = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    closePopup = popupCall.querySelector('.popup-close');
//Вызов функци
//Открытие
callBtns.forEach(item => {
    item.addEventListener('click', ()=>{
        openModal(popupCall);
    });
});
//Закрытие(крестик)
closePopup.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(popupCall);
});
//Закрытие(пустое место)
popupCall.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.closest('.popup-content')) {
        closeModal(popupCall);
    }
});
