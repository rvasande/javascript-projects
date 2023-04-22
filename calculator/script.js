function arithmatic(op) {
    let arg1 = +document.getElementById("num1").value;
    let arg2 = +document.getElementById("num2").value;

    if (op === "+") {
      document.getElementById("output").innerHTML = `<div class="alert alert-success">${arg1 + arg2}</div>`;
    } else if(op === "-"){
        document.getElementById("output").innerHTML=`<div class="alert alert-success">${arg1 - arg2}</div>`;
    }else if(op === "*"){
        document.getElementById("output").innerHTML=`<div class="alert alert-success">${arg1 * arg2}</div>`;
    }else if(op === "/"){
        document.getElementById("output").innerHTML=`<div class="alert alert-success">${arg1 / arg2}</div>`;
    }else if(op === "%"){
        document.getElementById("output").innerHTML=`<div class="alert alert-success">${arg1 % arg2}</div>`;
    }else{
        console.log("invalid");
    }
  }