
function validate() {

    var un = document.form.username;
    var pw = document.form.pword;
    //var unArray = ["priyanka", "gayatri", "irfan", "omkar","kirthi"];  // as many as you like - no comma after final entry
    //var pwArray = ["priyanka123", "gayatri123", "irfan123", "omkar123","kirthi123"];  // the corresponding passwords;
    //for (var i=0; i <unArray.length; i++) {
    if ((un.value.trim() == "irf@gmail.com") && (pw.value.trim() == "123")) {
        document.getElementById("msg").innerText = "User name or password can not be empty"
        valid = true;
        window.location="http://www.google.com";
        
        // break;
    }
    else{
        alert("Enter correct username or password")
    }
    // if(valid)
    // {
       
    // }


}
