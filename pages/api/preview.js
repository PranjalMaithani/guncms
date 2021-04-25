export default function handler(req, res) {
  if (req.query.password && req.query.password === process.env.PREVIEW_PASSWORD) {
    res.setPreviewData({});
    return res.redirect('/');
  }
  return res.end('Wrong Password');
}
