/* globals window */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { Wizard, StyleProvider, trackEvent, track, state } from 'losen';
import data from './api/bus-garasje';
import dataExport from './exports/data-export';
import Intro from './pages/Intro';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const trackIntro = () => {
  track(data.meta.name, 'intro', 'Bygg uten å søke - Garasje');
};

const App = ({ translations }: { translations: any }) => {
  const [intro, setIntro] = useState(true);
  console.log('intro1', intro);

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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {
  translations: PropTypes.object,
};

App.defaultProps = {
  translations: {},
};

const mapStateToProps = ({ [state.NAME]: { $computed, ...wizardData } }) => ({
  hasData: !!Object.keys(wizardData).length,
});

export default connect(mapStateToProps)(App);
