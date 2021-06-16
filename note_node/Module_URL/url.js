const url = require('url')
let log4js = require('log4js')

log4js.configure=({
    appenders:{cheese:{type:'file',filename:'cheese.log'}},
    categories:{default:{appenders:['cheese'],level:'error'}}
})
let logger = log4js.getLogger('cheese')
logger.level = 'debug'
logger.debug(url)
const urlString = 'https://www.baidu.com:443/path/index.html/?id=3&name=zhujin&password=admin#tab=3'
// console.log(url.parse(urlString))//parse被弃用了，现在使用URL
logger.debug(new url.URL(urlString))

//format
const urlObj = {
    href: 'https://www.baidu.com/path/index.html/?id=3&name=zhujin&password=admin#tab=3',
    origin: 'https://www.baidu.com',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.baidu.com',
    hostname: 'www.baidu.com',
    port: '',
    pathname: '/path/index.html/',
    search: '?id=3&name=zhujin&password=admin',
    hash: '#tab=3'
  }
logger.debug(new url.URL(urlObj))