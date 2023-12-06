'use client';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import NavBar from '../components/NavBar';
import Page from '../components/Page';
import './guide.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const aStyle = {
  color: 'white',
  'text-decoration': 'none',
};

const page = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <NavBar page={Page.Guide} />
        <Box height={20} />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n/* From extension vscode.github */\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.vscode-dark img[src$=\\#gh-light-mode-only],\n.vscode-light img[src$=\\#gh-dark-mode-only] {\n\tdisplay: none;\n}\n\n/* From extension zhuangtongfa.material-theme */\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body {\n  box-sizing: border-box;\n  min-width: 200px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote {\n  background-color: initial;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  color: initial;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body code {\n  color: inherit;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre code {\n  color: initial;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body code > div, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body code > div, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body code > div, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body code > div {\n  background: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table td {\n  border: 1px solid rgba(171, 178, 191, 0.5) !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body.showEditorSelection .code-active-line:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body.showEditorSelection .code-active-line:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body.showEditorSelection .code-active-line:before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body.showEditorSelection .code-active-line:before {\n  border-left: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body.showEditorSelection .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body.showEditorSelection .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body.showEditorSelection .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body.showEditorSelection .code-line:hover:before {\n  border-left: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body.showEditorSelection .code-line .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body.showEditorSelection .code-line .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body.showEditorSelection .code-line .code-line:hover:before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body.showEditorSelection .code-line .code-line:hover:before {\n  border-left: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n/* Generated from \'node_modules/github-markdown-css/github-markdown.css\' */\n@font-face {\n  font-family: octicons-link;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA==) format("woff");\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: rgb(171, 178, 191);\n  line-height: 1.5;\n  word-wrap: break-word;\n  background: #282c34;\n  padding-top: 20px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-c, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-c, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-c, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-c {\n  color: #6a737d;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-c1, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-s .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-c1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-s .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-c1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-s .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-c1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-s .pl-v {\n  color: #005cc5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-e, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-e, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-e, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-e, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-en {\n  color: #6f42c1;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-smi, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-s .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-smi, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-s .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-smi, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-s .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-smi, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-s .pl-s1 {\n  color: #24292e;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-ent, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-ent, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-ent, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-ent {\n  color: #22863a;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-k, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-k, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-k, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-k {\n  color: #d73a49;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-s, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-pds, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-s .pl-pse .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sr, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sr .pl-sre, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sr .pl-sra, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-s, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-pds, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-s .pl-pse .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sr .pl-sre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sr .pl-sra, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-s, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-pds, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-s .pl-pse .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sr .pl-sre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sr .pl-sra, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-s, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-pds, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-s .pl-pse .pl-s1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sr .pl-sre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sr .pl-sra {\n  color: #032f62;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-smw, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-smw, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-smw, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-v, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-smw {\n  color: #e36209;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-bu, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-bu, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-bu, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-bu {\n  color: #b31d28;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-ii, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-ii, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-ii, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-ii {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-c2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-c2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-c2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-c2 {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-c2::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-c2::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-c2::before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-c2::before {\n  content: "^M";\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sr .pl-cce, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sr .pl-cce {\n  font-weight: bold;\n  color: #22863a;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-ml, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-ml, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-ml, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-ml {\n  color: #735c0f;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mh, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mh .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-ms, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mh, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mh .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-ms, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mh, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mh .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-ms, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mh, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mh .pl-en, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-ms {\n  font-weight: bold;\n  color: #005cc5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mi, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mi, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mi, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mi {\n  font-style: italic;\n  color: #24292e;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mb, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mb, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mb, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mb {\n  font-weight: bold;\n  color: #24292e;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-md, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-md, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-md, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-md {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mi1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mi1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mi1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mi1 {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mc, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mc, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mc, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mc {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mi2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mi2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mi2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mi2 {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-mdr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-mdr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-mdr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-mdr {\n  font-weight: bold;\n  color: #6f42c1;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-ba, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-ba, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-ba, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-ba {\n  color: #586069;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-sg, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-sg, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-sg, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-sg {\n  color: #959da5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-corl, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-corl, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-corl, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-corl {\n  text-decoration: underline;\n  color: #032f62;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .octicon {\n  display: inline-block;\n  vertical-align: text-top;\n  fill: currentColor;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a {\n  background-color: transparent;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a:active, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a:active, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a:active, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a:active, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a:hover {\n  outline-width: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body strong {\n  font-weight: inherit;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body strong {\n  font-weight: bolder;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1 {\n  margin: 0.67em 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body img {\n  border-style: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body input {\n  font: inherit;\n  margin: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body input {\n  overflow: visible;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body [type=checkbox], .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body [type=checkbox], .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body [type=checkbox], .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body [type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body *, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body *, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body *, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body * {\n  box-sizing: border-box;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body input, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body input {\n  font-family: inherit;\n  line-height: inherit;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a {\n  color: #528bff;\n  text-decoration: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a:hover, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a:hover {\n  text-decoration: underline;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body strong, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body strong {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr::before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr::before {\n  display: table;\n  content: "";\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr::after, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr::after, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr::after, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr::after {\n  display: table;\n  clear: both;\n  content: "";\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body td, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body th, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body td, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body th, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body td, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body th, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body td, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body th {\n  padding: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6 {\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote {\n  margin: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul ol {\n  list-style-type: lower-roman;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dd, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dd, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dd, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dd {\n  margin-left: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .octicon, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .octicon {\n  vertical-align: text-bottom;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-0, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-0, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-0, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-0 {\n  padding-left: 0 !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-1 {\n  padding-left: 4px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-2 {\n  padding-left: 8px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-3, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-3, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-3, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-3 {\n  padding-left: 16px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-4, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-4, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-4, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-4 {\n  padding-left: 24px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-5, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-5, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-5, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-5 {\n  padding-left: 32px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .pl-6, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .pl-6, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .pl-6, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .pl-6 {\n  padding-left: 40px !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body::before, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body::before, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body::before {\n  display: table;\n  content: "";\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body::after, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body::after, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body::after, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body::after {\n  display: table;\n  clear: both;\n  content: "";\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body > *:first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body > *:first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body > *:first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body > *:first-child {\n  margin-top: 0 !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body > *:last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body > *:last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body > *:last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body > *:last-child {\n  margin-bottom: 0 !important;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body a:not([href]), .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body a:not([href]), .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body a:not([href]), .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .anchor {\n  float: left;\n  padding-right: 4px;\n  margin-left: -20px;\n  line-height: 1;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .anchor:focus, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .anchor:focus, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .anchor:focus, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .anchor:focus {\n  outline: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body p, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr {\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote {\n  /* padding: 0 1em;\n  color: #6a737d;\n  border-left: 0.25em solid #dfe2e5; */\n  padding: 8.5px 17px;\n  margin: 1.5em 0;\n  color: #7c879c;\n  border-color: #4b5362;\n  border-width: 4px;\n  border-left: 5px solid #4b5362;\n  background: transparent;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote > :first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote > :first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote > :first-child, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote > :first-child {\n  margin-top: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body blockquote > :last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body blockquote > :last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body blockquote > :last-child, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body blockquote > :last-child {\n  margin-bottom: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n  color: rgb(240, 240, 240);\n  border-bottom: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5 .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5:hover .anchor, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6:hover .anchor {\n  text-decoration: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h3:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h4:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h5:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h3:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h4:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h5:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h3:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h4:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h5:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h3:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h4:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h5:hover .anchor .octicon-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h1, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h1 {\n  padding-bottom: 0.3em;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h2, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h2 {\n  padding-bottom: 0.3em;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body h6, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body h6 {\n  color: #6a737d;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol {\n  padding-left: 2em;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body ol ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body ol ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul ul, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body ol ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul ul, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ul ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol ol, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body li, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body li, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body li, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body li {\n  word-wrap: break-all;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body li > p, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body li > p, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body li > p, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body li > p {\n  margin-top: 16px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body li + li, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body li + li, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body li + li, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body li + li {\n  margin-top: 0.25em;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dl, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dl {\n  padding: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dl dt, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dl dt, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dl dt, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-style: italic;\n  font-weight: 600;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body dl dd, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body dl dd, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body dl dd, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table th {\n  font-weight: 700;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body table td, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table th, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body table td {\n  padding: 6px 13px;\n  /* border: 1px solid #dfe2e5; */\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body img, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body img {\n  max-width: 100%;\n  box-sizing: content-box;\n  display: inline-block;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body img[align=right], .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body img[align=right], .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body img[align=right], .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body img[align=right] {\n  padding-left: 20px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body img[align=left], .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body img[align=left], .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body img[align=left], .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body img[align=left] {\n  padding-right: 20px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body code, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body code {\n  padding: 0.2em 0.4em;\n  margin: 0;\n  background-color: #3a3f4b;\n  border-radius: 3px;\n  color: white;\n  margin: 0 1px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  word-wrap: normal;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre > code, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre > code, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre > code, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre > code {\n  padding: 0;\n  margin: 0;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .highlight, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .highlight, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .highlight, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .highlight {\n  margin-bottom: 16px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .highlight pre, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre {\n  padding: 16px;\n  overflow: auto;\n  line-height: 1.45;\n  /* background-color: #f6f8fa; */\n  border-radius: 3px;\n  background-color: #31363f;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body pre code, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n  color: rgb(171, 178, 191);\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .full-commit .btn-outline:not(:disabled):hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .full-commit .btn-outline:not(:disabled):hover, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .full-commit .btn-outline:not(:disabled):hover, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body kbd, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: solid 1px #d1d5da;\n  border-bottom-color: #c6cbd1;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #c6cbd1;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body :checked + .radio-label, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body :checked + .radio-label, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body :checked + .radio-label, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body :checked + .radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .task-list-item {\n  list-style-type: none;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .task-list-item + .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .task-list-item + .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .task-list-item + .task-list-item, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .task-list-item + .task-list-item {\n  margin-top: 3px;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body .task-list-item input, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body .task-list-item input, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body .task-list-item input, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body .task-list-item input {\n  margin: 0 0.2em 0.25em -1.6em;\n  vertical-align: middle;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body hr, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body hr {\n  border-bottom-color: #eee;\n}\n\n/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-comment,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-quote, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-comment,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-quote, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-comment,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-quote, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-comment,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-doctag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-keyword,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-formula, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-doctag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-keyword,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-formula, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-doctag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-keyword,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-formula, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-doctag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-keyword,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-formula {\n  color: #c678dd;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-section,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-name,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-selector-tag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-deletion,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-subst, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-section,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-name,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-selector-tag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-deletion,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-subst, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-section,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-name,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-selector-tag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-deletion,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-subst, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-section,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-name,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-selector-tag,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-deletion,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-subst {\n  color: #e06c75;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-literal, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-literal, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-literal, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-literal {\n  color: #56b6c2;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-string,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-regexp,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-addition,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-attribute,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-meta-string, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-string,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-regexp,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-addition,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-attribute,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-meta-string, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-string,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-regexp,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-addition,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-attribute,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-meta-string, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-string,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-regexp,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-addition,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-attribute,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-meta-string {\n  color: #98c379;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-built_in,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-class .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-built_in,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-class .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-built_in,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-class .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-built_in,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-class .hljs-title {\n  color: #e6c07b;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-template-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-type,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-selector-class,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-selector-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-selector-pseudo,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-number, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-template-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-type,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-selector-class,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-selector-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-selector-pseudo,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-number, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-template-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-type,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-selector-class,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-selector-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-selector-pseudo,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-number, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-template-variable,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-type,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-selector-class,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-selector-attr,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-selector-pseudo,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-number {\n  color: #d19a66;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-symbol,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-bullet,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-link,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-meta,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-selector-id,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-symbol,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-bullet,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-link,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-meta,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-selector-id,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-symbol,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-bullet,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-link,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-meta,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-selector-id,\n.vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-title, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-symbol,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-bullet,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-link,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-meta,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-selector-id,\n.vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-title {\n  color: #61aeee;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-emphasis, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-emphasis, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-emphasis, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-emphasis {\n  font-style: italic;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-strong, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-strong, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-strong {\n  font-weight: bold;\n}\n.vscode-dark[data-vscode-theme-name="One Dark Pro Mix"] .hljs-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"] .hljs-link, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"] .hljs-link, .vscode-dark[data-vscode-theme-name="One Dark Pro"] .hljs-link {\n  text-decoration: underline;\n}\n\n',
          }}
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/katex-copytex@latest/dist/katex-copytex.min.css'
          rel='stylesheet'
          type='text/css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/Microsoft/vscode/extensions/markdown-language-features/media/markdown.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/Microsoft/vscode/extensions/markdown-language-features/media/highlight.css'
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            body {\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif;\n                font-size: 14px;\n                line-height: 1.6;\n            }\n        ",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.task-list-item {\n    list-style-type: none;\n}\n\n.task-list-item-checkbox {\n    margin-left: -20px;\n    vertical-align: middle;\n    pointer-events: none;\n}\n',
          }}
        />

        <h1 id='guida-utente-malt'>Guida Utente MALT</h1>
        <h2 id='sommario'>Sommario</h2>
        <ul>
          <li>
            <a href='#guida-utente-malt'>Guida Utente MALT</a>
            <ul>
              <li>
                <a href='#sommario'>Sommario</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#introduzione'>Introduzione</a>
          </li>
          <li>
            <a href='#installazione'>Installazione</a>
            <ul>
              <li>
                <a href='#esecuzione-da-codice-sorgente'>
                  Esecuzione da codice sorgente
                </a>
              </li>
              <li>
                <a href='#installazione-tramite-docker'>
                  Installazione tramite Docker
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#linguaggio-malt'>Linguaggio MALT</a>
            <ul>
              <li>
                <a href='#vincoli-e-limitazioni'>Vincoli e limitazioni</a>
              </li>
              <li>
                <a href='#variabili'>Variabili</a>
              </li>
              <li>
                <a href='#commenti'>Commenti</a>
              </li>
              <li>
                <a href='#tipi'>Tipi</a>
                <ul>
                  <li>
                    <a href='#variabili-primitive-testuali'>
                      Variabili Primitive Testuali
                    </a>
                  </li>
                  <li>
                    <a href='#variabili-lista'>Variabili Lista</a>
                  </li>
                  <li>
                    <a href='#variabili-multimediali'>Variabili Multimediali</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#variabili-primitive-testuali-1'>
                  Variabili primitive testuali
                </a>
                <ul>
                  <li>
                    <a href='#testo-semplice-text'>
                      Testo semplice (<em>text</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#titolo-e-varianti'>Titolo e varianti</a>
                    <ul>
                      <li>
                        <a href='#identificativo-del-titolo'>
                          Identificativo del titolo
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#blocco-citazione-blockquote'>
                      Blocco citazione (<em>blockquote</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#blocco-di-codice-codeblock'>
                      Blocco di codice (<em>codeblock</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#concatenazione-di-variabili-primitive-testuali'>
                      Concatenazione di variabili primitive testuali
                    </a>
                  </li>
                  <li>
                    <a href='#formattazione-di-variabili-primitive-testuali'>
                      Formattazione di variabili primitive testuali
                    </a>
                    <ul>
                      <li>
                        <a href='#grassetto-e-corsivo'>Grassetto e corsivo</a>
                      </li>
                      <li>
                        <a href='#testo-cancellato-e-evidenziato'>
                          Testo cancellato e evidenziato
                        </a>
                      </li>
                      <li>
                        <a href='#pedici-e-apici'>Pedici e apici</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#variabili-lista-1'>Variabili lista</a>
                <ul>
                  <li>
                    <a href='#lista-ordinata-olist'>
                      Lista ordinata (<em>olist</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#lista-non-ordinata-ulist'>
                      Lista non ordinata (<em>ulist</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#lista-con-caselle-di-spunta-tlist'>
                      Lista con caselle di spunta (<em>tlist</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#lista-list'>
                      Lista (<em>list</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#manipolazione-di-una-lista'>
                      Manipolazione di una lista
                    </a>
                    <ul>
                      <li>
                        <a href='#aggiungere-un-elemento-in-coda-push'>
                          Aggiungere un elemento in coda (<em>push</em>)
                        </a>
                      </li>
                      <li>
                        <a href='#rimuovere-un-elemento-remove'>
                          Rimuovere un elemento (<em>remove</em>)
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#variabili-multimediali-1'>Variabili multimediali</a>
                <ul>
                  <li>
                    <a href='#tabella-table'>
                      Tabella (<em>table</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#link-link'>
                      Link (<em>link</em>)
                    </a>
                  </li>
                  <li>
                    <a href='#immagine-img'>
                      Immagine (<em>img</em>)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#format'>Format</a>
                <ul>
                  <li>
                    <a href='#specificatori-di-stringa'>
                      Specificatori di stringa
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#conversione-tra-tipi-type-casting'>
                  Conversione tra Tipi (Type Casting)
                </a>
              </li>
              <li>
                <a href='#cicli'>Cicli</a>
                <ul>
                  <li>
                    <a href='#ciclo-for'>Ciclo for</a>
                  </li>
                  <li>
                    <a href='#ciclo-for-each'>Ciclo for-each</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#scope-delle-variabili'>Scope delle variabili</a>
              </li>
              <li>
                <a href='#funzioni-fun'>
                  Funzioni (<em>fun</em>)
                </a>
                <ul>
                  <li>
                    <a href='#scope-delle-variabili-in-una-funzione'>
                      Scope delle variabili in una funzione
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#classi-class'>
                  Classi (<em>class</em>)
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h1 id='introduzione'>Introduzione</h1>
        <p>
          MALT è un linguaggio che consente di ottenere un file Markdown a
          partire da un nuovo linguaggio procedurale.
        </p>
        <p>
          Markdown è un linguaggio di markup e non consente l’utilizzo di liste,
          cicli, classi, funzioni e tutte quelle funzionalità che sono presenti
          nei linguaggi di programmazione. MALT permette di unire le
          funzionalità tipiche dei linguaggi di programmazione con la potente
          formattazione e strutturazione del testo tipica invece dei linguaggi
          di markup.
        </p>
        <p>
          Per poter eseguire il codice MALT è stata predisposta un’interfaccia
          web in cui è possibile scrivere direttamente oppure importare un file
          che contiene il codice che si vuole eseguire.
        </p>
        <h1 id='installazione'>Installazione</h1>
        <p>
          Per installare ed eseguire l’ambiente che permette di eseguire il
          codice MALT sono disponibili diverse alternative: l'esecuzione in
          modalità sviluppatore direttamente dai script contenuti nel codice
          sorgente oppure l'esecuzione dell'ambiente pronto alla produzione
          tramite container Docker di immagini già costruite e pronte da
          utilizzare.
        </p>
        <h2 id='esecuzione-da-codice-sorgente'>
          Esecuzione da codice sorgente
        </h2>
        <p>
          Il metodo piu semplice per utilizzare l'ambiente è quello di eseguire
          gli script utilizzati per provare il programma durante la fase di
          sviluppo. Questa modalità però non permette di simulare un ambiente
          reale con tutte le ottimizzazioni che i framework usano dopo aver
          eseguito il "build". Il programma si divide in due parti: analizzatore
          (back-end) e interfaccia (front-end).
        </p>
        <blockquote>
          <p>
            Per il front-end è stato utilizzato Next.js che richiede
            l'installazione di Node.js e di npm sul sistema. Per scaricare
            Node.js basta andare a{' '}
            <a href='https://nodejs.org/en/download'>questo indirizzo</a>.
            L'installazione di Node.js solitamente già include npm.
          </p>
        </blockquote>
        <p>
          Per eseguire il back-end basta entrare nella cartella "malt_backend" e
          lanciare il comando
        </p>
        <pre>
          <code className='language-shell'>./mvnw spring-boot:run{'\n'}</code>
        </pre>
        <p>
          Verrà lanciato un server realizzato con spring-boot disponibile alla
          porta 8000.
        </p>
        <p>
          Per lanciare l'interfaccia invece basta entrare nella cartella
          "malt_frontend" ed eseguire il comando
        </p>
        <pre>
          <code className='language-shell'>npm run dev{'\n'}</code>
        </pre>
        <p>
          Una volta avviato il front-end è possibile utilizzare l'interfaccia
          all'indirizzo{' '}
          <a href='http://localhost:3000'>http://localhost:3000</a>
        </p>
        <h2 id='installazione-tramite-docker'>Installazione tramite Docker</h2>
        <p>
          Le immagini Docker sono un modo pratico e veloce per creare dei
          container che contengono già tutto il codice e le dipendenze
          necessarie per eseguire l'ambiente MALT senza installare nulla oltre
          al motore Docker.
        </p>
        <blockquote>
          <p>
            Per completare l'installazione tramite Docker è necessario avere
            Docker Engine installato sul proprio computer. Se non si è esperti
            con i comandi Docker all'interno del terminale si consiglia
            caldamente di installare l'interfaccia Docker Desktop che integra il
            sopracitato Docker Engine. I passaggi successivi della guida faranno
            riferimento all'interfaccia. La guida di installazione di Docker
            Desktop può essere trovata a questo{' '}
            <a href='https://docs.docker.com/desktop/'>link</a>.
          </p>
        </blockquote>
        <blockquote>
          <p>
            Prima di eseguire i comandi per scaricare le immagini, assicurarsi
            di avere in esecuzione in background Docker Engine. Se avete
            installato Docker Desktop basterà avviarlo e in automatico verrà
            eseguito anche Docker Engine.
          </p>
        </blockquote>
        <p>
          Per scaricare l'immagine più recente del backend che esegue l'analisi
          lessicale, sintattica e semantica eseguire il comando
        </p>
        <pre>
          <code className='language-shell'>
            docker pull ghcr.io/kevin-bernardi/malt_backend:main{'\n'}
          </code>
        </pre>
        <p>
          Invece, per scaricare l'immagine più recente del frontend, eseguire il
          comando
        </p>
        <pre>
          <code className='language-shell'>
            docker pull ghcr.io/kevin-bernardi/malt_frontend:main{'\n'}
          </code>
        </pre>
        <p>
          Se non ci sono stati errori durante il download delle immagini
          dovrebbero essere comparse due immagini nella sezione "Images" di
          Docker Desktop.
        </p>
        <p>
          Per creare ed eseguire i container, sempre dalla sezione "Images" fare
          click sul tasto "Play" in fondo alla riga dell'immagine malt_backend.
          Aprire la sezione "Optional settings", inserire un nome a piacere nel
          campo "Container name" e inserire obbligatoriamente 8080 nel campo
          "Host port". Il resto va lasciato vuoto. Fare la stessa cosa per
          l'immagine malt_frontend specificando questa volta una "Host port" a
          piacere.
        </p>
        <p>
          Nella sezione "Containers" ora si potranno vedere i due container in
          esecuzione.
        </p>
        <p>
          L'installazione dell'ambiente è completata ed ora sarà possibile
          utilizzare l'interfaccia web all'url{' '}
          <a href='localhost:PORT'>localhost:PORT</a> dove PORT è la "Host port"
          specificata nella creazione del container basato sull'immagine
          malt_frontend.
        </p>
        <h1 id='linguaggio-malt'>Linguaggio MALT</h1>
        <p>
          Nei seguenti capitoli verranno esposte le funzionalità del linguaggio
          in ordine di difficoltà partendo dalle variabili e arrivando alla fine
          ad utilizzare tutto quello che serve per affrontare i casi d'uso più
          comuni.
        </p>
        <h2 id='vincoli-e-limitazioni'>Vincoli e limitazioni</h2>
        <p>In MALT sono presenti alcuni vincoli e limitazioni:</p>
        <ul>
          <li>
            le funzioni, le classi e i metodi delle classi vengono eseguiti nel
            momento in cui vengono definiti e non nel momento delle loro
            chiamate;
          </li>
          <li>
            i cicli vengono eseguiti soltanto per un'iterazione e non per tutte
            le iterazioni che soddisfano la condizione del ciclo stesso;
          </li>
          <li>non è ancora disponibile la generazione del testo Markdown.</li>
        </ul>
        <h2 id='variabili'>Variabili</h2>
        <p>La dichiarazione di variabili avviene in questo modo:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>tipo</span>{' '}
            <span className='hljs-variable'>nome_variabile</span>{' '}
            <span className='hljs-operator'>=</span> valore;{'\n'}
          </code>
        </pre>
        <p>Ecco un esempio:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"sono un testo"</span>;{'\n'}
          </code>
        </pre>
        <p>Analizziamo parola per parola questa istruzione:</p>
        <ul>
          <li>
            <em>
              <code>text</code>
            </em>
            : tipo della variabile.{' '}
            <em>
              <code>text</code>
            </em>{' '}
            rappresenta testo semplice (vedi sotto quali sono i tipi
            disponibili)
          </li>
          <li>
            <em>
              <code>t</code>
            </em>
            : nome della variabile
          </li>
          <li>
            <em>
              <code>"sono un testo"</code>
            </em>
            : valore assegnato alla variabile
          </li>
        </ul>
        <blockquote>
          <p>
            Il nome della variabile deve iniziare con una lettera e può
            contenere solo lettere, numeri e underscore (_).
          </p>
        </blockquote>
        <p>
          Il simbolo{' '}
          <em>
            <code>'='</code>
          </em>{' '}
          permette di assegnare il valore presente dopo il simbolo di
          uguaglianza alla variabile presente prima del simbolo.
        </p>
        <p>
          Ogni istruzione deve terminare con il simbolo{' '}
          <em>
            <code>';'</code>
          </em>
        </p>
        <p>
          Riassumendo, l'istruzione permette di assegnare il valore{' '}
          <em>
            <code>"sono un testo"</code>
          </em>{' '}
          alla variabile{' '}
          <em>
            <code>t</code>
          </em>{' '}
          di tipo text.
        </p>
        <p>Il valore assegnabile ad una variabile dipende dal suo tipo.</p>
        <p>
          Una sintassi alternativa consiste nell'assegnare il valore della
          variabile in un momento successivo rispetto alla sua dichiarazione al
          posto di fare tutto sulla stessa riga:
        </p>
        <pre>
          <code className='language-java'>
            text t;{'\n'}
            {'\n'}
            <span className='hljs-comment'>// ALTRO CODICE...</span>
            {'\n'}
            {'\n'}t = <span className='hljs-string'>"testo"</span>;{'\n'}
          </code>
        </pre>
        <h2 id='commenti'>Commenti</h2>
        <p>
          MALT permette di inserire sia commenti su un'unica riga sia commenti
          multilinea.
        </p>
        <p>Nel primo caso la notazione è:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-comment'>// commento...</span>
            {'\n'}
          </code>
        </pre>
        <p>Invece nel caso di commenti multilinea serve scrivere:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-comment'>
              /* commenti...{'\n'}commenti... */
            </span>
            {'\n'}
          </code>
        </pre>
        <h2 id='tipi'>Tipi</h2>
        <p>
          MALT è un linguaggio un po' diverso dagli altri linguaggi classici.
          Qui non esistono variabili che contengono valori numerici (int, float,
          double...) perché MALT è incentrato completamente sulla manipolazione
          testuale.
        </p>
        <p>
          Invece di avere molti tipi che gestiscono valori numerici, qui
          esistono molti tipi che gestiscono stringhe di testo. Come visto
          sopra, per assegnare il tipo di una variabile basta scriverlo prima
          del nome nella dichiarazione.
        </p>
        <p>
          I tipi sono organizzati in 3 diverse categorie che verranno esposte di
          seguito.
        </p>
        <h3 id='variabili-primitive-testuali'>Variabili Primitive Testuali</h3>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>text</code>
              </td>
              <td>Testo semplice</td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>Titolo</td>
            </tr>
            <tr>
              <td>
                <code>s1title</code>
              </td>
              <td>Sotto titolo 1</td>
            </tr>
            <tr>
              <td>
                <code>s2title</code>
              </td>
              <td>Sotto titolo 2</td>
            </tr>
            <tr>
              <td>
                <code>s3title</code>
              </td>
              <td>Sotto titolo 3</td>
            </tr>
            <tr>
              <td>
                <code>s4title</code>
              </td>
              <td>Sotto titolo 4</td>
            </tr>
            <tr>
              <td>
                <code>s5title</code>
              </td>
              <td>Sotto titolo 5</td>
            </tr>
            <tr>
              <td>
                <code>blockquote</code>
              </td>
              <td>Blocco citazione</td>
            </tr>
            <tr>
              <td>
                <code>codeblock</code>
              </td>
              <td>Blocco di codice</td>
            </tr>
          </tbody>
        </table>
        <h3 id='variabili-lista'>Variabili Lista</h3>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>olist</code>
              </td>
              <td>Lista ordinata</td>
            </tr>
            <tr>
              <td>
                <code>ulist</code>
              </td>
              <td>Lista non ordinata</td>
            </tr>
            <tr>
              <td>
                <code>tlist</code>
              </td>
              <td>Lista con casella di spunta</td>
            </tr>
            <tr>
              <td>
                <code>list</code>
              </td>
              <td>Lista / Array</td>
            </tr>
          </tbody>
        </table>
        <h3 id='variabili-multimediali'>Variabili Multimediali</h3>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>table</code>
              </td>
              <td>Tabella</td>
            </tr>
            <tr>
              <td>
                <code>link</code>
              </td>
              <td>Link</td>
            </tr>
            <tr>
              <td>
                <code>image</code>
              </td>
              <td>Immagine</td>
            </tr>
          </tbody>
        </table>
        <p>
          Nei successivi paragrafi verrà spiegato l'utilizzo di tutti i tipi
          appena elencati.
        </p>
        <h2 id='variabili-primitive-testuali-1'>
          Variabili primitive testuali
        </h2>
        <p>
          Vengono definite variabili primitive testuali tutte quelle variabili a
          cui sono assegnabili direttamente una stringa di testo. Il tipo{' '}
          <code>text</code> visto prima ne è un esempio.
        </p>
        <p>
          Le stringhe di testo possono contenere lettere, numeri, simboli,
          spazi, ...
        </p>
        <p>Le stringhe devono essere racchiuse da doppie virgolette (").</p>
        <p>
          L'aggettivo "primitive" si riferisce al fatto che questi tipi possono
          contenere una ed una sola stringa di testo e non ad esempio una lista
          di stringhe o una tabella che contiene stringhe.
        </p>
        <p>I tipi delle variabili primitive testuali sono i seguenti:</p>
        <ul>
          <li>
            <code>text</code>
          </li>
          <li>
            <code>title</code>
          </li>
          <li>
            <code>s1title</code>
          </li>
          <li>
            <code>s2title</code>
          </li>
          <li>
            <code>s3title</code>
          </li>
          <li>
            <code>s4title</code>
          </li>
          <li>
            <code>s5title</code>
          </li>
          <li>
            <code>blockquote</code>
          </li>
          <li>
            <code>codeblock</code>
          </li>
        </ul>
        <p>L'assegnamento per queste variabili funziona in questo modo:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>tipo_pr_test</span>{' '}
            <span className='hljs-variable'>nome_var</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"valore testuale"</span>;{'\n'}
          </code>
        </pre>
        <p>
          dove{' '}
          <em>
            <code>tipo_pr_test</code>
          </em>{' '}
          è uno dei tipi elencati sopra.
        </p>
        <blockquote>
          <p>
            Per codeblock esiste un parametro opzionale in più che può essere
            inserito tra il tipo e il nome della variabile nella dichiarazione.
            Consulta la sezione dei codeblock per saperne di più.
          </p>
        </blockquote>
        <p>
          Come già detto, l'assegnazione e la dichiarazione posso essere
          separate.
        </p>
        <p>Verranno ora presentati in dettaglio questi tipi.</p>
        <h3 id='testo-semplice-text'>
          Testo semplice (<em>text</em>)
        </h3>
        <p>
          <em>
            <code>text</code>
          </em>{' '}
          rappresenta del testo semplice, tutto quello che non è un titolo, una
          tabella, un'immagine, un codeblock...
        </p>
        <h3 id='titolo-e-varianti'>Titolo e varianti</h3>
        <p>
          I tipi{' '}
          <em>
            <code>title</code>
          </em>
          ,{' '}
          <em>
            <code>s1title</code>
          </em>
          ,{' '}
          <em>
            <code>s2title</code>
          </em>
          ,{' '}
          <em>
            <code>s3title</code>
          </em>
          ,{' '}
          <em>
            <code>s4title</code>
          </em>
          ,{' '}
          <em>
            <code>s5title</code>
          </em>{' '}
          fanno parte della categoria dei titoli.
        </p>
        <p>Tra MALT e Markdown c'è la seguente corrispondenza:</p>
        <table>
          <thead>
            <tr>
              <th>MALT</th>
              <th>Markdown</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title t = "Titolo";</td>
              <td># titolo</td>
            </tr>
            <tr>
              <td>s1title t = "Titolo";</td>
              <td>## titolo</td>
            </tr>
            <tr>
              <td>s2title t = "Titolo";</td>
              <td>### titolo</td>
            </tr>
            <tr>
              <td>s3title t = "Titolo";</td>
              <td>#### titolo</td>
            </tr>
            <tr>
              <td>s4title t = "Titolo";</td>
              <td>##### titolo</td>
            </tr>
            <tr>
              <td>s5title t = "Titolo";</td>
              <td>###### titolo</td>
            </tr>
          </tbody>
        </table>
        <h4 id='identificativo-del-titolo'>Identificativo del titolo</h4>
        <p>
          È possibile aggiungere un identificativo al titolo inserendo {'{'}
          <code>
            {'{'}#id{'}'}
          </code>
          {'}'} tra il nome della variabile e il simbolo "=" come in questo
          esempio:
        </p>
        <pre>
          <code className='language-java'>
            s1title titolo {'{'}#titolo{'}'} ={' '}
            <span className='hljs-string'>"Titolo con identificativo"</span>;
            {'\n'}
          </code>
        </pre>
        <h3 id='blocco-citazione-blockquote'>
          Blocco citazione (<em>blockquote</em>)
        </h3>
        <p>
          Un{' '}
          <em>
            <code>blockquote</code>
          </em>{' '}
          è un blocco di testo dove viene inserita una citazione o del testo
          importante che si deve notare.
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>blockquote</span>{' '}
            <span className='hljs-variable'>bc</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Testo importante!"</span>;{'\n'}
          </code>
        </pre>
        <p>corrisponde in Markdown a:</p>
        <p>&lt; Testo importante!</p>
        <p>che verrà mostrato come:</p>
        <blockquote>
          <p>Testo importante!</p>
        </blockquote>
        <h3 id='blocco-di-codice-codeblock'>
          Blocco di codice (<em>codeblock</em>)
        </h3>
        <p>
          <em>
            <code>codeblock</code>
          </em>{' '}
          rappresenta un blocco di codice con supporto a syntax highlighting. La
          dichiarazione di un{' '}
          <em>
            <code>codeblock</code>
          </em>{' '}
          si differenzia dalle altre variabili primitive testuali per la
          presenza di un parametro opzionale nella dichiarazione. Questo
          parametro opzionale serve per specificare il linguaggio che viene
          scritto all'interno del blocco di codice per effettuare syntax
          highlighting in modo corretto.
        </p>
        <p>
          Ecco un esempio di un blocco di codice con codice Java al suo interno:
        </p>
        <pre>
          <code className='language-java'>
            codeblock <span className='hljs-type'>java</span>{' '}
            <span className='hljs-variable'>cb</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "{'\n'}
              {'  '}public class Malt {'{'}
              {'\n'}
              {'    '}public static void main(String[] args) {'{'}
              {'\n'}
              {'        '}System.out.println("
            </span>
            Testo
            <span className='hljs-string'>
              ");{'\n'}
              {'    '}
              {'}'}
              {'\n'}
              {'  '}
              {'}'}
              {'\n'}"
            </span>
            ;{'\n'}
          </code>
        </pre>
        <p>
          Visto che il parametro per la specifica del linguaggio è opzionale
          avremmo anche potuto scrivere
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>codeblock</span>{' '}
            <span className='hljs-variable'>cb</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "{'\n'}
              {'  '}....{'\n'}"
            </span>
            ;{'\n'}
          </code>
        </pre>
        <p>senza ovviamente sfruttare il syntax highlighting.</p>
        <h3 id='concatenazione-di-variabili-primitive-testuali'>
          Concatenazione di variabili primitive testuali
        </h3>
        <p>
          In MALT è possibile eseguire la concatenazione di più variabili
          primitive testuali (sia tramite il nome di queste variabili sia
          tramite il loro valore) durante un assegnamento seguendo la notazione
          del seguente esempio:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t1</span>{' '}
            <span className='hljs-operator'>=</span> (
            <span className='hljs-string'>"zero"</span> +{' '}
            <span className='hljs-string'>"zero"</span>);{' '}
            <span className='hljs-comment'>// t1 vale "zero zero"</span>
            {'\n'}
            {'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>s</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"uno"</span>;{'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t2</span>{' '}
            <span className='hljs-operator'>=</span> (s +{' '}
            <span className='hljs-string'>"due"</span>);{' '}
            <span className='hljs-comment'>// t2 vale "uno due"</span>
            {'\n'}
            {'\n'}
            <span className='hljs-type'>blockquote</span>{' '}
            <span className='hljs-variable'>p</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"tre"</span>;{'\n'}
            <span className='hljs-type'>s3title</span>{' '}
            <span className='hljs-variable'>t3</span>{' '}
            <span className='hljs-operator'>=</span> (s + p);{' '}
            <span className='hljs-comment'>// t3 vale "uno tre"</span>
            {'\n'}
            <span className='hljs-comment'>
              // tutti i tipi primitivi testuali possono essere utilizzati in
              una concatenazione
            </span>
            {'\n'}
            <span className='hljs-comment'>
              // MALT converte autometicamente i tipi
            </span>
            {'\n'}
            <span className='hljs-comment'>
              // Ulteriori dettagli sulla conversione dei tipi è spiegata
              nell'apposito paragrafo più avanti
            </span>
            {'\n'}
          </code>
        </pre>
        <h3 id='formattazione-di-variabili-primitive-testuali'>
          Formattazione di variabili primitive testuali
        </h3>
        <p>
          Il valore delle variabili primitive testuali può essere formattato
          seguendo le stesse regole di Markdown.
        </p>
        <h4 id='grassetto-e-corsivo'>Grassetto e corsivo</h4>
        <ul>
          <li>Grassetto: ** o __ attorno al testo;</li>
          <li>Corsivo: * o _ attorno al testo;</li>
          <li>Grassetto e corsivo: *** o ___ attorno al testo;</li>
        </ul>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "*Stringa* **con** ***formattazione***"
            </span>
            ;{'\n'}
          </code>
        </pre>
        <p>corrisponde in Markdown a:</p>
        <p>
          <em>Stringa</em> <strong>con</strong>{' '}
          <strong>
            <em>formattazione</em>
          </strong>
        </p>
        <h4 id='testo-cancellato-e-evidenziato'>
          Testo cancellato e evidenziato
        </h4>
        <ul>
          <li>Testo cancellato: ~~ attorno al testo;</li>
          <li>Testo evidenziato: == attorno al testo;</li>
        </ul>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "~~Testo cancellato~~ e ==testo evidenziato=="
            </span>
            ;{'\n'}
          </code>
        </pre>
        <p>corrisponde in Markdown a:</p>
        <p>
          <s>Testo cancellato</s> e <mark>testo evidenziato</mark>
        </p>
        <h4 id='pedici-e-apici'>Pedici e apici</h4>
        <ul>
          <li>Pedice: ~ attorno al pedice;</li>
          <li>Apice: ^ attorno all'apice;</li>
        </ul>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t1</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "Formula bruta del glucosio: C ~6~ H ~12~ O ~6~"
            </span>
            ;{'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t2</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "Isotopi dell'idrogeno: prozio ^1^H, deuterio ^2^H, trizio ^3^H"
            </span>
            ;{'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // gli spazi attorno ai simboli ~ e ^ non sono necessari
            </span>
            {'\n'}
          </code>
        </pre>
        <p>corrispondono in Markdown a:</p>
        <p>
          Formula bruta del glucosio: C<sub>6</sub> H<sub>12</sub> O<sub>6</sub>
        </p>
        <p>
          Isotopi dell'idrogeno: prozio <sup>1</sup>H, deuterio <sup>2</sup>H,
          trizio <sup>3</sup>H
        </p>
        <h2 id='variabili-lista-1'>Variabili lista</h2>
        <p>
          Vengono definite variabili lista tutte quelle variabili che hanno una
          lista di testi come valore.
        </p>
        <p>
          Quindi, al contrario delle variabili primitive testuali, le variabili
          lista non contengono direttamente una stringa ma una lista di una o
          più stringhe.
        </p>
        <p>I tipi che definiscono le variabili lista sono le seguenti:</p>
        <ul>
          <li>
            <em>
              <code>olist</code>
            </em>
            : lista ordinata
          </li>
          <li>
            <em>
              <code>ulist</code>
            </em>
            : lista non ordinata
          </li>
          <li>
            <em>
              <code>tlist</code>
            </em>
            : lista con casella di spunta
          </li>
          <li>
            <em>
              <code>list</code>
            </em>
            : lista pura
          </li>
        </ul>
        <p>
          Tra i quattro tipi non ci sono differenze per quanto riguarda la loro
          dichiarazione o assegnamento.
        </p>
        <p>
          All'interno della lista possono esserci soltanto stringhe o variabili
          primitive testuali, che a loro volta verranno risolte in stringhe.
        </p>
        <p>Ecco un esempio:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>s3title</span>{' '}
            <span className='hljs-variable'>numero_due</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"due"</span>;{'\n'}
            <span className='hljs-type'>olist</span>{' '}
            <span className='hljs-variable'>lista_ordinata</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"uno"</span>, numero_due,{' '}
            <span className='hljs-string'>"tre"</span>];{'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // corrisponde a ["uno", "due", "tre"]
            </span>
            {'\n'}
          </code>
        </pre>
        <p>
          Andiamo a vedere più nel dettaglio i vari tipi per variabili lista.
        </p>
        <h3 id='lista-ordinata-olist'>
          Lista ordinata (<em>olist</em>)
        </h3>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>olist</span>{' '}
            <span className='hljs-variable'>animali</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"cane"</span>,{' '}
            <span className='hljs-string'>"gatto"</span>,{' '}
            <span className='hljs-string'>"coniglio"</span>,{' '}
            <span className='hljs-string'>"gallina"</span>];{'\n'}
          </code>
        </pre>
        <p>in Markdown viene trasformato in:</p>
        <ol>
          <li>cane</li>
          <li>gatto</li>
          <li>coniglio</li>
          <li>gallina</li>
        </ol>
        <h3 id='lista-non-ordinata-ulist'>
          Lista non ordinata (<em>ulist</em>)
        </h3>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>ulist</span>{' '}
            <span className='hljs-variable'>frutta</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"mela"</span>,{' '}
            <span className='hljs-string'>"pera"</span>,{' '}
            <span className='hljs-string'>"pesca"</span>,{' '}
            <span className='hljs-string'>"arancia"</span>];{'\n'}
          </code>
        </pre>
        <p>in Markdown viene trasformato in:</p>
        <ul>
          <li>mela</li>
          <li>pera</li>
          <li>pesca</li>
          <li>arancia</li>
        </ul>
        <h3 id='lista-con-caselle-di-spunta-tlist'>
          Lista con caselle di spunta (<em>tlist</em>)
        </h3>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>tlist</span>{' '}
            <span className='hljs-variable'>cose_da_fare</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"pulire"</span>,{' '}
            <span className='hljs-string'>"_x_lavorare"</span>,{' '}
            <span className='hljs-string'>"mangiare"</span>,{' '}
            <span className='hljs-string'>"dormire"</span>];{'\n'}
          </code>
        </pre>
        <p>in Markdown viene trasformato in:</p>
        <ul className='contains-task-list'>
          <li className='task-list-item enabled'>
            <input className='task-list-item-checkbox' type='checkbox' /> pulire
          </li>
          <li className='task-list-item enabled'>
            <input
              className='task-list-item-checkbox'
              defaultChecked={true}
              type='checkbox'
            />{' '}
            lavorare
          </li>
          <li className='task-list-item enabled'>
            <input className='task-list-item-checkbox' type='checkbox' />{' '}
            mangiare
          </li>
          <li className='task-list-item enabled'>
            <input className='task-list-item-checkbox' type='checkbox' />{' '}
            dormire
          </li>
        </ul>
        <p>
          Automaticamente, i valori della lista sono convertiti in righe senza
          spunta.
        </p>
        <p>
          Aggiungendo il simbolo speciale <code>_x_</code> all'inizio della
          stringa viene visualizzata la spunta.
        </p>
        <h3 id='lista-list'>
          Lista (<em>list</em>)
        </h3>
        <p>
          Rispetto a{' '}
          <em>
            <code>olist</code>
          </em>
          ,{' '}
          <em>
            <code>ulist</code>
          </em>{' '}
          e{' '}
          <em>
            <code>tlist</code>
          </em>
          , la{' '}
          <em>
            <code>list</code>
          </em>{' '}
          non viene trasformata in una lista in Markdown ma è una lista "pura",
          una lista che viene solamente utilizzata per raccogliere un insieme di
          stringhe da usare all'interno del linguaggio in funzioni, cicli ecc...
        </p>
        <h3 id='manipolazione-di-una-lista'>Manipolazione di una lista</h3>
        <p>
          MALT permette di aggiungere un elemento in coda e di rimuovere un
          elemento dato il suo indice.
        </p>
        <h4 id='aggiungere-un-elemento-in-coda-push'>
          Aggiungere un elemento in coda (<em>push</em>)
        </h4>
        <p>
          Utilizzando la funzione{' '}
          <em>
            <code>push(lst, el)</code>
          </em>{' '}
          è possibile aggiungere la variabile primitiva testuale{' '}
          <em>
            <code>el</code>
          </em>{' '}
          alla lista{' '}
          <em>
            <code>lst</code>
          </em>
          .
        </p>
        <pre>
          <code className='language-java'>
            {'\n'}
            <span className='hljs-type'>olist</span>{' '}
            <span className='hljs-variable'>animali</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"cane"</span>,{' '}
            <span className='hljs-string'>"gatto"</span>];{'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>nuovo_elemento</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"gallina"</span>;{'\n'}
            {'\n'}push(animali, nuovo_elemento);{'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // animali ora contiene ["cane", "gatto", "gallina"]
            </span>
            {'\n'}
            {'\n'}
          </code>
        </pre>
        <h4 id='rimuovere-un-elemento-remove'>
          Rimuovere un elemento (<em>remove</em>)
        </h4>
        <p>
          Utilizzando la funzione{' '}
          <em>
            <code>remove(lst, idx, res)</code>
          </em>{' '}
          è possibile rimuovere dalla lista{' '}
          <em>
            <code>lst</code>
          </em>{' '}
          il valore di indice{' '}
          <em>
            <code>idx</code>
          </em>{' '}
          e salvare l'elemento rimosso nella variabile{' '}
          <em>
            <code>res</code>
          </em>
          .
        </p>
        <p>
          Se si vuole rimuovere l'ultimo elemento senza specificare l'indice
          basta inserire il simbolo "_" nel campo{' '}
          <em>
            <code>idx</code>
          </em>
          .
        </p>
        <p>
          Se non si vuole salvare l'elemento estratto basta usare il simbolo "_"
          nel campo{' '}
          <em>
            <code>res</code>
          </em>
          .
        </p>
        <pre>
          <code className='language-java'>
            {'\n'}
            <span className='hljs-type'>ulist</span>{' '}
            <span className='hljs-variable'>animali</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"cane"</span>,{' '}
            <span className='hljs-string'>"gatto"</span>,{' '}
            <span className='hljs-string'>"gallina"</span>];{'\n'}
            {'\n'}text rimosso;{'\n'}remove(animali,{' '}
            <span className='hljs-number'>1</span>, rimosso);{'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // animali ora contiene ["cane", "gallina"] e rimosso contiene
              "gatto"
            </span>
            {'\n'}
            {'\n'}
          </code>
        </pre>
        <pre>
          <code className='language-java'>
            {'\n'}
            <span className='hljs-type'>ulist</span>{' '}
            <span className='hljs-variable'>animali</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"cane"</span>,{' '}
            <span className='hljs-string'>"gatto"</span>,{' '}
            <span className='hljs-string'>"gallina"</span>];{'\n'}
            {'\n'}text rimosso;{'\n'}remove(animali, _, rimosso);{'  '}
            <span className='hljs-comment'>// rimuovo l'ultimo elemento</span>
            {'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // animali ora contiene ["cane", "gatto"] e rimosso contiene
              "gallina"
            </span>
            {'\n'}
            {'\n'}
          </code>
        </pre>
        <pre>
          <code className='language-java'>
            {'\n'}
            <span className='hljs-type'>ulist</span>{' '}
            <span className='hljs-variable'>animali</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"cane"</span>,{' '}
            <span className='hljs-string'>"gatto"</span>,{' '}
            <span className='hljs-string'>"gallina"</span>];{'\n'}
            {'\n'}remove(animali, _, _);{'  '}
            <span className='hljs-comment'>
              // rimuovo l'ultimo elemento e non lo salvo
            </span>
            {'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // animali ora contiene ["cane", "gatto"]
            </span>
            {'\n'}
            {'\n'}
          </code>
        </pre>
        <h2 id='variabili-multimediali-1'>Variabili multimediali</h2>
        <p>
          Le variabili multimediali sono tre tipi di variabili che permettono di
          aggiungere tre nuovi contenuti al documento Markdown: tabelle, link e
          immagini.
        </p>
        <h3 id='tabella-table'>
          Tabella (<em>table</em>)
        </h3>
        <p>
          Una tabella in MALT viene dichiarata e utilizzata nel modo seguente:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>table</span>{' '}
            <span className='hljs-variable'>tabella</span>{' '}
            <span className='hljs-operator'>=</span> [$l,$c,$r] ([
            <span className='hljs-string'>"uno"</span>,
            <span className='hljs-string'>"due"</span>,
            <span className='hljs-string'>"tre"</span>],[
            <span className='hljs-string'>"quattro"</span>,
            <span className='hljs-string'>"cinque"</span>,
            <span className='hljs-string'>"sei"</span>],[
            <span className='hljs-string'>"sette"</span>,
            <span className='hljs-string'>"otto"</span>,
            <span className='hljs-string'>"nove"</span>]);{'\n'}
          </code>
        </pre>
        <p>che viene traformata in Markdown come:</p>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>uno</th>
              <th style={{ textAlign: 'center' }}>due</th>
              <th style={{ textAlign: 'right' }}>tre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>quattro</td>
              <td style={{ textAlign: 'center' }}>cinque</td>
              <td style={{ textAlign: 'right' }}>sei</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>sette</td>
              <td style={{ textAlign: 'center' }}>otto</td>
              <td style={{ textAlign: 'right' }}>nove</td>
            </tr>
          </tbody>
        </table>
        <p>
          La dichiarazione è simile a quanto visto fino ad ora: prima
          dell'uguale viene dichiarata una variabile{' '}
          <em>
            <code>tabella</code>
          </em>{' '}
          di tipo{' '}
          <em>
            <code>table</code>
          </em>
          .
        </p>
        <p>Il valore assegnato è invece composto da due parti.</p>
        <p>
          La prima parte è una lista che deve contenere un numero di
          specificatori pari al numero di colonne della tabella. Gli
          specificatori descrivono come devono essere allineati i testi
          all'interno delle celle della colonna corrispondente.
        </p>
        <p>Gli specificatori sono 3:</p>
        <table>
          <thead>
            <tr>
              <th>Specificatore</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>$l</code>
              </td>
              <td>Allineamento a sinistra</td>
            </tr>
            <tr>
              <td>
                <code>$c</code>
              </td>
              <td>Allineamento al centro</td>
            </tr>
            <tr>
              <td>
                <code>$r</code>
              </td>
              <td>Allineamento a destra</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          <p>
            Questa prima parte è interamente opzionale. Se non viene
            specificata, viene utilizzato l'allineamento a sinistra per tutte le
            celle della tabella.
          </p>
        </blockquote>
        <p>
          La seconda parte invece descrive il contenuto della tabella. Tra le
          parentesi tonde vengono scritte tante liste quante sono le righe della
          tabella ed ogni lista è lunga tanto quanto il numero di colonne della
          tabella. La prima lista corrisponde all'intestazione della tabella.
        </p>
        <blockquote>
          <p>
            Tutte le liste devono avere la stessa lunghezza (non ci possono
            essere righe con un numero diverso di colonne dalle altre)
          </p>
        </blockquote>
        <h3 id='link-link'>
          Link (<em>link</em>)
        </h3>
        <p>Un link si definisce nel modo seguente:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>link</span>{' '}
            <span className='hljs-variable'>link1</span>{' '}
            <span className='hljs-operator'>=</span>l (
            <span className='hljs-string'>"https://google.it"</span>,{' '}
            <span className='hljs-string'>"Google"</span>);{'\n'}
          </code>
        </pre>
        <p>corrisponde in Markdown a:</p>
        <p>
          <a href='https://www.google.it/'>Google</a>
        </p>
        <p>
          (Questo link potrebbe non funzionare in alcuni formati di
          visualizzazione. Nei casi in cui funziona, corrisponde ad un link che
          porta a Google)
        </p>
        <blockquote>
          <p>
            N.B. Per l'assegnamento di link si utilizza <code>=l</code> invece
            di <code>=</code>
          </p>
        </blockquote>
        <p>
          Il primo parametro è l'url a cui il link deve reindirizzare. Il
          secondo paramentro è il testo visibile del link.
        </p>
        <h3 id='immagine-img'>
          Immagine (<em>img</em>)
        </h3>
        <p>Un'immagine si definisce come mostrato di seguito:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>img</span>{' '}
            <span className='hljs-variable'>foto</span>{' '}
            <span className='hljs-operator'>=</span>i (
            <span className='hljs-string'>"/percorso/immagine.jpg"</span>,
            <span className='hljs-string'>"Disascalia immagine"</span>);{'\n'}
            <span className='hljs-type'>img</span>{' '}
            <span className='hljs-variable'>foto_web</span>{' '}
            <span className='hljs-operator'>=</span>i (
            <span className='hljs-string'>
              "https://sitofoto.com/foto_albero.png"
            </span>
            , <span className='hljs-string'>"Didascalia immagine web"</span>);
            {'\n'}
          </code>
        </pre>
        <blockquote>
          <p>
            N.B. Per l'assegnamento di immagini si utilizza <code>=i</code>{' '}
            invece di <code>=</code>
          </p>
        </blockquote>
        <p>
          Il primo parametro è un percorso locale se si desidera utilizzare
          un'immagine presente sul computer. Mentre se si desidera utilizzare
          un'immagine non locale, si può inserire l'url della foto come nella
          seconda riga dell'esempio.
        </p>
        <p>
          Il secondo parametro permette di specificare una discalia
          dell'immagine.
        </p>
        <h2 id='format'>Format</h2>
        <p>
          In MALT è stato introdotto un nuovo tipo di istruzione che consente di
          inserire testo che può essere formattato diversamente in base ai
          specificatori utilizzati. Un esempio di questa istruzione è:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>str</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>
              "MALT è %i nuovo %b di programmazione."
            </span>
            ;{'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>a</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"un"</span>;{'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>b</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"linguaggio"</span>;{'\n'}
            format(res,str,a,b){'\n'}
          </code>
        </pre>
        <p>che consente di ottenere:</p>
        <p>
          MALT è <em>un</em> nuovo <strong>linguaggio</strong> di
          programmazione.
        </p>
        <p>
          Nella format del precedente esempio,{' '}
          <em>
            <code>res</code>
          </em>{' '}
          corrisponde alla variabile in cui salvare il risultato di format
          mentre{' '}
          <em>
            <code>str</code>
          </em>{' '}
          rappresenta la stringa da formattare (che contiene gli specificatori).
          Invece{' '}
          <em>
            <code>a</code>
          </em>{' '}
          e{' '}
          <em>
            <code>b</code>
          </em>{' '}
          sono le variabili che vanno sostituite ai specificatori presenti in{' '}
          <em>
            <code>str</code>
          </em>{' '}
          seguendo l'ordine in cui sono riportati.
        </p>
        <blockquote>
          <p>
            Il numero di specificatori nella stringa da formattare deve
            corrispondere al numero di variabili riportati nella format (esclusi
            gli argomenti del risultato e della stringa da formattare).
          </p>
        </blockquote>
        <h3 id='specificatori-di-stringa'>Specificatori di stringa</h3>
        <p>Gli specificatori di stringa sono 4:</p>
        <table>
          <thead>
            <tr>
              <th>Specificatore</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>%b</code>
              </td>
              <td>Testo in grassetto</td>
            </tr>
            <tr>
              <td>
                <code>%i</code>
              </td>
              <td>Testo in corsivo</td>
            </tr>
            <tr>
              <td>
                <code>%ib</code>
              </td>
              <td>Testo in grassetto e corsivo</td>
            </tr>
            <tr>
              <td>
                <code>%t</code>
              </td>
              <td>Testo senza formattazione</td>
            </tr>
          </tbody>
        </table>
        <h2 id='conversione-tra-tipi-type-casting'>
          Conversione tra Tipi (Type Casting)
        </h2>
        <p>
          MALT è un linguaggio abbastanza libero nella compatibilità tra tipi
          diversi e la conversione è sempre <strong>implicita</strong>.
        </p>
        <p>
          La conversione tra tipi è consentita solamente tra tipi della stessa
          categoria se la categoria è primitiva testuale o lista.
        </p>
        <p>
          Le variabili di tipo multimediale rappresentano oggetti troppo diversi
          per avere un qualche tipo di conversione che funzioni quindi
          l'assegnamento su queste variabili funziona solo quando il loro tipo è
          identico.
        </p>
        <p>Ecco alcuni esempi di conversioni:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>testo</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"testo"</span>;{'\n'}
            <span className='hljs-type'>list</span>{' '}
            <span className='hljs-variable'>numeri</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"uno"</span>,{' '}
            <span className='hljs-string'>"due"</span>,{' '}
            <span className='hljs-string'>"tre"</span>];{'\n'}
            {'\n'}
            <span className='hljs-type'>s3title</span>{' '}
            <span className='hljs-variable'>titolo</span>{' '}
            <span className='hljs-operator'>=</span> testo;{'     '}
            <span className='hljs-comment'>
              // CONSENTITO: sia titolo (tipo: s3title) che testo (tipo: text)
              sono primitivi testuali
            </span>
            {'\n'}
            <span className='hljs-type'>codeblock</span>{' '}
            <span className='hljs-variable'>cb</span>{' '}
            <span className='hljs-operator'>=</span> testo;{'       '}
            <span className='hljs-comment'>
              // CONSENTITO: sia cb (tipo: codeblock) che testo (tipo: text)
              sono primitivi testuali
            </span>
            {'\n'}
            <span className='hljs-type'>codeblock</span>{' '}
            <span className='hljs-variable'>cb2</span>{' '}
            <span className='hljs-operator'>=</span> titolo;{'     '}
            <span className='hljs-comment'>
              // CONSENTITO: sia cb2 (tipo: codeblock) che titolo (tipo:
              s3title) sono primitivi testuali
            </span>
            {'\n'}
            <span className='hljs-type'>blockquote</span>{' '}
            <span className='hljs-variable'>bq</span>{' '}
            <span className='hljs-operator'>=</span> cb2;{'        '}
            <span className='hljs-comment'>
              // CONSENTITO: sia bq (tipo: blockquote) che cb2 (tipo: codeblock)
              sono primitivi testuali
            </span>
            {'\n'}
            <span className='hljs-type'>title</span>{' '}
            <span className='hljs-variable'>titolo2</span>{' '}
            <span className='hljs-operator'>=</span> numeri;{'     '}
            <span className='hljs-comment'>
              // ERRORE: titolo2 (tipo: title) è primitiva testuale mentre
              numeri (tipo: list) è una lista
            </span>
            {'\n'}
            {'\n'}
            <span className='hljs-type'>list</span>{' '}
            <span className='hljs-variable'>l1</span>{' '}
            <span className='hljs-operator'>=</span> cb;{'               '}
            <span className='hljs-comment'>
              // ERRORE: l1 (tipo: list) è lista mentre cb (tipo: codeblock) è
              primitiva testuale
            </span>
            {'\n'}
            <span className='hljs-type'>list</span>{' '}
            <span className='hljs-variable'>l2</span>{' '}
            <span className='hljs-operator'>=</span> numeri;{'           '}
            <span className='hljs-comment'>
              // CONSENTITO: sia l2 (tipo: list) che numeri (tipo: list) sono
              liste
            </span>
            {'\n'}
            <span className='hljs-type'>ulist</span>{' '}
            <span className='hljs-variable'>ul</span>{' '}
            <span className='hljs-operator'>=</span> numeri;{'          '}
            <span className='hljs-comment'>
              // CONSENTITO: sia ul (tipo: ulist) che numeri (tipo: list) sono
              liste
            </span>
            {'\n'}
            <span className='hljs-type'>tlist</span>{' '}
            <span className='hljs-variable'>tl</span>{' '}
            <span className='hljs-operator'>=</span> ul;{'              '}
            <span className='hljs-comment'>
              // CONSENTITO: sia tl (tipo: tlist) che ul (tipo: ulist) sono
              liste
            </span>
            {'\n'}
            {'\n'}
            {'\n'}
            <span className='hljs-type'>table</span>{' '}
            <span className='hljs-variable'>tabella</span>{' '}
            <span className='hljs-operator'>=</span> testo;{'      '}
            <span className='hljs-comment'>
              // ERRORE: tabella (tipo: table) è multimediale mentre testo
              (tipo: text) è primitiva testuale
            </span>
            {'\n'}
            <span className='hljs-type'>img</span>{' '}
            <span className='hljs-variable'>foto</span>{' '}
            <span className='hljs-operator'>=</span> cb;{'              '}
            <span className='hljs-comment'>
              // ERRORE: foto (tipo: img) è multimediale mentre cb (tipo:
              codeblock) è primitiva testuale
            </span>
            {'\n'}
            <span className='hljs-type'>img</span>{' '}
            <span className='hljs-variable'>foto2</span>{' '}
            <span className='hljs-operator'>=</span>i (
            <span className='hljs-string'>"/img/foto.png"</span>,{' '}
            <span className='hljs-string'>"Foto"</span>);{'\n'}
            <span className='hljs-type'>img</span>{' '}
            <span className='hljs-variable'>foto3</span>{' '}
            <span className='hljs-operator'>=</span> foto2;{'          '}
            <span className='hljs-comment'>
              // CONSENTITO: sia foto3 (tipo: img) che foto2 (tipo: img) sono
              dello stesso tipo
            </span>
            {'\n'}
            {'\n'}
            <span className='hljs-type'>table</span>{' '}
            <span className='hljs-variable'>tabella2</span>{' '}
            <span className='hljs-operator'>=</span> foto3;{'     '}
            <span className='hljs-comment'>
              // ERRORE: tabella2 (tipo: table) e foto3 (tipo: img) sono
              entrambe multimediali ma non sono dello stesso tipo
            </span>
            {'\n'}
            {'\n'}
          </code>
        </pre>
        <h2 id='cicli'>Cicli</h2>
        <p>
          In MALT è possibile inserire cicli, in particolare cicli for. Essi
          possono essere strutturati in due modi differenti: nel primo caso si
          ripetono le istruzioni in base ad un certo contatore che rappresenta
          il numero delle iterazioni, mentre nel secondo caso le iterazioni
          corrispondono alla lunghezza della lista.
        </p>
        <h3 id='ciclo-for'>Ciclo for</h3>
        <p>
          Il ciclo for permette di iterare le istruzioni in esso contenute un
          numero di volte pari al valore del contatore passato nella condizione.
          Ne viene fornito un breve esempio:
        </p>
        <pre>
          <code className='language-java'>
            text i;{'\n'}
            {'\n'}
            <span className='hljs-keyword'>for</span>(i,{' '}
            <span className='hljs-number'>3</span>){'{'}
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// istruzioni da ripetere</span>
            {'\n'}
            {'\n'}
            {'}'}
            {'\n'}
          </code>
        </pre>
        <p>
          In ciascuna iterazione del ciclo al contatore{' '}
          <em>
            <code>i</code>
          </em>{' '}
          viene assegnato un valore a partire da 0 e fino al valore{' '}
          <em>
            <code>3</code>
          </em>{' '}
          - 1 (valore massimo - 1).
        </p>
        <h3 id='ciclo-for-each'>Ciclo for-each</h3>
        <p>
          Il ciclo for-each consente di eseguire le istruzioni contenute un
          numero di volte pari alla lunghezza della lista che si sta iterando.
          Inoltre, ad ogni iterazione si ha a disposizione il valore
          dell'elemento corrispondente della lista. Ecco un breve esempio:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>list</span>{' '}
            <span className='hljs-variable'>lista_frutta</span>{' '}
            <span className='hljs-operator'>=</span> [
            <span className='hljs-string'>"mela"</span>,{' '}
            <span className='hljs-string'>"pera"</span>,{' '}
            <span className='hljs-string'>"banana"</span>,{' '}
            <span className='hljs-string'>"arancia"</span>];{'\n'}text frutto;
            {'\n'}
            {'\n'}
            <span className='hljs-keyword'>for</span>(frutto in lista_frutta)
            {'{'}
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// istruzioni da ripetere</span>
            {'\n'}
            {'\n'}
            {'}'}
            {'\n'}
          </code>
        </pre>
        <p>
          Ad ogni iterazione la variabile{' '}
          <em>
            <code>frutto</code>
          </em>{' '}
          assumerà un valore diverso:
        </p>
        <ul>
          <li>
            Prima iterazione: <code>mela</code>
          </li>
          <li>
            Seconda iterazione: <code>pera</code>
          </li>
          <li>
            Terza iterazione: <code>banana</code>
          </li>
          <li>
            Quarta iterazione: <code>arancia</code>
          </li>
        </ul>
        <p>
          Il valore della variabile{' '}
          <em>
            <code>frutto</code>
          </em>{' '}
          potrà poi essere utilizzato per effettuare altre operazioni.
        </p>
        <h2 id='scope-delle-variabili'>Scope delle variabili</h2>
        <p>
          Lo scope di una variabile definisce l'area in cui quella variabile è
          valida, definita e visibile.
        </p>
        <p>
          In MALT non esistono parole chiave per estendere o limitare lo scope.
        </p>
        <p>
          Lo scope di una variabile si estende sempre a partire dalla
          dichiarazione fino all'ultima istruzione del blocco dove è stata
          dichiarata.
        </p>
        <p>
          Fino ad ora sono definibili solo due possibili blocchi: il blocco
          globale e il blocco del ciclo for.
        </p>
        <p>
          Il blocco globale è un blocco sempre presente e si estende per tutto
          il codice. Il blocco del ciclo for è invece definito da un ciclo for e
          si estende per tutte le istruzioni ripetute dal ciclo for.
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-comment'>// inizio blocco globale</span>
            {'\n'}text testo_globale;{'\n'}
            {'\n'}
            <span className='hljs-keyword'>for</span>(i,{' '}
            <span className='hljs-number'>5</span>){'{'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// inizio blocco del ciclo for</span>
            {'\n'}
            {'  '}text testo_locale;{'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// altre istruzioni...</span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>//fine blocco del ciclo for</span>
            {'\n'}
            {'}'}
            {'\n'}
            {'\n'}
            <span className='hljs-comment'>// fine blocco globale</span>
            {'\n'}
          </code>
        </pre>
        <p>
          Nell'esempio la variabile{' '}
          <em>
            <code>testo_globale</code>
          </em>{' '}
          è definita nel blocco globale ed è visibile in tutto il codice (dopo
          la dichiarazione).
        </p>
        <p>
          La variabile{' '}
          <em>
            <code>testo_locale</code>
          </em>{' '}
          è invece definita nel blocco del ciclo for ed è visibile soltanto
          all'interno del ciclo dopo la dichiarazione della variabile.
        </p>
        <p>
          Per questo motivo le variabili dichiarate fuori dai cicli vengono
          definite "globali" mentre le variabili dichiarate nei cicli vengono
          definite "locali".
        </p>
        <h2 id='funzioni-fun'>
          Funzioni (<em>fun</em>)
        </h2>
        <p>
          In MALT si possono definire delle funzioni utilizzando la notazione
          utilizzata nel seguente esempio:
        </p>
        <pre>
          <code className='language-java'>
            fun <span className='hljs-title function_'>esempio</span>{' '}
            <span className='hljs-params'>(text tx, title tl)</span> {'{'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// altre istruzioni...</span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-keyword'>return</span> tx;{'\n'}
            {'}'}
            {'\n'}
          </code>
        </pre>
        <p>
          Nella funzione dell'esempio si hanno 2 argomenti, ma essi potrebbero
          anche non essere presenti oppure potrebbero essere uno o più.
        </p>
        <p>
          Anche l'istruzione con{' '}
          <em>
            <code>return</code>
          </em>{' '}
          può essere opzionale, ma essa consente di restituire in output il
          valore di una variabile (nell'esempio la variabile{' '}
          <em>
            <code>tx</code>
          </em>{' '}
          di tipo{' '}
          <em>
            <code>text</code>
          </em>
          ) oppure direttamente una stringa.
        </p>
        <p>
          Una volta creata una funzione globale, essa può essere chiamata come
          nel prossimo esempio. Questa chiamata può avvenire seguendo due
          vincoli:
        </p>
        <ol>
          <li>
            <p>
              Si deve avere un numero di parametri nella chiamata pari al numero
              di argomenti della funzione;
            </p>
          </li>
          <li>
            <p>
              Ciascun parametro della chiamata deve presentare un tipo uguale o
              convertibile a quello del rispettivo argomento della funzione.
            </p>
          </li>
        </ol>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>tx1</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Testo"</span>;{'\n'}
            <span className='hljs-type'>title</span>{' '}
            <span className='hljs-variable'>tl1</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Titolo"</span>;{'\n'}
            {'\n'}
            <span className='hljs-comment'>
              // definizione della funzione "esempio"
            </span>
            {'\n'}fun <span className='hljs-title function_'>esempio</span>{' '}
            <span className='hljs-params'>(text tx, title tl)</span> {'{'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>//altre istruzioni...</span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-keyword'>return</span> tx;{'\n'}
            {'}'}
            {'\n'}
            {'\n'}esempio(tx1,tl1);{' '}
            <span className='hljs-comment'>
              // chiamata della funzione "esempio"
            </span>
            {'\n'}
          </code>
        </pre>
        <h3 id='scope-delle-variabili-in-una-funzione'>
          Scope delle variabili in una funzione
        </h3>
        <p>
          Anche per le funzioni, così come per i cicli for visti prima, viene
          creato un blocco. Lo scope delle variabili dichiarate all'interno
          della funzione si estende a partire dalla dichiarazione fino
          all'ultima istruzione del blocco.
        </p>
        <p>Di seguito viene mostrato un esempio:</p>
        <pre>
          <code className='language-java'>
            <span className='hljs-comment'>// inizio blocco globale</span>
            {'\n'}
            {'\n'}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t1</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"TestoGlobale"</span>;{'\n'}
            <span className='hljs-keyword'>for</span>(i,{' '}
            <span className='hljs-number'>3</span>){'{'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// inizio blocco for</span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t1f</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"TestoGlobaleFor"</span>;{'\n'}
            {'  '}
            <span className='hljs-comment'>// ...</span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// fine blocco for</span>
            {'\n'}
            {'}'}
            {'\n'}
            {'\n'}fun <span className='hljs-title function_'>esempio</span>{' '}
            <span className='hljs-params'>(text tx, title tl)</span> {'{'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>
              // inizio blocco della funzione "esempio"
            </span>
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t2</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"TestoLocale"</span>;{'\n'}
            {'  '}
            <span className='hljs-keyword'>for</span>(i,{' '}
            <span className='hljs-number'>3</span>){'{'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>// inizio blocco for</span>
            {'\n'}
            {'\n'}
            {'    '}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>t2f</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"TestoLocaleFor"</span>;{'\n'}
            {'    '}
            <span className='hljs-comment'>// ...</span>
            {'\n'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>// fine blocco for</span>
            {'\n'}
            {'  '}
            {'}'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-keyword'>return</span> tx;{'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>
              // fine blocco della funzione "esempio"
            </span>
            {'\n'}
            {'}'}
            {'\n'}
            {'\n'}
            <span className='hljs-comment'>// fine blocco globale</span>
            {'\n'}
          </code>
        </pre>
        <p>
          La variabile{' '}
          <em>
            <code>t1</code>
          </em>{' '}
          è globale e quindi risulta sempre visibile. Invece la variabile{' '}
          <em>
            <code>t1f</code>
          </em>
          , poichè è stata definita all'interno di un ciclo for, risulta
          visibile soltanto nel ciclo stesso e di conseguenza è locale al for.
          Le precedenti considerazioni cambiano leggermente per le variabili{' '}
          <em>
            <code>t2</code>
          </em>{' '}
          e{' '}
          <em>
            <code>t2f</code>
          </em>{' '}
          siccome sono state definite in due livelli diversi all'interno di una
          funzione. La variabile{' '}
          <em>
            <code>t2</code>
          </em>{' '}
          è stata definita all'interno della funzione{' '}
          <em>
            <code>esempio</code>
          </em>{' '}
          e quindi risulta visibile solo nella funzione (variabile locale alla
          funzione). Invece la variabile{' '}
          <em>
            <code>t2f</code>
          </em>
          , poichè è stata definita in un ciclo for a sua volta all'interno di
          una funzione, risulta visibile soltanto nello specifico ciclo for
          della funzione{' '}
          <em>
            <code>esempio</code>
          </em>{' '}
          (variabile locale al ciclo for della funzione).
        </p>
        <h2 id='classi-class'>
          Classi (<em>class</em>)
        </h2>
        <p>
          MALT consente di definire delle classi. Questo è possibile tramite la
          notazione del seguente esempio:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-keyword'>class</span>{' '}
            <span className='hljs-title class_'>ClasseEsempio</span> {'{'}
            {'\n'}
            {'\n'}
            {'  '}text campo1;{'\n'}
            {'  '}text campo2;{'\n'}
            {'\n'}
            {'  '}fun <span className='hljs-title function_'>metodo1</span>{' '}
            <span className='hljs-params'>(text t1)</span>
            {'{'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>// ...</span>
            {'\n'}
            {'  '}
            {'}'}
            {'\n'}
            {'\n'}
            {'  '}fun <span className='hljs-title function_'>metodo2</span>{' '}
            <span className='hljs-params'>()</span>
            {'{'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>// ...</span>
            {'\n'}
            {'  '}
            {'}'}
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-comment'>// ...</span>
            {'\n'}
            {'\n'}
            {'}'}
            {'\n'}
          </code>
        </pre>
        <p>
          In una classe si possono definire campi e metodi. I campi non sono
          altro che variabili locali alla classe e quindi visibili solo
          all'interno di essa. I metodi sono delle funzioni legate alla classe.
          Le variabili definite al loro interno seguono le stesse regole di
          visibilità di una normale funzione.
        </p>
        <p>
          I metodi hanno accesso ai campi della classe ma i primi sono visibili
          globalmente e possono essere chiamati ovunque nel codice utilizzando
          la dot notation in due modi diversi in base alla posizione della
          chiamata: all'interno della classe del metodo o esternamente.
        </p>
        <p>
          Nel caso in cui si volesse chiamare il metodo all'interno della classe
          in cui è stato definito, la chiamata prevede l'utilizzo della parola
          chiave <em>this</em> seguita dal nome del metodo. Ne viene riportato
          un esempio
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-keyword'>class</span>{' '}
            <span className='hljs-title class_'>Obj</span> {'{'}
            {'\n'}
            {'  '}
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>txlocal</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Testo locale"</span>;{'\n'}
            {'  '}
            <span className='hljs-type'>title</span>{' '}
            <span className='hljs-variable'>tllocal</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Titolo locale"</span>;{'\n'}
            {'  '}fun <span className='hljs-title function_'>print</span>{' '}
            <span className='hljs-params'>(text tx, title tl)</span> {'{'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>//altre istruzioni...</span>
            {'\n'}
            {'\n'}
            {'    '}
            <span className='hljs-keyword'>return</span> tx;{'\n'}
            {'  '}
            {'}'}
            {'\n'}
            {'\n'}
            {'  '}
            <span className='hljs-built_in'>this</span>.print(txlocal,tllocal);
            {'  '}
            <span className='hljs-comment'>
              // chiamata all'interno della stessa classe
            </span>
            {'\n'}
            {'                                '}
            <span className='hljs-comment'>// del metodo print</span>
            {'\n'}
            {'}'}
            {'\n'}
            {'\n'}text txglobal;{'\n'}
            {'\n'}
            <span className='hljs-built_in'>this</span>.print(txglobal,
            txglobal);
            {'  '}
            <span className='hljs-comment'>
              // ERRORE!, non siamo all'interno
            </span>
            {'\n'}
            {'                                 '}
            <span className='hljs-comment'>
              // della classe del metodo print
            </span>
            {'\n'}
          </code>
        </pre>
        <p>
          Invece, nel caso in cui si volesse chiamare il metodo all'esterno
          della classe in cui è stato definito, la chiamata prevede l'utilizzo
          del nome della classe seguito del nome del metodo. Un esempio di
          questa chiamata è riportato di seguito:
        </p>
        <pre>
          <code className='language-java'>
            <span className='hljs-type'>text</span>{' '}
            <span className='hljs-variable'>txglobal</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Testo globale"</span>;{'\n'}
            <span className='hljs-type'>title</span>{' '}
            <span className='hljs-variable'>tlglobal</span>{' '}
            <span className='hljs-operator'>=</span>{' '}
            <span className='hljs-string'>"Titolo globale"</span>;{'\n'}
            {'\n'}
            <span className='hljs-keyword'>class</span>{' '}
            <span className='hljs-title class_'>Obj</span> {'{'}
            {'\n'}
            {'  '}fun <span className='hljs-title function_'>print</span>{' '}
            <span className='hljs-params'>(text tx, title tl)</span> {'{'}
            {'\n'}
            {'    '}
            <span className='hljs-comment'>//altre istruzioni...</span>
            {'\n'}
            {'\n'}
            {'    '}
            <span className='hljs-keyword'>return</span> tx;{'\n'}
            {'  '}
            {'}'}
            {'\n'}
            {'}'}
            {'\n'}
            {'\n'}Obj.print(txglobal,tlglobal);{'\n'}
          </code>
        </pre>
        <blockquote>
          <p>
            Se si proviene da un linguaggio orientato agli oggetti è importante
            notare che al contrario di questi, in MALT non è possibile creare
            oggetti chiamando il costruttore della classe. In questo linguaggio,
            la classe fa solo da "collezione" di variabili (campi) e funzioni
            (metodi). Inoltre i campi sono sempre e solo locali alla classe
            (visibiità "private") e i metodi sono sempre e solo pubblici e
            accessibili ovunque (visibilità "public").
          </p>
        </blockquote>
        <blockquote>
          <p>
            In MALT, non esistendo il concetto di oggetto, non esiste nemmeno il
            concetto di costruttore / distruttore.
          </p>
        </blockquote>
      </Container>
    </ThemeProvider>
  );
};

export default page;
