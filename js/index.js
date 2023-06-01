// значения по дефолту
const RATINGS = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
}


// максимальное значение в рейтинге
const MAX_RATING = 5;


// при загрузке страницы подгуржаем данные по рейтингу
document.addEventListener('DOMContentLoaded', getRatings);


// получение данных от пользователя
const productSelect = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

let PRODUCT; // данные из селекта


// обработчик в select
productSelect.addEventListener('change', (e) => {
  PRODUCT = e.target.value;

  // активация инпута для ручного выставления рейтинга
  ratingControl.disabled = false;

  ratingControl.value = RATINGS[PRODUCT]; // выставление значения в иконках с рейтингом, в зависимости от данных
})


// смена иконок рейтинга
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value; // пользователь выходит из инпута, мы получаем значение

  if (rating > 5) {
    console.log('рейтинг должен быть 1 - 5');
    return;
  }

  // считывание рейтинга
  RATINGS[PRODUCT] = rating;
  
  getRatings(); // закрашивание иконок
})


// функция получения рейтинга
function getRatings() {
  for (let rating in RATINGS) {
    
    const starPercentage = (RATINGS[rating] / MAX_RATING) * 100; // получаем % соотношение

   
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;  // округляем

    // сетим (устанавливаем) заливку для звездочек
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // добавление числа для рейтинга
    document.querySelector(`.${rating} .number-rating`).innerHTML = RATINGS[rating];
  }
}