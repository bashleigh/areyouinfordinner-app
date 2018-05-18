export default {
	state: {
		currentPage: 0,
		groups: {},
	},
	api: {
		groups: {
			index: {
				method: 'get',
				path: '/group',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer {token}',
				},
			},
			show: {
				method: 'get',
				path: '/group/{group_id}/',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer {token}',
				},
			},
			store: {
				method: 'post',
				path: '/group/',
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer {token}',
				},
			},
			update: {
				method: 'put',
				path: '/group/{group_id}/',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Bearer {token}',
				},
			},
		},
	},
	actions: {
		group: {
			store: 'group-store',
			update: 'group-update',
			show: 'group-show',
			index: 'group-index',
			loading: 'group-loading',
			push: 'group-push',
			paginate: 'group-paginate',
		},
	},
};
