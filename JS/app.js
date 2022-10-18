
function display() {
    var x = document.getElementById("Productname").value;
    var n =document.getElementById("Productnumber").value;
    var p =document.getElementById("Productprice").value;
    var d =document.getElementById("Description").value;

    Product ={
        name : x,
       number: n,
       price : p,
       description : d,
    }

    document.getElementById("display").innerHTML = "<h2>"+x+"</h2><p>"+n+"   "+p+"</br>"+d+"</p>";
    window.alert("added seccessfuly");
    window.console.log (Product)
}


