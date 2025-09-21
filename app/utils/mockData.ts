export interface Order {
  id: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
  avatar: string;
}

export const mockOrders: Order[] = [
  {
    id: '#CM9801',
    user: 'Natali Craig',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
    avatar: 'C1.svg',
  },
  {
    id: '#CM9802',
    user: 'Kate Morrison',
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
    avatar: 'C2.svg',
  },
  {
    id: '#CM9803',
    user: 'Drew Cano',
    project: 'Client Project',
    address: 'Bogwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
    avatar: 'C3.svg',
  },
  {
    id: '#CM9804',
    user: 'Orlando Diggs',
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
    avatar: 'C4.svg',
  },
  {
    id: '#CM9805',
    user: 'Andi Lane',
    project: 'App Landing Page',
    address: 'Nest Lone Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
    avatar: 'C5.svg',
  },
  {
    id: '#CM9806',
    user: 'Natali Craig',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
    avatar: 'C6.svg',
  },
  {
    id: '#CM9807',
    user: 'Kate Morrison',
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
    avatar: 'C1.svg',
  },
  {
    id: '#CM9808',
    user: 'Drew Cano',
    project: 'Client Project',
    address: 'Bogwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
    avatar: 'C2.svg',
  },
  {
    id: '#CM9809',
    user: 'Orlando Diggs',
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
    avatar: 'C3.svg',
  },
  {
    id: '#CM9810',
    user: 'Andi Lane',
    project: 'App Landing Page',
    address: 'Nest Lone Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
    avatar: 'C4.svg',
  },
];
