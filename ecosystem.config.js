module.exports = {
  apps: [{
    name: `${process.env.API_NAME}:${process.env.API_PORT}[${process.env.API_ENV}]`,
    script: './dist/index.js',
    exec_mode: 'cluster',
    instances: 'max',
    autorestart: true,
    watch: false,
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    max_memory_restart: '1G',
  }],
};
