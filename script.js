const bordas = document.getElementById('main-container');

const imagem = document.getElementById('imagem');

let counter = 0



const incremento = () => {
    counter++
    console.log(counter)
    decremento()
    const verificadora = () => {
        if (counter == 1) {
            imagem.style.opacity = '0'
        }
        else if (counter == 2) {
            imagem.style.opacity = '1'
            imagem.src = "assets/hinata.png"
        }
        else if (counter == 3) {
            imagem.style.opacity = '0'
        }
        else if (counter == 4){
            imagem.style.opacity = '1'
            imagem.src = 'assets/zofia.png'
        }
        else if (counter == 5) {
            imagem.style.opacity = '0'
        }
        else if (counter == 6) {
            imagem.style.opacity = '1'
            imagem.src = 'assets/fryda.png'
        }
        
    }
    verificadora()
}

const decremento = () => {
    if (counter >= 7){
    counter = 1}
}



setInterval(incremento, 1000)