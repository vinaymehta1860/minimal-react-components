import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  LabelsContainer,
  ValuesContainer,
  Row,
  Cell
} from './styles';
import { normalizeData } from './utils';
import Text from '../Text';
import { LIGHTBLACK } from '../colors';

const Table = (props) => {
  const { data } = props;

  const { labels = [], values = [] } = normalizeData(data);

  const renderLabels = () => {
    return labels.map(({label, options = {}}, index) => {
      const isHeader = index === 0;
      return (
        <Row
          key={index}
        >
          <Cell
            isHeader={isHeader}
            width={options.styles && options.styles.width}
            justifyContent={options.styles && options.styles.justifyContent}
            backgroundColor={isHeader ? LIGHTBLACK : 'transparent'}
          >
            <Text>
              {label}
            </Text>
          </Cell>
        </Row>
      )
    });
  };

  const renderRow = (row, isHeader = false) => {
    return row.map((_row, index) => {
      const { options = {} } = _row;
      const { styles = {} } = options;
      const { width, alignItems } = styles;

      return (
        <Cell
          key={index}
          width={width}
          isHeader={isHeader}
          backgroundColor={isHeader ? LIGHTBLACK : 'transparent'}
          alignItems={alignItems ? alignItems : undefined}
        >
          <Text
            styles={Object.assign({}, styles, { margin: isHeader ? '0 10px' : undefined })}
          >
            {_row.label}
          </Text>
          {_row.subLabel && (
            <Text
              styles={Object.assign({}, styles, { margin: isHeader ? '0 10px' : undefined })}
            >
              {_row.subLabel}
            </Text>
          )}
        </Cell>
      )
    });
  };

  const renderValues = () => {
    return values.map((value, index) => {
      return (
        <Row key={index}>
          {renderRow(value, index === 0)}
        </Row>
      )
    });
  };

  const getLabelsWidth = () => {
    if (
      labels &&
      labels.length &&
      labels[0].options &&
      labels[0].options.styles &&
      labels[0].options.styles.width
    ) {
      return labels[0].options.styles.width;
    }

    return undefined;
  }

  return (
    <Container>
      <LabelsContainer
        width={labels.length ? getLabelsWidth() : undefined}
      >
        {renderLabels()}
      </LabelsContainer>
      <ValuesContainer>
        {renderValues()}
      </ValuesContainer>
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
