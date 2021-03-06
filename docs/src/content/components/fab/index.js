import React, { Component } from 'react';

import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';

import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class FabPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'fab'}
          title={'Floating Action Button'}
          description={`A floating action button (FAB) represents the primary action of a screen.`}
          importCode={`import { Fab } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/buttons-floating-action-button.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/fab'} />
          <Usage pageHref={'/components/fab'} />
          <Props pageHref={'/components/fab'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
