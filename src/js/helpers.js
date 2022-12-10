import { async } from 'regenerator-runtime';
import { TIMEOUT_ } from './config.js';

export const ajax = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_)]);
    const data = await res.json();
    return data;

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
  } catch (err) {
    throw err;
  }
};

// export const getJSON = async function (url) {
//   try {
//     const res = await fetch(url);

//     const data = await res.json();
//     return data;

//     if (!res.ok) throw new Error(`${data.message} ${res.status}`);
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// export const sendJSON = async function (url, upload) {
//   try {
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(upload),
//     });

//     const data = await res.json();
//     return data;

//     if (!res.ok) throw new Error(`${data.message} ${res.status}`);
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
