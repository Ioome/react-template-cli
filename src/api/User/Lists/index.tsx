import { http } from '@utils/http.tsx';

export const getUserInfo = {
    list() {
        return http
            .get(``)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
