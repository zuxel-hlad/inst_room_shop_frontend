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
import './main-button.scss'

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
