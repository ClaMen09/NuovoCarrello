let totale = 0;

function Prodotto(){
    let num = document.getElementById("prezzoInput").value;
    num = parseFloat(num);
    if(
        num != null && 
        num != "" &&
        num >= 0
    ){
        totale = totale + num;
        console.log("Totale spesa: " + totale);
        document.getElementById("display").textContent = totale;
        document.getElementById("prezzoInput").value = "";
    }
}

function zero(){
    totale = 0;
    document.getElementById("display").textContent = 0;
}