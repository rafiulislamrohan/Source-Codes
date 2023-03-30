const dark = document.getElementById("dark").addEventListener('click' , ()=>{
    document.body.style.backgroundColor = " Black";
    let btn = document.getElementById("light");
    btn.style.backgroundColor = "red";
    btn.style.color = "black";

    let Dbtn = document.getElementById("dark");
    Dbtn.style.backgroundColor = "white";
    console.log("Working");
})

const light = document.getElementById("light").addEventListener('click' , ()=>{
    document.body.style.backgroundColor = "white";
    let btn = document.getElementById("dark");
    btn.style.backgroundColor = "red";
    btn.style.color = "black";

    let Lbtn = document.getElementById("light");
    Lbtn.style.backgroundColor = "white";


    console.log("Working");

})