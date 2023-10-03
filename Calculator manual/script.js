function calculate(operator) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("hasil").innerText = "Error";
        return;
    }
    try {
        var result = eval(input1 + operator + input2);
        document.getElementById("hasil").innerText =result;
    } catch (error) {
        document.getElementById("hasil").innerText = "Error";
    }
}

function clearDisplay() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("hasil").innerText = "";
}