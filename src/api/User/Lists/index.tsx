import { http } from '@utils/system-util-http/http.tsx';

export function getUserInfo(data: never) {
    return http({
        url: `/assess/personKaoheRelation/getAdminTaskList`,
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data
    });
}
