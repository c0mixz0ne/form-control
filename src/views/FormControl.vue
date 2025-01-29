<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import AddButton from '@/components/form-control/AddButton.vue';
import HelpText from '@/components/form-control/HelpText.vue';
import FormList from '@/components/form-control/FormList.vue';
import ListItem from '@/components/form-control/ListItem.vue';

import { onMounted, reactive, ref } from 'vue';
import { useAccountsStore } from '@/stores/account'
import type { AccountsList, IAccount } from '@/types/types';

const accountStore = useAccountsStore()
const accounts = reactive(accountStore.accounts)
const errors = ref<{ [key: string]: string }>({});

console.log(accounts);


const deleteAccount = (index: number) => {
	accountStore.deleteAccount(index)
	console.log(accounts);
}

const addAccount = () => {
	accountStore.addAccount()
	console.log(accounts);
}

const updateAccount = (account: IAccount, index: number) => {
	validateAccount(account, index)
	// accountStore.updateAccount(account, index)
	// console.log(accounts);
}

const validateAccount = (account: IAccount, index: number) => {
	const validators: (keyof IAccount)[] = ['login', 'type', 'password'];
	// console.log(account);
	
	// if (account.type === 'LDAP') {
	// 	console.log('da');
		
	// 	// validators.filter(item => item !== 'password');
	// }
	
	for (const field of validators) {
		// console.log(field);
		
    	const value = account[field];

		if (value === null || value === '') {
			errors.value[field] = `${field} не может быть пустым`; // Добавляем ошибку, если поле пустое
		}


		console.log(account.type);
		
		// if (value !== 'LDAP' || value !== 'Локальная') {

		// }
  	}

	// console.log(errors.value);
	
}
</script>

<template>
	<main>
		<section class="form-control">
			<Container>
				<AddButton @click="addAccount">Учетные записи</AddButton>
				<HelpText>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</HelpText>
				<FormList>
					<ListItem 
						v-for="(account, index) in accounts" 
						:key="index" 
						:index="index" 
						:account="account" 
						@delete-account="deleteAccount"
						@update-account="updateAccount"
					/>
				</FormList>
			</Container>
		</section>
	</main>
</template>
<style lang="scss" scoped>
.form-control {
	display: flex;
	flex-direction: column;

	:deep(.container) {
		display: flex;
		flex-direction: column;
	}
}
</style>