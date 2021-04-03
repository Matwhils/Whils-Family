function result(){
    let pseudo = document.getElementById('pseudo').Value;
    let password = document.getElementById('password').Value;

    sessionStorage.setItem('Pseudo',pseudo);
    sessionStorage.setItem('Password', password);

}