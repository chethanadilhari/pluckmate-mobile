// services/authService.ts
import API from '../services/api';
import { clearToken, setToken } from '../services/tokenManager';
import { clearUser, setUser } from '../services/userManager';


export const login = async (email: string, password: string) => {
  const res = await API.post('/auth/login', { email, password });
  if (res.status !== 200 && res.status !== 201) {
      return null;
    }
    
    const { accessToken, user } = res.data;
    
    if(user.role !== 'SUPERINTENDENT') {
        return null;
    }
// Set token and user in AsyncStorage
  await setToken(accessToken);
  await setUser(user);

  return user;
};

export const logout = async () => {
  await clearToken();
    await clearUser();
};

export const changePassword = async (data: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  const res = await API.post("/auth/change-password", data);
  console.log(res);
  return res.data;
};