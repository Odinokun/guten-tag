module.exports = function() {

  //общее кол-во элементов
  let listLength = $('.top-pharmacy__item').length;
  let order = listLength;

  $('.top-pharmacy__item').on('click', function() {
    let item =          $('.top-pharmacy__item');
    let disabledItem =  $('.top-pharmacy__item.disabled');

    //засовываем нужный элемент вниз списка
    $(disabledItem).css('order', order);
    order += 1;

    //убираем класс disabled у открывающегося элемента
    $(disabledItem).removeClass('disabled');

    //убираем элемент по клику
    $(this).addClass('disabled');

    //кол-во скрытых элементов
    let listDisabledLength = $('.top-pharmacy__item.disabled').length;

    //показываем смайл с надписью
    if (listLength === listDisabledLength) {
      $('#top-pharmacy__free').addClass('active')
    } else {
      $('#top-pharmacy__free').removeClass('active')
    }
  });


};