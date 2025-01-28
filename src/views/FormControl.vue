<script setup lang="ts">
import AddButton from '@/components/form-control/AddButton.vue';
import HelpText from '@/components/form-control/HelpText.vue';
import FormList from '@/components/form-control/FormList.vue';
import ListItem from '@/components/form-control/ListItem.vue';

import Container from '@/components/layout/Container.vue';

import { onMounted, reactive, ref } from 'vue';


import type { IAccountsList, IAccount } from '@/types/types';

const accounts = reactive<IAccount[]>([
    { label: '11111', type: 'LDAP', login: 'login', password: '123' },
	{ label: '11111', type: 'LDAP', login: 'login', password: null },
]);

const errors = ref<string[]>([])

const deleteAccount = (index: number) => {
	console.log(accounts, index);
	
	accounts.splice(index, 1)
};

const saveAccount = (index: number) => {
	errors.value = []
	console.log(validateRequireData(accounts[index]));
}

const validateRequireData = (account: IAccount): void => {
	const validateInputs: (keyof IAccount)[] = [
		'type',
		'login',
		'password',
	]

	validateInputs.forEach((key) => {
		if (account.type === 'LDAP'){
			if (key === 'password') return
		}

		if (account[key] === null || account[key] === undefined || account[key] === '') {
			errors.value.push(key);
		}
	})
}

const addAccount = () => {
	accounts.push(
		{ 
			label: null,
			type: null,
			login: null,
			password: null 
		}
	)
	console.log(accounts);
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
						@save-account="saveAccount"
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