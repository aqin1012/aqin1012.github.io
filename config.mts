import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AQin",
  description: "Something about Java｜GIS",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/portrait_green.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Examples', link: '/markdown-examples' }
  //   ],

  //   sidebar: [
  //     {
  //       text: 'Examples',
  //       items: [
  //         { text: 'Markdown Examples', link: '/markdown-examples' },
  //         { text: 'Runtime API Examples', link: '/api-examples' }
  //       ]
  //     }
  //   ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  //   ]
  // }
  logo: "/img/portrait_green.png",
  nav: [
    { text: "常见问题", link: "/articles/打不开Github" },
    { text: "gitee", link: "https://gitee.com/aqin1012" },
    {
      text: "我有货.｡o○",
      items: [
        { text: "Item A", link: "/item-1" },
        { text: "Item B", link: "/item-2" },
        { text: "Item C", link: "/item-3" },
      ],
    },
  ],
  sidebar: {
    "/articles/": [
      {
        text: "【常见问题】",
        items: [
          {
            text: " 呃...打不开Github",
            link: "/articles/打不开Github",
          },

          {
            text: " 跨域问题?不怕～",
            link: "/articles/跨域问题",
          },
        ],
      },
      {
        text: "【GIS·地理信息科学】",
        items: [
          {
            text: "地图投影",
            link: "/articles/地图投影",
          },
          {
            text: "墨卡托投影",
            link: "/articles/墨卡托投影",
          },
          {
            text: "坐标序列",
            link: "/articles/坐标序列",
          },
          {
            text: "北极星仰角与纬度",
            link: "/articles/北极星仰角与纬度",
          },
          {
            text: "瓦片地图",
            link: "/articles/瓦片地图",
          },
        ],
      },
    ],
  },
      socialLinks: [
      { icon: 'github', link: 'https://github.com/aqin1012' }
    ]
}
}
)
