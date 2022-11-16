import { makeAutoObservable } from "mobx";
import { SCRAP_URL } from "../config";
import { getDataAboutUser } from "../http";
import { getUserInfo, saveUserInfo } from "../utils";

class Users {
    searchName = "";
    
    isLoading =  false;
    isError = false;
    currentUserInfo = {};

    constructor() {
        makeAutoObservable(this);
    }

    // setCurrentUserInfo(userInfo) {
    //     this.isLoading = false;
    //     this.currentUserInfo = userInfo;
    // } 

    fetchUserInfo(searchedName) {
        this.isLoading = true;
        getDataAboutUser(searchedName).then(
            (res) => {
                const userInfo = res.data;
                this.currentUserInfo = userInfo;
                this.isLoading = false;
                this.isError = false;
                saveUserInfo(userInfo);
            }
        ).catch(e => {
            this.isError = true; 
        });
     
    }
}

export default new Users();
