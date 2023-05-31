export interface ILogin {
    username: string;
    password: string;
}


/**
 * @return username
 * @return password
 */
export const createEmptyLogin = (): ILogin => ({
    username: "",
    password: ""
});

/**
 * @author sutton
 * @description 用户id
 */
export interface IUser {
    userId: bigint;
}