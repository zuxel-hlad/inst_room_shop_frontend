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

const isMobileMenuOpened = ref<boolean>(false)

defineProps<IMainHeaderProps>()
</script>

<style lang="scss">
.main-header {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;

    color: $white;

    background-color: $coal;

    @media screen and (max-width: $md) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 80px;
    }

    @media screen and (max-width: $extra-sm) {
        min-height: 60px;
    }

    &__content {
        transition: right $base-transition;

        @media screen and (max-width: $md) {
            position: absolute;
            top: 0;
            right: -100%;

            overflow-y: auto;
            display: flex;
            flex-direction: column;

            width: 50%;
            height: 100dvh;

            background: $black;
        }

        @media screen and (max-width: $sm) {
            width: 100%;
        }

        &_open {
            right: 0;
        }
    }

    &__wrapper {
        display: flex;
        align-items: center;

        @media screen and (max-width: $xl) {
            gap: 15px;
            justify-content: space-between;
        }

        @media screen and (max-width: $md) {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
    }

    &__logo {
        flex-shrink: 0;
        margin-right: auto;

        @media screen and (max-width: $xl) {
            margin: 0;
        }

        @media screen and (max-width: $md) {
            position: absolute;
            top: 12px;
            left: 12px;
        }

        &_mobile {
            position: static;
            display: none;

            @media screen and (max-width: $md) {
                display: inline-block;
                margin-left: 12px;
            }
        }
    }

    &__mobile-overlay {
        position: fixed;
        z-index: -1;
        inset: 0;

        display: none;

        background-color: rgba($color: $coal, $alpha: 60%);
        backdrop-filter: blur(3px);

        &_show {
            display: block;
            animation: show $base-transition;

            @media screen and (max-width: $sm) {
                display: none;
            }
        }
    }

    &__burger {
        display: none;
        margin-right: 12px;
        padding: 12px;

        @media screen and (max-width: $md) {
            display: flex;
        }

        @media screen and (max-width: $extra-sm) {
            padding: 8px;
        }

        &_close {
            margin-top: 12px;
            margin-right: 0;
            margin-left: auto;

            svg path {
                stroke: $white;
            }
        }
    }

    &__work-time {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        margin-left: 10px;

        white-space: nowrap;

        @media screen and (max-width: $xl) {
            flex-direction: column;
            align-items: flex-start;
        }

        @media screen and (max-width: $md) {
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            margin-left: 0;
        }
    }

    &__callback {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;

        margin-left: 114px;

        white-space: nowrap;

        @media screen and (max-width: $xl) {
            margin-left: 0;
        }

        @media screen and (max-width: $md) {
            margin-bottom: 15px;
        }

        &-text {
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: flex-start;

            font-size: 18px;
            font-weight: 700;

            @media screen and (max-width: $lg) {
                font-size: 16px;
            }

            svg {
                flex-shrink: 0;
            }
        }

        &-link {
            position: relative;
            color: $red;
            transition: color $base-transition;

            @media (hover: hover) {
                &:hover {
                    color: $orange;

                    &::after {
                        background-color: $orange;
                    }
                }
            }

            &::after {
                content: '';

                position: absolute;
                bottom: 0;
                left: 0;

                width: 100%;
                height: 1px;

                background-color: $red;
            }

            &:active {
                color: $orange;
                transition: $base-transition;

                &::after {
                    background-color: $orange;
                }
            }
        }
    }

    &__actions {
        display: flex;
        gap: 1px;
        align-items: flex-start;
        justify-content: flex-start;

        margin-left: 68px;

        @media screen and (max-width: $xl) {
            margin-left: 0;
        }

        @media screen and (max-width: $md) {
            width: 100%;
        }

        &-icon {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: max-content;
        }

        &-counter {
            position: absolute;
            top: -8px;
            right: -8px;

            display: flex;
            align-items: center;
            justify-content: center;

            min-width: 22px;
            min-height: 22px;
            padding: 3px;

            font-size: 11px;
            color: $white;

            background-color: $orange;
            border-radius: 50%;

            transition: background-color $base-transition;
        }

        &-btn {
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            width: 96px;
            height: 96px;

            background-color: $dark-gray;

            transition: background-color $base-transition;

            @media screen and (max-width: $lg) {
                width: 60px;
                height: 80px;
            }

            @media screen and (max-width: $md) {
                width: 100%;
                height: 60px;
            }

            @media (hover: hover) {
                &:hover {
                    color: $orange;
                    background-color: $orange;

                    &::after {
                        background-color: $orange;
                    }

                    & .main-header__actions-counter {
                        background-color: $dark-gray;
                    }
                }
            }

            &:active {
                &:hover {
                    color: $orange;
                    background-color: $orange;

                    &::after {
                        background-color: $orange;
                    }

                    & .main-header__actions-counter {
                        background-color: $dark-gray;
                    }
                }
            }
        }
    }

    &__results {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin-left: 16px;

        text-wrap: balance;

        @media screen and (max-width: $xl) {
            margin-left: 0;
        }

        @media screen and (max-width: $md) {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        & span:last-child {
            font-weight: 700;
        }
    }
}
</style>
