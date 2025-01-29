<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { IAccount, ErrorStatus, IAccountErrors } from '@/types/types';

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
	errors: IAccountErrors[]
}>()

const emits = defineEmits<{
	(event: 'delete-account', index: number): void;
	(event: 'update-account', account: IAccount, index: number): void;
}>()

const deleteAccountHandler = (index: number) => {
	emits('delete-account', index)
}

const updateHandler = (account: IAccount, index: number) => {	
	emits('update-account', account, index)
}

</script>
	<template>
		<div class="list-item">
			<n-input @blur="updateHandler(account, index)" v-model:value="account.label" type="text" size="medium" placeholder="Метки" :maxlength="50" />
			<n-select :status="errors[index]?.type ? 'error' : 'success' as ErrorStatus" @vue:updated="updateHandler(account, index)" v-model:value="account.type" :options="options"
				placeholder="Тип записи" size="medium" />
			<n-input :status="errors[index]?.login ? 'error' : 'success' as ErrorStatus" @blur="updateHandler(account, index)" v-model:value="account.login" type="text" size="medium"
				placeholder="Логин" :maxlength="100" />
			<n-input :status="errors[index]?.password ? 'error' : 'success' as ErrorStatus" @blur="updateHandler(account, index)" v-model:value="account.password"
				v-if="account.type === 'Локальная' || account.type === null" type="password"
				show-password-on="mousedown" placeholder="Пароль" :maxlength="100" />
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