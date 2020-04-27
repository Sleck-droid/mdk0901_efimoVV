// 1
let books = document.querySelectorAll('.book');
books[1].style.order = '-1';
books[2].style.order = '2';
books[3].style.order = '1';
books[5].style.order = '1';

//2
document.body.style.backgroundImage = 'url("image/adv.jpg")';


// 3
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';

// 4
document.querySelector('.adv').remove();
