function forauthor() {
  fetch("https://quote-api-app.herokuapp.com/author")
    .then((dat) => {
      return dat.json(); 
    })
    .then((o) => {
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
