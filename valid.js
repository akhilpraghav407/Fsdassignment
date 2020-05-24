function formValid(){

    var firstName= document.getElementById("name1").value;
    var lastName= document.getElementById("name2").value;
    var address = document.getElementById("adrs").value;
    var female= document.getElementById("female");
    var email = document.getElementById("email").value;
    var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phone= document.getElementById("mobile").value;
    var regExp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pass1 =document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var regxp =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var male = document.getElementById("male");
   
    

    


    if(firstName === "" || firstName.length<=5 || firstName.length>=20  ){

         alert("firstname contains 20 charecters and not less than 5 ");
        document.getElementById("msg1").innerHTML = "** Invalid Firstname **";
        document.getElementById("msg1").style.color = "Red";
        
    }
    else{
        alert("valid first name");
        document.getElementById("msg1").innerHTML = "** valid Firstname **";
        document.getElementById("msg1").style.color = "Green";
        
    }
    if(lastName === "" || lastName.length<=5 || lastName.length>=15 ){
         alert(" lastname must contains 15 charecters and not less than 5");
        document.getElementById("msg2").innerHTML = "** Invalid Lastname **";
        document.getElementById("msg2").style.color = "Red";
       
    
    }
    else{
         alert("valid lastname");
        document.getElementById("msg2").innerHTML = "** valid Lastname **";
        document.getElementById("msg2").style.color = "Green";
           
    }
    if(address === "" || address.length<=15 || address.length>=35){
        document.getElementById("msg3").innerHTML = "  ** Invalid address **";
        document.getElementById("msg3").style.color = "Red";
        
    }
    else{
        document.getElementById("msg3").innerHTML = "** valid address **";
        document.getElementById("msg3").style.color = "Green";
    }
    if(male.checked==false && female.checked==false ) {
        alert("You must select male or female");
    }   
    
    if( regexp.test(email)){

        document.getElementById("msg4").innerHTML = " ** valid email **";
        document.getElementById("msg4").style.color = "Green";
        
    }
    else{
        document.getElementById("msg4").innerHTML = " ** Invalid email **";
        document.getElementById("msg4").style.color = "red";

    }
    
    if( regExp.test(phone)){
        alert("valid phone number");
        // document.getElementById("msg5").innerHTML = " valid phone";
        // document.getElementById("msg5").style.color = "Green";
        

    }
    else{
         alert(" valid  phone number like XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX")
        // document.getElementById("msg5").innerHTML = "invalid phone";
        // document.getElementById("msg5").style.color = " red";
        

    }
    
    if(regxp.test(pass1) && pass1 === pass2){
        alert("matching and valid password");
        document.getElementById("msg6").innerHTML = "valid and matching password";
        document.getElementById("msg6").style.color = "Green";
        return true;
        
    }
    else{
        alert("password between 7 to 15 characters which contain at least one numeric digit and a special character/enter confirm password");
        // document.getElementById("msg6").innerHTML = " password between 7 to 15 characters which contain at least one numeric digit and a special character ";
        // document.getElementById("msg6").style.color = "red";
        return false;
        
    }
    
    
    
    

    
    
    
}
