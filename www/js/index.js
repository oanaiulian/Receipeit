//start the framework7 application
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/pagetwo/',
      url: 'pagetwo.html',
    },
  ],
    
  // ... other parameters
});
var mainView = app.views.create('.view-main');
var swiper = app.swiper.create('.swiper-container', {
    speed: 100

});

// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      //console.log(query, previousQuery);
    }
  }
});
//reference the html objects
var login = document.getElementById('login').addEventListener('click', formSubmit);
var homebtn = document.getElementById('homebtn').addEventListener('click', homeRedirect);
var dashboardbtn = document.getElementById('dashboardbtn').addEventListener('click', dashboardRedirect);

 /*METHOD
 - Responsible for:
    -redirecting the user to the homepage;
 - Parameters:
    -void;
*/
function homeRedirect(){
    window.location.href = "index.html";
}


 /*METHOD
 - Responsible for:
    -redirecting the user to the dashboard;
 - Parameters:
    -no param -> void;
*/
function dashboardRedirect(){
    window.location.href = "dashboard.html";
}

 /*METHOD
 - Responsible for:
    -submitting the form;
 - Parameters:
    -void;
*/
function formSubmit(){
    console.log('submitted');
    document.getElementById('myForm').submit();
    //window.location.href = "index.html";
}






























