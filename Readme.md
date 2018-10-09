# **MStyle**
###### _Component Library based on VueJS and Bootstrap 4_
[![MEGA](https://i.imgur.com/oXc1S0B.png)](http://egov.md/en)
## Instalation
```
npm install vue-mstyle
```
## Using in your project
```js
import Vue from 'vue'
import 'vue-mstyle'
new Vue({
   render: h => h(App)
  }).$mount('#app')
```


## Compoent Syntax Description

>### **MCard**

```html
<m-card>
  <card-media class="bg-primary text-center">
    <img src="...">
  </card-media>
  <card-title >
    <h4>Card Title</h4>
  </card-title>
  <card-body>
      <span>Some random text Some random text Some random text</span>
  </card-body>
  <card-actions class="bg-light border text-center">
      <button class="btn btn-outline-primary mt-3 mb-3">Click Me!</button>
  </card-actions>
</m-card>
```

>### **MFileUploader**

```html
  <m-file-uploader @loaded="ready"
                   serverUrl="url-where-to-post-files"
                   allowedFileType=".pdf"
                   allowMultipleUpload>
  </m-file-uploader>
```

**@loaded** - event, emitted by **_m-file-loader_**  when all dropped
files are successful loaded</br>

**allowedFileType** - type of files allowed to be droped in fil
e loader. Default allowed type is **_.pdf_**</br>

**allowMultipleUpload** - if is present, allows user to
 load multiple files</br>

>### **MBanner**
  ```html
  <m-banner image="/url_to_your_image"></m-banner>
  ```
**image** - url of image</br>


>### **MCaptcha**
###### _Based on google recaptcha_ See aditional information
 https://developers.google.com/recaptcha/docs/invisible

  ```html
    <m-captcha @response='manageCaptchaResponse'
              siteKey='Your_Site_Key'
              captchaType="invisible">
    </m-captcha>
  ```
**@response** - event, emitted by **_m-captcha_**  when captcha is passed.
 Returns captcha key, see google documentation</br>
**sitekey** - mandatory parameter, google recaptcha **_data-sitekey_**</br>
**captchaType** - type of captcha, *invisible* for invisible, *normal* for
 I'm not robot</br>

>### **MAlertBox**

  ```html
    <m-alert-box type="danger"
                icon="fas fa-exclamation-circle"
                title="Something is wrong!">
    </m-alert-box>
  ```
**type** - specify type of alert. This parameter change color of title and
 icon that is sended
- ![danger](https://i.imgur.com/kgxohYW.png)
- ![danger](https://i.imgur.com/e7JRuv9.png)
- ![danger](https://i.imgur.com/60YcNzu.png)
- ![danger](https://i.imgur.com/l5lLXNg.png)


**title** - title of the alert box</br>
**icon** - font awesome icon, that is places near title</br>
