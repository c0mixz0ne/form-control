import { defineStore } from 'pinia'
import type { IAccount, IAccountError } from '@/types/types'

export const useAccountsStore = defineStore('accounts', {
  state: () => ({
    accounts: JSON.parse(localStorage.getItem('accounts') ?? '[]') as IAccount[],
    errors: {} as IAccountError,
  }),

  actions: {
    addAccount(): void {
      const lastAccount = this.accounts[this.accounts.length - 1]

      if (!lastAccount) {
        this.accounts.push({
          label: null,
          type: null,
          login: null,
          password: null,
        })
      } else {
        const lastCheck = Object.values(lastAccount).every((value) => value === null)
        if (lastCheck) {
          alert('Заполните пустое поле перед созданием нового')
          console.warn('Last account on the form is empty')
        } else {
          this.accounts.push({
            label: null,
            type: null,
            login: null,
            password: null,
          })
        }
      }
    },
    deleteAccount(index: number): void {
      this.accounts.splice(index, 1)
      this.saveToLocalStorage()
    },

    updateAccount(account: IAccount, index: number) {
      this.accounts[index] = account
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('accounts', JSON.stringify(this.accounts))
    },
  },
})
