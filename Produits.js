// const articles = document.querySelectorAll('.Pr1')

let boutonplus = document.querySelectorAll('.boutonplus');
let boutonmoins = document.querySelectorAll('.boutonmoins');
let quantités = document.querySelectorAll('.quantité');
let vlr = document.querySelectorAll('.valeur');

let coeurs = document.querySelectorAll(".bouton-coeur");
let Total = document.getElementById("totalprice");

function updateTotal ()
{
    let sum = 0;
    for(let i = 0; i < quantités.length; i++)
    {
        sum += Number(quantités[i].textContent) * Number(vlr[i].textContent);
        console.log(sum);
    }
    Total.innerHTML = String(sum.toFixed(2));
}

for(let i in quantités)
{
    let quantité= parseInt(quantités[i].textContent);

    (boutonplus[i]).addEventListener("click", function(){
        quantité++;
        quantités[i].textContent = quantité;
        updateTotal();
    })

    console.log('done');

    (boutonmoins[i]).addEventListener("click", function(){
        if(quantité > 0)
            quantité--;
        quantités[i].textContent = quantité;
        console.log(quantité);
        updateTotal();
    }) 

    console.log('done');
    
    
}

function favori (j){
    let str = coeurs[j].getAttribute('src');
    if(str == "heart.png")
        coeurs[j].setAttribute("src", "heart1.png");
    else
        coeurs[j].setAttribute("src", "heart.png");
}
    


