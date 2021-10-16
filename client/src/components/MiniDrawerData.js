import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const MiniDrawerData = [
    {
        title: 'Notes',
        path: '/',
        icon: <LightbulbIcon />
    },
    {
        title: 'To-Do List',
        path: '/todo',
        icon: <ListAltIcon />
    },
    {
        title: 'Subscriptions',
        path: '/subscriptions',
        icon: <SubscriptionsIcon />
    },
]