export enum USER_OPTIONS {
    USER_PROFILE = 0,
    USER_SETTINGS = 1,
    USER_LOGOUT = 2,
    USER_LOGIN = 3,
}

export const userOptions = [
    {
        string: "Perfil",
        action: () => console.log("profile"),
    },
    {
        string: "Configuración",
        action: () => console.log("settings"),
    },
    {
        string: "Cerrar Sesión",
        action: () => console.log("logout"),
    },
    {
        string: "Iniciar Sesión",
        action: () => console.log("logout"),
    },
];

export const getTextByType = (type: number) => {
    const { USER_LOGIN, USER_LOGOUT, USER_PROFILE, USER_SETTINGS } =
        USER_OPTIONS;
    switch (type) {
        case USER_PROFILE:
            return "Perfil";
        case USER_SETTINGS:
            return "Configuración";
        case USER_LOGOUT:
            return "Cerrar Sesión";
        case USER_LOGIN:
            return "Iniciar Sesión";
        default:
            return "Perfil";
    }
};
