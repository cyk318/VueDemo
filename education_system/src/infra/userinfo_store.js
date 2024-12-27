import { defineStore } from 'pinia';

const userinfoConst = {
    ID: "userinfo.id",
    USERNAME: "userinfo.username",
    ROLE: "userinfo.role",
    MONEY: "userinfo.money"
}

export const useUserInfoStore = defineStore('userinfo', {
  state: () => ({
      id: sessionStorage.getItem(userinfoConst.ID) || null,
      username: sessionStorage.getItem(userinfoConst.USERNAME) || null,
      role: sessionStorage.getItem(userinfoConst.ROLE) || null,
      money: sessionStorage.getItem(userinfoConst.MONEY) || null,
  }),
  actions: {
    update(id, username, role, money) {
        this.id = id
        this.username = username
        this.role = role
        this.money = money
        sessionStorage.setItem(userinfoConst.ID, id)
        sessionStorage.setItem(userinfoConst.USERNAME, username)
        sessionStorage.setItem(userinfoConst.ROLE, role)
        sessionStorage.setItem(userinfoConst.MONEY, money)
    }
  },
});
