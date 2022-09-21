var arr1=[
    {name:"samsung",price:15000},
    {name:"nokia",price:22000},
    {name:"xiomi",price:12000},
    {name:"motorala",price:15000},
    {name:"apple",price:25000}
]
var arr=[];
function add{
    var sel=document.getElementById("sel").value
    var quantity=document.getElementById("quantity").value

    if(sel=="samsung"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[0].price
        };
        arr.push(list)
    }
    else if(sel=="nokia"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[1].price
        };
        arr.push(list)

    }
    else if(sel=="xiomi"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[2].price
        };
        arr.push(list)

    }
    else if(sel=="motorala"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[3].price
        };
        arr.push(list)

    }
    else if(sel=="apple"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[4].price
        };
        arr.push(list)

    }
    console.log(arr)
    var table="<table><tr><th>Name</th><th>Quantity</th><th>Amount</th><th>Total</th></tr>"
    arr.forEach(element => {
        table+=
        element.name +
        "</td> <td >" +
        element.quantity +
        "</td> <td >" +
            element.price +
            "</td></tr>";

    }
        ) ;
        table+= "</table>";
        document.getElementById("p1").innerHTML=table;

    
    
}
