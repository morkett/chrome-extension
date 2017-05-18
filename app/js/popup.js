document.getElementById('select-this')
   .addEventListener('keydown', function(event) {
    //  event.preventDefault();
     if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById('clickMe').click();
       console.log('hit');
     }

   });



var button = document.getElementById('clickMe');

button.addEventListener('click', function (e) {
  e.preventDefault();
  //cut text

  var test = document.getElementById('select-this').value;

  var testResult = test.substring(0, test.indexOf('&'));

  test = testResult;

  document.getElementById('select-outer').innerHTML = '<input id="select-this"' +' onkeydown = "if (event.keyCode === 13) document.getElementById('+'\'clickMe\''+').click()"' + ' value="'+ 'peerflix ' + '\'' + test + '\'' + ' --vlc' + '" autofocus placeholder=\"paste link here\" />';


  var copyNew = document.execCommand('copy', false, document.getElementById('select-this').select());

  document.getElementById('select-outer').classList.add('select-outer-copy');

  console.log(test);
  console.log(copyNew);



});
