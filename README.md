## Medium Scraper
A simple medium.com post scraper using Axios, and Cheerio.

### Install
```bash
npm i --save medium-scrape
```

### Usage
Script:
```JavaScript
const medium = require('medium-scrape');
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
const medium = require('medium-scrape');
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


# Markdown

### input
```JavaScript
const medium = require('medium-scrape');
const link = 'https://medium.com/@freidlion/%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D1%96%D0%BA%D0%B0-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D1%96%D0%BD%D0%B3%D0%B0-76b7d9459686';


(async() => {
    try {
        let post = await medium.md(link);
        console.log(post);
    } catch (e) {
        console.error(e);
    }
})();
```

### output
```JSON
{
  title: 'tBTC тепер з повністю відкритим кодом',
  body: 'tBTC тепер з повністю відкритим кодом\n' +
    '\n' +
    '[Keep ECDSA](https://github.com/keep-network/keep-ecdsa), який лежить в основі груп підписувачів, тепер доступний у GitHub. Сюди входять фрагменти, що зберігаються і виключаються з ланцюга ECDSA, а також зберігається в обліковій системі ECDSA для мережі Keep, яка дозволяє створювати та функціонувати групи підписувачів на tBTC.\n' +
    '\n' +
    'tBTC прагне відкритих джерел інформації як найкращого стандарту для прозорості та безпеки DeFi. Цей відкритий канал робить tBTC першим і єдиним мостом BTC, який дозволяє підписувати без дозволу.\n' +
    '\n' +
    '[Приєднуйтесь до списку розсилки tBTC](https://tbtc.network/#mailing-list), щоб отримати оновлення, включаючи інформацію про майбутній запуск tBTC у мережі Ethereum.\n' +
    '\n' +
    'Додаткові ресурси:\n' +
    '\n' +
    '*   [GitHub](https://github.com/keep-network/tbtc)\n' +
    '*   [Технічні специфікації](https://docs.keep.network/tbtc/index.pdf)\n' +
    '*   [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)\n' +
    '*   [Keep #tbtc канал у Discord](https://chat.tbtc.network/)\n' +
    '\n' +
    'Слідкуйте за [#tBTC у Twitter](https://twitter.com/hashtag/tBTC), щоб дізнатись про новини та можливості для участі.'
}
```