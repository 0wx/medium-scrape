const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const get = async (link, config) => {
  try {
    let response = await axios.get(link);
    let { data } = response;
    let $ = cheerio.load(data);

    let _section = $('article').find('div')['0'].children[1].children[0]
      .children[0].attribs.class;
    let section =
      '<p id' +
      $('.' + _section.replace(/ /g, '.'))
        .html()
        .split('<p id')
        .slice(1)
        .join('<p id');
    let _ = cheerio.load(section);
    const styled = (a) => {
      let go = true,
        count = 0,
        res = [],
        t = a.children;
      while (go) {
        res.push({ type: t[count].name, text: $(t[count]).text() });
        count++;
        if (count == t.length) go = false;
      }

      return res;
    };
    const len = (arr) => {
      let go = true,
        a = arr,
        count = 0,
        data = [];
      while (go) {
        let _temp = {
          text:
            a.children.length > 1
              ? styled(a)
              : [{ type: a.name, text: $(a).text() }],
          data: a,
          html: $(a).html(),
        };
        let _html =
          _temp.text.filter((x) => x.type == 'figure').length == 1
            ? _temp.text.filter((x) => x.type == 'figure')[0].text
            : _temp.html;
        let rawHTML = _html
          .replace(/class="[a-zA-Z0-9 ]+"/g, '')
          .replace(/id="[a-zA-Z0-9 ]+"/g, '')
          .replace(/  /g, ' ')
          .replace(/  /g, ' ')
          .replace(/ >/g, '>');
        let html;
        if (a.name == 'figure') {
          html = rawHTML
            .replace(/ sizes="[a-z0-9]+"/g, '')
            .replace(/ width="[a-z0-9]+"/g, '')
            .replace(/ height="[a-z0-9]+"/g, '');
          if (config && config.img) {
            Object.keys(config.img).forEach((x) => {
              html = html.replace(/<img/g, `<img ${x}="${config.img[x]}"`);
            });
          }
        } else {
          html = rawHTML;
        }

        let tag = (a) => {
          let name = a.name;
          if (name == 'figure') return name;
          if (config && config[name]) {
            Object.keys(config[name]).forEach((x) => {
              name += ` ${x}="${config[name][x]}"`;
            });
            return name;
          } else {
            return name;
          }
        };
        data.push(`<${tag(a)}>${html}</${a.name}>`);
        count++;
        if (!!a.next) {
          a = a.next;
        } else {
          go = false;
        }
      }

      return { count, data };
    };
    const _b = len(_('p')['0']);

    return {
      title: $('#' + $('h1')[0].attribs.id).text(),
      body: _b.data,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const md = async (link) => {
  let { title, body } = await get(link);
  let turndownService = new TurndownService();
  let markdown = turndownService.turndown(body.join(''));
  return { title, body: markdown };
};

module.exports = {
  get,
  md,
};
