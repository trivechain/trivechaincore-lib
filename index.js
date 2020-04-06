/* eslint-disable */
// TODO: Remove previous line and work through linting issues at next edit

'use strict';

var trivechaincore = module.exports;

// module information
trivechaincore.version = 'v' + require('./package.json').version;
trivechaincore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of trivechaincore-lib found. ' +
      'Please make sure that you are not mixing instances of classes of the different versions of trivechaincore.';
    console.warn(message);
  }
};
trivechaincore.versionGuard(global._trivechaincore);
global._trivechaincore = trivechaincore.version;

// crypto
trivechaincore.crypto = {};
trivechaincore.crypto.BN = require('./lib/crypto/bn');
trivechaincore.crypto.ECDSA = require('./lib/crypto/ecdsa');
trivechaincore.crypto.Hash = require('./lib/crypto/hash');
trivechaincore.crypto.Random = require('./lib/crypto/random');
trivechaincore.crypto.Point = require('./lib/crypto/point');
trivechaincore.crypto.Signature = require('./lib/crypto/signature');
trivechaincore.Signer = require('./lib/crypto/signer');

// encoding
trivechaincore.encoding = {};
trivechaincore.encoding.Base58 = require('./lib/encoding/base58');
trivechaincore.encoding.Base58Check = require('./lib/encoding/base58check');
trivechaincore.encoding.BufferReader = require('./lib/encoding/bufferreader');
trivechaincore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
trivechaincore.encoding.Varint = require('./lib/encoding/varint');

// utilities
trivechaincore.util = {};
trivechaincore.util.buffer = require('./lib/util/buffer');
trivechaincore.util.js = require('./lib/util/js');
trivechaincore.util.preconditions = require('./lib/util/preconditions');
trivechaincore.util.hashUtil = require('./lib/util/hashutil');
trivechaincore.util.merkleTree = require('./lib/util/merkletree');

// errors thrown by the library
trivechaincore.errors = require('./lib/errors');

// main bitcoin library
trivechaincore.Address = require('./lib/address');
trivechaincore.Block = require('./lib/block');
trivechaincore.MerkleBlock = require('./lib/block/merkleblock');
trivechaincore.SimplifiedMNList = require('./lib/deterministicmnlist/SimplifiedMNList');
trivechaincore.SimplifiedMNListDiff = require('./lib/deterministicmnlist/SimplifiedMNListDiff');
trivechaincore.SimplifiedMNListEntry = require('./lib/deterministicmnlist/SimplifiedMNListEntry');
trivechaincore.BlockHeader = require('./lib/block/blockheader');
trivechaincore.HDPrivateKey = require('./lib/hdprivatekey.js');
trivechaincore.HDPublicKey = require('./lib/hdpublickey.js');
trivechaincore.Networks = require('./lib/networks');
trivechaincore.Opcode = require('./lib/opcode');
trivechaincore.PrivateKey = require('./lib/privatekey');
trivechaincore.PublicKey = require('./lib/publickey');
trivechaincore.Script = require('./lib/script');
trivechaincore.Transaction = require('./lib/transaction');
trivechaincore.GovObject = require('./lib/govobject');
trivechaincore.URI = require('./lib/uri');
trivechaincore.Unit = require('./lib/unit');
trivechaincore.Message = require('./lib/message');
trivechaincore.Mnemonic = require('./lib/mnemonic');
trivechaincore.BloomFilter = require('./lib/bloomfilter');

// dependencies, subject to change
trivechaincore.deps = {};
trivechaincore.deps.bnjs = require('bn.js');
trivechaincore.deps.bs58 = require('bs58');
trivechaincore.deps.Buffer = Buffer;
trivechaincore.deps.elliptic = require('elliptic');
trivechaincore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
trivechaincore.Transaction.sighash = require('./lib/transaction/sighash');
