<template>
    <div>
        <input
            type="text"
            class="main-search"
            placeholder="Пошук по катологу"
        />
    </div>
</template>
<script setup lang="ts">
import './main-search.scss'
import type { IMainSearch } from './main-search.props'

defineProps<IMainSearch>()
</script>
