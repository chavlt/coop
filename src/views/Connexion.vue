<template>
    <div class="vue-connexion">
        <h1 class="title-h1">Connexion</h1>
        <form @submit.prevent="validation" >
            <div>
                <input type="email" required v-model="email" placeholder="email"/>
            </div>
            <div>
                <input type="password" required v-model="password" placeholder="mot de passe"/>
            </div>

            <button type="submit" class="btn-connexion">Connexion</button>
            <div class="btn-create">
                <router-link to="creation-compte">Je n'ai pas de compte</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                email : 'charlenevilliette70@gmail.com', // A vider lors de la livraison du projet
                password : 'test'
            };
        }, 
        methods : {
            validation(){
                let donnees = {
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password
                }
                this.$api
                    .post('members/signin', donnees)
                    .then(response => {
                        this.$store.commit('setToken', response.data.token);
                        this.$store.commit('setMember', response.data.member);
                        this.$router.push("/");
                    }).catch(error => {
                        console.log(error.response.data.message);
                    })
            }

        }
    }
</script>