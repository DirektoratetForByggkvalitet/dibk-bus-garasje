/* globals window */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider, trackEvent, track } from 'losen';
import data from './api/bus-garasje';
import dataExport from './exports/data-export';
import Intro from './pages/Intro';
import { store } from './store';

const trackIntro = () => {
  track(data.meta.name, 'intro', 'Bygg uten å søke - Garasje');
};

const App = ({ translations }: { translations: any }) => {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    if (intro) {
      trackIntro();
    }
  }, [intro]);

  const closeIntro = () => {
    setIntro(false);
    window.scrollTo(0, 0);
    trackEvent('Close intro');
  };

  const showIntro = () => {
    setIntro(true);
    window.scrollTo(0, 0);
  };

  return (
    <Provider store={store}>
      <StyleProvider>
        {intro ? (
          <Intro close={closeIntro} />
        ) : (
          <Wizard
            wizard={data}
            exports={{ dataExport }}
            translations={translations}
            showIntro={showIntro}
          />
        )}
      </StyleProvider>
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
