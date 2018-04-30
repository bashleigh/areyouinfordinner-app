export default {
	state: {
		currentPage: 0,
		groups: [],
	},
	api: {
		groups: {
			index: {
				method: 'get',
				path: '/groups',
				headers: {
					'Accept': 'application/json',
				},
			},
			show: {
				method: 'get',
				path: '/groups/{group_id}/',
				headers: {
					'Accept': 'application/json',
				},
			},
			store: {
				method: 'post',
				path: '/groups/',
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json',
				},
			},
			update: {
				method: 'put',
				path: '/groups/{group_id}/',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
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
		},
	},
};