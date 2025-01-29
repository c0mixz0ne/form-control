<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import AddButton from '@/components/form-control/AddButton.vue';
import HelpText from '@/components/form-control/HelpText.vue';
import FormList from '@/components/form-control/FormList.vue';
import ListItem from '@/components/form-control/ListItem.vue';

import { reactive, ref, computed } from 'vue';
import { useAccountsStore } from '@/stores/account'
import type { IAccount, IAccountErrors } from '@/types/types';

const accountStore = useAccountsStore()
const accounts = reactive(accountStore.accounts)
const errors = ref<IAccountErrors[]>([])

const showInfo = computed(() => { return accounts.length })

const deleteAccount = (index: number) => {
	accountStore.deleteAccount(index)
}

const addAccount = () => {
	accountStore.addAccount()
}

const updateAccount = (account: IAccount, index: number) => {
	formatLabel(index)
	validateAccount(account, index)

	if (errors.value[index]?.type || errors.value[index]?.login || errors.value[index]?.password) {
		console.warn('Validate errors')
	}
	else {		
		accountStore.saveToLocalStorage()
	}
	
}

const validateAccount = (account: IAccount, index: number): void => {

	errors.value[index] = {};

	for (const el in account) {
		if (account.hasOwnProperty(el)) {
			const value = account[el as keyof IAccount];

			if (el === 'login') {
				if (!value) {
					errors.value[index][el] = 'error'
				}
			}

			if (el === 'type') {
				if (!value) {
					errors.value[index][el] = 'error'
				}
			}

			if (el === 'password') {
				if (!value) {
					errors.value[index][el] = 'error'
				}
				if (account.type === 'LDAP'){
					accounts[index][el] = null
					delete errors.value[index]['password']
				}
			}
		}		
	}
}

const formatLabel = (index: number) => {
	console.log(accounts[index].label);
	
}
</script>

<template>
	<main>
		<section class="form-control">
			<Container>
				<AddButton @click="addAccount">Учетные записи</AddButton>
				<HelpText v-if="showInfo">Для указания нескольких меток для одной пары логин/пароль используйте
					разделитель ;</HelpText>
				<FormList>
					<ListItem 
					v-for="(account, index) in accounts"
					:key="index" 
					:index="index" 
					:account="account"
					:errors="errors"
					@delete-account="deleteAccount" 
					@update-account="updateAccount" />
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