import { StateCreator } from "zustand";

import { USER_OPTIONS } from "../../layout/header/components/user-menu/userOptions";

export type UserSlice = {
    id: number;
    user: string;
    isLogged: boolean;

    setLoggedByUser: (user: string) => void;
    setLoggedByID: (id: number) => void;

    isAuthMenuOpen: boolean;
    setAuthMenu: (isOpen: boolean) => void;

    setOptionBySelected: (option: number) => void;
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
    set
) => ({
    id: 0,
    user: "invitado",
    isLogged: false,

    setLoggedByUser: (user) => set(() => ({ user, isLogged: true })),
    setLoggedByID: (id) => set(() => ({ id, isLogged: true })),

    isAuthMenuOpen: false,
    setAuthMenu: (isOpen) =>
        set(() => {
            return { isAuthMenuOpen: isOpen };
        }),

    setOptionBySelected: (option) => {
        const { USER_LOGIN, USER_LOGOUT, USER_PROFILE, USER_SETTINGS } =
            USER_OPTIONS;

        switch (option) {
            case USER_PROFILE:
                console.log("profile");
                break;
            case USER_SETTINGS:
                console.log("profile");
                break;
            case USER_LOGOUT:
                console.log("profile");
                break;
            case USER_LOGIN:
                set(() => ({ isAuthMenuOpen: true }));
                break;
        }
    },
});
