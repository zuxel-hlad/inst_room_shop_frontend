<template>
    <header class="main-header">
        <main-logo class="main-header__logo main-header__logo_mobile" />
        <main-button
            class="main-header__burger"
            @click="isMobileMenuOpened = true"
        >
            <burger-icon />
        </main-button>
        <div
            class="main-header__mobile-overlay"
            :class="{ 'main-header__mobile-overlay_show': isMobileMenuOpened }"
            @click="isMobileMenuOpened = false"
        />
        <div
            class="main-header__content"
            :class="{ 'main-header__content_open': isMobileMenuOpened }"
        >
            <main-container class="main-header__wrapper">
                <main-button
                    class="main-header__burger main-header__burger_close"
                    @click="isMobileMenuOpened = false"
                >
                    <close-icon />
                </main-button>
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
                        <span class="main-header__actions-icon">
                            <span class="main-header__actions-counter">10</span>
                            <favorites-icon />
                        </span>
                    </button>
                    <button
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <span class="main-header__actions-counter">10</span>
                            <compare-icon />
                        </span>
                    </button>
                    <button
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <account-icon />
                        </span>
                    </button>
                    <button
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <span class="main-header__actions-counter">10</span>
                            <cart-icon />
                        </span>
                    </button>
                </div>

                <div class="main-header__results">
                    <span>Товарів на суму:</span>
                    <span>21.720&nbsp;грн</span>
                </div>
            </main-container>
            <mainNavbar />
        </div>
    </header>
</template>
<script setup lang="ts">
import type { IMainHeaderProps } from './main-header.props'

import compareIcon from '~/assets/svg/bar-chart.svg'
import burgerIcon from '~/assets/svg/burger.svg'
import closeIcon from '~/assets/svg/close.svg'
import favoritesIcon from '~/assets/svg/heart.svg'
import accountIcon from '~/assets/svg/my_account.svg'
import cartIcon from '~/assets/svg/shopping_cart.svg'
import mainContainer from '~/components/main-container/main-container.vue'
import mainLogo from '~/components/main-logo/main-logo.vue'
import mainNavbar from '~/components/main-navbar/main-navbar.vue'
import mainButton from '~/components/UI/main-button/main-button.vue'

import './main-header.scss'

const isMobileMenuOpened = ref<boolean>(false)

defineProps<IMainHeaderProps>()
</script>
