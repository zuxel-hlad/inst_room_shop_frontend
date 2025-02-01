<template>
    <div class="main-socials">
        <a
            title="Ми у Інстаграм"
            href="#!"
            class="main-socials__link"
        >
            <instagram-icon />
        </a>
        <a
            title="Ми у Телеграм"
            href="#!"
            class="main-socials__link"
        >
            <telegram-icon />
        </a>
        <a
            title="Ми у Фейсбук"
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

defineProps<IMainSocialsProps>()
</script>
<style lang="scss">
.main-socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__link {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 36px;
        height: 36px;

        background-color: $white;
        border-radius: 50%;

        transition: background-color $base-transition;

        @media (hover: hover) {
            &:hover {
                background-color: $orange;

                svg path {
                    fill: $white;
                    stroke: $white;
                    transition:
                        fill $base-transition,
                        stroke $base-transition;
                }
            }
        }

        &:active {
            background-color: $orange;

            svg path {
                fill: $white;
                stroke: $white;
                transition:
                    fill $base-transition,
                    stroke $base-transition;
            }
        }
    }
}
</style>
