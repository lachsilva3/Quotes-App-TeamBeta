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
