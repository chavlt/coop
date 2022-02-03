<template>
  <div id="app">
    
    <div class="menu">
      <router-link class="logo-image el-menu" to="/"><img src="./assets/logo-blanc.png"></router-link>
      <div class="menu-link">
        <button class="el-menu decal" type="button"><router-link to="/">Home</router-link></button>
        <button class="el-menu" type="button"><router-link to="creer-conversation">Créer une conversation</router-link></button>
        <button class="el-menu" type="button"><router-link to="/membres">Liste des membres</router-link></button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default{
    mounted(){
      this.$api.get('ping').then()

      if(!this.$store.state.token){ // Si le token est faux, on redirige vers la page connexion
        this.$router.push('connexion');
      }

      this.$api
          .get('members')
          .then((response) => {
          this.$store.commit('setMembers', response.data)
      });
    }
  }
</script>