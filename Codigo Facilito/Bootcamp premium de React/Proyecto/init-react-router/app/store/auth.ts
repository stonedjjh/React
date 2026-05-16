//Archivo creado en la Asesoría 6
import type { Session, User } from "@supabase/supabase-js"
import { create } from "zustand"
import { supabase } from "~/utils/supabese"

type  AuthState = {

    session: Session | null;
    user: User | null;
    isLoading: boolean;
    error: string | null;    
    clearError: () => void;
    initialize: () => void;
    signOut: () => Promise<{error:string | null}>;
    signIn: ({email, password}: {email: string, password: string}) => Promise<{error:string | null}>;
    signUp: ({email, password, fullName}: {email: string, password: string, fullName: string}) => Promise<{error:string | null}>;
}

export const useAuthStore = create<AuthState>((set) => ({
    session: null,
    user: null,
    isLoading: true,
    error: null,
    clearError: () => set({error: null}),
    initialize: async () => {        
        try {
            set ({isLoading:true, error:null});
            const {data, error} = await supabase.auth.getSession();
            if (error){
                set({isLoading: false, error: error.message || "Error initializing auth" });
                return;
            }
            set({ isLoading: false, session: data.session, user: data.session?.user || null, error: null    });
            
        } catch (error) {
            set({ isLoading: false, error: "Error initializing auth" });
        }
    },
    signOut: async () => {
        try {
            set({ isLoading: true, error: null });
            const { error } = await supabase.auth.signOut();
            if (error) {
                set({ isLoading: false, error: error.message || "Error signing out" });
                return { error: error.message || "Error signing out" };
            }
            set({ session: null, user: null, isLoading: false, error: null });
            return { error: null };
        }
        catch (error: any) {
            set({ isLoading: false, error: error.message || "Error signing out" });
            return { error: error.message || "Error signing out" };
        }
    },
    signIn: async ({ email, password }) => {
        try {
            set({ isLoading: true, error: null });
            const { data , error } = await supabase.auth.signInWithPassword({ email, password });
            if (error){
                set({ isLoading: false, error: error.message || "Error signing in" });
                return { error: error.message || "Error signing in" };
            } 
            set({ session: data.session, user: data.user || null, isLoading: false, error: null });
            return { error: null };
        }
        catch (error: any) {
            set({ isLoading: false, error: error.message || "Error signing in" });
            return { error: error.message || "Error signing in" };
        }
    },
    signUp: async ({ email, password, fullName }) => {

        try {
            set({ isLoading: true, error: null });
            const { data, error } = await supabase.auth.signUp({ 
                email, 
                password , 
                options: {
                    data: { 
                        full_name: fullName 
                    },
                }, 
            });
            if (error){
                set({isLoading: false, error: error.message || "Error signing up" });
                return { error: error.message };
            }
            
            set({ session: data.session, user: data.user, isLoading: false, error: null });
            return { error: null };
        }
        catch (error: any) {
            set({ isLoading: false, error: error.message || "Error signing up" });
            return { error: error.message || "Error signing up" };
        }
    },
}));