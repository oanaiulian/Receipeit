//initiate the backendless application by inserting the app ID and the JS Api key
Backendless.initApp("38D2266B-EF1A-0CF3-FF65-A690213C4300","D3546A40-29FC-EAD4-FFDB-52225A01A900");
var image, file, output, phonegapcamera, submitBtn, mealName, mealDescription, mealDirections, mealIngredients, image1, image2, photo;
onDeviceReady();


/*METHOD
 - Responsible for:
    -preparing the variables needed;
 - Parameters:
    -no parameters;
*/
function onDeviceReady() {
    //console.log('device ready'); //debugg
    mealName = document.getElementById('mealName').value;
    mealDescription = document.getElementById('mealDescription').value;
    mealDirections = document.getElementById('mealDirections').value;
    mealIngredients = document.getElementById('mealIngredients').value;
    submitBtn = document.getElementById('submitBtn').addEventListener('click', onAddMeal);
    image = document.getElementById('image').value;
    // if the image is uploaded call that function
    document.getElementById('image').addEventListener('change', handleFileSelect, false);
}
  

/*METHOD
 - Responsible for:
    -takes the file and stores it as an object called 'file';
    -this stage needed in order to store the actual file not the path of it;
 - Parameters:
    -evt which is a backendless event;
*/
function handleFileSelect(evt) 
{
    //console.log('file uploaded'); //debugg
    file = evt.target.files[0]; // FileList object
}



/*METHOD
 - Responsible for:
    -uploading the image into a file called 'my-folder' inside the files tab of backendless;
    -after uploading the file instantly takes it's URL;
    -takes the URL and passes it to the function that stores the whole recipe (the URL as a string);
 - Parameters:
    -no param;
*/
function onAddMeal() {
    //var path = "my-folder" + ID_of_recipe; //tryed to make a new folder for each image uploaded
    //this method uploads the file into that folder
    Backendless.Files.upload( file, "my-folder" )
    //then passes the fileURLs as a parameter to be used
    .then( function( fileURLs ) {
       //console.log( "File successfully uploaded. Path to download: " + fileURLs.fileURL );
        //calls the addMeal method passing the image URL
        addMeal(fileURLs.fileURL);
     })
    //this method cathces the error
    .catch( function( error ) {
       //console.log( "error - " + error.message );
     });
}


/*METHOD
 - Responsible for:
    -debugging purposes;
    -calling redirect;
 - Parameters:
    -savedMeal which is the meal object that has just been inserted;
*/
function saved(savedMeal){
    console.log( "New Recipe has been saved as: " + savedMeal.mealName); //debugg
    //calls redirect
    homeRedirect();
}


/*METHOD
 - Responsible for:
    -creates an object called newMeal;
    -inserts the data passed by the user into it;
    -saves that meal into the database as a new record;
 - Parameters:
    -fileURL -> which is the image URL passed by the '.then()' backendless method;
*/
function addMeal(fileUrl){
    //console.log(fileUrl);
    //takes the text within the input fields
    var mealName = $("#mealName").val();
    var mealDescription = $("#mealDescription").val();
    var mealDirections = $("#mealDirections").val();
    var mealIngredients = $("#mealIngredients").val();
    //create an object
    var newMeal = {};
    //add this parameters to it
    newMeal.mealName = mealName;
    newMeal.mealDescription = mealDescription;
    newMeal.mealDirections = mealDirections;
    newMeal.mealIngredients = mealIngredients;
    newMeal.img1URL = fileUrl;
    //insert the object into the database as a new record
    Backendless.Data.of("meal").save(newMeal).then(saved).catch(error);
}


 /*METHOD
 - Responsible for:
    -handling the error;
 - Parameters:
    -err -> which is the actual error passed by the backendless ajax call;
*/
function error(err) {
    alert(err);
}






















