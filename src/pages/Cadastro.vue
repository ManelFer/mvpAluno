<script setup lang="ts">
import { Lock, AlertTriangle, Info, ArrowLeft, LifeBuoy } from "lucide-vue-next"
import { useRouter } from "vue-router"

const router = useRouter()

function voltar(){
  router.push("/")
}
</script>

<template>

<div class="container">

  <!-- LADO ESQUERDO -->
  <div class="left">
    <div class="overlay">

      <h1>Begin Platform</h1>

      <p>
        Plataforma educacional para professores
        gerenciarem alunos, atividades e feedbacks.
      </p>

    </div>
  </div>


  <!-- LADO DIREITO -->

  <div class="right">

    <div class="card">

      <div class="icon-wrapper">
        <Lock class="main-icon"/>
      </div>

      <div class="badge">
        <AlertTriangle class="badge-icon"/>
        Sem acesso
      </div>

      <h2>Registration is</h2>

      <p class="description">
        Our system is currently in a controlled registration phase.
        Only authorized <span class="link">teachers and staff members</span>
        can create accounts.
      </p>

      <div class="info-box">

        <Info class="info-icon"/>

        <div>
          <strong>Are you a student?</strong>

          <p>
            Please contact your instructor or school administrator
            to receive an invitation link.
          </p>

        </div>

      </div>

      <div class="actions">

        <button class="btn-primary" @click="voltar">
          <ArrowLeft class="btn-icon"/>
          Back to Home
        </button>

        <button class="btn-secondary">
          <LifeBuoy class="btn-icon"/>
          Contact Support
        </button>

      </div>

    </div>

  </div>

</div>

</template>

<style scoped src="../style/cadastro.css"></style>