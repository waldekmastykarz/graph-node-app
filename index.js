import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

const accessToken = '';
const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:3128');
    
fetch('https://graph.microsoft.com/v1.0/me/', {
  agent: proxyAgent,
  method: 'GET',
  headers: {
    'authorization': accessToken
  }
})
.then(res => res.json())
.then(data => console.log(data));