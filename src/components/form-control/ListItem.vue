<script setup lang="ts">
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import type { IAccountsList, IAccount } from '@/types/types';

import { NInput, NSelect, NButton, NIcon } from 'naive-ui'
import { Remove } from '@vicons/ionicons5'

const options = [
	{
		label: 'LDAP',
		value: 'LDAP'
	},
	{
		label: 'Локальная',
		value: 'Локальная'
	},
]

const props = defineProps<{
	account: IAccount;
	index: number;
}>()

const emits = defineEmits<{
    (event: 'delete-account', index: number): void;
	(event: 'save-account', index: number): void;
}>()

const deleteAccountHandler = (index: number) => {
	emits('delete-account', index)
}

const saveAccountHandler = (index: number) => {	
	emits('save-account', index)
}

const selectHandler = (type: 'Локальная' | 'LDAP') => {
	if (type === 'LDAP') {
		props.account.password = null
	}
	saveAccountHandler(props.index)
}

</script>
<template>
	<div class="list-item">
		<n-input v-model:value="account.label" type="text" size="medium" placeholder="Метки" :maxlength="50"/>
		<n-select @change="selectHandler($event)" v-model:value="account.type" :options="options" placeholder="Тип записи" size="medium" />
		<n-input @blur="saveAccountHandler(index)" v-model:value="account.login" type="text" size="medium" placeholder="Логин" :maxlength="100" />
		<n-input @blur="saveAccountHandler(index)" v-model:value="account.password" v-if="account.type === 'Локальная' || account.type === null" type="password" show-password-on="mousedown" placeholder="Пароль" :maxlength="100" />
		<n-button @click="deleteAccountHandler(index)" tertiary square type="primary">
			<template #icon> 
				<n-icon>
					<Remove />
				</n-icon> 
			</template>
		</n-button>
	</div>
</template>
<style lang="scss" scoped>
.list-item {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;


	&:last-child {
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