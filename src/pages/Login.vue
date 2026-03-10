<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const senha = ref("")
const router = useRouter()

function login() {
  router.push("/dashboard")
  console.log(email.value, senha.value)
}
</script>

<template>
  <div class="container">

    <!-- LADO ESQUERDO (IMAGEM) -->
    <div class="left">
      <div class="overlay"></div>
    </div>

    <!-- LADO DIREITO (LOGIN) -->
    <div class="right">

      <form class="login-form" @submit.prevent="login">

        <h2>Begin</h2>
        <p class="subtitle">Área do aluno</p>

        <div class="input-group">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div class="input-group">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button class="btn-login">
          Entrar
        </button>

        <p class="create">
          Não tem conta?
          <router-link to="/cadastro"> Criar conta</router-link>
        </p>

      </form>

    </div>

  </div>
</template>

<style scoped src="../style/login.css"></style>