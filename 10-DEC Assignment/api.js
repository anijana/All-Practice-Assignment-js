

let url = fetch("https://fakestoreapi.com/products?limit=5")
url.then((res) => {
                    res.json()
                    .then((data) => {
                    console.log(data);
                    if (data.length > 0) {
        let table = "";
        data.forEach((api) => {
            table += "<tr>";
            table += "<td>" + api.id + "</td>";
            table += "<td>" + api.title + "</td>";
            table += "<td>" + api.price + "</td>";
            table += "<td>" + api.category + "</td></tr>";
        });
        document.getElementById("d").innerHTML = table;
        }
  });
});