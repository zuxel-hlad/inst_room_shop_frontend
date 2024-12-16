<template>
    <nav class="main-navbar">
        <main-container class="main-navbar__wrapper">
            <main-button
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

import burgerIcon from '~/assets/svg/burger.svg'
import mainContainer from '~/components/main-container/main-container.vue'
import mainSearch from '~/components/main-search/main-search.vue'
import mainSocials from '~/components/main-socials/main-socials.vue'
import mainButton from '~/components/UI/main-button/main-button.vue'
import './main-navbar.scss'

defineProps<IMainNavbarProps>()
</script>
