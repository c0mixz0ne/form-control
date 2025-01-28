export type IAccountsList = IAccount[]

export interface IAccount {
	label: string | null;
	type: 'LDAP' | 'Локальная' | null; 
	login: string | null;
	password: string | null;
}