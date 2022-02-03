<template>
    <div class="vue-creer-conversation">
        <h1 class="title-h1">Créer une conversation</h1>
        <form> <!-- .prevent permet de ne pas recharger la page après le clic sur le bouton -->
            <div>
                <input type="text" required v-model="label" placeholder="Titre"/>
            </div>
            <div>
                <textarea required v-model="topic" placeholder="Votre message"></textarea>
            </div>

            <button class="btn-creer" type="button" v-on:click="creerConv()">Créer la conversation</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
            
            };
        }, 
        methods : {
            creerConv(){
                let donnees = {
                    label: this.label,
                    topic: this.topic,
                    token: this.token
                }
                this.$api
                    .post('channels', donnees)
                    .then(response => {
                        this.$router.push("/");
                        alert("Votre conversation a été créée")
                    }).catch(error => {
                        console.log(error.response.data.message);
                    })
            }

        }
    }
</script>