import { createContext, useContext, useState, useEffect } from 'react';
import { signIn as apiSignIn, signUp as apiSignUp, getUserProfile, changePassword as apiChangePassword } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (token) {
        try {
          const { data: userData } = await getUserProfile(token);
          setUser(userData);
        } catch {
          logout();
        }
      }
      setLoading(false);
    };
    load();
  }, [token]);

  const login = async (email, password) => {
    const { data } = await apiSignIn({ email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const register = async (fullName, email, password, role) => {
    const { data } = await apiSignUp({ fullName, email, password, role });
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const updatePassword = async (currentPassword, newPassword) => {
    await apiChangePassword(currentPassword, newPassword, token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, updatePassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);