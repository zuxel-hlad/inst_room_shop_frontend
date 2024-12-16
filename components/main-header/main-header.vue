<template>
    <header class="main-header">
        <main-container class="main-header__wrapper">
            <main-logo class="main-header__logo" />
            <div class="main-header__work-time">
                <span>Години роботи:&nbsp;</span>
                <span>10:00 - 20:00</span>
            </div>
            <div class="main-header__callback">
                <span class="main-header__callback-text">+38-098-876-89</span>
                <a
                    class="main-header__callback-link"
                    href="tel:+38089087689"
                    >Замовити дзвінок</a
                >
            </div>
            <div class="main-header__actions">
                <button
                    type="button"
                    class="main-header__actions-btn"
                >
                    <div class="main-header__actions-counter">10</div>
                    <favorites-icon />
                </button>
                <button
                    type="button"
                    class="main-header__actions-btn"
                >
                    <div class="main-header__actions-counter">10</div>
                    <compare-icon />
                </button>
                <button
                    type="button"
                    class="main-header__actions-btn"
                >
                    <account-icon />
                </button>
                <button
                    type="button"
                    class="main-header__actions-btn"
                >
                    <div class="main-header__actions-counter">10</div>
                    <cart-icon />
                </button>
            </div>

            <div class="main-header__results">
                <span>Товарів на суму</span>
                <span>21.720&nbsp;грн</span>
            </div>
        </main-container>
        <mainNavbar />
    </header>
</template>
<script setup lang="ts">

import type { IMainHeaderProps } from './main-header.props'

import compareIcon from '~/assets/svg/bar-chart.svg'
import favoritesIcon from '~/assets/svg/heart.svg'
import accountIcon from '~/assets/svg/my_account.svg'
import cartIcon from '~/assets/svg/shopping_cart.svg'
import mainContainer from '~/components/main-container/main-container.vue'
import mainLogo from '~/components/main-logo/main-logo.vue'
import mainNavbar from '~/components/main-navbar/main-navbar.vue'

import './main-header.scss'

defineProps<IMainHeaderProps>()
</script>
