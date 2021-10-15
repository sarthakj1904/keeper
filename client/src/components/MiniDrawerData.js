import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const MiniDrawerData = [
    {
        title: 'Subscriptions',
        path: '/',
        icon: <SubscriptionsIcon />
    },
    {
        title: 'To-Do List',
        path: '/todo',
        icon: <ListAltIcon />
    },
    {
        title: 'Notes',
        path: '/notes',
        icon: <LightbulbIcon />
    }
]