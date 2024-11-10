import { StateCreator } from "zustand";

import { USER_OPTIONS } from "../../layout/header/components/user-menu/userOptions";

export type UserSlice = {
    isLogged: boolean;

    isAuthMenuOpen: boolean;
    authMenu: number;
    setAuthMenu: (isOpen: boolean, number: number) => void;

    setOptionBySelected: (option: number) => void;
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
    set
) => ({
    isLogged: false,

    isAuthMenuOpen: false,
    authMenu: 0,
    setAuthMenu: (isOpen, number) =>
        set(() => ({
            isAuthMenuOpen: isOpen,
            authMenu: number,
        })),

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
                set(() => ({ isAuthMenuOpen: true, authMenu: USER_LOGIN }));
                break;
        }
    },
});
