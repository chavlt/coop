<template>
    <div class="vue-membres">
        <h1 class="title-h1">Membres</h1>

        <div class="membres">
            <div v-for="membre in membres" class="membre">
                <div class="informations">
                    <img class="member-pic" src="./../assets/user.png" alt="photo-membre">
                    <div class="infos-membre">
                        <h3>{{membre.fullname}}</h3>
                        <p>{{membre.email}}</p>
                    </div>
                </div>
                <div class="btn-fiche-membre">
                    <router-link :to="{name:'Membre', params : {idMembre:membre.id}}">Voir la fiche membre </router-link>
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                membres : [] 
            }
        },
        mounted(){
            this.$api
                .get('members')
                .then((response) => {
                this.membres = response.data;
            });
        }
    }
</script>