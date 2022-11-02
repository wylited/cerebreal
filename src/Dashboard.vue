<script setup lang="ts">
import Items from './components/Dashboard/Items.vue'
</script>

<template>
    <section class="bg-hero-topography-25">
        <div class="mx-auto max-w-screen-xl py-10 px-4 text-center min-h-screen">
            <div class="py-28">
                <h1 class="text-5xl font-bold text-accent pb-5">Cerebreal</h1>
                <p> Wylited's dashboard </p>
            </div>

            <!-- Item List -->
            <div>
                <Items />
            </div>
        </div>
    </section>
</template>