import React from 'react';
import PropTypes from 'prop-types';

import {
  Tabs as TabsContainer,
  Tab
} from './styles';
import { Text } from '../';

const Tabs = (props) => {
  const {
    tabs,
    selectedTabIndex,
    styles,
    tabStyles,
    onClick
  } = props;

  const handleTabClick = (tabIndex) => {
    if (onClick) {
      onClick(tabIndex);
    }
  };

  const renderTabs = () => {
    return tabs.map((tab, tabIndex) => {
      return (
        <Tab
          key={tabIndex}
          style={tabStyles}
          active={selectedTabIndex === tabIndex}
          onClick={() => handleTabClick(tabIndex)}
        >
          <Text>{tab.label}</Text>
        </Tab>
      )
    })
  };

  return (
    <TabsContainer style={styles}>
      {renderTabs()}
    </TabsContainer>
  )
};

Tabs.defaultProps = {
  tabs: [],
  selectedTabIndex: 0,
  styles: {},
  tabStyles: {},
  onClick: () => {}
}

Tabs.propTypes = {
  tabs: PropTypes.instanceOf(Array),
  selectedTabIndex: PropTypes.number,
  styles: PropTypes.instanceOf(Object),
  tabStyles: PropTypes.instanceOf(Object),
  onClick: PropTypes.func
}

export default Tabs;
