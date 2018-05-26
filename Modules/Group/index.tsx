import * as Pages from './Pages';
import reducer from './reducer';
import sagas from './sagas';
import {
    StackNavigator,
} from 'react-navigation';

const stack = StackNavigator({
    groupList: {
        screen: Pages.List,
    },
    groupCreate: {
        screen: Pages.Create,
    },
    groupShow: {
        screen: Pages.Show,
    },
    groupQRCode: {
        screen: Pages.QRCode,
    },
    groupJoin: {
        screen: Pages.Join,
    },
}, {
    initialRouteName: 'groupList',
});

export {
    stack,
    reducer,
    sagas,
};