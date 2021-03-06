import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import {
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTablePagination,
  DataTableRow,
} from '../../../../../src/index';

export const code = `class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <DataTable>
          <DataTableRow>
              <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
              <DataTableCell text={'Calories'}  type={'header'}  right />
              <DataTableCell text={'Fat (g)'}  type={'header'}  right />
              <DataTableCell text={'Carbs (g)'}  type={'header'}  right />
              <DataTableCell text={'Protein (g)'}  type={'header'}  right />
          </DataTableRow>
          <DataTableRow>
              <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
              <DataTableCell text={'159'} right />
              <DataTableCell text={'6.0'} right />
              <DataTableCell text={'24'} right />
              <DataTableCell text={'4'} right />
          </DataTableRow>
          <DataTableRow>
              <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
              <DataTableCell text={'237'} right />
              <DataTableCell text={'9.0'} right />
              <DataTableCell text={'37'} right />
              <DataTableCell text={'4.3'} right />
          </DataTableRow>
          <DataTablePagination
            page={1}
            numberOfPages={3}
            perPage={2}
          />
      </DataTable>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        Data Table Pagination dispalys the number of rows per page, current
        page, how many rows total, and navigation buttons between them.
      </div>
    }
    code={code}
    scope={{
      View,
      DataTable,
      DataTableHeader,
      DataTableCell,
      DataTablePagination,
      DataTableRow,
      Image,
    }}
  />
);
export default MainDemo;
