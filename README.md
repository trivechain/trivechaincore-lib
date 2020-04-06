# trivechaincore Library

[![Build Status](https://img.shields.io/travis/trivechain/trivechaincore-lib.svg?branch=master)](https://travis-ci.org/trivechain/trivechaincore-lib)
[![NPM Package](https://img.shields.io/npm/v/@trivechain/trivechaincore-lib.svg)](https://www.npmjs.org/package/@trivechain/trivechaincore-lib)

> A pure and powerful JavaScript Trivechain library.

Trivechain is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Trivechain network allows for highly resilient Trivechain infrastructure, and the developer community needs reliable, open-source tools to implement Trivechain apps and services.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Install

### NodeJS

```
npm install @trivechain/trivechaincore-lib
```

### Browser

See the section below to generate your own bundle, or download the pre-generated [minified file](dist/trivechaincore-lib.min.js)

#### Building the Browser Bundle

To build a trivechaincore-lib full bundle for the browser:

```sh
npm run build
```

This will generate files named `trivechaincore-lib.js` and `trivechaincore-lib.min.js` in the `dist/` folder.

## Usage

### Browser

```
<script src='./dist/trivechaincore-lib.min.js' type="text/javascript"></script>
<script>
  const PrivateKey = trivechaincore.PrivateKey;
  const privateKey = new PrivateKey();
  const address = privateKey.toAddress().toString();
</script>
```

### Modules

Some functionality is implemented as a module that can be installed separately:

* [Payment Protocol Support](https://github.com/trivechain/trivechaincore-payment-protocol)
* [Peer to Peer Networking](https://github.com/trivechain/trivechaincore-p2p)
* [Trivechain Core JSON-RPC](https://github.com/trivechain/trivechaind-rpc)
* [Payment Channels](https://github.com/trivechain/trivechaincore-channel)
* [Mnemonics](https://github.com/trivechain/trivechaincore-mnemonic)
* [Elliptical Curve Integrated Encryption Scheme](https://github.com/trivechain/trivechaincore-ecies-dash)
* [Signed Messages](https://github.com/trivechain/trivechaincore-message-dash)

### Development & Tests

```sh
git clone https://github.com/trivechain/trivechaincore-lib
cd trivechaincore-lib
npm install
```

Run all the tests:

```sh
npm test
```

You can also run just the Node.js tests with `npm run test:node`, just the browser tests with `npm run test:browser` or run a test coverage report with `npm run coverage`.

## Documentation

* [Addresses](docs/address.md)
* [Block](docs/block.md)
* [Crypto](docs/crypto.md)
* [Encoding](docs/encoding.md)
* [Hierarchically-derived Private and Public Keys](docs/hierarchical.md)
* [Mnemonic](docs/mnemonic.md)
* [Networks](docs/networks.md)
* [PrivateKey](docs/privatekey.md)
* [PublicKey](docs/publickey.md)
* [Script](docs/script.md)
* [Transaction](docs/transaction.md)
* [Using Different Units](docs/unit.md)
* [Unspent Output](docs/unspentoutput.md)
* [URI](docs/uri.md)
* [Governance Object / Proposal](docs/govobject/govobject.md)

### Examples

Some examples can be found [here](docs/examples.md), below is a list of direct links for some of them.

* [Generate a random address](docs/examples.md#generate-a-random-address)
* [Generate an address from a SHA256 hash](docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](docs/examples.md#create-a-transaction)
* [Sign a Trivechain message](docs/examples.md#sign-a-bitcoin-message)
* [Verify a Trivechain message](docs/examples.md#verify-a-bitcoin-message)
* [Create an OP RETURN transaction](docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/trivechain/trivechaincore-lib/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](LICENSE).

Copyright 2013-2017 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.  
Copyright 2016-2017 The Dash Foundation, Inc.  
Copyright 2017-2018 Dash Core Group, Inc.  
Copyright 2018-2020 Trivechain Ltd.  
