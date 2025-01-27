<script setup lang="ts">
     import { NTag, NAlert } from 'naive-ui'        
</script>
<template>
    <div class="help-text">
        <n-alert title="Инфо" type="info">
            <slot></slot>
        </n-alert>
    </div>
</template>
<style lang="scss" scoped>
.help-text{
    display: flex;
    margin-top: 20px;
    width: 100%;

    :deep(.n-alert){
        width: 100%;
    }
}
</style>