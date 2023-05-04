function login(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if(user == "admin" && pass == ""){
        location.href = "dashboard-admin/dashboard-admin.html";
    }
}