<script setup lang="ts">
import { CardSim, Cloud, LayoutDashboard, User } from "lucide-vue-next"
</script>
<template>
  <div class="sidebar">

    <div class="logo">
      <h2>Begin</h2>
    </div>

    <nav class="menu">

      <router-link to="/dashboard" class="menu-item">
        <layout-dashboard class="icon"/>
        Dashboard
      </router-link>

      <router-link to="/meucurso" class="menu-item">
        <user class="icon"/>
        Meu Curso
      </router-link>

      <router-link to="/feedbacks" class="menu-item">
        <cloud class="icon"/>
        Feedbacks
      </router-link>

      <router-link to="/adicionarAtividades" class="menu-item">
        <card-sim class="icon"/>
        Atividades
      </router-link>

      <router-link to="/perfil" class="menu-item">
        <user class="icon"/>
        Perfil
      </router-link>
    </nav>
  </div>
</template>

<style scoped src="../style/sidebar.css"></style>