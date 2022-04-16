import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Cell
} from './styles';
import { Text } from '../';

const Table = (props) => {
  const { data } = props;

  const renderRow = (row, rowIndex) => {
    return row.map((_row, index) => {
      const { options = {} } = _row;
      const { styles = {} } = options;

      return (
        <Cell
          key={index}
          {...styles}
        >
          <Text
            styles={Object.assign({}, styles)}
          >
            {_row.label}
          </Text>
          {_row.subLabel && (
            <Text
              styles={Object.assign({}, styles)}
            >
              {_row.subLabel}
            </Text>
          )}
        </Cell>
      )
    });
  };

  const renderTableData = () => {
    return data.map((row, index) => {
      return (
        <Row key={index}>
          {renderRow(row, index)}
        </Row>
      )
    });
  };

  return (
    <Container>
      {renderTableData()}
    </Container>
  )
}

Table.defaultProps = {
  data: []
}

Table.propTypes = {
  data: PropTypes.instanceOf(Array)
}

export default Table;
