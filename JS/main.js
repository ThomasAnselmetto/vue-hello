// ! inizio con un console log di controllo

console.log("ecooci arrivati", Vue);

// ! metto entrambe le modalita' di approccio

// const { createApp } = Vue

// createApp({
//     data() {
//         return {
//             message: 'Hello Vue!'
//         }
//     }
// }).mount('#app')


const text = Vue.createApp({
    data() {
        return {
            //qui dentro siamo dentro un oggetto e tramite chiave valore inseriamo effettivamente i nostri dati
            message: 'Fa paura ma ci cambia la vita!!',
            immagine: './IMG/2bbe8b493be292069ed36ebbc30c8926.jpg'
        }
    }

});

text.mount("#root")