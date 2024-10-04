module.exports = [
  {
    context: ['**'],
    target: 'http://localhost:4000',
    secure: false,
    bypass: (req) => {
      if (req.headers['Upgrade'] === 'websocket' ||
          req.url === '/@vite/client' ||
          req.url.startsWith('/@fs/')) {
        return req.url;
      }
    },
  },
];
