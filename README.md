
## Chess Game


## JS/TS Node Communication

[Viem](https://viem.sh/) is the last web3 TS library, wins in security, size, flexibility and performance from [Ethers](https://ethers.org) and [Web3](https://web3js.org/). See the [detailed](https://viem.sh/docs/introduction) comparison.

* [viem-comparison](https://www.dynamic.xyz/blog/the-promise-of-viem-a-typescript-library-for-interacting-with-ethereum)

* [why-TS](https://www.securityjourney.com/post/typescript-doesnt-suck-you-just-dont-care-about-security) - Viem was written from scratch in TS, and here is a point for their design decision in avoiding JS, security.

* [express-ts](https://kinsta.com/blog/express-typescript/)

## Code Generation

The [eth-sdk](https://github.com/dethcrypto/eth-sdk) was abandoned in favor of Viem and [Typechain](https://github.com/dethcrypto/TypeChain).


## Private Key

We will import the known private key into a keystore, in order to ensure that it's encrypted on disk, so users will only send their password. A more robust way would be to use account [ERC-4337](https://www.erc4337.io/) account abstraction, suited for larger transaction in defi field.

```
Available Accounts
==================

(0) 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000.000000000000000000 ETH)

Private Keys
==================

(0) 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

The keystore with the encrypted private key is saved in the ./key folder. The password is `user1`




## Shamir Secrect Sharing

In order to avoid storing the private key, we will use the [shamir-secret-sharing](https://github.com/dsprenkels/sss) library, so user can send his part of the private key and we store the other part. To split the private key, we can use the [sss-cli](https://github.com/dsprenkels/sss-cli):


### Manually Split and Recover private key

```
# Install sss-cli
cargo install --git https://github.com/dsprenkels/sss-cli --branch v0.1

# Make 4 shares with recombination threshold 3
echo "Tyler Durden isn't real." | secret-share-split -n 4 -t 3 >shares.txt

# Take the first 3 shares and combine them
head -n 3 shares.txt | secret-share-combine
```

- UPDATE: found a [new](https://github.com/privy-io/shamir-secret-sharing)  very well written in pure TS, avoiding the gyp calls to the C lib above.

