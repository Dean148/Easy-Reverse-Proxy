import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
  {
    domain: "google.deannet.top",
    url: "https://www.google.com.ca/",
    enable: true
  },
  {
    domain: "github.deannet.top",
    url: "https://github.com/",
    enable: true
  },
  {
    domain: "wikipedia.deannet.top",
    url: "https://wikipedia.org/",
    enable: true
  }
];
