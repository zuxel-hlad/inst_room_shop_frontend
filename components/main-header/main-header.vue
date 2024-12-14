<template>
    <header class="main-header">
        <main-container>
            <main-logo />
            <span>Години роботи: 10:00 - 20:00</span>
            <div class="main-header__callback">
                <span class="main-header__callback-text">+38-098-876-89</span>
                <a
                    class="main-header__callback-link"
                    href="tel:+38089087689"
                    >Замовити дзвінок</a
                >
            </div>

            <main-search />
        </main-container>
    </header>
</template>
<script setup lang="ts">
import './main-header.scss'
import mainContainer from '../main-container/main-container.vue'
import mainSearch from '../main-search/main-search.vue'
import mainLogo from '../main-logo/main-logo.vue'
import type { IMainHeaderProps } from './main-header.props'

const mockData = [
    {
        id: 1,
        name: 'My-account',
        path: '/my-accounts',
        icon: '~/assets/svg/my_account.svg',
        withCounter: false,
    },
    {
        id: 2,
        name: 'Favorites',
        path: '/favorites',
        icon: '~/assets/svg/my_account.svg',
        withCounter: false,
    },
    {
        id: 3,
        name: 'My-account',
        path: '/my-accounts',
        icon: '~/assets/svg/my_account.svg',
        withCounter: false,
    },
    {
        id: 4,
        name: 'My-account',
        path: '/my-accounts',
        icon: '~/assets/svg/my_account.svg',
        withCounter: false,
    },
]

defineProps<IMainHeaderProps>()
</script>
