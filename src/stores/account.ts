import { defineStore } from 'pinia'
import type { AccountsList, IAccount, IAccountError } from '@/types/types';

export const useAccountsStore = defineStore('accounts', {
	state: () => ({
		accounts: JSON.parse(localStorage.getItem('accounts') ?? '[]') as IAccount[],
		errors: {} as IAccountError
	}),

	actions: {
		addAccount(): void {
			this.accounts.push({
				label: null,
				type: null,
				login: null,
				password: null 
			})
		},
		deleteAccount(index: number): void {
			this.accounts.splice(index,1)
			this.saveToLocalStorage()
		},
		updateAccount(account: IAccount, index: number){		
			// this.validateAccount(account ,index)	
			this.accounts[index] = account
			this.saveToLocalStorage()
		},	
		// validateAccount(account: IAccount, index: number) {
		// 	if (account.type === 'LDAP') {
		// 		account.password = null
		// 	}

		// 	if (!account.login?.length) {
		// 		this.errors.login = 'error'
		// 		console.log(this.errors, 222);
				
		// 	}

		// 	// if (account.password?.length === 0) {
		// 	// 	this.errors.password = 'error'
		// 	// }

		// 	// if (account.type?.length === 0) {
		// 	// 	this.errors.type = 'error'
		// 	// }

		// 	// if (this.errors.type || this.errors.password || this.errors.login) {
		// 	// 	this.errors.account = index;

		// 	// 	console.log(this.errors);	
		// 	// }

		// },	
		saveToLocalStorage() {			
			localStorage.setItem('accounts', JSON.stringify(this.accounts));
		},
		// getAccountsFromStorage() {
		// 	const storedData = localStorage.getItem('accounts');
		// 	if (storedData) {
		// 		this.accounts = JSON.parse(storedData);
		// 	} else {
		// 		this.setAccountsDefaultValues();
		// 	}
		// },

		// setAccountsDefaultValues() {
		// 	this.accounts = [];
		// 	this.setAccountsToStorage();
		// },

		// setAccountsToStorage() {
		// 	localStorage.setItem('accounts', JSON.stringify(this.accounts));
		// },

		// setOneAccount() {


		// }
	},
})  