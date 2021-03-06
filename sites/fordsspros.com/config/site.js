const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/fordsspros/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fordsspros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/fordsspros', target: '_blank' },
    // { provider: 'instagram', href: 'https://www.instagram.com/fordsspros/', target: '_blank' },
  ],
  radix: {
    enabled: false,
    // url: 'https://radix.base.parameter1.com',
    // appId: '436dd265-a7ac-4608-8331-d5ea70e65102',
    // submissionFieldIds: [
    //   { name: 'comments', id: '5b99725a81284d4fc4e58233' },
    // ],
  },
  gtm: {
    containerId: 'GTM-M92TRPK',
  },
  // mediaFuse: {
  //   id: 6062,
  // },
  gcse: {
    id: '003355913687346718228:zrqhmh7lvw4',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'GreenIndustryPros.com <noreply@baseplatform.io>',
    logo: 'https://img.fordsspros.com/files/base/acbm/static/dss-logo-2.png?h=60&auto=format,compress&q=70',
    bgColor: '#164f77',
  },
};
