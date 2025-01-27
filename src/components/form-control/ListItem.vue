<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NSelect, NButton, NIcon } from 'naive-ui'
import { Remove } from '@vicons/ionicons5'

const value = ref(null)
const options = 
    [
        {
          label: 'LDAP',
          value: 'ldap',
        },
        {
          label: 'Локальная',
          value: 'local'
        },
    ]

</script>
<template>
    <div class="list-item">
        <n-input type="text" size="medium" placeholder="Метки" :maxlength="50"/>
        <n-select placeholder="Тип записи" v-model:value="value" size="medium" :options="options" />
        <n-input type="text" size="medium" placeholder="Логин" :maxlength="100"/>
        <n-input type="password"show-password-on="mousedown"placeholder="Пароль" :maxlength="100"/>
        <n-button tertiary square type="primary"> 
            <template #icon> <n-icon><Remove /></n-icon> </template> 
        </n-button>
    </div>
    <div class="list-item">
        <n-input type="text" size="medium" placeholder="Метки" maxlength="50"/>
        <n-select placeholder="Тип записи" v-model:value="value" size="medium" :options="options" />
        <n-input type="text" size="medium" placeholder="Логин" maxlength="100"  />
        <n-button tertiary square type="primary"> 
            <template #icon> <n-icon><Remove /></n-icon> </template> 
        </n-button>
    </div>
</template>
<style lang="scss" scoped>
.list-item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    &:last-child{
        margin-bottom: 0;   
    }

    @media all and (max-width: 700px) {
        flex-direction: column;

        & .n-button {
            margin-left: auto;
        }
    }
}
</style>