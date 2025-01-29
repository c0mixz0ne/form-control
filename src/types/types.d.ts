export type AccountsList = IAccount[]

export type ErrorStatus = 'success' | 'error' | 'warning';

export interface IAccountErrors {
	login?: string; 
	password?: string;
	type?: string;
}

export interface IAccount {
	label: string | null;
	type: 'LDAP' | 'Локальная' | null; 
	login: string | null;
	password: string | null;
}

export interface IAccountError {
	type?: string;
	login? :string;
	password? : string;
	account? ; number
}