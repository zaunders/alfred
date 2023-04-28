import { html } from 'lit';

import { PageTree } from '@rocket/engine';

export const pageTree = new PageTree();
await pageTree.restore(new URL('../../pages/pageTreeData.rocketGenerated.json', import.meta.url));

export const layoutData = {
  pageTree,
  titleWrapperFn: title => title,
  description: 'Welcome to the Rocket Spark Landing Page example',
  siteName: 'Rocket',

  head__150: html`<link rel="stylesheet" href="resolve:#src/css/page.css" />`,

  footer__10: html`
    <rocket-content-area>
      <rocket-columns>
        <div>
          <strong>Hitta mig</strong><br />
          i Röstånga<br />
          <a href="#">alfred@epost.se</a><br />
          <a href="#">+46 92929292929292</a>
        </div>
      </rocket-columns>
    </rocket-content-area>
  `,
};
