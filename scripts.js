// $("body").mouseover(function(e) {

//   e = e || window.event; var cursor = { y: 0 }; cursor.y = e.pageY; //Cursor YPos
//   var papaWindow = parent.window;
//   var $pxFromTop = $(papaWindow).scrollTop();
//   var $userScreenHeight = $(papaWindow).height();

//   if (cursor.y > (($userScreenHeight + $pxFromTop) / 1.25)) {

//          if ($pxFromTop < ($userScreenHeight * 3.2)) {

//                    papaWindow.scrollBy(0, ($userScreenHeight / 30));
//              }
//         }
//   else if (cursor.y < (($userScreenHeight + $pxFromTop) * .75)) {

//         papaWindow.scrollBy(0, -($userScreenHeight / 30));

//         }

//    }); //End mouseover()

// var typetest = new Typed('#typetest', {
//   strings: ['Mother of Pearl','Witch of the Wave','Cape of Good Hope','Stone Fleet'],
//     typeSpeed: 60,
//     backSpeed: 60,
//     attr: 'placeholder',
//     bindInputFocusEvents: true,
//     loop: true
// });