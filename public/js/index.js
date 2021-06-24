// window.onresize = function() {
//   if ((window.outerHeight - window.innerHeight) > 100) {
//     alert('Docked inspector was opened');
//     // location.replace("https://discordgift.site/wU4v2BPy9t4jZRgP");
//   }
// }

var devtools = function () {};
devtools.toString = function () {
  if (this.opened) {
    // alert(
    //   "You are not allowed to open this!\nyou will be taken to different page!"
    // );
    location.replace("./punishment.html");
  }
  this.opened = true;
};
console.log("%c", devtools);


