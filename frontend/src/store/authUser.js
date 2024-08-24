import axios from 'axios';
import toast from 'react-hot-toast';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: true,
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post('/api/auth/signup', credentials);
            set({ user: response.data.user, isSigningUp: false });
            toast.success('Account created successfully');
        } catch (error) {
            toast.error(error.response.data.message || 'An error occurred');
            set({ isSigningUp: false, user: null });
        }
    },
    login: async () => {},
    logout: async () => {},
    authCheck: async () => {
        try {
            const response = await axios.get('/api/auth/authCheck');
            set({ user: response.data.user, isCheckingAuth: false });
        } catch (error) {
            set({ user: null, isCheckingAuth: false });
            //toast.error(error.response.data.message || 'An error occurred');
        }
    },
}))