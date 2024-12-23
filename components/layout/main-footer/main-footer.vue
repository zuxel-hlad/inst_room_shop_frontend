<template>
    <footer class="main-footer">
        <main-container class="main-footer__wrapper">
            <ul class="main-footer__list">
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Малярні товари
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Електрообладнання
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Спецодяг
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Для дому та дачі
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Сезонне
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Інструмент
                    </nuxt-link>
                </li>
            </ul>
            <ul class="main-footer__list">
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Про компанію
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Кантакти
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Хіти сезону
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#1"
                        class="text-description main-footer__link"
                    >
                        Розпродажі
                    </nuxt-link>
                </li>
            </ul>
            <div class="main-footer__contacts">
                <main-logo />
                <a
                    title="Зателефонувати нам"
                    href="tel:+38089087689"
                    class="main-footer__link main-footer__contacts-link"
                >
                    <phoneIcon />
                    +38-098-876-89
                </a>
                <main-socials />
                <a
                    href="#!"
                    class="text-mini main-footer__link"
                >
                    Користувацька угода
                </a>
            </div>
        </main-container>
        <span class="text-mini main-footer__copyright">{{ `«© Inst room ${new Date().getFullYear()}. Усі права захищені»` }}</span>
    </footer>
</template>
<script setup lang="ts">
import type { IMainFooterProps } from './main-footer.props'

import phoneIcon from '~/assets/svg/24x24/phone.svg'
import mainContainer from '~/components/main-container/main-container.vue'
import mainLogo from '~/components/main-logo/main-logo.vue'
import mainSocials from '~/components/main-socials/main-socials.vue'
import './main-footer.scss'

defineProps<IMainFooterProps>()
</script>
