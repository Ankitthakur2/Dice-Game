 var getrandom = Math.floor(Math.random()*6)+1;
 var getrandom1 = Math.floor(Math.random()*6)+1;
 var v1="Images/dice"+getrandom+".png";
 var v2="Images/dice"+getrandom1+".png";

 
  document.querySelectorAll("img")[0].setAttribute("src",v1);
  document.querySelectorAll("img")[1].setAttribute("src",v2);


  if(v1>v2)
 {
    document.querySelector("h1").innerHTML="Player 1 wins";
 }
 else if(v2>v1)
 {
    document.querySelector("h1").innerHTML="Player 2 wins";
 }
 else
 {
    document.querySelector("h1").innerHTML="Draw";
 }

