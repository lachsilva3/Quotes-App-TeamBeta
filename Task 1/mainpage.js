// TASK 1 (START)
// call authors name using javascript fetch
document.getElementById('button1').addEventListener('click',loadTxt);
function loadTxt(){
    fetch('https://quote-api-app.herokuapp.com/author')
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        let html='';
        data.forEach(function(data){
            html += `
                <li>
                    ${data}
                </li>
            `;
        });
        document.getElementById('result').innerHTML=html;
    })  
}
// (Show/Hide Authors)
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

