import { makeAutoObservable } from "mobx";
import { SCRAP_URL } from "../config";
import { getDataAboutUser } from "../http";

class Users {
    searchName = "";
    isLoading = false;
    currentUserInfo = {};
    cachedUsersInfo = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchUserInfo(searchedName) {
        getDataAboutUser(searchedName, ).then(
            (res) => {
                this.currentUserInfo = JSON.parse(res.data);
            }
        );
    }
}

export default new Users();
