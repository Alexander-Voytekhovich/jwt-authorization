import axios from "axios";
import { makeAutoObservable } from 'mobx';

import AuthService from '../service/AuthService';
import { IAuthResponse } from '../interfaces/response/IAuthResponse';
import { API_URL } from '../api';
import { IUser } from '../interfaces/IUser';

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth = (isAuth: boolean): void => {
    this.isAuth = isAuth;
  }

  setUser = (user: IUser): void => {
    this.user = user;
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async registration(email: string, password: string): Promise<void> {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async logout(): Promise<void> {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async checkAuth(): Promise<void> {
    this.setLoading(true);
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}
