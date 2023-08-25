<template>
    <div class="blog slide-left">
        <div class="blog__top" :style="`background: url(${item.image})`">
            <div class="blog__title">
                <div class="blog__date">{{ item.datetime }}</div>
                <h5><a :href="item.link">{{ item.title }}</a></h5>
                <div class="blog__info">
                    <div class="blog__author">
                        <j-avatar :size="25" :image="item.avatar" />
                        <span>{{ item.composer }}</span>
                    </div>
                    <div>
                        <a v-for="(tag, index) of item.tags.split(' ')" :key="index" :href="`tag/${tag}`" class="blog__tag">{{ tag }}</a>
                        <span class="color-gray" style="padding-left: 5px;"><span class="color-white">{{ item.comments }}</span> comments</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog__content">
            <p v-html="item.content" class="text-2rows"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import JAvatar from '../../../stories/Avatar'
const props = defineProps({
    item: [Object as any],
})
</script>

<style lang="scss">
@use '../../../assets/scss/abstracts/_variables.scss';

.blog {
    &__content {
        padding: 15px;
        color: variables.$body-color;
        background-color: variables.$gray-900;
    }

    &__tag {
        padding-right: 3px;
        color: variables.$text-gray;
        &:hover {
            color: variables.$primary;
        }
    }
    &__top {
        height: 250px;
        padding: 15px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        position: relative;
    }

    &__info {
        color: variables.$body-color;
        font-size: 12px;
        .color-gray {
            color: variables.$text-gray;
        }
        .color-white {
            color: variables.$body-color;
        }
    }
    &__date {
        font-size: 12px;
        color: variables.$text-gray;
    }
    &__author {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            padding-left: 5px;
        }
    }

    &__title {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        position: absolute;
        top: auto;
        left: 15px;
        right: 15px;
        bottom: 15px;
        z-index: 1;
        background: rgba($color: #000, $alpha: 0.9);
        padding: 15px;

        h5 {
            width: 100%;
            position: relative;
            text-align: center;

            a {
                font-size: 20px;
                color: variables.$body-color;
                font-weight: bold;

                &:hover {
                    color: variables.$primary;
                }
            }
        }
    }
}
</style>