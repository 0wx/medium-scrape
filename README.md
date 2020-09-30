## Medium Scraper
A simple medium.com post scraper using Axios, and Cheerio.

### Install
```
npm i --save medium-scraper
```

### Usage
Script:
```JavaScript
const medium = require('medium-scraper');
const link = 'https://medium.com/@nickgrego/step-by-step-guide-for-installing-both-ecdsa-beacon-nodes-on-vps-with-100-voucher-db930ab2a667';


(async() => {
    try {
        let post = await medium.get(link);
        console.log(post);
    } catch (e) {
        console.error(e);
    }
})();
```

Output: 
```JavaScript
{
  title: 'Step-by-step guide for installing both ECDSA & Beacon Keep Network nodes on VPS with 100$ voucher.',
  author: {
    name: 'Nick Grego',
    username: '@nickgrego',
    thumb: 'https://miro.medium.com/fit/c/96/96/1*zutsWtAqQu1M63sAAljpPw.jpeg',
    url: 'https://medium.com/@nickgrego'
  },
  body: [
    '<p><em>*08/09/2020 all configurations and commands are updated for installing the latest release</em></p>',
    '<p>This is step by step tutorial for newcomers to launch their first nodes in Keep Network with completely free VPS server and with minimal use of command line. To avoid any sort of errors, we would use the most user-friendly instruments to successfully complete this task fast and without any kind of mistakes.</p>',
    '<p>First, we need <a href="https://www.google.com/chrome/" rel="noopener nofollow">Google Chrome</a> with the <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" rel="noopener nofollow">MetaMask</a> extension installed.</p>',
    '<p><strong>Step 1. Creating a server</strong></p>',
    ...
  ]
}

````

### You can also append attribute class, id, width, height, etc. to the tag
Script:
```JavaScript
const medium = require('medium-scraper');
const link = 'https://medium.com/@nickgrego/step-by-step-guide-for-installing-both-ecdsa-beacon-nodes-on-vps-with-100-voucher-db930ab2a667';


(async() => {
    try {
        let post = await medium.get(link, {
            p: {
                class: 'awsome class',
            },
            img: {
                height: '700',
                width: '400',
            },
            pre: {
                id: 'post-id',
            },
        });
        console.log(post);
    } catch (e) {
        console.error(e);
    }
})();
```

Output: 
```JavaScript
{
  title: 'Step-by-step guide for installing both ECDSA & Beacon Keep Network nodes on VPS with 100$ voucher.',
  author: {
    name: 'Nick Grego',
    username: '@nickgrego',
    thumb: 'https://miro.medium.com/fit/c/96/96/1*zutsWtAqQu1M63sAAljpPw.jpeg',
    url: 'https://medium.com/@nickgrego'
  },
  body: [
    '<p class="awsome class"><em>*08/09/2020 all configurations and commands are updated for installing the latest release</em></p>',
    '<p class="awsome class">This is step by step tutorial for newcomers to launch their first nodes in Keep Network with completely free VPS server and with minimal use of command line. To avoid any sort of errors, we would use the most user-friendly instruments to successfully complete this task fast and without any kind of mistakes.</p>',
    ...

    '<figure><img width="400" height="700" alt="Image for post" src="https://miro.medium.com/max/2508/1*kIejFeeea87rafK2x2ao9Q.gif" srcSet="https://miro.medium.com/max/552/1*kIejFeeea87rafK2x2ao9Q.gif 276w, https://miro.medium.com/max/1104/1*kIejFeeea87rafK2x2ao9Q.gif 552w, https://miro.medium.com/max/1280/1*kIejFeeea87rafK2x2ao9Q.gif 640w, https://miro.medium.com/max/1400/1*kIejFeeea87rafK2x2ao9Q.gif 700w"/></figure>',
    ...

    '<pre id="post-id"><span>cd<br>cd ecdsa<br>export KEEP_ECDSA_OPERATOR_ACCOUNT_PASSWORD=$(cat ./config/keep-ecdsa-operator-account-password.txt)</span><span>sudo docker run -d \\<br>--entrypoint keep-ecdsa \\<br>--restart always \\<br>--volume /root/ecdsa/persistence:/mnt/keep-ecdsa-client/persistence \\<br>--volume /root/ecdsa/config:/mnt/keep-ecdsa-client/config \\<br>--env KEEP_ETHEREUM_PASSWORD=$KEEP_ECDSA_OPERATOR_ACCOUNT_PASSWORD \\<br>--env LOG_LEVEL=debug \\<br>--name ecdsa-node \\<br>-p 3919:3919 \\<br>keepnetwork/keep-ecdsa-client:v1.2.0-rc.5 --config /mnt/keep-ecdsa-client/config/config.toml start</span></pre>',
    ...
  ]
}

````
