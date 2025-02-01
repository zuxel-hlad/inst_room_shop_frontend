<template>
    <nav class="main-navbar">
        <main-container class="main-navbar__wrapper">
            <main-button
                title="Каталог товарів"
                variant="outlined"
                class="main-navbar__catalog-btn"
            >
                <burger-icon />
                <span>Каталог товарів</span>
            </main-button>
            <div class="main-navbar__buttons">
                <button
                    type="button"
                    class="main-navbar__buttons-btn"
                >
                    Про компанію
                </button>
                <button
                    type="button"
                    class="main-navbar__buttons-btn"
                >
                    Акції
                </button>
                <button
                    type="button"
                    class="main-navbar__buttons-btn"
                >
                    Хіти сезону
                </button>
                <button
                    type="button"
                    class="main-navbar__buttons-btn"
                >
                    Новинки
                </button>
            </div>

            <main-socials class="main-navbar__socials" />
            <main-search class="main-navbar__search" />
        </main-container>
    </nav>
</template>
<script setup lang="ts">
import type { IMainNavbarProps } from './main-navbar.props'

import burgerIcon from '~/assets/svg/24x24/burger.svg'
import mainContainer from '~/components/main-container/main-container.vue'
import mainSearch from '~/components/main-search/main-search.vue'
import mainSocials from '~/components/main-socials/main-socials.vue'
import mainButton from '~/components/UI/main-button/main-button.vue'

defineProps<IMainNavbarProps>()
</script>

<style lang="scss">
.main-navbar {
    padding: 18px 0;
    background-color: $black;

    @media screen and (max-width: $md) {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    &__wrapper {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: minmax(196px, auto) 1fr auto minmax(auto, 310px);
        grid-template-rows: 1fr;
        gap: 60px;
        align-items: center;

        @media screen and (max-width: $xl) {
            gap: 15px;
        }

        @media screen and (max-width: $lg) {
            grid-auto-rows: 1fr;
            grid-template-columns: minmax(196px, auto) 1fr auto;
            grid-template-rows: repeat(2, 1fr);
            flex-grow: 1;
        }

        @media screen and (max-width: $md) {
            grid-auto-rows: auto;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            align-items: start;
        }
    }

    &__catalog-btn {
        display: flex;
        gap: 15px;
        align-items: center;

        padding: 15.5px 16px;

        text-transform: none;
        text-wrap: balance;

        @media screen and (max-width: $lg) {
            grid-column: 1/2;
            grid-row: 2/3;
        }

        @media screen and (max-width: $md) {
            grid-column: 1/2;
            grid-row: 2/3;
            justify-content: center;
        }

        svg {
            flex-shrink: 0;
        }
    }

    &__buttons {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        white-space: nowrap;

        @media screen and (max-width: $lg) {
            grid-column: 2/3;
            grid-row: 2/3;
        }

        @media screen and (max-width: $md) {
            grid-column: 1/2;
            grid-row: 3/4;
            flex-direction: column;
            justify-content: flex-start;
        }

        &-btn {
            padding: 14.5px 15px;
            transition: color $base-transition;

            @media screen and (max-width: $lg) {
                padding: 10px;
            }

            @media (hover: hover) {
                &:hover {
                    color: $orange;
                }
            }

            &:active {
                &:hover {
                    color: $orange;
                    background-color: $orange;
                }
            }
        }
    }

    &__socials {
        gap: 10px;
        max-width: 100%;

        @media screen and (max-width: $lg) {
            grid-column: 3/4;
            grid-row: 2/3;
        }

        @media screen and (max-width: $md) {
            grid-column: 1/2;
            grid-row: 4/5;
            max-width: 150px;
            margin: 0 auto;
        }
    }

    &__search {
        @media screen and (max-width: $lg) {
            grid-column: 1/4;
            grid-row: 1/2;
            max-width: 100%;
        }

        @media screen and (max-width: $md) {
            grid-column: 1/2;
            grid-row: 1/2;
            max-width: 100%;
        }
    }
}
</style>
