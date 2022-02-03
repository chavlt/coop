<template>
    <div class="vue-membre">
        <div class="infos">
            <img src="./../assets/user.png" alt="pic-user">
            <div class="text">
                <h1>{{membre.fullname}}</h1>
                <p>{{membre.email}}</p>
                <p>Inscrit depuis le {{membre.created_at}}</p>
            </div>
        </div>


    </div>

</template>

<script>
    export default{
        data(){
            return{
                membre: null,
            }
        },
        mounted(){
            this.chargerMembre();
        },
        methods: {
            chargerMembre(){
                let idMembre = this.$route.params.idMembre;
                this.membre = this.$store.state.members.find(member => member.id === idMembre);
                console.log("le membre" + this.membre);
            }
        },
    }
</script>