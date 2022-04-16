module.exports = {
  title: `3DPIT Study Blog`,
  description: `굥민's의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://3dpit.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `박경민`,
    bio: {
      role: `개발자`,
      description: ['사용자의 입장에서', '능동적으로 일하는', '불편함을 개선하는', '새로운것을 창조하는'],
      thumbnail: 'sample.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.04 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: 'github.com/3dpit',
          github: 'https://github.com/3dpit/3dpit.github.io',
          demo: 'https://3dpit.github.io/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 작성 및 개발',
        description:
          '이전에 있는 블로그 테마를 가지고 개발을 해보려고 합니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: 'github.com/3dpit',
          github: 'https://github.com/3dpit/3dpit.github.io',
          demo: 'https://3dpit.github.io/',
        },
      },
    ],
  },
};
