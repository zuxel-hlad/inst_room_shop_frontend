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

defineProps<IProductCardProps>()
</script>

<style lang="scss">
.product-card {
    width: 100%;
    max-width: 310px;
    min-height: 340px;
    padding: 12px;

    background-color: $white;
    border-radius: $base-radius;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__badge {
        padding: 4px 6px;
        color: $white;

        &_new {
            background-color: #180a3e;
        }

        &_promotion {
            background-color: $red;
        }
    }

    &__actions {
        display: flex;
        gap: 8px;
        align-items: flex-start;
        justify-content: space-between;

        height: 24px;

        &-btn {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            width: 24px;
            height: 24px;

            svg {
                transition: fill $base-transition;

                path {
                    transition: stroke $base-transition;
                }
            }

            @media (hover: hover) {
                &:hover {
                    svg {
                        path {
                            stroke: $black;
                        }
                    }
                }
            }

            &_is-favorite {
                svg {
                    fill: $red;

                    path {
                        stroke: $red;
                    }
                }
            }

            &:active {
                svg {
                    path {
                        stroke: $black;
                    }
                }
            }

            &_favorite {
                @media (hover: hover) {
                    &:hover {
                        svg {
                            fill: $red;

                            path {
                                stroke: $red;
                            }
                        }
                    }
                }

                &:active {
                    svg {
                        fill: $red;

                        path {
                            stroke: $red;
                        }
                    }
                }
            }
        }
    }

    &__main {
        height: 184px;
        margin-bottom: 12px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__divider {
        display: flex;
        gap: 4px;
        justify-content: flex-start;
        margin-bottom: 14px;

        & > div {
            width: 25%;
            height: 2px;
            background-color: $gray;

            &:nth-child(2) {
                background-color: #ffb78b;
            }
        }
    }

    &__footer {
        display: flex;
        flex-direction: column;
    }

    &__title {
        flex-grow: 1;
    }

    &__info {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
    }

    &__price {
        display: flex;
        gap: 10px;
        align-items: flex-end;
        justify-content: flex-start;

        &-value {
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;

            @media screen and (max-width: $sm) {
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
            }

            &_old {
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
                color: $gray;
                text-decoration: line-through;

                @media screen and (max-width: $sm) {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                }
            }
        }
    }

    &__available-info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-left: auto;

        color: $green;

        &_to-order {
            color: $orange;
        }
    }

    &__cart-btn {
        transform: translate(12px, 14px);

        display: flex;
        align-items: center;
        justify-content: center;

        width: 60px;
        height: 56px;
        padding: 12px;

        border-radius: $base-radius 0 $base-radius;

        svg {
            path {
                stroke: $orange;
            }
        }

        @media (hover: hover) {
            &:hover {
                svg path {
                    stroke: $white;
                }
            }
        }

        &:active {
            svg path {
                stroke: $white;
            }
        }
    }
}
</style>
