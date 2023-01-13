// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // validate email
  if (!req.body.email) {
    return res.status(400).json({ error: "Email is required" });
  }
  console.log("Successful POST: ", req.body.email);
  res.status(200).json({ message: "Success", email: req.body.email });
}
