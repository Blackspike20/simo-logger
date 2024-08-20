# logger
![Static Badge](https://img.shields.io/badge/Build_by-JCSP-blue)

Logger está diseñano para mostrar las trazas por consola

## Install

- Install
``` bash
$ npm i simo-logger
```

## Usage
## Logger
``` js
const {logger} = require('logger');

// Define el nivel de log
logger.level = 'debug';

logger.emerg('emerg ...');
logger.alert('alert ...');
logger.crit('crit ...');
logger.error('error ...');
logger.warning('warning ...');
logger.notice('notice ...');
logger.info('Init App Version ' + process.env.npm_package_version);
logger.debug('debug ...');

```

![build with love](https://forthebadge.com/images/badges/built-with-love.svg)