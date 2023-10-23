"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{148050:function(Un,cn,a){a.d(cn,{Z:function(){return K}});var un=a(459400),M=a.n(un),jn=a(667294),E=a(186548),Cn=a(65630),tn=a(879587),mn=a(785893),c,m="https://github.com/ant-design/ant-design/edit/master/",Z=(0,Cn.kc)(function(X){var on=X.token,kn=X.css,d=on.colorIcon,S=on.colorText,T=on.iconCls;return{editButton:kn(c||(c=M()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),T,d,S)}});function K(X){var on=X.title,kn=X.filename,d=Z(),S=d.styles;return(0,mn.jsx)(tn.Z,{title:on,children:(0,mn.jsx)("a",{className:S.editButton,href:"".concat(m).concat(kn),target:"_blank",rel:"noopener noreferrer",children:(0,mn.jsx)(E.Z,{})})})}},847740:function(Un,cn,a){a.r(cn),a.d(cn,{default:function(){return Hr}});var un=a(627424),M=a.n(un),jn=a(294184),E=a.n(jn),Cn=a(727484),tn=a.n(Cn),mn=a(533852),c=a(959392),m=a(667294),Z=a(715778),K=a(773036),X=a(302559),on=a(438746),kn=a(459400),d=a.n(kn),S=a(370917),T=a(65630),n=a(785893),Vn,oe={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},re=function(){var e=(0,T.Fg)(),t=function i(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(l,"-").concat(p,` {
  background: `).concat(e["".concat(l,"-").concat(p)],`;
}
`).concat(i(l,p+1),`
    `):""},o=function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return l<=13?`
.palette-gray-`.concat(l,` {
  background: `).concat(oe[l],`;
}
`).concat(i(l+1),`
    `):""};return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Vn||(Vn=d()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),o())})},ae=re,Gn,Kn=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Gn||(Gn=d()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Sn,ie=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Sn||(Sn=d()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},Xn,En=function(){var r=(0,T.Fg)(),e=r.anchorTop;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Xn||(Xn=d()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},gn=a(510274),Jn,le=function(){var e=(0,T.Fg)(),t=e.antCls,o=e.colorPrimary;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Jn||(Jn=d()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,o,new gn.C(o).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new gn.C(o).setAlpha(.75).toHexString(),t,t,new gn.C(o).setAlpha(.75).toHexString(),t,t,t,t,new gn.C(o).setAlpha(.6).toHexString(),t,t,t)})},se=le,Yn,ce=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Yn||(Yn=d()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},Qn,zn=function(){var e=(0,T.Fg)(),t=e.antCls,o=e.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Qn||(Qn=d()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,o,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,o,e.colorBgContainer,o,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},de=zn,z,y=function(){var r=(0,T.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(z||(z=d()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},A,D=function(){var r=(0,T.Fg)(),e=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(A||(A=d()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},V,$=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(V||(V=d()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},J,Y=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(J||(J=d()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},an,ln=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(an||(an=d()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},dn,vn=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(dn||(dn=d()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},hn,xn="dumi-default-",fn=function(){var r=(0,T.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(hn||(hn=d()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),xn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,xn,r.colorBgElevated,r.colorBgElevated,xn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},Mn,Bn=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Mn||(Mn=d()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},An=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(En,{}),(0,n.jsx)(se,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(de,{}),(0,n.jsx)(y,{}),(0,n.jsx)(D,{}),(0,n.jsx)($,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(ln,{}),(0,n.jsx)(vn,{}),(0,n.jsx)(Bn,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(Kn,{}),(0,n.jsx)(fn,{})]})},Nn=An,Fn=a(242122),j=a.n(Fn),bn=a(238416),Tn=a.n(bn),Ln=a(301210),On=a(660532),pe=a(469181),ue=a(344682),me=a(11739),ge=a(664095),Hn=a(883458),In=a(722449),Rn=a(316165),he="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Xt="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Jt=function(e){return(0,n.jsx)(Rn.Z,j()(j()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?he:Xt})})}))},ze=Jt,Yt=a(562925),rn=a(373638),Zn=a(438199),Be,Ne,Qt=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.headerHeight,i=e.colorTextHeading,l=e.fontFamily,p=e.mobileMaxWidth;return{logo:t(Be||(Be=d()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),o,i,l,o,i,p),title:t(Ne||(Ne=d()([`
      line-height: 32px;
    `])))}}),qt=function(e){var t=e.isZhCN,o=(0,c.TH)(),i=o.search,l=Qt(),p=l.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(c.rU,{to:rn.J1("/",t,i),className:p.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:p.title,children:"Ant Design"})]})})},_t=qt,no=a(280882),eo=a(963918),yn=a(988872),Te,Le,Ee,Me,Ae=(0,T.kc)(function(r){var e=r.css,t=r.token;return{smallStyle:e(Te||(Te=d()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Le||(Le=d()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Ee||(Ee=d()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Me||(Me=d()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),He=function(){var e=Ae(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(c._H,{id:"app.implementation.community"}),")"]})},Ze=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(He,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(He,{})]}),key:"vue"}]},to=function(e){var t=e.isRTL,o=Ae(),i=o.styles;return(0,n.jsx)(eo.Z,{menu:{items:Ze()},placement:"bottomRight",children:(0,n.jsxs)(yn.ZP,{size:"small",children:[(0,n.jsx)(c._H,{id:"app.header.menu.more"}),(0,n.jsx)(no.Z,{className:E()(t?i.downOutlinedRTL:i.downOutlined,i.down)})]})})},oo=to,ro=a(600861),wn=a.n(ro),Pe=a(923232),pn=a(472638),De,Fe,ao={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},io=(0,T.kc)(function(r){var e=r.token,t=e.antCls,o=e.iconCls,i=e.fontFamily,l=e.headerHeight,p=e.menuItemBorder,u=e.colorPrimary,g=e.colorText;return{nav:(0,T.iv)(De||(De=d()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),i,t,t,t,40+12*2,l,l,p,g,t,o,t,u,t,t),popoverMenuNav:(0,T.iv)(Fe||(Fe=d()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),lo=function(r){var e,t,o=r.isZhCN,i=r.isMobile,l=r.responsive,p=r.directionText,u=r.onLangChange,g=r.onDirectionChange,s=(0,c.TH)(),x=s.pathname,v=s.search,b=(0,X.Z)(ao),k=M()(b,1),N=k[0],L=(0,c.yh)(),C=((e=L["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],B=io(),f=B.styles,h=i?"inline":"horizontal",F=x.split("/").filter(function(en){return en}).slice(0,-1).join("/"),G=F||"home";x.startsWith("/changelog")?G="docs/react":x.startsWith("/docs/resources")&&(G="docs/resources");var I,Q=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(c._H,{id:"app.header.lang"}),onClick:u,key:"switch-lang"},{label:p,onClick:g,key:"switch-direction"}].concat(wn()(Ze()));i?I=Q:l==="crowded"&&(I=[{label:(0,n.jsx)(On.Z,{}),key:"additional",children:wn()(Q)}]);var q=[{label:(0,n.jsx)(pn.Z,{to:rn.J1("/docs/spec/introduce",o,v),children:N.design}),key:"docs/spec"},{label:(0,n.jsx)(pn.Z,{to:rn.J1("/docs/react/introduce",o,v),children:N.development}),key:"docs/react"},{label:(0,n.jsx)(pn.Z,{to:rn.J1("/components/overview/",o,v),children:N.components}),key:"components"},C.length?{label:(0,n.jsx)(pn.Z,{to:rn.J1(C.sort(function(en,w){var O,R;return((O=en.frontmatter)===null||O===void 0?void 0:O.date)>((R=w.frontmatter)===null||R===void 0?void 0:R.date)?-1:1})[0].link,o,v),children:N.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(pn.Z,{to:rn.J1("/docs/resources",o,v),children:N.resources}),key:"docs/resources"},o?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(wn()((t=I)!==null&&t!==void 0?t:[]));return(0,n.jsx)(Pe.Z,{mode:h,selectedKeys:[G],className:f.nav,disabledOverflow:!0,items:q,style:{borderRight:0}})},Oe=a(879587),Ie,Re,$e,We,Ue,Pn="1.2em",so=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.colorText,i=e.colorBorder,l=e.colorBgContainer,p=e.colorBgTextHover,u=e.borderRadius,g=e.controlHeight,s=e.motionDurationMid;return{btn:t(Ie||(Ie=d()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),o,i,g,g,u,s,s,p,Pn,Pn,Pn),innerDiv:t(Re||(Re=d()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Pn,Pn),labelStyle:t($e||($e=d()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Pn,o,o),label1Style:t(We||(We=d()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),o,l),label2Style:t(Ue||(Ue=d()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),co=function(e){var t=e.label1,o=e.label2,i=e.tooltip1,l=e.tooltip2,p=e.value,u=e.pure,g=e.onClick,s=so(),x=s.styles,v=x.btn,b=x.innerDiv,k=x.labelStyle,N=x.label1Style,L=x.label2Style,C=(0,n.jsx)("button",{onClick:g,className:v,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[u&&(p===1?t:o),!u&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsx)("span",{className:E()(k,p===1?N:L),children:t}),(0,n.jsx)("span",{className:E()(k,p===1?L:N),children:o})]})]})},"lang-button");return i||l?(0,n.jsx)(Oe.Z,{title:p===1?i:l,children:C}):C},xe=co,Ve,Ge,Ke,Xe,Je,Ye,Qe=1120,qe=1200,po={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"},en:{message:"",shortMessage:"",more:""}},uo=(0,T.kc)(function(r){var e=r.token,t=r.css,o="#ced4d9";return{header:t(Ve||(Ve=d()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,o,o,o),menuRow:t(Ge||(Ge=d()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(Ke||(Ke=d()([`
      width: 16px;
    `]))),popoverMenu:Tn()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(Xe||(Xe=d()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(Je||(Je=d()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(Ye||(Ye=d()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),mo=function(){var e=(0,X.Z)(po),t=M()(e,2),o=t[0],i=t[1],l=(0,c.WF)(),p=l.pkg,u=(0,rn.Is)(),g=(0,m.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),s=M()(g,2),x=s[0],v=s[1],b=(0,m.useContext)(Zn.Z),k=b.direction,N=b.isMobile,L=b.bannerVisible,C=b.updateSiteConfig,B=(0,m.useRef)(null),f=(0,c.TH)(),h=f.pathname,F=f.search,G=uo(),I=G.styles,Q=(0,m.useCallback)(function(){v(function(W){return j()(j()({},W),{},{menuVisible:!1})})},[]),q=(0,m.useCallback)(function(){v(function(W){return j()(j()({},W),{},{windowWidth:window.innerWidth})})},[]),en=(0,m.useCallback)(function(){v(function(W){return j()(j()({},W),{},{menuVisible:!0})})},[]),w=(0,m.useCallback)(function(W){v(function(sn){return j()(j()({},sn),{},{menuVisible:W})})},[]),O=function(){C({direction:k!=="rtl"?"rtl":"ltr"})},R=function(){C({bannerVisible:!1}),rn.Fy()&&localStorage.setItem(Yt.ANT_DESIGN_NOT_SHOW_BANNER,tn()().toISOString())};(0,m.useEffect)(function(){Q()},[f]),(0,m.useEffect)(function(){return q(),window.addEventListener("resize",q),function(){window.removeEventListener("resize",q),B.current&&clearTimeout(B.current)}},[]);var _=(0,m.useCallback)(function(W){var sn=window.location.href,te=window.location.pathname;if(/overview/.test(te)&&/0?[1-39][0-3]?x/.test(W)){window.location.href=sn.replace(window.location.origin,W).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(W)?"":"/react","/introduce")).replace(/\/$/,"");return}var Se=new URL(sn.replace(window.location.origin,W));Se.host.includes("antgroup")&&(window.location.href="".concat(Se.href.replace(/\/$/,""),"/")),window.location.href=Se.href.replace(/\/$/,"")},[]),nn=(0,m.useCallback)(function(){var W="".concat(window.location.protocol,"//"),sn=window.location.href.slice(W.length);rn.Fy()&&localStorage.setItem("locale",rn.KE(h)?"en-US":"zh-CN"),window.location.href=W+sn.replace(window.location.pathname,rn.J1(h,!rn.KE(h),F).pathname)},[f]),je=(0,m.useMemo)(function(){return k!=="rtl"?"RTL":"LTR"},[k]),H=(0,m.useMemo)(function(){return k==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[k]),P=x.menuVisible,U=x.windowWidth,Dn=x.searching,Wt=j()(Tn()({},p.version,p.version),u==null?void 0:u.docVersions),Zr=Object.keys(Wt).map(function(W){return{value:Wt[W],label:W}}),Ut=["","index","index-cn"].includes(h),Vt=i==="cn",Pr=k==="rtl",Ce=null;U<Qe?Ce="crowded":U<qe&&(Ce="narrow");var Dr=E()(I.header,"clearfix",{"home-header":Ut}),ke={isZhCN:Vt,isRTL:Pr},Gt=(0,n.jsx)(lo,j()(j()({},ke),{},{responsive:Ce,isMobile:N,directionText:je,onLangChange:nn,onDirectionChange:O}),"nav"),Wn=[Gt,(0,n.jsx)(pe.Z,{className:"version",size:"small",defaultValue:p.version,onChange:_,dropdownStyle:H,popupMatchSelectWidth:!1,getPopupContainer:function(sn){return sn.parentNode},options:Zr},"version"),(0,n.jsx)(oo,j()({},ke),"more"),(0,n.jsx)(xe,{onClick:nn,value:rn.KE(h)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(xe,{onClick:O,value:k==="rtl"?2:1,label1:(0,n.jsx)(ze,{className:I.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(ze,{className:I.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(xe,{value:1,label1:(0,n.jsx)(Ln.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];U<Qe?Wn=Dn?[]:[Gt]:U<qe&&(Wn=Dn?[]:Wn);var Kt=Ut?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Dr,children:[N&&(0,n.jsx)(ue.Z,{overlayClassName:I.popoverMenu,placement:"bottomRight",content:Wn,trigger:"click",open:P,arrow:{arrowPointAtCenter:!0},onOpenChange:w,children:(0,n.jsx)(On.Z,{className:"nav-phone-icon",onClick:en})}),Vt&&L&&(0,n.jsx)(K.ZP,{theme:{token:{colorInfoBg:"#daf5eb",colorTextBase:"#000"}},children:(0,n.jsx)(me.Z,{className:I.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:I.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),(0,n.jsx)("span",{children:N?o.shortMessage:o.message}),(0,n.jsx)("a",{className:I.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var sn,te;(sn=(te=window).gtag)===null||sn===void 0||sn.call(te,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:o.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:R})}),(0,n.jsxs)(ge.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Hn.Z,j()(j()({},Kt[0]),{},{children:(0,n.jsx)(_t,j()(j()({},ke),{},{location:f}))})),(0,n.jsxs)(Hn.Z,j()(j()({},Kt[1]),{},{className:I.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(In.ZP,{})}),!N&&Wn]}))]})]})},go=mo,Fr=a(945462),ho=a(670215),xo=a.n(ho),fo=a(857278),vo=a(430932),bo=a(985093),qn=a(115668),yo=a(642207),_e=a(13923),fe=a(825035),wo=a(937993),jo=a(448118),Co=a(938545),ko=a(569980),So=a(391298),zo=a(630770),nt=a(693399),_n="ant-where-checker",Bo={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function No(){var r=(0,X.Z)(Bo),e=M()(r,1),t=e[0],o=m.useState(!0),i=M()(o,2),l=i[0],p=i[1];return m.useEffect(function(){var u=document.createElement("p");u.className=_n,u.style.position="fixed",u.style.pointerEvents="none",u.style.visibility="hidden",u.style.width="0",document.body.appendChild(u),(0,nt.updateCSS)(`
:where(.`.concat(_n,`) {
  content: "__CHECK__";
}
    `),_n);var g=getComputedStyle(u),s=g.content;p(String(s).includes("CHECK")),document.body.removeChild(u),(0,nt.removeCSS)(_n)},[]),l?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var et,tt,To={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Lo=function(){var e=(0,m.useContext)(Zn.Z),t=e.isMobile;return(0,T.kc)(function(o){var i=o.token,l=o.css,p=new gn.C((0,zo.Z)("#f0f3fa","#fff")).onBackground(i.colorBgContainer).toHexString();return{holder:l(et||(et=d()([`
      background: `,`;
    `])),p),footer:l(tt||(tt=d()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),p,i.colorTextSecondary,i.colorText,t?60:0,t?20:0,i.marginXXL,i.fontSize)}})()},Eo=function(){var e=(0,on.Z)(),t=(0,X.Z)(To),o=M()(t,2),i=o[0],l=o[1],p=Lo(),u=p.styles,g=e.getLink,s=m.useMemo(function(){var x=l==="cn",v={title:(0,n.jsx)(c._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:x?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:x?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:x?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(c._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(c._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(c._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(c._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(c._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(c._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(c._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(c._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},b={title:(0,n.jsx)(c._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(fo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(c._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};x&&b.items.push({icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.work_with_us"}),url:g("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.rU});var k={title:(0,n.jsx)(c._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Ln.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(_e.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.change-log"}),url:g("/changelog"),LinkComponent:c.rU},{icon:(0,n.jsx)(fe.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.faq"}),url:g("/docs/react/faq"),LinkComponent:c.rU},{icon:(0,n.jsx)(wo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(jo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Co.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(fe.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(fe.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},N={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(c._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(c._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(c._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(c._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(c._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(c._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(ko.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.theme"}),url:g("/theme-editor"),LinkComponent:c.rU}]};return[v,b,k,N]},[l,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(So.Z,{columns:s,className:u.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:i.owner})]})}),(0,n.jsx)(No,{})]})},ve=Eo,Mo=["children"],Ao=function(e){var t=e.children,o=xo()(e,Mo);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:o.title}),(0,n.jsx)("meta",{property:"og:title",content:o.title}),o.desc&&(0,n.jsx)("meta",{name:"description",content:o.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,n.jsx)(ve,{})]})},Ho=Ao,Zo=a(86198),ne=a(185209),Po=function(){var e=(0,c.eL)(),t=(0,m.useMemo)(function(){var p;if(!e.frontmatter.subtitle&&!e.frontmatter.title)p="404 Not Found - Ant Design";else{var u;p="".concat(e.frontmatter.subtitle||""," ").concat(((u=e.frontmatter)===null||u===void 0?void 0:u.title)||""," - Ant Design")}var g=e.frontmatter.description||"";return[p,g]},[e]),o=M()(t,2),i=o[0],l=o[1];return(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{property:"og:title",content:i}),l&&(0,n.jsx)("meta",{name:"description",content:l})]})},ot=Po,rt=a(148050),Do=a(823493),Fo=a.n(Do),Oo=a(468990),Io=a(658192),at,it,lt,st=["scroll","resize"],Ro=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.boxShadowSecondary,i=e.antCls;return{affixTabs:t(at||(at=d()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),o,i,i,i),affixTabsFixed:t(it||(it=d()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(lt||(lt=d()([`
      text-transform: capitalize;
    `])))}}),ct=32,$o=function(){var e=m.useRef(null),t=m.useRef([]),o=m.useState(!1),i=M()(o,2),l=i[0],p=i[1],u=m.useState(void 0),g=M()(u,2),s=g[0],x=g[1],v=Ro(),b=v.styles,k=b.affixTabs,N=b.affixTabsFixed,L=b.span;function C(f){var h=document.getElementById(f);if(h){var F=h.offsetTop-e.current.offsetHeight-ct;(0,Io.Z)(F)}}m.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(f){var h=f.id;return h}),p(!0)},[]),m.useEffect(function(){var f=decodeURIComponent((location.hash||"").slice(1));f&&C(f)},[l]);var B=m.useMemo(function(){function f(){for(var h=window,F=h.scrollY,G=e.current.offsetHeight,I=t.current.length-1;I>=0;I-=1){var Q=t.current[I],q=document.getElementById(Q),en=q.offsetTop-G-ct;if(en<=F){x(Q);return}}x(void 0)}return Fo()(f)},[]);return m.useEffect(function(){return st.forEach(function(f){return window.addEventListener(f,B)}),B(),function(){st.forEach(function(f){return window.removeEventListener(f,B)})}},[]),(0,n.jsx)("div",{className:E()(k,s&&N),ref:e,children:(0,n.jsx)(Oo.Z,{activeKey:s,onChange:C,items:t.current.map(function(f){return{key:f,label:(0,n.jsx)("span",{className:L,children:f.replace(/-/g," ")})}})})})},Wo=$o,dt,pt,ut,mt=40,ee=1208,be=24,Uo=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{resourcePage:t(dt||(dt=d()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),ee),resourceContent:t(pt||(pt=d()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),mt,ee,be,o),banner:t(ut||(ut=d()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),mt,ee,ee,be,be)}}),Vo=function(e){var t,o=e.children,i=Uo(),l=i.styles,p=(0,c.eL)();return(0,n.jsx)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Zo.Z,{children:[(0,n.jsx)(ot,{}),(0,n.jsxs)("div",{id:"resources-page",className:l.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:l.banner,children:[(0,n.jsxs)(ne.Z.Title,{style:{fontSize:30},children:[(t=p.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(rt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,n.jsx)("section",{children:p.frontmatter.description})]}),(0,n.jsx)("div",{className:l.resourceContent,children:o}),(0,n.jsx)(ve,{})]})]})})},Go=Vo,Ko=a(720841),Xo=a(538294),gt=a(575054),ht=a(796586),Jo=a(605071),ye=a(945016),Yo=a(217187),$n=a(618073),xt=a(206171),Qo=a(844183),qo=a(566254),_o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,c.yh)(),o=(0,on.Z)(),i=o.pathname,l=o.search,p=(0,c.tx)(),u=e.before,g=e.after,s=(0,m.useMemo)(function(){var x,v=wn()(p!=null?p:[]);if(i.startsWith("/docs/spec")){var b=v.splice(0,1);v.push.apply(v,wn()(b))}if(i.startsWith("/docs/react")){var k,N=(k=Object.entries(t).find(function(f){var h=M()(f,1),F=h[0];return F.startsWith("/changelog")}))===null||k===void 0?void 0:k[1];N&&v.splice(1,0,N[0])}if(i.startsWith("/changelog")){var L,C=(L=Object.entries(t).find(function(f){var h=M()(f,1),F=h[0];return F.startsWith("/docs/react")}))===null||L===void 0?void 0:L[1];C&&(v.unshift(C[0]),v.push.apply(v,wn()(C.slice(1))))}var B=function(h){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return h&&F&&(0,n.jsx)(Qo.Z,{color:h==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:h.replace("VERSION",qo.Z)})};return(x=v==null?void 0:v.reduce(function(f,h){if(h!=null&&h.title)if(i.startsWith("/docs/spec")){var F,G,I=h.children.reduce(function(w,O){var R,_,nn=(R=(_=O.frontmatter)===null||_===void 0?void 0:_.type)!==null&&R!==void 0?R:"default";return w[nn]||(w[nn]=[]),w[nn].push(O),w},{}),Q=[];Q.push.apply(Q,wn()((F=(G=I.default)===null||G===void 0?void 0:G.map(function(w){return{label:(0,n.jsxs)(pn.Z,{to:"".concat(w.link).concat(l),children:[u,w==null?void 0:w.title,g]}),key:w.link.replace(/(-cn$)/g,"")}}))!==null&&F!==void 0?F:[])),Object.entries(I).forEach(function(w){var O=M()(w,2),R=O[0],_=O[1];R!=="default"&&Q.push({type:"group",label:R,key:R,children:_==null?void 0:_.map(function(nn){return{label:(0,n.jsxs)(pn.Z,{to:"".concat(nn.link).concat(l),children:[u,nn==null?void 0:nn.title,g]}),key:nn.link.replace(/(-cn$)/g,"")}})})}),f.push({label:h==null?void 0:h.title,key:h==null?void 0:h.title,children:Q})}else{var q;f.push({type:"group",label:h==null?void 0:h.title,key:h==null?void 0:h.title,children:(q=h.children)===null||q===void 0?void 0:q.map(function(w){var O,R;return{label:(0,n.jsxs)(pn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[u,(0,n.jsx)("span",{children:w==null?void 0:w.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(O=w.frontmatter)===null||O===void 0?void 0:O.subtitle},"chinese"),B((R=w.frontmatter)===null||R===void 0?void 0:R.tag,!u&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})})}else{var en=h.children||[];en.every(function(w){var O;return w==null||(O=w.frontmatter)===null||O===void 0?void 0:O.date})&&en.sort(function(w,O){var R,_;return((R=w.frontmatter)===null||R===void 0?void 0:R.date)>((_=O.frontmatter)===null||_===void 0?void 0:_.date)?-1:1}),f.push.apply(f,wn()(en.map(function(w){return{label:(0,n.jsxs)(pn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[u,w==null?void 0:w.title,B(w.frontmatter.tag,!u&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})))}return f},[]))!==null&&x!==void 0?x:[]},[p,t,i,l,e]);return[s,i]},ft=_o,vt,bt,yt,wt,nr=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.colorSplit,i=e.iconCls,l=e.fontSizeIcon;return{prevNextNav:t(vt||(vt=d()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),o),pageNav:t(bt||(bt=d()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),i,l),prevNav:t(yt||(yt=d()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(wt||(wt=d()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),er=function r(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var i;return t.concat((i=r(o.children))!==null&&i!==void 0?i:[])}return t.concat(o)},[]):null},tr=function(e){var t=e.rtl,o=nr(),i=o.styles,l={className:"footer-nav-icon-before"},p={className:"footer-nav-icon-after"},u=t?(0,n.jsx)($n.Z,j()({},l)):(0,n.jsx)(xt.Z,j()({},l)),g=t?(0,n.jsx)(xt.Z,j()({},p)):(0,n.jsx)($n.Z,j()({},p)),s=ft({before:u,after:g}),x=M()(s,2),v=x[0],b=x[1],k=(0,m.useContext)(Zn.Z),N=k.isMobile,L=(0,m.useMemo)(function(){var h=er(v);if(!h)return[null,null];var F=-1;return h.forEach(function(G,I){G&&G.key===b&&(F=I)}),[h[F-1],h[F+1]]},[v,b]),C=M()(L,2),B=C[0],f=C[1];return N?null:(0,n.jsxs)("section",{className:i.prevNextNav,children:[B&&m.cloneElement(B.label,{className:E()(i.pageNav,i.prevNav,B.className)}),f&&m.cloneElement(f.label,{className:E()(i.pageNav,i.nextNav,f.className)})]})},or=tr,rr=a(302281),ar=a(15060),ir=a(889812),jt,Ct,kt,lr=(0,T.kc)(function(r){var e=r.token,t=r.css;return{history:t(jt||(jt=d()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Ct||(Ct=d()([`
    // white-space: pre;
  `]))),ref:t(kt||(kt=d()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),sr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function cr(r){var e=r.changelog,t=e===void 0?"":e,o=r.refs,i=o===void 0?[]:o,l=r.styles,p=m.useMemo(function(){for(var u=[],g=!1,s="",x=0;x<t.length;x+=1){var v=t[x];if(v!=="`")s+=v;else{var b=s;g&&(b=(0,n.jsx)("code",{children:b})),u.push(b),s="",g=!g}}return u.push(s),u},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:p}),i==null?void 0:i.map(function(u){var g;return(0,n.jsxs)("a",{className:l.ref,href:u,target:"_blank",rel:"noreferrer",children:["#",(g=u.match(/^.*\/(\d+)$/))===null||g===void 0?void 0:g[1]]},u)})]})}function dr(r,e){var t=(0,ir.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return a.e(2104).then(a.t.bind(a,332104,19))}}:{key:"component-changelog-en",request:function(){return a.e(5212).then(a.t.bind(a,365212,19))}});return(0,m.useMemo)(function(){var o=r.replace(/-/g,""),i=Object.keys(t).find(function(l){return l.toLowerCase()===o.toLowerCase()});return t[i]},[t,r])}function pr(r){var e,t=r.pathname,o=t===void 0?"":t,i=(0,X.Z)(sr),l=M()(i,2),p=l[0],u=l[1],g=m.useState(!1),s=M()(g,2),x=s[0],v=s[1],b=lr(),k=b.styles,N=((e=o.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",L=dr(N,u),C=m.useMemo(function(){var B={};return L==null||L.forEach(function(f){B[f.version]=B[f.version]||[],B[f.version].push(f)}),Object.keys(B).map(function(f){var h=B[f];return{children:(0,n.jsxs)(ne.Z,{children:[(0,n.jsx)("h4",{children:f}),(0,n.jsx)("ul",{children:h.map(function(F,G){return(0,n.jsx)("li",{className:k.li,children:(0,n.jsx)(cr,j()(j()({},F),{},{styles:k}))},G)})})]})}})},[L]);return!L||!L.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(yn.ZP,{className:k.history,icon:(0,n.jsx)(_e.Z,{}),onClick:function(){v(!0)},children:p.changelog}),(0,n.jsx)(rr.Z,{title:p.changelog,extra:(0,n.jsx)(pn.Z,{style:{fontSize:14},to:"/changelog".concat(u==="cn"?"-cn":""),children:p.full}),open:x,width:"40vw",onClose:function(){v(!1)},destroyOnClose:!0,children:(0,n.jsx)(ar.Z,{items:C})})]})}var ur=function(r){return(0,n.jsx)(m.Suspense,{fallback:null,children:(0,n.jsx)(pr,j()({},r))})},mr=a(524229),St=a(211646),gr=a(294047),zt=a(315816),hr=function(e){var t=e.className,o=e.style;return(0,n.jsx)("svg",{className:t,style:o,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Bt=hr,Nt,Tt,Lt,Et,Mt,At,Ht,we="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",xr=(0,T.kc)(function(r){var e=r.token,t=r.css;return{card:t(Nt||(Nt=d()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Tt||(Tt=d()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Lt||(Lt=d()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Et||(Et=d()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Mt||(Mt=d()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(At||(At=d()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Ht||(Ht=d()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),fr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},vr=function(e){var t=e.zhihuLink,o=e.yuqueLink,i=e.juejinLink,l=(0,X.Z)(fr),p=M()(l,1),u=p[0],g=xr(),s=g.styles,x=s.card,v=s.bigTitle,b=s.cardBody,k=s.left,N=s.title,L=s.subTitle,C=s.btn;return!t&&!o&&!i?null:(0,n.jsxs)(gr.Z,{className:x,bordered:!1,children:[(0,n.jsx)("h3",{className:v,children:u.bigTitle}),t&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:k,children:[(0,n.jsx)("img",{src:we,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:N,children:"Ant Design"}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)(qn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(yn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:u.zhiHu})]})]})]}),(0,n.jsx)(yn.ZP,{type:"primary",className:C,icon:(0,n.jsx)(qn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:u.buttonText})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt.Z,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:k,children:[(0,n.jsx)("img",{src:we,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:N,children:"Ant Design"}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)(St.Z,{className:"logo yuque-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(yn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:u.yuQue})]})]})]}),(0,n.jsx)(yn.ZP,{type:"primary",className:C,icon:(0,n.jsx)(St.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:u.buttonText})]})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zt.Z,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:k,children:[(0,n.jsx)("img",{src:we,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:N,children:"Ant Design"}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)(Bt,{className:"logo juejin-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(yn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:u.junjin})]})]})]}),(0,n.jsx)(yn.ZP,{type:"primary",className:C,icon:(0,n.jsx)(Bt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:i,children:u.buttonText})]})]})]})},br=vr,Zt,Pt,Dt,Ft,Ot,yr=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{contributorsList:t(Zt||(Zt=d()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),o,o,e.motionDurationSlow,o),listMobile:t(Pt||(Pt=d()([`
      margin: 1em 0 !important;
    `]))),toc:t(Dt||(Dt=d()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),o,o),tocWrapper:t(Ft||(Ft=d()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(Ot||(Ot=d()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),wr=function(e){var t=e.num,o=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:o}).map(function(i,l){return(0,n.jsx)(gt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:l===0?0:-8}},l)})})},jr=function(e){var t=e.name,o=e.avatar,i=(0,m.useState)(!0),l=M()(i,2),p=l[0],u=l[1],g=(0,m.useState)(!1),s=M()(g,2),x=s[0],v=s[1];return(0,m.useLayoutEffect)(function(){var b=new Image;b.src=o,b.onload=function(){return u(!1)},b.onerror=function(){return v(!0)}},[]),x?null:p?(0,n.jsx)(gt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(ht.C,{size:"small",src:o,alt:t,children:t})},Cr=function(e){var t,o,i,l,p,u,g=e.children,s=(0,c.eL)(),x=(0,c.zh)(),v=(0,on.Z)(),b=v.pathname,k=v.hash,N=(0,c.YB)(),L=N.formatMessage,C=yr(),B=C.styles,f=(0,T.Fg)(),h=(0,m.useContext)(Zn.Z),F=h.direction,G=h.isMobile,I=(0,Yo.Z)(!1),Q=M()(I,2),q=Q[0],en=Q[1],w=(0,m.useMemo)(function(){var H;return((H=s.toc)===null||H===void 0?void 0:H.filter(function(P){return P._debug_demo}).map(function(P){return P.id}))||[]},[s]),O=w.includes(k.slice(1));(0,m.useLayoutEffect)(function(){en(O)},[]);var R=(0,m.useMemo)(function(){return{showDebug:q,setShowDebug:en}},[q,w]),_=(0,m.useMemo)(function(){return((x==null?void 0:x.toc)||s.toc).reduce(function(H,P){if(P.depth===2)H.push(j()({},P));else if(P.depth===3){var U=H[H.length-1];U&&(U.children=U.children||[],U.children.push(j()({},P)))}return H},[])},[x==null?void 0:x.toc,s.toc]),nn=F==="rtl",je=(0,m.useMemo)(function(){var H=s.frontmatter.author;return H?typeof H=="string"?H.split(",").map(function(P){return{name:P,avatar:"https://github.com/".concat(P,".png")}}):Array.isArray(H)?H:[]:[]},[s.frontmatter.author]);return(0,n.jsx)(mr.Z.Provider,{value:R,children:(0,n.jsxs)(Hn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!s.frontmatter.toc&&(0,n.jsx)("section",{className:B.tocWrapper,children:(0,n.jsx)(Jo.Z,{className:B.toc,affix:!1,targetOffset:f.anchorTop,showInkInFixed:!0,items:_.map(function(H){var P;return{href:"#".concat(H.id),title:H.title,key:H.id,children:(P=H.children)===null||P===void 0?void 0:P.filter(function(U){return q||!w.includes(U.id)}).map(function(U){return{key:U.id,href:"#".concat(U.id),title:(0,n.jsx)("span",{className:E()(w.includes(U.id)&&"toc-debug"),children:U==null?void 0:U.title})}})}})})}),(0,n.jsxs)("article",{className:E()(B.articleWrapper,{rtl:nn}),children:[(t=s.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(ne.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(ye.Z,{size:"small",children:[(o=s.frontmatter)===null||o===void 0?void 0:o.title,(i=s.frontmatter)===null||i===void 0?void 0:i.subtitle,!b.startsWith("/components/overview")&&(0,n.jsx)(rt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:s.frontmatter.filename})]}),b.startsWith("/components/")&&(0,n.jsx)(ur,{pathname:b})]}):null,s.frontmatter.date||s.frontmatter.author?(0,n.jsx)(ne.Z.Paragraph,{children:(0,n.jsxs)(ye.Z,{children:[s.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Ko.Z,{})," ",tn()(s.frontmatter.date).format("YYYY-MM-DD")]}),je.map(function(H){return(0,n.jsx)("a",{href:"https://github.com/".concat(H.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(ye.Z,{size:3,children:[(0,n.jsx)(jr,{name:H.name,avatar:H.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",H.name]})]})},H.name)})]})}):null,!s.frontmatter.__autoDescription&&s.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:g}),(((l=s.frontmatter)===null||l===void 0?void 0:l.zhihu_url)||((p=s.frontmatter)===null||p===void 0?void 0:p.yuque_url)||((u=s.frontmatter)===null||u===void 0?void 0:u.juejin_url))&&(0,n.jsx)(br,{zhihuLink:s.frontmatter.zhihu_url,yuqueLink:s.frontmatter.yuque_url,juejinLink:s.frontmatter.juejin_url}),s.frontmatter.filename&&(0,n.jsx)(Xo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:E()(B.contributorsList,Tn()({},B.listMobile,G)),fileName:s.frontmatter.filename,renderItem:function(P,U){var Dn;return!P||U?(0,n.jsx)(wr,{}):(Dn=P.username)!==null&&Dn!==void 0&&Dn.includes("github-actions")?null:(0,n.jsx)(Oe.Z,{mouseEnterDelay:.3,title:"".concat(L({id:"app.content.contributors"}),": ").concat(P.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(P.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(ht.C,{size:"small",src:P.url,alt:P.username,children:P.username})})})},P.username)}})]}),(0,n.jsx)(or,{rtl:nn}),(0,n.jsx)(ve,{})]})})},kr=Cr,Sr=a(650010),It,Rt,zr=(0,T.kc)(function(r){var e=r.token,t=r.css,o=e.antCls,i=e.fontFamily,l=e.colorSplit;return{asideContainer:t(It||(It=d()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),i,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),mainMenu:t(Rt||(Rt=d()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Br=function(){var e=(0,c.tx)(),t=(0,m.useContext)(Zn.Z),o=t.isMobile,i=t.theme,l=zr(),p=l.styles,u=ft(),g=M()(u,2),s=g[0],x=g[1],v=i.includes("dark"),b=(0,T.Fg)(),k=b.colorBgContainer,N=(0,n.jsx)(K.ZP,{theme:{components:{Menu:{itemBg:k,darkItemBg:k}}},children:(0,n.jsx)(Pe.Z,{items:s,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:v?"dark":"light",selectedKeys:[x],defaultOpenKeys:e==null?void 0:e.map(function(L){var C=L.title;return C}).filter(function(L){return L})})});return o?(0,n.jsx)(Sr.Z,{children:N},"Mobile-menu"):(0,n.jsx)(Hn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:N})})},Nr=Br,$t,Tr=(0,T.kc)(function(r){var e=r.css,t=r.token;return{main:e($t||($t=d()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Lr=function(e){var t=e.children,o=Tr(),i=o.styles;return(0,n.jsxs)("main",{className:i.main,children:[(0,n.jsx)(ot,{}),(0,n.jsx)(Nr,{}),(0,n.jsx)(kr,{children:t})]})},Er=Lr,Mr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Ar=function(){var e=(0,c.pC)(),t=(0,on.Z)(),o=t.pathname,i=t.search,l=t.hash,p=(0,X.Z)(Mr),u=M()(p,2),g=u[0],s=u[1],x=(0,m.useRef)(null),v=(0,m.useContext)(Zn.Z),b=v.direction,k=(0,c.WF)(),N=k.loading;(0,m.useLayoutEffect)(function(){s==="cn"?tn().locale("zh-cn"):tn().locale("en")},[]),(0,m.useEffect)(function(){var C=document.getElementById("nprogress-style");C&&(x.current=setTimeout(function(){var B;(B=C.parentNode)===null||B===void 0||B.removeChild(C)},0))},[]),(0,m.useEffect)(function(){var C,B=l.replace("#","");B&&((C=document.getElementById(decodeURIComponent(B)))===null||C===void 0||C.scrollIntoView())},[N,l]),(0,m.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",o+i)},[t]);var L=(0,m.useMemo)(function(){return["","/"].some(function(C){return C===o})||["/index"].some(function(C){return o.startsWith(C)})?(0,n.jsx)(Ho,{title:g.title,desc:g.description,children:e}):o.startsWith("/docs/resource")?(0,n.jsx)(Go,{children:e}):o.startsWith("/theme-editor")?e:(0,n.jsx)(Er,{children:e})},[o,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:s==="cn"?"zh-CN":s,"data-direction":b,className:E()({rtl:b==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:g.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(K.ZP,{direction:b,locale:s==="cn"?Z.Z:void 0,children:[(0,n.jsx)(Nn,{}),(0,n.jsx)(go,{}),L]})]})},Hr=Ar},647727:function(Un,cn,a){a.d(cn,{Z:function(){return un.Z}});var un=a(582485)},86198:function(Un,cn,a){a.d(cn,{Z:function(){return de}});var un=a(600861),M=a.n(un),jn=a(238416),E=a.n(jn),Cn=a(627424),tn=a.n(Cn),mn=a(670215),c=a.n(mn),m=a(242122),Z=a.n(m),K=a(667294),X=a(294184),on=a.n(X),kn=a(518475),d=a(73287),S=a(121790),T=a(45598),n=a(296708);function Vn(z,y,A){if(typeof A=="boolean")return A;if(z.length)return!0;var D=(0,T.default)(y);return D.some(function(V){return V.type===n.Z})}var oe=a(141035),re=function(y){var A,D=y.componentCls,V=y.bodyBg,$=y.lightSiderBg,J=y.lightTriggerBg,Y=y.lightTriggerColor;return E()({},"".concat(D,"-sider-light"),(A={background:$},E()(A,"".concat(D,"-sider-trigger"),{color:Y,background:J}),E()(A,"".concat(D,"-sider-zero-width-trigger"),{color:Y,background:J,border:"1px solid ".concat(V),borderInlineStart:0}),A))},ae=re,Gn=function(y){var A,D,V=y.antCls,$=y.componentCls,J=y.colorText,Y=y.triggerColor,an=y.footerBg,ln=y.triggerBg,dn=y.headerHeight,vn=y.headerPadding,hn=y.headerColor,xn=y.footerPadding,fn=y.triggerHeight,Mn=y.zeroTriggerHeight,Bn=y.zeroTriggerWidth,An=y.motionDurationMid,Nn=y.motionDurationSlow,Fn=y.fontSize,j=y.borderRadius,bn=y.bodyBg,Tn=y.headerBg,Ln=y.siderBg;return D={},E()(D,$,Z()(Z()((A={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:bn,"&, *":{boxSizing:"border-box"}},E()(A,"&".concat($,"-has-sider"),E()({flexDirection:"row"},"> ".concat($,", > ").concat($,"-content"),{width:0})),E()(A,"".concat($,"-header, &").concat($,"-footer"),{flex:"0 0 auto"}),E()(A,"".concat($,"-sider"),{position:"relative",minWidth:0,background:Ln,transition:"all ".concat(An,", background 0s"),"&-children":E()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(V,"-menu").concat(V,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:fn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:fn,color:Y,lineHeight:"".concat(fn,"px"),textAlign:"center",background:ln,cursor:"pointer",transition:"all ".concat(An)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:dn,insetInlineEnd:-Bn,zIndex:1,width:Bn,height:Mn,color:Y,fontSize:y.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Ln,borderStartStartRadius:0,borderStartEndRadius:j,borderEndEndRadius:j,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Nn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Nn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-Bn,borderStartStartRadius:j,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:j}}}}),A),ae(y)),{},{"&-rtl":{direction:"rtl"}})),E()(D,"".concat($,"-header"),E()({height:dn,padding:vn,color:hn,lineHeight:"".concat(dn,"px"),background:Tn},"".concat(V,"-menu"),{lineHeight:"inherit"})),E()(D,"".concat($,"-footer"),{padding:xn,color:J,fontSize:Fn,background:an}),E()(D,"".concat($,"-content"),{flex:"auto",minHeight:0}),D},Kn=(0,oe.Z)("Layout",function(z){return[Gn(z)]},function(z){var y=z.colorBgLayout,A=z.controlHeight,D=z.controlHeightLG,V=z.colorText,$=z.controlHeightSM,J=z.marginXXS,Y=z.colorTextLightSolid,an=z.colorBgContainer,ln=D*1.25;return{colorBgHeader:"#001529",colorBgBody:y,colorBgTrigger:"#002140",bodyBg:y,headerBg:"#001529",headerHeight:A*2,headerPadding:"0 ".concat(ln,"px"),headerColor:V,footerPadding:"".concat($,"px ").concat(ln,"px"),footerBg:y,siderBg:"#001529",triggerHeight:D+J*2,triggerBg:"#002140",triggerColor:Y,zeroTriggerWidth:D,zeroTriggerHeight:D,lightSiderBg:an,lightTriggerBg:an,lightTriggerColor:V}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),Sn=a(785893),ie=["prefixCls","suffixCls","className","tagName"],Xn=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function En(z){var y=z.suffixCls,A=z.tagName,D=z.displayName;return function(V){var $=K.forwardRef(function(J,Y){return(0,Sn.jsx)(V,Z()({ref:Y,suffixCls:y,tagName:A},J))});return $}}var gn=K.forwardRef(function(z,y){var A=z.prefixCls,D=z.suffixCls,V=z.className,$=z.tagName,J=c()(z,ie),Y=K.useContext(d.E_),an=Y.getPrefixCls,ln=an("layout",A),dn=Kn(ln),vn=tn()(dn,2),hn=vn[0],xn=vn[1],fn=D?"".concat(ln,"-").concat(D):ln;return hn((0,Sn.jsx)($,Z()({className:on()(A||fn,V,xn),ref:y},J)))}),Jn=K.forwardRef(function(z,y){var A,D=K.useContext(d.E_),V=D.direction,$=K.useState([]),J=tn()($,2),Y=J[0],an=J[1],ln=z.prefixCls,dn=z.className,vn=z.rootClassName,hn=z.children,xn=z.hasSider,fn=z.tagName,Mn=z.style,Bn=c()(z,Xn),An=(0,kn.default)(Bn,["suffixCls"]),Nn=K.useContext(d.E_),Fn=Nn.getPrefixCls,j=Nn.layout,bn=Fn("layout",ln),Tn=Vn(Y,hn,xn),Ln=Kn(bn),On=tn()(Ln,2),pe=On[0],ue=On[1],me=on()(bn,(A={},E()(A,"".concat(bn,"-has-sider"),Tn),E()(A,"".concat(bn,"-rtl"),V==="rtl"),A),j==null?void 0:j.className,dn,vn,ue),ge=K.useMemo(function(){return{siderHook:{addSider:function(In){an(function(Rn){return[].concat(M()(Rn),[In])})},removeSider:function(In){an(function(Rn){return Rn.filter(function(he){return he!==In})})}}}},[]);return pe((0,Sn.jsx)(S.V.Provider,{value:ge,children:(0,Sn.jsx)(fn,Z()(Z()({ref:y,className:me,style:Z()(Z()({},j==null?void 0:j.style),Mn)},An),{},{children:hn}))}))}),le=En({tagName:"div",displayName:"Layout"})(Jn),se=En({suffixCls:"header",tagName:"header",displayName:"Header"})(gn),Yn=En({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(gn),ce=En({suffixCls:"content",tagName:"main",displayName:"Content"})(gn),Qn=le,zn=Qn;zn.Header=se,zn.Footer=Yn,zn.Content=ce,zn.Sider=n.Z;var de=zn},715778:function(Un,cn,a){a.d(cn,{Z:function(){return X}});var un=a(174219),M=a(242122),jn=a.n(M),E=a(585369),Cn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},tn=Cn,mn={lang:jn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},E.Z),timePickerLocale:jn()({},tn)};mn.lang.ok="\u786E\u5B9A";var c=mn,m=c,Z="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",K={locale:"zh-cn",Pagination:un.Z,DatePicker:c,TimePicker:tn,Calendar:m,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:Z,method:Z,array:Z,object:Z,number:Z,date:Z,boolean:Z,integer:Z,float:Z,regexp:Z,email:Z,url:Z,hex:Z},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},X=K}}]);
