<template>
    <div>
        <TheHeader />
        <slot name="content"></slot>
        <PlayerMusic />
    </div>
</template>

<script>
import PlayerMusic from '../components/PlayerMusic.vue';
import TheHeader from '../components/TheHeader.vue';
    export default {
        components: {
            PlayerMusic, 
            TheHeader,
        }
    }
</script>

<style lang="scss" scoped>

</style>