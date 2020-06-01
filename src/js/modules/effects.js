module.exports = function() {

  //общее кол-во элементов
  let listLength = $('.top-pharmacy__item').length;
  let order = listLength;

  //скрытие-появление касс
  $('.top-pharmacy__item').on('click', function() {
    let disabledItem =  $('.top-pharmacy__item.disabled');

    soundClick();

    //засовываем нужный элемент вниз списка
    $(disabledItem).css('order', order);
    order += 1;

    //добавляем класс для мигания желным цветом
    $(disabledItem).find('.top-pharmacy__left').addClass('active');
    //убираем класс disabled у открывающегося элемента
    $(disabledItem).removeClass('disabled');

    //убираем элемент по клику
    $(this).addClass('disabled');
    $(this).find('.top-pharmacy__left').removeClass('active');
  });

  //анимация при всех открытых кассах
  $('.top-pharmacy__item').on('click', function() {
    //кол-во скрытых элементов
    let listDisabledLength = $('.top-pharmacy__item.disabled').length;

    //показываем смайл с надписью
    if (listLength === listDisabledLength) {
      $('#top-pharmacy__free').addClass('active')
    } else {
      $('#top-pharmacy__free').removeClass('active')
    }
  });

  //проигрывание звука
  function soundClick() {
    let audio = new Audio();
    audio.src = 'assets/img/ring.mp3';
    audio.autoplay = true;
  }
};