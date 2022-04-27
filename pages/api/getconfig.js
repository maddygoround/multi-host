// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const dnsRes = await fetch("http://localhost:2019/config/");
    const data = await dnsRes.json();
    res.status(200).json({ name: data });
}
