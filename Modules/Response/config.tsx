export default {
    state: {
        responses: {

        },
        loading: false,
    },
    api: {
        store: {
            path: '/group/{group_code}/responses',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        },
        update: {
            path: 'group/{group_code}/responses/{response_id}',
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        },
    },
    actions: {
        loading: 'responses-loading',
        store: 'responses-store',
        update: 'responses-update',
    },
};
