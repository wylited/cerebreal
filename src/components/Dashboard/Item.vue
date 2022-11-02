<script setup lang="ts">
interface Props {
  item: string
  tooltip: string
  link?: string
}

const {tooltip, item} = defineProps<Props>()
</script>

<template>
    <div class="tooltip tooltip-right" :data-tip="tooltip">
        <a class="btn btn-ghost"> 
            <div class="flex flex-row align-middle">
                <slot></slot>
                <p class="pl-5"> {{item}} </p>
            </div>
        </a>
    </div>
</template>