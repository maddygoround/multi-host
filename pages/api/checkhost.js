// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dns = require("dns");

const dnsLookup = (url) => {
  return new Promise((resolve, reject) => {
    console.log("Looking for dns for...."+url)
    dns.lookup(url, function (err, addresses, family) {
      if (err) {
        console.log("err here")
        reject(err);
      }
      console.log(addresses)
      resolve(addresses);
    });
  });
};

export default async function handler(req, res) {
  let domain_url=''
  if(req.method==='POST'){
     domain_url = req.body.domain_url;
  }
  console.log(domain_url)
  
  const dnsRes = await dnsLookup(domain_url);
  res.status(200).json({ name: dnsRes });
}
