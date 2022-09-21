function Detail(){
    
    var tableBody=document.getElementById("table-body");
    var td1=document.getElementById("td");
    var td2=document.getElementById("td");
    var td3=document.getElementById("td");
    var td4=document.getElementById("td");
    var row=document.getElementById("tr");



    td1.innerHTML=document.getElementById("Company").value;
    td2.innerHTML=document.getElementById("Model").value;
    td3.innerHTML=document.getElementById("Price").value;
    td4.innerHTML=document.getElementById("Memory").value;


}
row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);
row.appendChild(td4);
tableBody.appendChild(row);