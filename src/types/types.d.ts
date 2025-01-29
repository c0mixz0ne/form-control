export type AccountsList = IAccount[]

export interface IAccount {
	label: Array<{ text: string }> | null;
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