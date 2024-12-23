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
            tabindex="0"
            class="main-header__mobile-overlay"
            :class="{ 'main-header__mobile-overlay_show': isMobileMenuOpened }"
            @click="isMobileMenuOpened = false"
            @keyup.enter="isMobileMenuOpened = false"
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
                    <span class="main-header__callback-text"><phone-icon />+38-098-876-89</span>
                    <a
                        title="Зателефонувати нам"
                        class="main-header__callback-link"
                        href="tel:+38089087689"
                        >Замовити дзвінок</a
                    >
                </div>
                <div class="main-header__actions">
                    <button
                        title="Обрані товари"
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <span class="main-header__actions-counter">10</span>
                            <favorites-icon />
                        </span>
                    </button>
                    <button
                        title="У порівнянні"
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <span class="main-header__actions-counter">10</span>
                            <compare-icon />
                        </span>
                    </button>
                    <button
                        title="Особистий кабінет"
                        type="button"
                        class="main-header__actions-btn"
                    >
                        <span class="main-header__actions-icon">
                            <account-icon />
                        </span>
                    </button>
                    <button
                        title="Кошик"
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
                    <span>21.720&nbsp;&#x20b4;</span>
                </div>
            </main-container>
            <mainNavbar />
        </div>
    </header>
</template>
<script setup lang="ts">
import type { IMainHeaderProps } from './main-header.props'

import burgerIcon from '~/assets/svg/24x24/burger.svg'
import closeIcon from '~/assets/svg/24x24/close.svg'
import phoneIcon from '~/assets/svg/24x24/phone.svg'
import compareIcon from '~/assets/svg/32x32/bar-chart.svg'
import favoritesIcon from '~/assets/svg/32x32/heart.svg'
import accountIcon from '~/assets/svg/32x32/my_account.svg'
import cartIcon from '~/assets/svg/32x32/shopping_cart.svg'
import mainNavbar from '~/components/layout/main-navbar/main-navbar.vue'
import mainContainer from '~/components/main-container/main-container.vue'
import mainLogo from '~/components/main-logo/main-logo.vue'
import mainButton from '~/components/UI/main-button/main-button.vue'

import './main-header.scss'

const isMobileMenuOpened = ref<boolean>(false)

defineProps<IMainHeaderProps>()
</script>
