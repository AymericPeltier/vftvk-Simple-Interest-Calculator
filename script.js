var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var result = document.getElementById('result')

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


function compute()
{
    // had to redeclare it here, as it bugged in local. Though I would just use template string with let var else.
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    ys = document.getElementById("years").value;
    i = p * ys * r /100;
    y = new Date().getFullYear()+parseInt(ys);

    if (p<=0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {result.innerHTML = `<p>If you deposit <strong>${p}</strong>,<br>
    at an interest rate of <strong>${r}%</strong>.<br>
    You will receive an amount of <strong>${i}</strong>,<br>
    in the year <strong>${y}</strong></p>`}

    
}
        
