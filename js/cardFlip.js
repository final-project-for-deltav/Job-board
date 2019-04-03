'use strict';

var cardContainers = document.getElementsByClassName('card-container');

for (var i = 0; i < cardContainers.length; i++) {
  cardContainers[i].addEventListener('mouseenter', showBack);
  cardContainers[i].addEventListener('mouseleave', showFront);
}

function showBack(e) {
  e.target.firstElementChild.style.transform = 'rotateY(180deg)';
  e.target.lastElementChild.style.transform = 'translateY(-224px) rotateY(0deg)';
}

function showFront(e) {
  e.target.firstElementChild.style.transform = 'rotateY(0deg)';
  e.target.lastElementChild.style.transform = 'translateY(-224px) rotateY(180deg)';
}