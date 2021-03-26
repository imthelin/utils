
### 优化记录
`npm run build`，此处未包含 `npm run install` 阶段
| env        | before  | after |
| ---------- | ------- | ----- |
| test       | 10609ms |       |
| staging    | 9364ms  |       |
| production | 9780ms  |       |

---

具体记录如下

- test
  Version: webpack 4.16.5
  Time: 10609ms
  Built at: 2021/03/16 上午 11:03:18
  Asset Size Chunks Chunk Names
  static/fonts/element-icons.6f0a763.ttf 10.8 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.61268bf.ttf 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.805b13a.eot 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.4c26358.otf 129 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.70ff71e.woff 60.1 KiB [emitted]
  static/img/DIN_Alternate_Bold.0f8ca17.svg 324 KiB [emitted] [big]
  static/fonts/DIN_Alternate_Bold.263bc7c.woff2 57 KiB [emitted]
  static/img/casterWithMasterTop20.1b47a53.png 38.5 KiB [emitted]
  static/img/background.f59dfe5.png 1.85 MiB [emitted] [big]
  static/img/title.a004195.png 80.4 KiB [emitted]
  static/img/home_bottom_right_bg.342349a.png 112 KiB [emitted]
  static/img/casterCntRate.8510d5a.png 38.2 KiB [emitted]
  static/img/home_banner.24a38f1.png 48.8 KiB [emitted]
  static/img/404.a57b6f3.png 95.8 KiB [emitted]
  static/img/casterNewCntRate.fe975b9.png 38.2 KiB [emitted]
  static/js/7zzA.0b214933.js 369 bytes 7zzA [emitted]
  static/js/U/5H.2669e464.js 15.5 KiB U/5H [emitted]
  static/css/app.f2bcfd86.css 23.5 KiB app [emitted] app
  static/js/app.80f7ba34.js 180 KiB app [emitted] app
  static/css/chunk-03e5.77d8559e.css 4.36 KiB chunk-03e5 [emitted]
  static/js/chunk-03e5.1b765e2e.js 67.3 KiB chunk-03e5 [emitted]
  static/js/chunk-095c.a152877a.js 256 KiB chunk-095c [emitted] [big]
  static/css/chunk-184c.11db41a2.css 1.89 KiB chunk-184c [emitted]
  static/js/chunk-184c.4d6fbbe1.js 7.3 KiB chunk-184c [emitted]
  static/css/chunk-2072.2d28510b.css 2.82 KiB chunk-2072 [emitted]
  static/js/chunk-2072.69b013d5.js 49.5 KiB chunk-2072 [emitted]
  static/css/chunk-2e6b.386ed29f.css 2.67 KiB chunk-2e6b [emitted]
  static/js/chunk-2e6b.585feb73.js 37.3 KiB chunk-2e6b [emitted]
  static/css/chunk-314d.56cc08e4.css 3.5 KiB chunk-314d [emitted]
  static/js/chunk-314d.d5af91b5.js 34.1 KiB chunk-314d [emitted]
  static/js/chunk-4f36.266305cd.js 75.3 KiB chunk-4f36 [emitted]
  static/css/chunk-677c.43a05fc3.css 1.44 KiB chunk-677c [emitted]
  static/js/chunk-677c.9c6b0bc9.js 26.1 KiB chunk-677c [emitted]
  static/css/chunk-69ff.bfae86d3.css 4.64 KiB chunk-69ff [emitted]
  static/js/chunk-69ff.4c1888e2.js 8.03 KiB chunk-69ff [emitted]
  static/css/chunk-6b9f.d08478a1.css 13 KiB chunk-6b9f [emitted]
  static/js/chunk-6b9f.6c508a0c.js 79.8 KiB chunk-6b9f [emitted]
  static/css/chunk-7f30.72cf93a0.css 4.77 KiB chunk-7f30 [emitted]
  static/js/chunk-7f30.f849b3e5.js 17.9 KiB chunk-7f30 [emitted]
  static/js/chunk-82b7.2eb31aa4.js 11.4 KiB chunk-82b7 [emitted]
  static/css/chunk-8a35.e5e2beb2.css 22.1 KiB chunk-8a35 [emitted]
  static/js/chunk-8a35.13817d81.js 21.9 KiB chunk-8a35 [emitted]
  static/css/chunk-96ca.aca95cfd.css 2.09 KiB chunk-96ca [emitted]
  static/js/chunk-96ca.d9f0f9e4.js 15.9 KiB chunk-96ca [emitted]
  static/css/chunk-d19e.6f57422c.css 8.39 KiB chunk-d19e [emitted]
  static/js/chunk-d19e.48cf4626.js 18.5 KiB chunk-d19e [emitted]
  static/css/chunk-d1db.deddd254.css 4.45 KiB chunk-d1db [emitted]
  static/js/chunk-d1db.1f9f6ce5.js 22.5 KiB chunk-d1db [emitted]
  static/css/chunk-elementUI.560433f6.css 202 KiB chunk-elementUI [emitted] chunk-elementUI
  static/js/chunk-elementUI.ed7a0e5e.js 562 KiB chunk-elementUI [emitted] [big] chunk-elementUI
  static/js/chunk-libs.6d631868.js 1.04 MiB chunk-libs [emitted] [big] chunk-libs
  static/js/runtime.5f58b08a.js 3.94 KiB runtime [emitted] runtime
  favicon.ico 9.44 KiB [emitted]
  index.html 691 bytes [emitted]
  static/favicon.ico 9.44 KiB [emitted]
  Entrypoint app [big] = static/js/runtime.5f58b08a.js static/css/chunk-elementUI.560433f6.css static/js/chunk-elementUI.ed7a0e5e.js static/js/chunk-libs.6d631868.js static/css/app.f2bcfd86.css static/js/app.80f7ba34.js

  WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  This can impact web performance.
  Assets:
  static/img/DIN_Alternate_Bold.0f8ca17.svg (324 KiB)
  static/img/background.f59dfe5.png (1.85 MiB)
  static/js/chunk-095c.a152877a.js (256 KiB)
  static/js/chunk-elementUI.ed7a0e5e.js (562 KiB)
  static/js/chunk-libs.6d631868.js (1.04 MiB)

  WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
  Entrypoints:
  app (1.99 MiB)
  static/js/runtime.5f58b08a.js
  static/css/chunk-elementUI.560433f6.css
  static/js/chunk-elementUI.ed7a0e5e.js
  static/js/chunk-libs.6d631868.js
  static/css/app.f2bcfd86.css
  static/js/app.80f7ba34.js

  Build complete.

- staging
  Version: webpack 4.16.5
  Time: 9364ms
  Built at: 2021/03/16 上午 11:07:18
  Asset Size Chunks Chunk Names
  static/fonts/element-icons.6f0a763.ttf 10.8 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.61268bf.ttf 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.805b13a.eot 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.4c26358.otf 129 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.70ff71e.woff 60.1 KiB [emitted]
  static/img/DIN_Alternate_Bold.0f8ca17.svg 324 KiB [emitted] [big]
  static/fonts/DIN_Alternate_Bold.263bc7c.woff2 57 KiB [emitted]
  static/img/casterWithMasterTop20.1b47a53.png 38.5 KiB [emitted]
  static/img/background.f59dfe5.png 1.85 MiB [emitted] [big]
  static/img/title.a004195.png 80.4 KiB [emitted]
  static/img/home_bottom_right_bg.342349a.png 112 KiB [emitted]
  static/img/casterCntRate.8510d5a.png 38.2 KiB [emitted]
  static/img/home_banner.24a38f1.png 48.8 KiB [emitted]
  static/img/404.a57b6f3.png 95.8 KiB [emitted]
  static/img/casterNewCntRate.fe975b9.png 38.2 KiB [emitted]
  static/js/7zzA.0b214933.js 369 bytes 7zzA [emitted]
  static/js/U/5H.2669e464.js 15.5 KiB U/5H [emitted]
  static/css/app.f2bcfd86.css 23.5 KiB app [emitted] app
  static/js/app.d910f63d.js 180 KiB app [emitted] app
  static/css/chunk-03e5.77d8559e.css 4.36 KiB chunk-03e5 [emitted]
  static/js/chunk-03e5.1b765e2e.js 67.3 KiB chunk-03e5 [emitted]
  static/js/chunk-095c.a152877a.js 256 KiB chunk-095c [emitted] [big]
  static/css/chunk-184c.11db41a2.css 1.89 KiB chunk-184c [emitted]
  static/js/chunk-184c.4d6fbbe1.js 7.3 KiB chunk-184c [emitted]
  static/css/chunk-2072.2d28510b.css 2.82 KiB chunk-2072 [emitted]
  static/js/chunk-2072.69b013d5.js 49.5 KiB chunk-2072 [emitted]
  static/css/chunk-2e6b.386ed29f.css 2.67 KiB chunk-2e6b [emitted]
  static/js/chunk-2e6b.585feb73.js 37.3 KiB chunk-2e6b [emitted]
  static/css/chunk-314d.56cc08e4.css 3.5 KiB chunk-314d [emitted]
  static/js/chunk-314d.d5af91b5.js 34.1 KiB chunk-314d [emitted]
  static/js/chunk-4f36.266305cd.js 75.3 KiB chunk-4f36 [emitted]
  static/css/chunk-677c.43a05fc3.css 1.44 KiB chunk-677c [emitted]
  static/js/chunk-677c.9c6b0bc9.js 26.1 KiB chunk-677c [emitted]
  static/css/chunk-69ff.bfae86d3.css 4.64 KiB chunk-69ff [emitted]
  static/js/chunk-69ff.4c1888e2.js 8.03 KiB chunk-69ff [emitted]
  static/css/chunk-6b9f.d08478a1.css 13 KiB chunk-6b9f [emitted]
  static/js/chunk-6b9f.6c508a0c.js 79.8 KiB chunk-6b9f [emitted]
  static/css/chunk-7f30.72cf93a0.css 4.77 KiB chunk-7f30 [emitted]
  static/js/chunk-7f30.f849b3e5.js 17.9 KiB chunk-7f30 [emitted]
  static/js/chunk-82b7.2eb31aa4.js 11.4 KiB chunk-82b7 [emitted]
  static/css/chunk-8a35.e5e2beb2.css 22.1 KiB chunk-8a35 [emitted]
  static/js/chunk-8a35.13817d81.js 21.9 KiB chunk-8a35 [emitted]
  static/css/chunk-96ca.aca95cfd.css 2.09 KiB chunk-96ca [emitted]
  static/js/chunk-96ca.d9f0f9e4.js 15.9 KiB chunk-96ca [emitted]
  static/css/chunk-d19e.6f57422c.css 8.39 KiB chunk-d19e [emitted]
  static/js/chunk-d19e.48cf4626.js 18.5 KiB chunk-d19e [emitted]
  static/css/chunk-d1db.deddd254.css 4.45 KiB chunk-d1db [emitted]
  static/js/chunk-d1db.1f9f6ce5.js 22.5 KiB chunk-d1db [emitted]
  static/css/chunk-elementUI.560433f6.css 202 KiB chunk-elementUI [emitted] chunk-elementUI
  static/js/chunk-elementUI.ed7a0e5e.js 562 KiB chunk-elementUI [emitted] [big] chunk-elementUI
  static/js/chunk-libs.6d631868.js 1.04 MiB chunk-libs [emitted] [big] chunk-libs
  static/js/runtime.5f58b08a.js 3.94 KiB runtime [emitted] runtime
  favicon.ico 9.44 KiB [emitted]
  index.html 691 bytes [emitted]
  static/favicon.ico 9.44 KiB [emitted]
  Entrypoint app [big] = static/js/runtime.5f58b08a.js static/css/chunk-elementUI.560433f6.css static/js/chunk-elementUI.ed7a0e5e.js static/js/chunk-libs.6d631868.js static/css/app.f2bcfd86.css static/js/app.d910f63d.js

  WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  This can impact web performance.
  Assets:
  static/img/DIN_Alternate_Bold.0f8ca17.svg (324 KiB)
  static/img/background.f59dfe5.png (1.85 MiB)
  static/js/chunk-095c.a152877a.js (256 KiB)
  static/js/chunk-elementUI.ed7a0e5e.js (562 KiB)
  static/js/chunk-libs.6d631868.js (1.04 MiB)

  WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
  Entrypoints:
  app (1.99 MiB)
  static/js/runtime.5f58b08a.js
  static/css/chunk-elementUI.560433f6.css
  static/js/chunk-elementUI.ed7a0e5e.js
  static/js/chunk-libs.6d631868.js
  static/css/app.f2bcfd86.css
  static/js/app.d910f63d.js

  Build complete.

- production
  Version: webpack 4.16.5
  Time: 9780ms
  Built at: 2021/03/16 上午 11:11:01
  Asset Size Chunks Chunk Names
  static/fonts/element-icons.6f0a763.ttf 10.8 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.61268bf.ttf 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.805b13a.eot 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.4c26358.otf 129 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.70ff71e.woff 60.1 KiB [emitted]
  static/img/DIN_Alternate_Bold.0f8ca17.svg 324 KiB [emitted] [big]
  static/fonts/DIN_Alternate_Bold.263bc7c.woff2 57 KiB [emitted]
  static/img/casterWithMasterTop20.1b47a53.png 38.5 KiB [emitted]
  static/img/background.f59dfe5.png 1.85 MiB [emitted] [big]
  static/img/title.a004195.png 80.4 KiB [emitted]
  static/img/home_bottom_right_bg.342349a.png 112 KiB [emitted]
  static/img/casterCntRate.8510d5a.png 38.2 KiB [emitted]
  static/img/home_banner.24a38f1.png 48.8 KiB [emitted]
  static/img/404.a57b6f3.png 95.8 KiB [emitted]
  static/img/casterNewCntRate.fe975b9.png 38.2 KiB [emitted]
  static/js/7zzA.0b214933.js 369 bytes 7zzA [emitted]
  static/js/U/5H.2669e464.js 15.5 KiB U/5H [emitted]
  static/css/app.f2bcfd86.css 23.5 KiB app [emitted] app
  static/js/app.bc43f3c4.js 180 KiB app [emitted] app
  static/css/chunk-03e5.77d8559e.css 4.36 KiB chunk-03e5 [emitted]
  static/js/chunk-03e5.1b765e2e.js 67.3 KiB chunk-03e5 [emitted]
  static/js/chunk-095c.a152877a.js 256 KiB chunk-095c [emitted] [big]
  static/css/chunk-184c.11db41a2.css 1.89 KiB chunk-184c [emitted]
  static/js/chunk-184c.4d6fbbe1.js 7.3 KiB chunk-184c [emitted]
  static/css/chunk-2072.2d28510b.css 2.82 KiB chunk-2072 [emitted]
  static/js/chunk-2072.69b013d5.js 49.5 KiB chunk-2072 [emitted]
  static/css/chunk-2e6b.386ed29f.css 2.67 KiB chunk-2e6b [emitted]
  static/js/chunk-2e6b.585feb73.js 37.3 KiB chunk-2e6b [emitted]
  static/css/chunk-314d.56cc08e4.css 3.5 KiB chunk-314d [emitted]
  static/js/chunk-314d.d5af91b5.js 34.1 KiB chunk-314d [emitted]
  static/js/chunk-4f36.266305cd.js 75.3 KiB chunk-4f36 [emitted]
  static/css/chunk-677c.43a05fc3.css 1.44 KiB chunk-677c [emitted]
  static/js/chunk-677c.9c6b0bc9.js 26.1 KiB chunk-677c [emitted]
  static/css/chunk-69ff.bfae86d3.css 4.64 KiB chunk-69ff [emitted]
  static/js/chunk-69ff.4c1888e2.js 8.03 KiB chunk-69ff [emitted]
  static/css/chunk-6b9f.d08478a1.css 13 KiB chunk-6b9f [emitted]
  static/js/chunk-6b9f.6c508a0c.js 79.8 KiB chunk-6b9f [emitted]
  static/css/chunk-7f30.72cf93a0.css 4.77 KiB chunk-7f30 [emitted]
  static/js/chunk-7f30.f849b3e5.js 17.9 KiB chunk-7f30 [emitted]
  static/js/chunk-82b7.2eb31aa4.js 11.4 KiB chunk-82b7 [emitted]
  static/css/chunk-8a35.e5e2beb2.css 22.1 KiB chunk-8a35 [emitted]
  static/js/chunk-8a35.13817d81.js 21.9 KiB chunk-8a35 [emitted]
  static/css/chunk-96ca.aca95cfd.css 2.09 KiB chunk-96ca [emitted]
  static/js/chunk-96ca.d9f0f9e4.js 15.9 KiB chunk-96ca [emitted]
  static/css/chunk-d19e.6f57422c.css 8.39 KiB chunk-d19e [emitted]
  static/js/chunk-d19e.48cf4626.js 18.5 KiB chunk-d19e [emitted]
  static/css/chunk-d1db.deddd254.css 4.45 KiB chunk-d1db [emitted]
  static/js/chunk-d1db.1f9f6ce5.js 22.5 KiB chunk-d1db [emitted]
  static/css/chunk-elementUI.560433f6.css 202 KiB chunk-elementUI [emitted] chunk-elementUI
  static/js/chunk-elementUI.ed7a0e5e.js 562 KiB chunk-elementUI [emitted] [big] chunk-elementUI
  static/js/chunk-libs.6d631868.js 1.04 MiB chunk-libs [emitted] [big] chunk-libs
  static/js/runtime.5f58b08a.js 3.94 KiB runtime [emitted] runtime
  favicon.ico 9.44 KiB [emitted]
  index.html 691 bytes [emitted]
  static/favicon.ico 9.44 KiB [emitted]
  Entrypoint app [big] = static/js/runtime.5f58b08a.js static/css/chunk-elementUI.560433f6.css static/js/chunk-elementUI.ed7a0e5e.js static/js/chunk-libs.6d631868.js static/css/app.f2bcfd86.css static/js/app.bc43f3c4.js

  WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  This can impact web performance.
  Assets:
  static/img/DIN_Alternate_Bold.0f8ca17.svg (324 KiB)
  static/img/background.f59dfe5.png (1.85 MiB)
  static/js/chunk-095c.a152877a.js (256 KiB)
  static/js/chunk-elementUI.ed7a0e5e.js (562 KiB)
  static/js/chunk-libs.6d631868.js (1.04 MiB)

  WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
  Entrypoints:
  app (1.99 MiB)
  static/js/runtime.5f58b08a.js
  static/css/chunk-elementUI.560433f6.css
  static/js/chunk-elementUI.ed7a0e5e.js
  static/js/chunk-libs.6d631868.js
  static/css/app.f2bcfd86.css
  static/js/app.bc43f3c4.js

  Build complete.

  <!-- production inline-source-map 后速度提升了 10%，这里有疑问，productionSourceMap 此时是 false, 我更改
  devtool，却却提升了打包速度，估计 productionSourceMap 可能并不是完全控制 devtool 的一些前置事件 -->

  Version: webpack 4.16.5
  Time: 8281ms
  Built at: 2021/03/16 下午 12:16:21
  Asset Size Chunks Chunk Names
  static/fonts/element-icons.6f0a763.ttf 10.8 KiB [emitted]
  static/img/casterWithMasterTop20.1b47a53.png 38.5 KiB [emitted]
  static/img/background.f59dfe5.png 1.85 MiB [emitted] [big]
  static/img/title.a004195.png 80.4 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.61268bf.ttf 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.805b13a.eot 148 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.4c26358.otf 129 KiB [emitted]
  static/fonts/DIN_Alternate_Bold.70ff71e.woff 60.1 KiB [emitted]
  static/img/DIN_Alternate_Bold.0f8ca17.svg 324 KiB [emitted] [big]
  static/fonts/DIN_Alternate_Bold.263bc7c.woff2 57 KiB [emitted]
  static/img/home_bottom_right_bg.342349a.png 112 KiB [emitted]
  static/img/casterCntRate.8510d5a.png 38.2 KiB [emitted]
  static/img/home_banner.24a38f1.png 48.8 KiB [emitted]
  static/img/404.a57b6f3.png 95.8 KiB [emitted]
  static/img/casterNewCntRate.fe975b9.png 38.2 KiB [emitted]
  static/js/7zzA.0b214933.js 369 bytes 7zzA [emitted]
  static/js/U/5H.2669e464.js 15.5 KiB U/5H [emitted]
  static/css/app.f2bcfd86.css 23.5 KiB app [emitted] app
  static/js/app.bc43f3c4.js 180 KiB app [emitted] app
  static/css/chunk-03e5.77d8559e.css 4.36 KiB chunk-03e5 [emitted]
  static/js/chunk-03e5.1b765e2e.js 67.3 KiB chunk-03e5 [emitted]
  static/js/chunk-095c.a152877a.js 256 KiB chunk-095c [emitted] [big]
  static/css/chunk-184c.11db41a2.css 1.89 KiB chunk-184c [emitted]
  static/js/chunk-184c.4d6fbbe1.js 7.3 KiB chunk-184c [emitted]
  static/css/chunk-2072.2d28510b.css 2.82 KiB chunk-2072 [emitted]
  static/js/chunk-2072.69b013d5.js 49.5 KiB chunk-2072 [emitted]
  static/css/chunk-2e6b.386ed29f.css 2.67 KiB chunk-2e6b [emitted]
  static/js/chunk-2e6b.585feb73.js 37.3 KiB chunk-2e6b [emitted]
  static/css/chunk-314d.56cc08e4.css 3.5 KiB chunk-314d [emitted]
  static/js/chunk-314d.d5af91b5.js 34.1 KiB chunk-314d [emitted]
  static/js/chunk-4f36.266305cd.js 75.3 KiB chunk-4f36 [emitted]
  static/css/chunk-677c.43a05fc3.css 1.44 KiB chunk-677c [emitted]
  static/js/chunk-677c.9c6b0bc9.js 26.1 KiB chunk-677c [emitted]
  static/css/chunk-69ff.bfae86d3.css 4.64 KiB chunk-69ff [emitted]
  static/js/chunk-69ff.4c1888e2.js 8.03 KiB chunk-69ff [emitted]
  static/css/chunk-6b9f.d08478a1.css 13 KiB chunk-6b9f [emitted]
  static/js/chunk-6b9f.6c508a0c.js 79.8 KiB chunk-6b9f [emitted]
  static/css/chunk-7f30.72cf93a0.css 4.77 KiB chunk-7f30 [emitted]
  static/js/chunk-7f30.f849b3e5.js 17.9 KiB chunk-7f30 [emitted]
  static/js/chunk-82b7.2eb31aa4.js 11.4 KiB chunk-82b7 [emitted]
  static/css/chunk-8a35.e5e2beb2.css 22.1 KiB chunk-8a35 [emitted]
  static/js/chunk-8a35.13817d81.js 21.9 KiB chunk-8a35 [emitted]
  static/css/chunk-96ca.aca95cfd.css 2.09 KiB chunk-96ca [emitted]
  static/js/chunk-96ca.d9f0f9e4.js 15.9 KiB chunk-96ca [emitted]
  static/css/chunk-d19e.6f57422c.css 8.39 KiB chunk-d19e [emitted]
  static/js/chunk-d19e.48cf4626.js 18.5 KiB chunk-d19e [emitted]
  static/css/chunk-d1db.deddd254.css 4.45 KiB chunk-d1db [emitted]
  static/js/chunk-d1db.1f9f6ce5.js 22.5 KiB chunk-d1db [emitted]
  static/css/chunk-elementUI.560433f6.css 202 KiB chunk-elementUI [emitted] chunk-elementUI
  static/js/chunk-elementUI.ed7a0e5e.js 562 KiB chunk-elementUI [emitted] [big] chunk-elementUI
  static/js/chunk-libs.6d631868.js 1.04 MiB chunk-libs [emitted] [big] chunk-libs
  static/js/runtime.5f58b08a.js 3.94 KiB runtime [emitted] runtime
  favicon.ico 9.44 KiB [emitted]
  index.html 691 bytes [emitted]
  static/favicon.ico 9.44 KiB [emitted]
  Entrypoint app [big] = static/js/runtime.5f58b08a.js static/css/chunk-elementUI.560433f6.css static/js/chunk-elementUI.ed7a0e5e.js static/js/chunk-libs.6d631868.js static/css/app.f2bcfd86.css static/js/app.bc43f3c4.js

  WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  This can impact web performance.
  Assets:
  static/img/background.f59dfe5.png (1.85 MiB)
  static/img/DIN_Alternate_Bold.0f8ca17.svg (324 KiB)
  static/js/chunk-095c.a152877a.js (256 KiB)
  static/js/chunk-elementUI.ed7a0e5e.js (562 KiB)
  static/js/chunk-libs.6d631868.js (1.04 MiB)

  WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
  Entrypoints:
  app (1.99 MiB)
  static/js/runtime.5f58b08a.js
  static/css/chunk-elementUI.560433f6.css
  static/js/chunk-elementUI.ed7a0e5e.js
  static/js/chunk-libs.6d631868.js
  static/css/app.f2bcfd86.css

---

### 分析

首先要明白，一个完整的构建、发布流程，肯定包含了 `npm i` `npm build`

#### npm i 如何优化

本地项目安装时间长达 248.247s，node-sass 如果和 node 版本不兼容（不要在 package.json 锁定版本，会导致兼容性问题），不兼容
node 会去处理，然后node-sass 基于 node-gyq, node-gyq 需要 python,这一套下来，大部分时间就过去了。
node-sass 改为 dart-sass 能缩短到 47s sub 6s

首先我们肯定要是用淘宝镜像，这是网络加速。

    npm config set registry https://registry.npm.taobao.org
    npm config get registry // 查看源

##### npm 笔记：

    npm i  // 安装所有依赖，包含 dep devdep
    npm i --production  // 仅仅安装 dep

    npm ls --depth=0 // 列出目前已经安装的依赖，只看第一级
    npm cache verify // 检查目前全局的缓存
    npm cache clean --force // 强制清除缓存

    npm i package -g // 全局安装依赖
    npm i package // 局部安装依赖到 node_modules
    npm i package --save // 局部安装依赖到 node_modules,并写入 package.json denpec 下
    npm i package --save-dev // 局部安装依赖到 node_modules,并写入 package.json devdep

    npm uninstall package // 删除依赖
    npm uninstall package -g // 删除全局依赖
    npm uninstall `ls -1 node_modules | tr '/\n' ' '` // 卸载 package.json 中所有依赖

    https://www.zoo.team/article/npm-details // 参考
    http://www.conardli.top/blog/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%EF%BC%88%E4%B8%89%EF%BC%89npminstall%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90.html#%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B // 参考

#### npm build 优化
先分析每个 loader 的情况

- 分析
   npm install --save-dev speed-measure-webpack-plugin
   // 分析打包时间
   const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
   const smp = new SpeedMeasurePlugin();

   build 结果
   ⠸ building for prod environment...

    SMP ⏱
    General output time took 9.48 secs

    SMP ⏱ Plugins
    OptimizeCssAssetsWebpackPlugin took 1.4 secs
    HtmlWebpackPlugin took 0.523 secs
    VueLoaderPlugin took 0.253 secs
    MiniCssExtractPlugin took 0.226 secs
    UglifyJsPlugin took 0.122 secs
    HashedModuleIdsPlugin took 0.043 secs
    DefinePlugin took 0.012 secs
    NamedChunksPlugin took 0.011 secs
    Object took 0.007 secs

    SMP ⏱ Loaders
    modules with no loaders took 5.98 secs
    module count = 1058
    babel-loader took 4.89 secs
    module count = 47
    mini-css-extract-plugin, and
    css-loader, and
    postcss-loader, and
    sass-loader took 4.59 secs
    module count = 2
    vue-loader, and
    mini-css-extract-plugin, and
    css-loader, and
    postcss-loader, and
    sass-loader, and
    vue-loader took 4.5 secs
    module count = 130
    css-loader, and
    vue-loader, and
    postcss-loader, and
    sass-loader, and
    vue-loader took 4.48 secs
    module count = 65
    css-loader, and
    postcss-loader, and
    sass-loader took 4.41 secs
    module count = 2
    vue-loader, and
    mini-css-extract-plugin, and
    css-loader, and
    postcss-loader, and
    vue-loader took 4.41 secs
    module count = 16
    css-loader, and
    vue-loader, and
    postcss-loader, and
    vue-loader took 4.39 secs
    module count = 8
    vue-loader, and
    babel-loader, and
    vue-loader took 3.97 secs
    module count = 146
    vue-loader took 3.085 secs
    module count = 215
    mini-css-extract-plugin, and
    css-loader, and
    postcss-loader took 2.43 secs
    module count = 2
    css-loader, and
    postcss-loader took 2.15 secs
    module count = 2
    url-loader took 0.81 secs
    module count = 29
    svg-sprite-loader took 0.557 secs
    module count = 59
    html-webpack-plugin took 0.014 secs
    module count = 1

    Hash: 58cd71ace21186fbb65a
    Version: webpack 4.16.5
    Time: 8432ms
    Built at: 2021/03/16 下午 6:58:24
    Asset Size Chunks Chunk Names
    static/fonts/element-icons.6f0a763.ttf 10.8 KiB [emitted]
    static/fonts/DIN_Alternate_Bold.61268bf.ttf 148 KiB [emitted]
    static/fonts/DIN_Alternate_Bold.805b13a.eot 148 KiB [emitted]
    static/fonts/DIN_Alternate_Bold.4c26358.otf 129 KiB [emitted]
    static/fonts/DIN_Alternate_Bold.70ff71e.woff 60.1 KiB [emitted]
    static/img/DIN_Alternate_Bold.0f8ca17.svg 324 KiB [emitted] [big]
    static/fonts/DIN_Alternate_Bold.263bc7c.woff2 57 KiB [emitted]
    static/img/casterWithMasterTop20.1b47a53.png 38.5 KiB [emitted]
    static/img/background.f59dfe5.png 1.85 MiB [emitted] [big]
    static/img/title.a004195.png 80.4 KiB [emitted]
    static/img/home_bottom_right_bg.342349a.png 112 KiB [emitted]
    static/img/casterCntRate.8510d5a.png 38.2 KiB [emitted]
    static/img/home_banner.24a38f1.png 48.8 KiB [emitted]
    static/img/404.a57b6f3.png 95.8 KiB [emitted]
    static/img/casterNewCntRate.fe975b9.png 38.2 KiB [emitted]
    static/js/7zzA.0b214933.js 369 bytes 7zzA [emitted]
    static/js/U/5H.2669e464.js 15.5 KiB U/5H [emitted]
    static/css/app.f2bcfd86.css 23.5 KiB app [emitted] app
    static/js/app.bc43f3c4.js 180 KiB app [emitted] app
    static/css/chunk-03e5.77d8559e.css 4.36 KiB chunk-03e5 [emitted]
    static/js/chunk-03e5.1b765e2e.js 67.3 KiB chunk-03e5 [emitted]
    static/js/chunk-095c.a152877a.js 256 KiB chunk-095c [emitted] [big]
    static/css/chunk-184c.11db41a2.css 1.89 KiB chunk-184c [emitted]
    static/js/chunk-184c.4d6fbbe1.js 7.3 KiB chunk-184c [emitted]
    static/css/chunk-2072.2d28510b.css 2.82 KiB chunk-2072 [emitted]
    static/js/chunk-2072.69b013d5.js 49.5 KiB chunk-2072 [emitted]
    static/css/chunk-2e6b.386ed29f.css 2.67 KiB chunk-2e6b [emitted]
    static/js/chunk-2e6b.585feb73.js 37.3 KiB chunk-2e6b [emitted]
    static/css/chunk-314d.56cc08e4.css 3.5 KiB chunk-314d [emitted]
    static/js/chunk-314d.d5af91b5.js 34.1 KiB chunk-314d [emitted]
    static/js/chunk-4f36.266305cd.js 75.3 KiB chunk-4f36 [emitted]
    static/css/chunk-677c.43a05fc3.css 1.44 KiB chunk-677c [emitted]
    static/js/chunk-677c.9c6b0bc9.js 26.1 KiB chunk-677c [emitted]
    static/css/chunk-69ff.bfae86d3.css 4.64 KiB chunk-69ff [emitted]
    static/js/chunk-69ff.4c1888e2.js 8.03 KiB chunk-69ff [emitted]
    static/css/chunk-6b9f.d08478a1.css 13 KiB chunk-6b9f [emitted]
    static/js/chunk-6b9f.6c508a0c.js 79.8 KiB chunk-6b9f [emitted]
    static/css/chunk-7f30.72cf93a0.css 4.77 KiB chunk-7f30 [emitted]
    static/js/chunk-7f30.f849b3e5.js 17.9 KiB chunk-7f30 [emitted]
    static/js/chunk-82b7.2eb31aa4.js 11.4 KiB chunk-82b7 [emitted]
    static/css/chunk-8a35.e5e2beb2.css 22.1 KiB chunk-8a35 [emitted]
    static/js/chunk-8a35.13817d81.js 21.9 KiB chunk-8a35 [emitted]
    static/css/chunk-96ca.aca95cfd.css 2.09 KiB chunk-96ca [emitted]
    static/js/chunk-96ca.d9f0f9e4.js 15.9 KiB chunk-96ca [emitted]
    static/css/chunk-d19e.6f57422c.css 8.39 KiB chunk-d19e [emitted]
    static/js/chunk-d19e.48cf4626.js 18.5 KiB chunk-d19e [emitted]
    static/css/chunk-d1db.deddd254.css 4.45 KiB chunk-d1db [emitted]
    static/js/chunk-d1db.1f9f6ce5.js 22.5 KiB chunk-d1db [emitted]
    static/css/chunk-elementUI.560433f6.css 202 KiB chunk-elementUI [emitted] chunk-elementUI
    static/js/chunk-elementUI.ed7a0e5e.js 562 KiB chunk-elementUI [emitted] [big] chunk-elementUI
    static/js/chunk-libs.6d631868.js 1.04 MiB chunk-libs [emitted] [big] chunk-libs
    static/js/runtime.5f58b08a.js 3.94 KiB runtime [emitted] runtime
    favicon.ico 9.44 KiB [emitted]
    index.html 691 bytes [emitted]
    static/favicon.ico 9.44 KiB [emitted]
    Entrypoint app [big] = static/js/runtime.5f58b08a.js static/css/chunk-elementUI.560433f6.css static/js/chunk-elementUI.ed7a0e5e.js static/js/chunk-libs.6d631868.js static/css/app.f2bcfd86.css static/js/app.bc43f3c4.js

    WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
    This can impact web performance.
    Assets:
    static/img/DIN_Alternate_Bold.0f8ca17.svg (324 KiB)
    static/img/background.f59dfe5.png (1.85 MiB)
    static/js/chunk-095c.a152877a.js (256 KiB)
    static/js/chunk-elementUI.ed7a0e5e.js (562 KiB)
    static/js/chunk-libs.6d631868.js (1.04 MiB)

    WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
    Entrypoints:
    app (1.99 MiB)
    static/js/runtime.5f58b08a.js
    static/css/chunk-elementUI.560433f6.css
    static/js/chunk-elementUI.ed7a0e5e.js
    static/js/chunk-libs.6d631868.js
    static/css/app.f2bcfd86.css
    static/js/app.bc43f3c4.js

    Build complete.

    Tip: built files are meant to be served over an HTTP server.
    Opening index.html over file:// won't work.

    Could not find a matching event to end plugins Object/Compiler/afterEmit { id: 4283 }



