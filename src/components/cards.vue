<script setup lang="ts">
import { Calendar } from 'lucide-vue-next';
</script>

<template>
    <div class="cards-grid">

        <div class="cards">
            <div class="card">
                <Calendar />
                <h2>Meus cursos</h2>
            </div>
            <div class="card-value">
                Acesse seus 4 cursos
                ativos e materiais extras.
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <Calendar />
                <h2>Agenda</h2>
            </div>
            <div class="card-value">
                Veja suas próximas
                aulas e compromissos.
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <Calendar />
                <h2>Materiais</h2>
            </div>
            <div class="card-value">
                Acesse conteúdos
                complementares.
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <Calendar />
                <h2>Certificados</h2>
            </div>
            <div class="card-value">
                Visualize e baixe
                seus certificados.
            </div>
        </div>

    </div>
</template>

<style scoped src="../style/cards.css"></style>