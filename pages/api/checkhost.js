// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dns = require("dns");

const dnsLookup = (url) => {
  return new Promise((resolve, reject) => {
    dns.lookup(url, function (err, addresses, family) {
      if (err) {
        reject(err);
      }
      resolve(addresses);
    });
  });
};

export default async function handler(req, res) {
  const { url } = req.body;
  const dnsRes = await dnsLookup(url);
  res.status(200).json({ name: dnsRes });
}
