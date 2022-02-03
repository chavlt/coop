<template>
    <div class="vue-poster-message">
        <h1 class="title-h1">Créer un message</h1>
        <form> <!-- .prevent permet de ne pas recharger la page après le clic sur le bouton -->
            <div>
                <textarea required v-model="message" placeholder="Votre message"></textarea>
            </div>
            

            <button class="btn-poster" type="button" v-on:click="posterMessage()">Poster mon message</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                channelId:false,
            };
        }, 
        mounted() {
            this.channelId = this.$route.params.idConversation;
        },
        methods : {
            posterMessage(){
                let donnees = {
                    member_id: this.$store.state.member.id,
                    message: this.message
                }
                this.$api
                    .post(`channels/${this.channelId}/posts`, donnees)
                    .then(response => {
                        this.$router.push(`/conversation/${this.channelId}`);
                        alert("Votre message a été posté");
                    }).catch(error => {
                        console.log(error.response.data.message);
                    })
            }

        }
    }
</script>