import postcsspxtoviewport from "postcss-px-to-viewport-8-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-13',
  devServer: {
    port: 7927,
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "这里是页面title",
      meta: [
        {
          name: "description",
          content: "这里是网站描述",
        },
        {
          name: "Keywords",
          content: "这是是关键词",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }], // icon
    },
  },

  vite: {
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["el-"], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
  },
  modules: [],
});