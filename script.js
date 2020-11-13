var database=firebase.database();

function submitData(){

var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var password=document.getElementById("pass").value;
var userid = name+password;
database.ref('Users'+userid).set({
    Name:name,
    Age:age,
    Password:password
})

}
function change(d,res){
    document.getElementById(d).innerHTML=res;
}
