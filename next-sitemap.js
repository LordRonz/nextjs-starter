// !STARTERCONF Change the siteUrl
module.exports = {
  siteUrl: 'https://ronz-nextjs.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
