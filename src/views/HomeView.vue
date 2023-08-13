<template>
  <div>
    <header-page />
    <introduction />
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i
            class="fa fa-headphones-alt float-right text-green-400 text-xl"
          ></i>
        </div>

        <!-- playlist -->
        <playlist />
        <player-music />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import PlayerMusic from '../components/PlayerMusic.vue';
import Header from "../components/TheHeader.vue";
import Introduction from "../components/TheIntroduction.vue";
import Playlist from '../components/ThePlaylist.vue';

export default {
  components: {
    PlayerMusic,
   "header-page": Header,
    Playlist,
    Introduction,
  },
};
</script>

<style lang="scss" scoped></style>
