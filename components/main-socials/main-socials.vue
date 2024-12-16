<template>
    <div class="main-socials">
        <a
            href="#!"
            class="main-socials__link"
        >
            <instagram-icon />
        </a>
        <a
            href="#!"
            class="main-socials__link"
        >
            <telegram-icon />
        </a>
        <a
            href="#!"
            class="main-socials__link"
        >
            <facebook-icon />
        </a>
    </div>
</template>
<script setup lang="ts">

import type { IMainSocialsProps } from './main-socials.props'

import facebookIcon from '~/assets/svg/socials/facebook.svg'
import instagramIcon from '~/assets/svg/socials/instagram.svg'
import telegramIcon from '~/assets/svg/socials/telegram.svg'

import './main-socials.scss'

defineProps<IMainSocialsProps>()
</script>
<style lang=""></style>
