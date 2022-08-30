// TASK 1 (START)
// call aurthors name using javascript fetch
document.getElementById('button1').addEventListener('click',loadTxt);
function loadTxt(){
    fetch('https://quote-api-app.herokuapp.com/author')
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        var result=document.getElementById('result')
        result.innerHTML=`<h1>Authors</h1>`
        result.innerHTML=`<li>${data}</li>`
        console.log(data)
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
// TASK 1 (END)

// TASK 2(START)