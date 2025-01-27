<script setup lang="ts">
    import { NButton, NIcon } from 'naive-ui'
    import { Add } from '@vicons/ionicons5'
</script>
<template>
    <div class="add-button">
        <h2>
            <slot></slot>
        </h2>
        <n-button tertiary circle type="primary">
            <template #icon>
                <n-icon><Add /></n-icon>
            </template>
        </n-button>
    </div>
</template>
<style lang="scss" scoped>
.add-button{
    display: flex;
    align-items: center;

    button {
        margin-left: 10px;
    }
}
</style>