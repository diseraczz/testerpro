import './App.css';
import Moment from 'moment';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/material/Tab';


import * as React from 'react';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function App() {
  const formatDate = Moment().format('dddd, D MMMM YYYY')
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <header className="App-header">
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>

      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={1} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={2} index={1}>
        Item Two
      </TabPanel>
      <p>{formatDate}</p>
      </header>
      <body>
        <hi>hi im body</hi>
        <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-3594548841511971"
          data-ad-slot="1936617796"
          data-auto-format="rspv"
          data-full-width="">
        <div overflow=""></div>
        </amp-ad>
      </body>
    </div>
  );
}

export default App;

