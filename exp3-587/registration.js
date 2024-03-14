function validate()
{
    var fn=frm.fname.value;
    for(x in fn)
    {
        ch=fn.charCodeAt(x);
        if(ch<65||ch>90 && ch<97||ch>122)
        {
            alert("Invalid firstname");
            return false;
        }
    }
    var ln=frm.lname.value;
    for(y in ln)
    {
        ch=ln.charCodeAt(y);
        if(ch<65||ch>90 && ch<97||ch>122)
        {
            alert("Invalid lastname");
            return false;
        }
    }
    var phn=frm.phone.value;
    var lenp=phn.length;
    {
        if(lenp!=10)
        {
            alert("Phone number should be exactky 10 digits");
            return false;
        }
    }
    var pwd1=frm.password.value;
    var pwd2=pwd1.length;
    {
        if(pwd2%2==1)
        {
            alert("Password should contain even number of characters");
            return false;
        }
    
    if(pwd1>8)
    {
        alert("password should not exceed 8 digits");
        return false;
    }
   }
   var reg=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
   var mail=frm.mailid.value;
   if(reg.test(mail))
   {
    alert("Registration successful!");

   }
   else{
    alert("Invalid email");
    return false;
   }
}