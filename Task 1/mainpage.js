// call aurthors name using javascript fetch
document.getElementById('button1').addEventListener('click',loadTxt);
function loadTxt(){
    fetch('data.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML=data;
    })
}
// Show or hide names
var toggled =false;
function toggle(){
    if (!toggled){
        toggled=true;
        document.getElementById("result").style.display="none";
        return;
    }
    if(toggled){
        toggled=false;
        document.getElementById("result").style.display="block";
        return;
    }
}