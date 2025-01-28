import { defineStore } from 'pinia'
import type { IAccountsList, IAccount } from '@/types/types';

export const useAccountsStore = defineStore('accounts', {
	state: () => ({
		accounts: [] as IAccountsList,
	}),

	actions: {
		getAccountsFromStorage() {
			const storedData = localStorage.getItem('accounts');
			if (storedData) {
				this.accounts = JSON.parse(storedData);
			} else {
				this.setAccountsDefaultValues();
			}
		},

		setAccountsDefaultValues() {
			this.accounts = [];
			this.setAccountsToStorage();
		},

		setAccountsToStorage() {
			localStorage.setItem('accounts', JSON.stringify(this.accounts));
		},

		setOneAccount() {


		}
	},
})  