// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dns = require('dns');

const dnsLookup = () => {
    return new Promise((resolve,reject)=> {
        dns.lookup('w3schools.com', function (err, addresses, family) {
            if(err){
                reject(err)
            }
            resolve(addresses)
        });
    })
}

export default async function handler(req, res) {
    const dnsRes = await dnsLookup();
    res.status(200).json({ name: dnsRes });
}
