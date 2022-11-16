const USER_KEY = "last-user";

export const saveUserInfo = (user) => {
    if (user)
        localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUserInfo = () => {
    const cachedUserString = localStorage.getItem(USER_KEY);
    return cachedUserString ? JSON.parse(cachedUserString) : this.currentUserInfo
}