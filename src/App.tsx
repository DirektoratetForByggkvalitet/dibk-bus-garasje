/* globals window */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider, trackEvent, track } from 'losen';
import data from './api/bus-garasje';
import dataExport from './exports/data-export';
import Intro from './pages/Intro';
import store from './store';

const App = ({ translations }: { translations: any }) => {
  const [intro, setIntro] = useState(true);

  const closeIntro = () => {
    setIntro(false);
    window.scrollTo(0, 0);
    trackEvent('Close intro');
  };

  const showIntro = () => {
    setIntro(true);
    window.scrollTo(0, 0);
  };

  if (intro) {
    track(data.meta.name, 'intro', 'Bygg uten å søke - Garasje');
    return (
      <Provider store={store}>
        <StyleProvider>
          <Intro close={closeIntro} />
        </StyleProvider>
      </Provider>
    );
  }
  // END: ed8c6549bwf9

  return (
    <Provider store={store}>
      <Wizard
        wizard={data}
        exports={{ dataExport }}
        translations={translations}
        showIntro={showIntro}
      />
    </Provider>
  );
};

App.propTypes = {
  translations: PropTypes.object,
};

App.defaultProps = {
  translations: {},
};

export default App;
