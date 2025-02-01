<template>
    <button
        class="main-button"
        :class="{ 'main-button_black': variant === 'black', 'main-button_outlined': variant === 'outlined' }"
        @click="createRippleEffect"
    >
        <slot>button</slot>
    </button>
</template>
<script setup lang="ts">
import type { IMainButton } from './main-button.props'
defineProps<IMainButton>()

const createRippleEffect = (e: Event): void => {
    const event = e as PointerEvent
    const button = event.currentTarget as HTMLButtonElement
    const ripple = document.createElement('span')

    const rect = button.getBoundingClientRect()

    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.className = 'main-button__ripple'

    button.appendChild(ripple)

    setTimeout(() => {
        ripple.remove()
    }, 700)
}
</script>

<style lang="scss">
.main-button {
    position: relative;

    overflow: hidden;

    padding: 14.5px 32px;

    font-weight: 500;
    color: $white;
    text-transform: uppercase;

    background-color: $orange;
    border: 1px solid transparent;
    border-radius: $base-radius;

    transition:
        background-color $base-transition,
        border-color $base-transition,
        color $base-transition;

    @media (hover: hover) {
        &:hover {
            background-color: $black;
        }
    }

    &__ripple {
        position: absolute;
        transform: scale(0);

        opacity: 1;
        background-color: rgb(255 255 255 / 50%);
        border-radius: 50%;

        transition: opacity 0.7s ease-in-out;
        animation: ripple-effect 0.7s ease-in-out;
    }

    &:active {
        background-color: $black;
    }

    &:disabled {
        pointer-events: none;
        background-color: $gray;
    }

    &_black {
        background-color: $black;

        @media (hover: hover) {
            &:hover {
                background-color: $orange;
            }
        }

        &:active {
            background-color: $orange;
        }
    }

    &_outlined {
        background-color: transparent;
        border-color: $orange;

        @media (hover: hover) {
            &:hover {
                background-color: $orange;
            }
        }

        &:active {
            color: $white;
            background-color: $orange;
        }
    }
}

@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>
