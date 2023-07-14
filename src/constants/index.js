import { send, shield, star } from '../assets';

export const navLinks = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'features',
        title: 'Features',
    },
    {
        id: 'clients',
        title: 'Clients',
    }
];

export const stats =[
    {
        id: 'stats-1',
        title: 'User Active',
        value: '3800+',
    },
    {
        id: 'stats-2',
        title: 'Trusted by Company',
        value: '230+',
    },
    {
        id: 'stats-3',
        title: 'Transaction',
        value: '$50M+',
    },
];

export const features = [
	{
		id: 'feature-1',
		icon: star,
		title: 'Rewards',
		content: 'lorem ipsum dolor sit amet, consectetur adipiscing',
	},
	{
		id: 'feature-2',
		icon: shield,
		title: 'Secured',
		content: 'lorem ipsum dolor sit amet, consectetur adipiscing',
	},
	{
		id: 'feature-3',
		icon: send,
		title: 'Balance Transfer',
		content: 'lorem ipsum dolor sit amet, consectetur adipiscing',
	},
];