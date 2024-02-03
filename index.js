console.log('It works');

var i = 0;
var txt = 'My UI/UX interest started with playing video games, I always noticed the menu design in them, good and bad. I then learned that it was actually a specific field you can go into, and here I am. I have done plenty of UX work as an IT Tech at my current job, including a complete website rework and writing guides on how to use our various programs.';
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}