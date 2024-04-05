import * as React from 'react';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter'; // or `v14-pagesRouter` if you are using Next.js v14
import { Html, Head, Main, NextScript } from 'next/document';
export default function MyDocument(props) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = documentGetInitialProps;
