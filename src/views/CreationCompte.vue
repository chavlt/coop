<template>
    <div class="vue-account-creation">
        <h1 class="title-h1">Créer un compte</h1>
        <form @submit.prevent="validation" >
            <div>
                <input type="text" required v-model="fullname" placeholder="Nom prénom"/>
            </div>
            <div>
                <input type="email" required v-model="email" placeholder="email" />
            </div>
            <div>
                <input type="password" required v-model="password" placeholder="mot de passe"/>
            </div>

            <button type="submit" class="btn-create">Créer mon compte</button>
            <div class="btn-connexion">
                <router-link to="connexion" class="btn-connexion">J'ai déjà un compte</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                fullname : 'Charlène VILLIETTE', //A vider à la livraison du projet
                email : 'charlenevilliette70@gmail.com',
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
                    .post('members', donnees)
                    .then(response => {
                        console.log(response.data);
                        alert("Votre compte a été créer, vous pouvez vous connecter");
                        this.$router.push('/connexion');
                    }).catch(error => {
                        console.log(error.response.data.message);
                    })
            }

        }
    }
</script>