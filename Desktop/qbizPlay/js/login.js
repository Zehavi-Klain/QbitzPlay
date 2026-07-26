function login()
{
    let player;
    let playerName = document.getElementById("playerName").value;
    let passowrd = document.getElementById("password").value;

    if (playerName === "" || password === "") {
        alert("נא מלא את כל השדות לפני לחיצה על התחברות.");
        return false;
    }
    else
    if(sessionStorage.getItem(passowrd)!= undefined)
    {
        let user = sessionStorage.getItem(passowrd);
        user = JSON.parse(user);
        if(user.password == passowrd){
            let player = JSON.parse(sessionStorage.getItem((localStorage.getItem('currentUser')))).playerName;
            alert("ברוך שובך למשחק" +" " + player);
            localStorage.setItem("currentUser",passowrd);

                window.location.href = "stages.html"
        }
    }
    else{
        alert("עליך להצטרף למערכת");
        setTimeout(() => {
            window.location.href = "register.html";
        }, 1000);
    }
}
    function signup(){
    setTimeout(() => {
        window.location.href = "register.html";
    }, 2000);
}