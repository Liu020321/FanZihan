export default [
  { heading: 'Others' },
  {
    title: 'User Information',
    icon: { icon: 'tabler-user' },
    to: { name: 'apps-user-view-id', params: { id: 21 } } },
  {
    title: 'System feedback',
    icon: { icon: 'tabler-headphones' },
    to: 'access-control',
    action: 'read',
    subject: 'AclDemo',
  },
  {
    title: 'about',
    icon: { icon: 'tabler-file-text' },
    to: 'about',
  },
]
