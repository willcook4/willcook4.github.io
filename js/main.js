document.addEventListener('DOMContentLoaded', function() {
  function option1() {
    console.log('I also like...');
    console.log('- Chocolate ');
    console.log('- Beer');
    console.log('- Penguins');
    console.log('- Honey');
    console.log('- Apple Products');
  }
  function option2() {
    console.log('Thanks for the fish!!!');
  }
  function option3() {
    console.log('Remember: ');
    console.log(' - buy milk');
    console.log(' - buy bread');
    console.log(' - buy eggs');
    console.log(' - email Will');
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var a = getRandomInt(1, 3);
  if (a === 1) {
    option1();
  } else if (a === 2) {
    option2();
  } else {
    option3();
  }
  console.log('');
  console.log('Refresh the page to get something new');
});