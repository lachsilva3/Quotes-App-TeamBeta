
// javscript fetch data 2
document.getElementById('button2').addEventListener('click',loadTxt);
function loadTxt(){
    fetch('data2.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result2').innerHTML=data;
    })
}
// Show or hide names
var toggled2 =false;
function toggle2(){
    if (!toggled2){
        toggled2=true;
        document.getElementById("result2").style.display="none";
        return;
    }
    if(toggled2){
        toggled2=false;
        document.getElementById("result2").style.display="block";
        return;
    }
}
// Search 
const searchBar= document.getElementById('searchBar')
searchBar.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
});
