import axios from 'axios';

export class AccountsRepository { 
    url = "https://api.johnlawrimore.com/directory/accounts"; 
    config = {
        headers: {
            Authorization:'tcates'
        }
    };

    getAccountById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x); 
                reject();
            });
        });
    }  

    updateAccount(id, account) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x); 
                reject();
            });
        });
    } 

    addAccount(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x); 
                reject();
            });
        });
    }   

    deleteAccount(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x); 
                reject();
            });
        });
    }  


    getAccounts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            })
        })
    }
}