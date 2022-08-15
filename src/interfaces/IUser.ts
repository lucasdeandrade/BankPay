
    export interface OcurrenceRecord {
        id: number;
        accountId: number;
        typeRecord: number;
        amount: number;
        createdAt: Date;
    }

    export interface Account {
        id: number;
        userId: number;
        numberAccount: number;
        balance: number;
        openingAt: Date;
        ocurrenceRecords: OcurrenceRecord[];
    }

    export interface IUser {
        id: number;
        name: string;
        cpf: string;
        phone: string;
        account: Account;
    }

