import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';
import HomeIcon from '@mui/icons-material/Home';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
 
 
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },

];