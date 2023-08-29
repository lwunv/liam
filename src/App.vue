<script setup lang="ts">
import { RouterView } from 'vue-router'
import JApp from './stories/App'
import AppHeader from './components/common/AppHeader.vue'
import AppFooter from './components/common/AppFooter.vue'
import BackToTop from './components/common/BackToTop.vue'
</script>

<template>
  <j-app fullWidth>
    <app-header></app-header>
    <BackToTop />
    <div class="main" style="min-height: calc(100vh - 148px)">
      <RouterView />
    </div>
    <app-footer></app-footer>
  </j-app>
</template>
