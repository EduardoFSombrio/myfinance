<template>
  <div class="Menu">
    <h1>My Finace</h1>   
    <ul>
      <li><button>Cadastrar usuário</button></li>
      <li><button>Lista de usuários</button></li>
      <li><button>Sair</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
li {
  padding: 3px
}
button {
  font-weight : bold;
  color : black;
}
h1 {
  font-weight:100;
}
</style>
