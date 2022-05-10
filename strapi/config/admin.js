module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ac937d496cab932bee9dd19745a93d8'),
  },
});
