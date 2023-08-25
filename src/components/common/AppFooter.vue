<template>
    <footer class="footer">
        <div class="container">
            <j-bottom-navigation
                :items="[{ link: 'tb', text: 'Thái Bình' }, { link: 'hn', text: 'Hà Nội' }, { link: 'sg', text: 'Hồ Chí Minh' }]">
            </j-bottom-navigation>
        </div>
    </footer>
</template>

<script setup lang="ts">
import JBottomNavigation from '../../stories/BottomNavigation'
</script>

<style lang="scss">
@use '../../assets/scss/abstracts/_variables.scss';

.footer {
    background: variables.$black;
    padding: 30px 15px;
    width: 100%;
}
</style>