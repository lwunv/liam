<template>
    <header class="header">
        <j-app-bar hiddenIcon title="Liam Nguyen" style="background: black" shadow>
            <template v-slot:append>
                <j-badge content="90" background="blue">
                    <i class="material-icons">notifications</i>
                </j-badge>
            </template>
            <template v-slot:title>
                <h1 class="header__logo"><router-link to="/">Liam</router-link></h1>
            </template>
            <template v-slot:navigation>
                <ul class="header__navigation">
                    <li><router-link to="/blogs">Blogs</router-link></li>
                    <li><router-link to="/javascript">Javascript</router-link></li>
                    <li>
                        <router-link to="/tools">Tools</router-link>
                        <ul>
                            <li><router-link to="/tools">Less to CSS</router-link></li>
                            <li><router-link to="/tools/json">JSON to Object</router-link></li>
                            <li><router-link to="/tools/tinyimage">Tiny image</router-link></li>
                            <li><router-link to="/tools/gpt">Chat GPT</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </template>
        </j-app-bar>
    </header>
</template>

<script setup lang="ts">
import JAppBar from '../../stories/AppBar'
import JBadge from '../../stories/Badge'
</script>

<style lang="scss">
@use '../../assets/scss/abstracts/_variables.scss';

.header {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    &__logo {
        color: variables.$body-color;
        margin-right: 20px;

        a {
            color: inherit;
        }
    }

    &__navigation {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
        position: relative;

        >li {
            >a {
                display: block;
                padding: 20px;
                white-space: nowrap;
                text-transform: uppercase;
            }
        }

        li {
            position: relative;

            >ul {
                list-style: none;
                position: absolute;
                z-index: 99;
                top: calc(100% + 10px);
                left: 50%;
                right: auto;
                transition: all 100ms linear;
                transform: translateX(-50%);
                opacity: 0;
                visibility: hidden;
                box-shadow: variables.$box-shadow;

                >li {
                    background-color: variables.$gray-900;

                    >a {
                        display: block;
                        white-space: nowrap;
                        padding: 10px 15px;

                        &:hover {
                            color: variables.$primary;
                        }
                    }
                }
            }

            &:hover {
                >ul {
                    top: 100%;
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%);
                }
            }
        }
    }
}</style>