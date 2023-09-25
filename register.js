// console.log(button)
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('mouseenter', function() {
//   this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
});

submitButton.addEventListener('mouseleave', function() {
//   this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
});



submitButton.addEventListener('click', function(){
    //validasi
    const fullname = document.getElementById("fullname").value;
    if(fullname.length < 4){
        //display error message
        alert('Full name\'s length must be at least 4 characters long');
        return;
    }
    
    const male = document.getElementById("genderm");
    const female = document.getElementById("genderf");
    if(!male.checked && !female.checked){
        alert('You must choose a gender');
        return;
    }

    const email = document.getElementById("email").value;
    if(!email.endsWith("@email.com")){
        alert('Email must end with @email.com');
        return;
    }

    const dateofbirth = document.getElementById("dob").value;
    const date = new Date(dateofbirth);
    const year = date.getFullYear();
    
        if (dateofbirth === "") {
            alert("Invalid date", "dob");
            // return;
        }
        else if (year == isNaN || year > 2023) {
            alert("Invalid year", "dob");
            return;
        }

    const password = document.getElementById("password").value;
    if(password.length < 8){
        alert('Password must be at least 8 characters long');
        return;
    }

    let checkletter = false, checknumber = false;
    for(let i=0; i< password.length; i++){
        if(password[i] >= 'a' && 
        password[i] <= 'z' ||
        password[i] >= 'A' &&
        password[i] <= 'Z'){
            checkletter = true;
        }

        if(password[i] >= '0' && 
        password[i] <= '9'){
            checknumber = true;
        }

        if(checkletter && checknumber) break;
    }
    if(!checkletter || !checknumber){
        alert('Password must contain at least 1 letter and 1 number');
        return;
    }

    const countrySelect = document.getElementById('country');
    if (countrySelect.value === '') {
      alert('Please select a country');
      return;
    }
    
    alert('Registered');
});