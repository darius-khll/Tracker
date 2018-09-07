
import {computed , observable } from 'mobx';
import uuidv1 from 'uuid/v1';

class UsersStore {
	@observable users = [];
    @observable pendingRequests = 0;

    getUsers() {
        // this function will be used for get users from database and push them to users array
        const dbUsers = [
            {id : 1 , username : 'ali' , email: 'ali@example.com' , password: '12345'},
            {id : 2 , username : 'gholi' , email: 'gholi@example.com' , password: '12345'},
            {id : 3 , username : 'zafar' , email: 'zafar@example.com' , password: '12345'},
            {id : 4 , username : 'maryam' , email: 'maryam@example.com' , password: '12345'}
        ];

        this.users = dbUsers;
    }

    loginValidation(username,password) {
        let isLogin = false;
        this.users.map((user , i) => {
            if((user.username === username || user.email === username) && user.password === password){
                debugger;
                isLogin = user;
            }
        });
        return isLogin;
    }

    signUpValidation(username , email) {
        let userObj;
        this.users.map((user , i) => {
            if(user.username === username || user.email === email){
                userObj = user;
            }
        });

        if(!userObj){
            return true;
        }else{
            return false;
        }

    }

	addUser(username,email,password) {
		this.users.push({
			id: uuidv1(),
			username: username,
            email: email,
            password : password
		});
	}
}

const usersStore = new UsersStore();

export default usersStore;