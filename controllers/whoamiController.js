exports.GET_HTTP_HEADERS = async function(req, res, next) {
 const clientInfo = {};
  clientInfo.ipaddress = req.header('x-forwarded-for').match(/(\d+\.\d+\.\d+\.\d+)/)[1];
  clientInfo.language = req.header('accept-language');
  clientInfo.software = req.header('user-agent').match(/\(([^)]*)/)[1];
  res.send(clientInfo);
};
