const formSignIn = document.querySelector('.form-signin');

// <----------------------------------------------->
/* <!-----~----SIGN IN POP UP!-----~~~~~------------>
<!-----------------------------------------------> */
const signinBtn = document.querySelector('.clickable-btn-sign-in').addEventListener('click', function(e){
  let displayShow = document.querySelector('.displayShow');
  let signinWrapper = document.querySelector('.sign-wrapper');
  let signinDiv = document.querySelector('.sign-in-div');

  // console.log('clicked');
  signinDiv.classList.remove("sign-wrapper");
  signinDiv.classList.add("displayShow");

  e.preventDefault();
});



// ------remove Sign-in popup--------

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signinWrapper = document.querySelector('.sign-wrapper');
  let signinDiv = document.querySelector('.sign-in-div');

  if(event.target === displayShow){
    signinDiv.classList.remove("displayShow");
    signinDiv.classList.add("sign-wrapper");

  }
});

// <----------------------------------------------->
/* <!-----~----SIGN UP POP UP!-----~~~~~------------>
<!-----------------------------------------------> */
const signupBtn = document.querySelector('.clickable-btn-sign-up').addEventListener('click', function(e){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.sign-up-div');

  // console.log('clicked');
  signupDiv.classList.remove("sign-wrapper");
  signupDiv.classList.add("displayShow");

  e.preventDefault();
});

// ------remove Sign-up popup--------

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.sign-up-div');

  if(event.target === displayShow){
    signupDiv.classList.remove("displayShow");
    signupDiv.classList.add("sign-wrapper");

  }
});

//----pop-up for listings----
const lampopup = document.querySelector('.lamp-popup').addEventListener('click' , function(e){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.lamp-popup-div');

  console.log('clicked here lamp popup');
  signupDiv.classList.remove("sign-wrapper");
  signupDiv.classList.add("displayShow");

  e.preventDefault();
});

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.lamp-popup-div');

  if(event.target === displayShow){
    signupDiv.classList.remove("displayShow");
    signupDiv.classList.add("sign-wrapper");

  }
});

const notebookpopup = document.querySelector('.notebook-popup').addEventListener('click' , function(e){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.notebook-popup-div');

  console.log('clicked here lamp popup');
  signupDiv.classList.remove("sign-wrapper");
  signupDiv.classList.add("displayShow");

  e.preventDefault();
});

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signupWrapper = document.querySelector('.sign-wrapper');
  let signupDiv = document.querySelector('.notebook-popup-div');

  if(event.target === displayShow){
    signupDiv.classList.remove("displayShow");
    signupDiv.classList.add("sign-wrapper");

  }
});
