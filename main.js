const btnRandom = document.getElementById('button-random');  

let myArray = ['Alexandre','Beyram','Fabrice','Garry','Guillaume','Jérome', 'Lydie','Loïc.G','Loïc.V','Maxime','Mélina','Nicolas','Quentin','Rémy','Samir','Samra','Thomas'];   

btnRandom.addEventListener('click', () => {
    RandArray(myArray) 
})    
    
function RandArray(array){
    if(array) {

        let rand = Math.random()*array.length | 0;     
        let rValue = array[rand];     
        console.log(rValue);     
        btnRandom.innerText = rValue;
        
        setTimeout(reinitialise, 3000);
    } else {
        alert('pas de tableau')
    }
}

function reinitialise () {
    btnRandom.innerText="RANDOM APPRENANT"
}

