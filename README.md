# 한 걸음 — 韓語學習 App

這是從 `韓語APP/` 內既有學習 App 計畫整理出的第一版韓語 PWA MVP。

## 本機預覽

在這個資料夾執行：

```bash
python3 -m http.server 8000
```

再開啟 <http://localhost:8000>。使用 HTTP 伺服器是為了讓 Service Worker 與 PWA 安裝功能正常運作。

若只是要在電腦快速查看，也可以直接雙擊 `index.html`；目前按鈕與課程切換仍可使用，但 PWA 快取與安裝功能要用上面的 HTTP 方式。

## 手機使用方式

目前用 `localhost` 只能在開發電腦上預覽；手機若要在外面直接開啟、保存進度並安裝到主畫面，需要把這個靜態資料夾放到 HTTPS 網址。GitHub Pages、Cloudflare Pages、Netlify 都可以，GitHub 不是唯一選項。

最簡單的 GitHub Pages 做法：

1. 建立一個 GitHub repository，把本資料夾內的檔案放在 repository 根目錄。
2. 到 repository 的 `Settings → Pages`，選 `Deploy from a branch`，分支選 `main`、資料夾選 `/ (root)`。
3. 等待部署完成，用 GitHub Pages 產生的 `https://...` 網址在手機開啟。
4. iPhone Safari 使用「加入主畫面」；Android Chrome 使用「安裝 App／加到主畫面」。

本專案沒有 build step，根目錄已有 `index.html`，所以不需要 npm 或 GitHub Actions。若 repository 是公開的，請不要把私人筆記、帳號密鑰或未整理的教材一起放進去。

## 語音注意事項

App 使用瀏覽器的 Web Speech API，語音品質取決於手機實際安裝的韓語語音。首頁的「語音設定」可以選擇 `ko-KR` voice、調慢速度並播放測試句；若清單沒有韓語 voice，請先在手機系統的朗讀／文字轉語音設定安裝韓語。

目前包含：

- 今日學習首頁、進度、連續天數
- 40 個初級高頻單字與瀏覽器韓語 TTS
- 整合 `言趣課程` 第一課與發音課的 63 個初學者單字；新增「言趣」專區，依問候／自我介紹、國家／職業、發音課三個單元複習
- 新增「發音」專區：內建課程複習表圖片、雙收音補充，以及 10 條發音規則卡片
- 字卡翻面、三段自評、收藏與 localStorage 進度保存
- 諺文子音／母音、音節組字與 받침 入門
- 初級助詞、이에요／예요、아／어요 文法
- 連音化、겹받침 連音、送氣化、鼻音化、硬音化、顎音化、流音化與 ㄴ 添加
- 子音表同時顯示正式羅馬化與課堂記憶法，並區分初聲與 받침
- 8 個旅遊與生活實用句型

後續可依 `../韓文App轉換計畫.md`，把言趣課程素材與官方字典資料分批匯入。
