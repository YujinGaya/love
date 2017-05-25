# love

> Timeline of what I loved so far

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Post Love

Make `{timestamp}.json` file in /loves folder and write something like this

``` json
{
  "url": "https://youtu.be/djV11Xbc914",
  "comment": "Take On Me by a-ha",
  "timestamp": 1495651099
}
```

and rebuild
``` bash
npm run build
```

## Deploy

To deploy your loves, simply run app.js script

``` bash
# It uses 80 port so you need to be sudoer
node app.js
```
