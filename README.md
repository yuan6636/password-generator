# password-generator

此專案可以依照使用者的需求(密碼長度、大小寫英文字母、數字、符號、排除字元)，隨機產生4 ~ 16位密碼。

## 產品功能

1. 使用者可以瀏覽密碼產生器的首頁。
2. 使用者可以依照密碼長度、大小寫英文字母、數字、符號、排除字元，客製化產生自己需要的密碼。

## 開發環境

- [Node.js](https://nodejs.org/en)

## 安裝流程

1. 開啟終端機，輸入 `git clone`，將專案存到電腦

```
git clone https://github.com/yuan6636/password-generator.git
```

2. 移到專案資料夾 `password-generator`

```
cd password-generator
```

3. 安裝 `npm` 套件管理器

```
npm install
```

4. 執行 `app.js` ( 註：`dev` 為 `nodemon app.js` 的腳本 )

```
npm run dev
```

5. `server` 順利運行後，終端機會顯示網址

```
express server on http://localhost:3000
```

6. 在瀏覽器輸入網址 `http://localhost:3000` 即可瀏覽專案

## 專案畫面

![首頁](/public/img/index.png)
![產生密碼](/public/img/password.png)

## 使用的工具

1. [Visual Studio Code](https://code.visualstudio.com/)：程式編輯器
2. [Node](https://nodejs.org/en)：執行環境
3. [express](https://www.npmjs.com/package/express)：Web 應用程式框架
4. [express-handlebars](https://github.com/express-handlebars/express-handlebars)：樣板引擎
5. [nodemon](https://www.npmjs.com/package/nodemon)：Node 輔助工具
6. [font awesome](https://fontawesome.com/)：圖示庫

### 參與者

開發者：[yuan6636](https://github.com/yuan6636)