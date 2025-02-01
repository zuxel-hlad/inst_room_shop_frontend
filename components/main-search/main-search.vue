<template>
    <div
        class="main-search"
        :class="{ 'main-search_active': searchValue?.length }"
    >
        <div class="main-search__wrapper main-search_active">
            <input
                v-model="searchValue"
                type="text"
                class="main-search__input"
                placeholder="Пошук по катологу"
                tabindex="0"
            />
            <div class="main-search__search-results">
                <span
                    v-if="searchValue?.length"
                    class="main-search__results-empty"
                    >Нічого не знайдено.</span
                >
                <div
                    v-if="true"
                    class="main-search__results-item"
                >
                    <div class="main-search__results-img">
                        <img
                            src="~/assets/images/search_item/fabitex_dye.png"
                            alt="dye"
                        />
                    </div>
                    <h4 class="main-search__results-title">Емаль Condor ПФ-115 жовта 1,8 кг</h4>
                    <span class="main-search__results-price">350&nbsp;&#x20b4;</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IMainSearchProps } from './main-search.props'

defineProps<IMainSearchProps>()

const searchValue = defineModel<string>('')
</script>

<style lang="scss">
.main-search {
    position: relative;
    width: 100%;
    min-width: 300px;
    height: 52px;

    &__wrapper {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 100%;
    }

    &__input {
        width: 100%;
        height: 52px;
        padding: 16px 16px 16px 57px;

        font-weight: 500;
        color: $black;

        background: url('~/assets/svg/24x24/search.svg') 20px center no-repeat;
        background-color: $white;
        border: none;
        border-radius: $base-radius;

        &::placeholder {
            color: $smoky;
        }

        &:focus {
            width: 542px;
        }
    }

    &__results {
        position: absolute;
        top: 52px;
        left: 0;

        &-empty {
            display: block;

            width: 100%;
            padding: 20px 48px;

            text-align: center;

            background-color: $dark-gray;
            border-radius: 0 0 $base-radius $base-radius;
        }

        &-item {
            cursor: pointer;

            display: grid;
            grid-template-columns: 60px 1fr minmax(50px, auto);
            place-items: center center;

            color: $black;

            background-color: $white;

            transition: background-color $base-transition;

            @media (hover: hover) {
                &:hover {
                    background-color: $background;
                }
            }

            &:active {
                background-color: $background;
            }
        }

        &-img {
            overflow: hidden;
            width: 60px;
            height: 60px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &-price {
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
        }
    }

    &_active {
        & .main-search__input {
            width: 542px;
            border-radius: $base-radius $base-radius 0 0;
        }
    }
}
</style>
