[![Codacy grade](https://img.shields.io/codacy/grade/83d00fabfa424b0dbba64735f64ff74c.svg?style=flat-square)](https://app.codacy.com/app/nahuel.scotti/spanish-car-plate)
[![Travis (.org)](https://img.shields.io/travis/singuerinc/spanish-car-plate.svg?style=flat-square)](https://travis-ci.org/singuerinc/spanish-car-plate)
[![Coverage Status](https://coveralls.io/repos/github/singuerinc/spanish-car-plate/badge.svg?branch=master)](https://coveralls.io/github/singuerinc/spanish-car-plate?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/singuerinc/spanish-car-plate/badge.svg?style=flat-square)](https://snyk.io/test/github/singuerinc/spanish-car-plate)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/spanish-car-plate.svg?style=flat-square)

# Spanish Car Plate

Spanish Car Plate validation

## Installation

```js
// npm
npm i spanish-car-plate

// yarn
yarn add spanish-car-plate
```

## Usage

### isValid

```js
import { isValid } from "spanish-car-plate";

isValid("1234BCD"); //=> true

isValid("1234 FGH"); //=> true

isValid("2345-JKL"); //=> true
```

### isOld

```js
import { isOld } from "spanish-car-plate";

// one-letter code
isOld("A 0849 CS"); //=> true

// two-letter code
isOld("GI-1234-BL"); //=> true

// three-letter special code (such as ET for army cars and DGP for police cars)
isOld("DGP 1234 BL"); //=> true
```

### getProvince

It's possible to get the province from old plates

```js
import { getProvince } from "spanish-car-plate";

getProvince("B 1234 BL"); //=> "Province of Barcelona"
getProvince("M 1234 BL"); //=> "Community of Madrid"
getProvince("SO 1234 BL"); //=> "Province of Soria"
```

## Todo

- [x] Basic Old car plates validation
- [x] Get province for old plates
- [ ] Full Old car plates validation (exceptions)
- [ ] Demo page with old validation support

## Demo

[https://spanish-car-plate.netlify.com/](https://spanish-car-plate.netlify.com/)

## Related

- [better-dni](https://github.com/singuerinc/better-dni) - Spanish dni/nif/nie validation
- [spain-phone](https://github.com/singuerinc/spain-phone) - Spanish phone number validation

## Reference

[https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Spain](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Spain)
