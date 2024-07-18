import {split, combine} from 'shamir-secret-sharing';

const toUint8Array = (data: string) => new TextEncoder().encode(data);

// Example of splitting user input
const input = 'abcde';
const secret = toUint8Array(input);
// const [share1, share2, share3] = await split(secret, 3, 2);
// const reconstructed = await combine([share1, share3]);
// console.log(btoa(reconstructed) === btoa(secret)); // true

// // Example of splitting random entropy
// const randomEntropy = crypto.getRandomValues(new Uint8Array(16));
// const [share1, share2, share3] = await split(randomEntropy, 3, 2);
// const reconstructed = await combine([share2, share3]);
// console.log(btoa(reconstructed) === btoa(randomEntropy)); // true
//
// // Example of splitting symmetric key
// const key = await crypto.subtle.generateKey(
//   {
//     name: "AES-GCM",
//     length: 256
//   },
//   true,
//   ["encrypt", "decrypt"]
// );
// const exportedKeyBuffer = await crypto.subtle.exportKey('raw', key);
// const exportedKey = new Uint8Array(exportedKeyBuffer);
// const [share1, share2, share3] = await split(exportedKey, 3, 2);
// const reconstructed = await combine([share2, share1]);
// console.log(btoa(reconstructed) === btoa(exportedKey)); // true
