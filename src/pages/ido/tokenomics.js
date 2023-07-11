import React, { Component } from 'react';

import {
  EuiBadge,
  EuiHealth,
  EuiButton,
  EuiButtonIcon,
  EuiCheckbox,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiSpacer,
  EuiTable,
  EuiTableBody,
  EuiTableFooter,
  EuiTableFooterCell,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableHeaderCellCheckbox,
  EuiTablePagination,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableRowCellCheckbox,
  EuiTableSortMobile,
  EuiTableHeaderMobile,
  EuiScreenReaderOnly,
} from '@elastic/eui';

import {
  LEFT_ALIGNMENT,
  RIGHT_ALIGNMENT,
  Pager,
  SortableProperties,
} from '@elastic/eui';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemIdToSelectedMap: {},
      itemIdToOpenActionsPopoverMap: {},
      sortedColumn: 'title',
      itemsPerPage: 10,
    };

    this.items = [


      {
        id: 7,
        title: {
          value: 'Dinosaur',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="warning">Warning</EuiBadge>,
      },
      {
        id: 8,
        title: {
          value: 'Spider',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="warning">Warning</EuiBadge>,
      },
      {
        id: 9,
        title: {
          value: 'Bugbear',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="success">Healthy</EuiBadge>,
      },
      {
        id: 10,
        title: {
          value: 'Bear',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="danger">Danger</EuiBadge>,
      },
      {
        id: 11,
        title: {
          value: 'Dinosaur',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="warning">Warning</EuiBadge>,
      },
      {
        id: 12,
        title: {
          value: 'Spider',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiHealth color="success">Healthy</EuiHealth>,
      },
      {
        id: 13,
        title: {
          value: 'Bugbear',
          isLink: true,
        },
        type: 'user',
        dateCreated: 'Tue Dec 11 2016',
        magnitude: 10000,
        health: <EuiBadge color="danger">Danger</EuiBadge>,
      },
    ];

    this.sortableProperties = new SortableProperties(
      [
        {
          name: 'title',
          getValue: (item) => item.title.toLowerCase(),
          isAscending: true,
        },
        {
          name: 'dateCreated',
          getValue: (item) => item.dateCreated.toLowerCase(),
          isAscending: true,
        },
        {
          name: 'magnitude',
          getValue: (item) => item.magnitude.toLowerCase(),
          isAscending: true,
        },
      ],
      this.state.sortedColumn
    );

    this.columns = [
      {
        id: 'checkbox',
        isCheckbox: true,
        textOnly: false,
        width: '32px',
      },
      {
        id: 'type',
        label: 'Type',
        isVisuallyHiddenLabel: true,
        alignment: LEFT_ALIGNMENT,
        width: '24px',
        cellProvider: (cell) => <EuiIcon type={cell} size="m" />,
        mobileOptions: {
          show: false,
        },
      },
      {
        id: 'title',
        label: 'Title',
        footer: <em>Title</em>,
        alignment: LEFT_ALIGNMENT,
        isSortable: true,
        mobileOptions: {
          show: false,
        },
      },
      {
        id: 'title_type',
        label: 'Title',
        mobileOptions: {
          only: true,
          header: false,
          enlarge: true,
          fullWidth: true,
        },
        render: (title, item) => (
          <span>
            <EuiIcon
              type={item.type}
              size="m"
              style={{ verticalAlign: 'text-top' }}
            />{' '}
            {title}
          </span>
        ),
      },
      {
        id: 'health',
        label: 'Health',
        footer: '',
        alignment: LEFT_ALIGNMENT,
      },
      {
        id: 'dateCreated',
        label: 'Date created',
        footer: 'Date created',
        alignment: LEFT_ALIGNMENT,
        isSortable: true,
      },
      {
        id: 'magnitude',
        label: 'Orders of magnitude',
        footer: ({ items, pagination }) => {
          const { pageIndex, pageSize } = pagination;
          const startIndex = pageIndex * pageSize;
          const pageOfItems = items.slice(
            startIndex,
            Math.min(startIndex + pageSize, items.length)
          );
          return (
            <strong>
              Total: {pageOfItems.reduce((acc, cur) => acc + cur.magnitude, 0)}
            </strong>
          );
        },
        alignment: RIGHT_ALIGNMENT,
        isSortable: true,
      },
      {
        id: 'actions',
        label: 'Actions',
        isVisuallyHiddenLabel: true,
        alignment: RIGHT_ALIGNMENT,
        isActionsPopover: true,
        width: '32px',
      },
    ];

    this.pager = new Pager(this.items.length, this.state.itemsPerPage);
    this.state.firstItemIndex = this.pager.getFirstItemIndex();
    this.state.lastItemIndex = this.pager.getLastItemIndex();
  }

  onChangeItemsPerPage = (itemsPerPage) => {
    this.pager.setItemsPerPage(itemsPerPage);
    this.setState({
      itemsPerPage,
      firstItemIndex: this.pager.getFirstItemIndex(),
      lastItemIndex: this.pager.getLastItemIndex(),
    });
  };

  onChangePage = (pageIndex) => {
    this.pager.goToPageIndex(pageIndex);
    this.setState({
      firstItemIndex: this.pager.getFirstItemIndex(),
      lastItemIndex: this.pager.getLastItemIndex(),
    });
  };

  onSort = (prop) => {
    this.sortableProperties.sortOn(prop);

    this.setState({
      sortedColumn: prop,
    });
  };

  toggleItem = (itemId) => {
    this.setState((previousState) => {
      const newItemIdToSelectedMap = {
        ...previousState.itemIdToSelectedMap,
        [itemId]: !previousState.itemIdToSelectedMap[itemId],
      };

      return {
        itemIdToSelectedMap: newItemIdToSelectedMap,
      };
    });
  };

  toggleAll = () => {
    const allSelected = this.areAllItemsSelected();
    const newItemIdToSelectedMap = {};
    this.items.forEach(
      (item) => (newItemIdToSelectedMap[item.id] = !allSelected)
    );

    this.setState({
      itemIdToSelectedMap: newItemIdToSelectedMap,
    });
  };

  isItemSelected = (itemId) => {
    return this.state.itemIdToSelectedMap[itemId];
  };

  areAllItemsSelected = () => {
    const indexOfUnselectedItem = this.items.findIndex(
      (item) => !this.isItemSelected(item.id)
    );
    return indexOfUnselectedItem === -1;
  };

  areAnyRowsSelected = () => {
    return (
      Object.keys(this.state.itemIdToSelectedMap).findIndex((id) => {
        return this.state.itemIdToSelectedMap[id];
      }) !== -1
    );
  };

  togglePopover = (itemId) => {
    this.setState((previousState) => {
      const newItemIdToOpenActionsPopoverMap = {
        ...previousState.itemIdToOpenActionsPopoverMap,
        [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId],
      };

      return {
        itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
      };
    });
  };

  closePopover = (itemId) => {
    // only update the state if this item's popover is open
    if (this.isPopoverOpen(itemId)) {
      this.setState((previousState) => {
        const newItemIdToOpenActionsPopoverMap = {
          ...previousState.itemIdToOpenActionsPopoverMap,
          [itemId]: false,
        };

        return {
          itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
        };
      });
    }
  };

  isPopoverOpen = (itemId) => {
    return this.state.itemIdToOpenActionsPopoverMap[itemId];
  };

  renderSelectAll = (mobile) => {
    return (
      <EuiCheckbox
        id={mobile ? 'selectAllCheckboxMobile' : 'selectAllCheckboxDesktop'}
        label={mobile ? 'Select all rows' : null}
        aria-label="Select all rows"
        title="Select all rows"
        checked={this.areAllItemsSelected()}
        onChange={this.toggleAll.bind(this)}
        type={mobile ? null : 'inList'}
      />
    );
  };

  getTableMobileSortItems() {
    const items = [];
    this.columns.forEach((column) => {
      if (column.isCheckbox || !column.isSortable) {
        return;
      }
      items.push({
        name: column.label,
        key: column.id,
        onSort: this.onSort.bind(this, column.id),
        isSorted: this.state.sortedColumn === column.id,
        isSortAscending: this.sortableProperties.isAscendingByName(column.id),
      });
    });
    return items.length ? items : null;
  }

  renderHeaderCells() {
    const headers = [];

    this.columns.forEach((column, columnIndex) => {
      if (column.isCheckbox) {
        headers.push(
          <EuiTableHeaderCellCheckbox key={column.id} width={column.width}>
            {this.renderSelectAll()}
          </EuiTableHeaderCellCheckbox>
        );
      } else if (column.isVisuallyHiddenLabel) {
        headers.push(
          <EuiTableHeaderCell key={column.id} width={column.width}>
            <EuiScreenReaderOnly>
              <span>{column.label}</span>
            </EuiScreenReaderOnly>
          </EuiTableHeaderCell>
        );
      } else {
        headers.push(
          <EuiTableHeaderCell
            key={column.id}
            align={this.columns[columnIndex].alignment}
            width={column.width}
            onSort={
              column.isSortable ? this.onSort.bind(this, column.id) : undefined
            }
            isSorted={this.state.sortedColumn === column.id}
            isSortAscending={this.sortableProperties.isAscendingByName(
              column.id
            )}
            mobileOptions={column.mobileOptions}
          >
            {column.label}
          </EuiTableHeaderCell>
        );
      }
    });
    return headers.length ? headers : null;
  }

  renderRows() {
    const renderRow = (item) => {
      const cells = this.columns.map((column) => {
        const cell = item[column.id];

        let child;

        if (column.isCheckbox) {
          return (
            <EuiTableRowCellCheckbox key={column.id}>
              <EuiCheckbox
                id={`${item.id}-checkbox`}
                checked={this.isItemSelected(item.id)}
                onChange={this.toggleItem.bind(this, item.id)}
                type="inList"
                title="Select this row"
                aria-label="Select this row"
              />
            </EuiTableRowCellCheckbox>
          );
        }

        if (column.isActionsPopover) {
          return (
            <></>
          );
        }

        if (column.render) {
          const titleText = item.title.truncateText
            ? item.title.value
            : item.title;
          const title = item.title.isLink ? (
            <EuiLink href="">{item.title.value}</EuiLink>
          ) : (
            titleText
          );
          child = column.render(title, item);
        } else if (column.cellProvider) {
          child = column.cellProvider(cell);
        } else if (cell.isLink) {
          child = <EuiLink href="">{cell.value}</EuiLink>;
        } else if (cell.truncateText) {
          child = cell.value;
        } else {
          child = cell;
        }

        return (
          <EuiTableRowCell
            key={column.id}
            align={column.alignment}
            truncateText={cell && cell.truncateText}
            textOnly={cell ? cell.textOnly : true}
            mobileOptions={{
              header: column.label,
              ...column.mobileOptions,
            }}
          >
            {child}
          </EuiTableRowCell>
        );
      });

      return (
        <EuiTableRow
          key={item.id}
          isSelected={this.isItemSelected(item.id)}
          isSelectable={true}
          hasActions={true}
        >
          {cells}
        </EuiTableRow>
      );
    };

    const rows = [];

    for (
      let itemIndex = this.state.firstItemIndex;
      itemIndex <= this.state.lastItemIndex;
      itemIndex++
    ) {
      const item = this.items[itemIndex];
      rows.push(renderRow(item));
    }

    return rows;
  }

  renderFooterCells() {
    const footers = [];

    const items = this.items;
    const pagination = {
      pageIndex: this.pager.getCurrentPageIndex(),
      pageSize: this.state.itemsPerPage,
      totalItemCount: this.pager.getTotalPages(),
    };

    this.columns.forEach((column) => {
      const footer = this.getColumnFooter(column, { items, pagination });
      if (column.mobileOptions && column.mobileOptions.only) {
        return; // exclude columns that only exist for mobile headers
      }

      if (footer) {
        footers.push(
          <EuiTableFooterCell
            key={`footer_${column.id}`}
            align={column.alignment}
          >
            {footer}
          </EuiTableFooterCell>
        );
      } else {
        footers.push(
          <EuiTableFooterCell
            key={`footer_empty_${footers.length - 1}`}
            align={column.alignment}
          >
            {undefined}
          </EuiTableFooterCell>
        );
      }
    });
    return footers;
  }

  getColumnFooter = (column, { items, pagination }) => {
    return undefined;
  };

  render() {
    let optionalActionButtons;
    const exampleId = 'example-id';

    if (this.areAnyRowsSelected() > 0) {
      optionalActionButtons = (
        <EuiFlexItem grow={false}>
          <EuiButton color="danger">Delete selected</EuiButton>
        </EuiFlexItem>
      );
    }

    return (
      <div>


        <EuiSpacer size="m" />

        <EuiTableHeaderMobile>
          <EuiFlexGroup
            responsive={false}
            justifyContent="spaceBetween"
            alignItems="baseline"
          >
            <EuiFlexItem grow={false}>{this.renderSelectAll(true)}</EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiTableSortMobile items={this.getTableMobileSortItems()} />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiTableHeaderMobile>

        <EuiTable id={exampleId}>
          <EuiTableHeader>{this.renderHeaderCells()}</EuiTableHeader>

          <EuiTableBody>{this.renderRows()}</EuiTableBody>

          <EuiTableFooter>{this.renderFooterCells()}</EuiTableFooter>
        </EuiTable>




      </div>
    );
  }
}