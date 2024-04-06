function check(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var c=parseInt(document.getElementById("n3").value);
    var d=parseInt(document.getElementById("n4").value);
    var e=parseInt(document.getElementById("n5").value);
    var total=a+b+c+d+e;
    var perc=(total*100/500);
    var cmd=document.getElementById("v1").value;
    switch(cmd){
        case '1':
            document.getElementById("data").innerHTML="total marks= "+total;
            break;
            case '2':
                document.getElementById("data").innerHTML="percentage = "+perc+"%" 
                break;
            default:
                document.getElementById("data").innerHTML="invalid data";
    
    }
}