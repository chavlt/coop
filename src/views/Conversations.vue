<template>
    <div class="vue-conversations">
        
        <h1 class="title-h1">Conversations</h1>

        <div class="connecter-en-tant-que">
            <p>Vous êtes connecté en tant que <span>{{$store.state.member.fullname}}</span></p>
        </div>

        <div class="conversations">
            <div v-for="conversation in conversations" class="conversation">
                <h3>{{conversation.label}}</h3>
                <p>{{conversation.topic}}</p>
                <div class="voir-conv">
                    <router-link :to="{name:'Conversation', params : {idConversation:conversation.id}}" class="box">Voir la conversation </router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                conversations : [] 
            }
        },
        mounted(){
            this.$api
                .get('channels')
                .then((response) => {
                this.conversations = response.data;
            });
        }
    }
</script>

