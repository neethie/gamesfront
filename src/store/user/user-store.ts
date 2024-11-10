import { StateCreator } from "zustand";

export type UserSlice = {
    id: number;
    user: string;
    isLogged: boolean;

    setLoggedByUser: (user: string) => void;
    setLoggedByID: (id: number) => void;
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
    set
) => ({
    id: 0,
    user: "invitado",
    isLogged: false,

    setLoggedByUser: (user) => set(() => ({ user, isLogged: true })),
    setLoggedByID: (id) => set(() => ({ id, isLogged: true })),
});
