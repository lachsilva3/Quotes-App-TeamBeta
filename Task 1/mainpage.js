var showed = false;
function showcontent(){
    if(!showed){
        showed=true;
        document.getElementById("list1").style.display="none";
        return;
    }
    if(showed){
        showed=false;
        document.getElementById("list1").style.display="inline";
        return;
    }
}
