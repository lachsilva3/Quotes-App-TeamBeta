// Show authors Data.
function forauthor() {
  fetch("https://quote-api-app.herokuapp.com/author")
    .then((dat) => {
      return dat.json();
    })
    .then((o) => {
      console.log(o[0]);
      let lis = "";
      o.map((value) => {
        lis += ` 
        <hr>
            <li>${value}</li>
         `;
      });
      document.getElementById("name").innerHTML = lis;
    });
}

// Show quotes Data.
function btnfunction() {
  fetch("https://quote-api-app.herokuapp.com/quote")
    .then((data) => {
      return data.json(); 
    })
    .then((ok) => {
      console.log(ok[0]);
      let list = "";
      ok.map((values) => {
        list += `   
                  <hr>
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
