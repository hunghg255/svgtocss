export const stylesTemplate = ({ fontname, timestamp, cssString, prefix, fontSize }: any) => {
  return `
@font-face {
  font-family: "${fontname}";
  src: url('${fontname}.eot?t=${timestamp}'); /* IE9*/
  src: url('${fontname}.eot?t=${timestamp}#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url("${fontname}.woff2?t=${timestamp}") format("woff2"),
  url("${fontname}.woff?t=${timestamp}") format("woff"),
  url('${fontname}.ttf?t=${timestamp}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('${fontname}.svg?t=${timestamp}#${fontname}') format('svg'); /* iOS 4.1- */
}

[class^="${prefix}-"], [class*=" ${prefix}-"] {
  font-family: '${fontname}' !important;
  font-size:${fontSize};
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${cssString}
  `;
};

export const genHtml = ({ cssContent, prefix, svgMonotone, svgMultitone }: any) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${prefix}</title>
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />

      <link rel="stylesheet" href="${prefix}-css.css" />

      <style>
        *{margin: 0;padding: 0;list-style: none;}
        body { color: #696969; font: 12px/1.5 tahoma, arial, sans-serif; }
        a { color: #333; text-decoration: underline; }
        a:hover { color: rgb(9, 73, 209); }
        .header { color: #333; text-align: center; min-height: 153px; font-size: 14px; }
        .header .logo svg { height: 120px; width: 120px; }
        .header h1 { font-size: 42px; padding: 26px 0 10px 0; }
        .header sup {font-size: 14px; margin: 8px 0 0 8px; position: absolute; color: #7b7b7b; }
        .info {
          color: #999;
          font-weight: normal;
          max-width: 346px;
          margin: 0 auto;
          padding: 20px 0;
          font-size: 14px;
        }

        .icons { max-width: 1190px; margin: 0 auto; }
        .icons ul { text-align: center; }
        .icons ul li {
          vertical-align: top;
          width: 120px;
          display: inline-block;
          text-align: center;
          background-color: rgba(0,0,0,.02);
          border-radius: 3px;
          padding: 29px 0 10px 0;
          margin-right: 10px;
          margin-top: 10px;
          transition: all 0.6s ease;
        }
        .icons ul li:hover { background-color: rgba(0,0,0,.06); }
        .icons ul li:hover span { color: #3c75e4; opacity: 1; }
        .icons ul li .unicode { color: #8c8c8c; opacity: 0.3; }
        .icons ul li h4 {
          font-weight: normal;
          padding: 10px 0 5px 0;
          display: block;
          color: #8c8c8c;
          font-size: 14px;
          line-height: 12px;
          opacity: 0.8;
        }
        .icons ul li:hover h4 { opacity: 1; }
        .icons ul li svg { width: 24px; height: 24px; }
        .icons ul li:hover { color: #3c75e4; }
        .footer { text-align: center; padding: 10px 0 90px 0; }
        .footer a { text-align: center; padding: 10px 0 90px 0; color: #696969;}
        .footer a:hover { color: #0949d1; }
        .links { text-align: center; padding: 50px 0 0 0; font-size: 14px; }

        .icons ul li.class-icon { font-size: 21px; line-height: 21px; padding-bottom: 20px;
          font-size: 21px;
          line-height: 21px;
          padding-bottom: 20px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .icons ul li.class-icon p { font-size: 12px; }
        .icons ul li.class-icon [class^="${prefix}-"]{ font-size: 26px; }
        h3 {
          text-align: center;
        }

        ${cssContent}
      </style>
    </head>

    <body>
      <div class="header">
        <h1>${prefix}</h1>
      </div>
      <div class="icons">
        <h3>Icon Monotone</h3>
        <ul>
          ${svgMonotone
            .map((it: any) => {
              return `<li class="class-icon">
                <i class="${prefix}-${it.name}"></i>

                <p class="name">${prefix}-${it.name}</p>
            </li>`;
            })
            .join('')}
        </ul>

        <br />

        <h3>Icon Multitone</h3>
        <ul>
        ${svgMultitone
          .map((it: any) => {
            return `<li class="class-icon">
              <i class="${prefix}-${it.name}"></i>

              <p class="name">${prefix}-${it.name}</p>
          </li>`;
          })
          .join('')}
      </ul>
      </div>
      <p class="links">

        <a href="https://github.com/hunghg255/svg-to-font">GitHub</a>

      </p>
    </body>
  </html>
`;
};
