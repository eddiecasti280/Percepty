import React, { createContext, useState, useEffect, useContext } from 'react';

const ADMIN_EMAIL = 'admin@percepty.com';
const ADMIN_PASSWORD = 'Admin123!';

const AuthContext = createContext();

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('percepty_users') || '[]');
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('percepty_current_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('percepty_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('percepty_current_user');
    }
  }, [user]);

  const register = (email, password) => {
    if (!email || !password) return { success: false, error: 'All fields are required.' };
    if (password.length < 6) return { success: false, error: 'Password must be at least 6 characters.' };
    if (email.toLowerCase() === ADMIN_EMAIL) return { success: false, error: 'This email is reserved.' };
    const users = getUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase()))
      return { success: false, error: 'Email already registered.' };
    users.push({ email: email.toLowerCase(), password });
    localStorage.setItem('percepty_users', JSON.stringify(users));
    setUser({ email: email.toLowerCase(), isAdmin: false });
    return { success: true };
  };

  const login = (email, password) => {
    if (email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setUser({ email: ADMIN_EMAIL, isAdmin: true });
      return { success: true };
    }
    const users = getUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      setUser({ email: found.email, isAdmin: false });
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password.' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAdmin: !!user?.isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}