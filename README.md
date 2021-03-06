[![npm](https://img.shields.io/npm/v/spanish-car-plate.svg)](http://npm.im/spanish-car-plate)
[![Codacy grade](https://img.shields.io/codacy/grade/83d00fabfa424b0dbba64735f64ff74c.svg?style=flat-square)](https://app.codacy.com/app/nahuel.scotti/spanish-car-plate)
[![Travis (.org)](https://img.shields.io/travis/singuerinc/spanish-car-plate.svg?style=flat-square)](https://travis-ci.org/singuerinc/spanish-car-plate)
[![Coverage Status](https://coveralls.io/repos/github/singuerinc/spanish-car-plate/badge.svg?branch=master)](https://coveralls.io/github/singuerinc/spanish-car-plate?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/singuerinc/spanish-car-plate/badge.svg?style=flat-square)](https://snyk.io/test/github/singuerinc/spanish-car-plate)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/spanish-car-plate.svg?style=flat-square)

# Spanish Car Plate

Spanish car plate validation<br/>
_Validación de matriculas de coches en España_

## Installation

```bash
npm i spanish-car-plate
```

## Usage

### isValid()

```js
import { isValid, isOld } from "spanish-car-plate";

isValid("1234BCD"); //=> true
isValid("1234 FGH"); //=> true
isValid("2345-JKL"); //=> true

// note: old valid plates also returns true
isOld("A 0849 CS") === isValid("A 0849 CS"); //=> true
```

### isOld()

```js
import { isOld } from "spanish-car-plate";

// one-letter code
isOld("A 0849 CS"); //=> true

// two-letter code
isOld("GI-1234-BL"); //=> true

// two/three-letter special code (such as ET for army cars and DGP for police cars)
isOld("DGP 1234 BL"); //=> true
```

### isSpecial()

Police, Air force, Army, Navy, etc. have special plates.

```js
import { isSpecial } from "spanish-car-plate";

isSpecial("DGP 3874"); //=> true
isSpecial("CNP-5764"); //=> true
isSpecial("E8720"); //=> true
```

### getCounter()

```js
import { getCounter } from "spanish-car-plate";

getCounter("1234 BCD"); //=> "BCD"
getCounter("A-0849 CS"); //=> "CS"
```

### getProvinceName()

It is possible to get the province's name from old plates

```js
import { getProvinceName } from "spanish-car-plate";

getProvinceName("B 1234 BL"); //=> "Province of Barcelona"
getProvinceName("M-1234 BL"); //=> "Community of Madrid"
getProvinceName("SO 1234 BL"); //=> "Province of Soria"
```

### getProvinceCode()

It is possible to get the province's code from old plates

```js
import { getProvinceCode } from "spanish-car-plate";

getProvinceCode("B 1234 BL"); //=> "B"
getProvinceCode("M 1234 BL"); //=> "M"
getProvinceCode("SO-1234 BL"); //=> "SO"
```

### getSpecialCode()

```js
import { getSpecialCode } from "spanish-car-plate";

getSpecialCode("DGP1234"); //=> "DGP"
```

### getSpecialName()

```js
import { getSpecialName } from "spanish-car-plate";

getSpecialName("DGP1234"); //=> "Spanish Police"
getSpecialName("CME1234"); //=> "Corps of the Mossos d'Esquadra"
```

### getNumber()

```js
import { getNumber } from "spanish-car-plate";

getNumber("DGP0001"); //=> "0001"
getNumber("CME1234"); //=> "1234"
```

### parse()

Get all the information about the plate

#### Parse new plate

```js
import { parse } from "spanish-car-plate";

parse("1234 BCD");
```

```json
{
  "isSpecial": false,
  "isOld": false,
  "provinceCode": null,
  "provinceName": null,
  "number": 1234,
  "counter": "BCD"
}
```

#### Parse old plate

```js
parse("GI 2345 BC");
```

```json
{
  "isSpecial": false,
  "isOld": true,
  "provinceCode": "GI",
  "provinceName": "Province of Girona",
  "number": 2345,
  "counter": "BC"
}
```

## Demo

[https://spanish-car-plate.netlify.com/](https://spanish-car-plate.netlify.com/)

## Related

- [better-dni](https://github.com/singuerinc/better-dni) - Spanish dni/nif/nie validation
- [spain-phone](https://github.com/singuerinc/spain-phone) - Spanish phone number validation

## Reference

[https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Spain](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Spain)
