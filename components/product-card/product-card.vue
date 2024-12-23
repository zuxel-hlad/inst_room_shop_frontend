<template>
    <div class="product-card">
        <div class="product-card__header">
            <span
                v-if="true"
                class="text-mini product-card__badge product-card__badge_new"
            >
                Новинка
            </span>
            <span
                v-if="false"
                class="text-mini product-card__badge product-card__badge_promotion"
            >
                Акція
            </span>
            <div class="product-card__actions">
                <button
                    type="button"
                    class="product-card__actions-btn"
                >
                    <compare-icon />
                </button>
                <button
                    type="button"
                    class="product-card__actions-btn product-card__actions-btn_favorite"
                    :class="{ 'product-card__actions-btn_is-favorite': false }"
                >
                    <favorites-icon />
                </button>
            </div>
        </div>
        <div class="product-card__main">
            <img
                src="~/assets/images/search_item/fabitex_dye.png"
                alt="fabitex_dye"
            />
        </div>
        <div class="product-card__divider">
            <div />
            <div />
            <div />
            <div />
        </div>
        <div class="product-card__footer">
            <h4 class="product-card__title">Эмаль Condor ПФ-115 жовта 1,8 кг</h4>
            <div class="product-card__info">
                <div class="product-card__price">
                    <span class="product-card__price-value">350&nbsp;&#x20b4;</span>
                    <span class="product-card__price-value product-card__price-value_old">550&nbsp;&#x20b4;</span>
                </div>
                <span
                    v-if="true"
                    class="text-mini product-card__available-info"
                >
                    <check-icon />&nbsp;У наявності
                </span>
                <span
                    v-if="false"
                    class="text-mini product-card__available-info product-card__available-info_to-order"
                >
                    Під замовлення
                </span>
                <main-button
                    variant="outlined"
                    class="product-card__cart-btn"
                >
                    <cart-icon v-if="true" />
                    <check-circle-icon v-if="false" />
                </main-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IProductCardProps } from './product-card.props'

import checkIcon from '~/assets/svg/16x16/check.svg'
import compareIcon from '~/assets/svg/24x24/bar-chart-24x24.svg'
import favoritesIcon from '~/assets/svg/24x24/heart-24x24.svg'
import checkCircleIcon from '~/assets/svg/32x32/check-circle.svg'
import cartIcon from '~/assets/svg/32x32/shopping_cart.svg'
import mainButton from '~/components/UI/main-button/main-button.vue'

import './product-card.scss'
defineProps<IProductCardProps>()
</script>
