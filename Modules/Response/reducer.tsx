import config from './config';

export default(state = config.state, action = {}) => {
    switch(action.type) {
        case config.actions.loading:
            return {
                ...state,
                loading: action.loading,
            };
            break;
        default:
            return state;
    }
};
