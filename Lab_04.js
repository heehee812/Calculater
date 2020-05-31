console.log("Hello!");

var num = 0; 
var check=0;
var first=0;

function jsq(num) {
    if(document.getElementById("screen").value=="0"&&first==0)
    {
        document.getElementById("screen").value = null;
        first=1;
    }

     //獲取當前輸入
    if(num=="%"){
        document.getElementById("screen").value=Math.round(document.getElementById("screen").value)/100;
    }

    else{
        if(document.getElementById("screen").value=="0"&&num==0)
        {
            document.getElementById("screen").value = 0;
        } 
        else
            document.getElementById("screen").value += document.getElementById(num).value;
    }
 }

    function eva() {
             //計算輸入結果
             var exp= document.getElementById("screen").value;
             if(exp)
             {
                 try{
                     console.log(exp);
                     document.getElementById("screen").value=eval(exp);
                 }
                 catch(e)
                 {
                     document.getElementById("screen").value="error"
                 }
                 finally{
                     check=1;
                 }
             }
         }
         function clearNum() {
             //清0
             document.getElementById("screen").value = "0";
             first=0;
         }

        document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
        function KeyCheck(event)
        {
        var KeyID = event.keyCode;
        switch(KeyID)
        {
            case 8:
            {
                var arr = document.getElementById("screen");
                arr.value = arr.value.substring(0, arr.value.length - 1);
                break;
            }
            default:
                {
                    if(document.getElementById("screen").value=="0")
                        document.getElementById("screen").value = null;
                    document.getElementById("screen").value += String.fromCharCode(KeyID);
                    break;
                 }
        }
    }
