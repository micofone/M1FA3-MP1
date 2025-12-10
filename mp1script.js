function replaceAll(){
    let str1 = document.getElementById("inputBox").value;
    console.log(str1);

    let newStr = str1.replaceAll(' ', '');
    document.getElementById("result").innerHTML = newStr;
}



