const websites = [
  {
    type: "资讯",
    sites: [
      {
        name: "知乎",
        url: "//zhihu.com",
        color: "#0077E6",
        icon: "https://static.zhihu.com/static/favicon.ico"
      },
      {
        name: "掘金",
        url: "//juejin.im",
        color: "#333333",
        icon: "https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png"
      },
      {
        name: "V2EX",
        color: "#AAB0C6",
        url: "//www.v2ex.com",
        icon: "https://www.v2ex.com/static/img/icon_rayps_64.png"
      },
      {
        name: "Github Trending",
        url: "//github.com/trending",
        color: "#24292E",
        icon: "https://github.githubassets.com/favicons/favicon-dark.png"
      },
      {
        name: "蓝点网",
        url: "//www.landiannews.com",
        color: "#019EFF",
        icon: "https://www.landiannews.com/favicon_N.ico"
      },
      {
        name: "思否",
        url: "//segmentfault.com",
        color: "#009A61",
        icon: ""
      },
      {
        name: "少数派",
        url: "//sspai.com",
        color: "#232222",
        icon: "https://cdn.sspai.com/sspai/assets/img/favicon/icon.ico"
      }
    ]
  },
  {
    type: "视频",
    sites: [
      {
        name: "bilibili",
        url: "//bilibili.com",
        color: "#FB7299",
        icon: "https://www.bilibili.com/favicon.ico"
      },
      {
        name: "字幕组",
        url: "//http://www.rrys2019.com/",
        color: "#00A0E9",
        icon: "http://tu.jstucdn.com/images/dibulogo.png"
      },
      {
        name: "RARBG",
        url: "//rarbgprx.org",
        color: "#2E2E2E",
        icon:
          "https://dyncdn.me/static/20/img/logo_dark_nodomain2_optimized.png"
      }
    ]
  },
  {
    type: "开发文档",
    sites: [
      {
        name: "Android",
        url: "//developer.android.com/",
        color: "#07304C",
        icon:
          "https://www.gstatic.com/devrel-devsite/prod/v84899ba5ac366dd19b845bb4579ea9262ac5ac73d5db61a8fa440a5f2fc65a26/android/images/favicon.png"
      },
      {
        name: "Dart",
        url: "//dart.cn",
        color: "#1C2834",
        icon: "https://dart.cn/assets/shared/dart/icon/64.png"
      },
      {
        name: "Flutter",
        url: "//flutter.cn",
        color: "#075B9A",
        icon: "https://flutter.cn/favicon.ico"
      },
      {
        name: "MDN",
        url: "//developer.mozilla.org/zh-CN/",
        color: "#83D0F2",
        icon:
          "https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png"
      },
      {
        name: "TypeScript",
        url: "//www.typescriptlang.org",
        color: "#294E80",
        icon:
          "https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"
      },
      {
        name: "Golang",
        url: "//go-zh.org/doc/",
        color: "#375EAB",
        icon: "https://avatars1.githubusercontent.com/u/4314092"
      },
      {
        name: "Spring",
        url: "//spring.io",
        color: "#80EA6F",
        icon: "https://spring.io/images/favicon.ico"
      },
      {
        name: "Vue.js",
        url: "//cn.vuejs.org",
        color: "#4FC08D",
        icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png"
      },
      {
        name: "React",
        url: "//zh-hans.reactjs.org/",
        color: "#282C34",
        icon: "https://zh-hans.reactjs.org/favicon.ico"
      },
      {
        name: "kotlin",
        url: "//www.kotlincn.net/docs/reference/",
        color: "#27282C",
        icon: "https://www.kotlincn.net/assets/images/favicon.ico"
      }
    ]
  },
  {
    type: "应用",
    sites: [
      {
        name: "酷安",
        url: "//coolapk.com",
        color: "#0F9D58",
        icon: "https://static.coolapk.com/static/web/v8/images/coolapklogo.png"
      },
      {
        name: "异次元",
        url: "//www.iplaysoft.com",
        color: "#2A98E9"
      },
      {
        name: "小众软件",
        url: "//www.appinn.com",
        color: "#007A9C"
      }
    ]
  },
  {
    type: "前端",
    sites: [
      {
        name: "Element",
        url: "//element.eleme.cn/",
        color: "#409EFF",
        icon: "https://element.eleme.cn/favicon.ico"
      },
      {
        name: "Ant design",
        url: "https://ant.design/index-cn",
        color: "#0170FE",
        icon:
          "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      },
      {
        name: "bootstrap",
        url: "//getbootstrap.com/",
        color: "#563D7C",
        icon:
          "https://getbootstrap.com/docs/4.4/assets/img/favicons/apple-touch-icon.png"
      },
      {
        name: "Vuetify",
        url: "//vuetifyjs.com/zh-Hans",
        color: "#212121",
        icon: "https://vuetifyjs.com/favicon.ico"
      }
    ]
  },
  {
    type: "设计",
    sites: [
      {
        name: "unDraw",
        url: "//undraw.co",
        color: "#6C63FF",
        icon: "https://undraw.co/favicon.ico"
      },
      {
        name: "figma",
        url: "//www.figma.com/",
        color: "#5D5D5D",
        icon: "https://static.figma.com/app/icon/1/favicon.png"
      },
      {
        name: "Rive",
        url: "//rive.app/",
        color: "#444444",
        icon: "https://rive.app/favicon-32x32.png"
      },
      {
        name:"Material",
        url:"//material.io",
        color:"#212121",
        icon:"https://material.io/favicon.ico",
      },
    ]
  }
];

export default websites;
