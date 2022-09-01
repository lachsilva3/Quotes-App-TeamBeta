function btnfunction() {
  fetch("https://quote-api-app.herokuapp.com/quote")
    .then((data) => {
      //console.log(data);
      return data.json(); //converted to object
    })
    .then((ok) => {
      console.log(ok[0]);
      let list = "";
      ok.map((values) => {
        list += `   
            <h5>"${values.quote}"</h5>
            <p><b >&nbsp~${values.author}</b></p>
            <li>Likes:&nbsp${values.likes}</li>
            <li>Dislikes:&nbsp${values.dislikes}</li>
              <br>  <br>     
        `;
      });
      document.getElementById("names").innerHTML = list;
    });
}
function forauthor() {
  fetch("https://quote-api-app.herokuapp.com/author")
    .then((dat) => {
      //console.log(data);
      return dat.json(); //converted to object
    })
    .then((o) => {
      console.log(o[0]);
      let lis = "";
      o.map((value) => {
        lis += ` 
            <li>${value}</li>
         `;
      });
      document.getElementById("name").innerHTML = lis;
    });
}
