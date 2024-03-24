import conf from "../conf/conf.js";
import { ID, Client, Account } from "appwrite";

export class AuthService {
  client = new Client(); // We made a constructor instead of writing the .setEndpoint and .setProject here, because it will be created bydefault in the class if we write it here and it is a wastage of resources
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteURL)
      .setProject(conf.appWriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        //You can call another function
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null; //returning null because if we don't get any value
  }

  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
