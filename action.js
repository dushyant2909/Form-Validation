
function validation()
{
    let user = document.getElementById('username');
    let pwd = document.getElementById('password');
    let username = user.value;
    let password = pwd.value;
    let usernameCondition = document.getElementById('usernameCondition');
    let passwordCondition = document.getElementById('passwordCondition');
    usernameCondition.innerHTML = "";
    passwordCondition.innerHTML = "";
    let flag = 1;
    if(!username) //If there is no value given
    {
        usernameCondition.innerHTML = "Username can't be empty..";
        flag = 0;
    }
    else if(!password)
    {
        passwordCondition.innerHTML = "Password can't b empty..";
        flag = 0;
    }
    else if(username.length <=3)
    {
        usernameCondition.innerHTML = "Username must be more then 3 characters";
        flag = 0;
    }
    else{
        flag = 1;
    }
    if(flag)return true;
    return false;
    
    
    
    // else{
    //     alert("Y");
    // }
}