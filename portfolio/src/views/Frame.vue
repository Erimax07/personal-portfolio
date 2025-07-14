<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Frame"


});

</script>

<script setup lang="ts">



const props = defineProps<{
  myid: number

}>();

</script>

<template>
  Hello
</template>

<style scoped>

</style>