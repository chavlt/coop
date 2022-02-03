<template>
    <div class="vue-conversation">

        <div class="topic">
            <h1 class="title-h1 title-topic">{{conversation.label}}</h1>
            <p>{{conversation.topic}}</p>
            <div class="btn-poster-msg">
                <router-link :to="{name:'PosterMessage',params:{idConversation:conversation.id}}">Poster un message</router-link>
            </div>
        </div>
        
        
        <div class="messages">
            <div class="message" v-for="message in messages">
                <p class="text">{{message.message}}</p>
                <div class="infos-message">
                    <p class="creer-le">{{message.created_at}}</p>
                    <p class="auteur-msg">{{message.member_id}}</p>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                conversation: [],
                messages:[],
                /* membres: [] */
            }
        },
        mounted(){
            this.chargerConversation();
            /* this.remplacerIdMembre();

            this.$api
                .get('members')
                .then((response) => {
                this.membres = response.data;
            }); */
        },
        methods : {
            chargerConversation() {
                let id = this.$route.params.idConversation;
                this.$api //on récupère la conversation 
                .get(`channels/${id}`)
                .then((response) => {
                    this.conversation = response.data;
                    this.chargerMessages()
                });
            },
            chargerMessages() {
                this.$api
                .get(`channels/${this.conversation.id}/posts`)
                .then(response => {
                    this.messages = response.data;
                    console.log(this.messages);
                })
            }/* ,
            remplacerIdMembre(){
                let idMembre = document.querySelector('.auteur-msg');
                let monMembre = membres.find(idMembre => idMembre === members.id);
                return monMembre;
            } */
        }
    }
</script>