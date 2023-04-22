    let abc = document.querySelector(".submt");
    document.getElementById("myText").focus();
    let emptyAray = [];
    abc.addEventListener("click",function(){
        let userinpt = document.getElementById("myText").value;
        emptyAray.push(userinpt);
        console.log(emptyAray);
        var out = "";
        emptyAray.forEach((item,index)=>{
            out+= `<div style="background-color: rgb(247, 246, 0);">
            <h3>Note:${index+1}</h3>
            <p>${item}</p>
            </div>
            `;
            document.getElementById("bodyy").innerHTML = out;
        })
        document.getElementById("myText").value = "";
        document.getElementById("myText").focus();
        })