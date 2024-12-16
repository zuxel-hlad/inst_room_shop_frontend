<template>
    <div class="main-search">
        <input
            type="text"
            class="main-search__input"
            placeholder="Пошук по катологу"
        />
    </div>
</template>
<script setup lang="ts">
import type { IMainSearchProps } from './main-search.props'
import './main-search.scss'

defineProps<IMainSearchProps>()
</script>
