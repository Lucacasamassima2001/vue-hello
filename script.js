// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = Vue.createApp({
    data(){
        return {
            message: `HELLO WORLD, I'M LEARNING VUE JS`,
            classValue: `text-center , text-info , py-5 , display-1`,
            backgroundValue: `bg-dark , my-5 , py-5`,
            imgSource: `img/Vuejslogo.png`,
            align: `d-flex , justify-content-center`
        }
    }
});
app.mount(`#app`)