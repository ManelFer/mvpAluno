<script setup lang="ts">
import Anuncio from '../components/anuncio.vue';
import sideBar from '../components/sideBar.vue';
import cards from '../components/cards.vue';
</script>
<template>
    <div class="layout">
        <sideBar/>
        <div class="main">
            <div class="dashboard-grid">
              <Anuncio/>  
            </div>
            <cards/>
        </div>
    </div>
</template>

<style scoped src="../style/dashboard.css"></style>