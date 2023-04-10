document.body.innerHTML = `<div class="heading-container">
<h1>GOT For Life !! </h1>
<img class="icon" src="https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg" height="250px" width="250px" ></img>
<div id="maincontainer" class="main-container"> </div>`;


const getData = async()=>{

try{
    const data=await fetch("https://api.gameofthronesquotes.xyz/v1/random");
    const got=await data.json();
    console.log(got);
    maincontainer.innerHTML="";
    displayData(got);
} catch(error){
    console.log(error);
}
}


getData();


const displayData=(obj)=>{
maincontainer.innerHTML+= `
<div class="container">
<h3 class="blue"><span>${obj.sentence}</span></h3>

</div> `    
}