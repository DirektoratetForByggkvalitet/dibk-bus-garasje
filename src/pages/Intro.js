import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  if (Object.keys(data).length !== 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Bygg uten å søke garasje!</Primitives.Heading.H1>
        <p>
          Skal du bygge garasje, hagebod eller en annen frittliggende bygning? Svar på spørsmålene i
          denne veiviseren for å finne ut om du
        </p>
        <ul>
          <li>må sende byggesøknad til kommunen</li>
          <li>må søke om dispensasjon</li>
          <li>kan tilpasse bygningen slik at du slipper å søke</li>
        </ul>
        <p>Du vil bruke omtrent 20-30 minutter.</p>

        <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
        <p>Før du begynner er det lurt å kontakte kommunen for å få tak i</p>
        <ul>
          <li>situasjonskart for din eiendom</li>
          <li>reguleringsplan</li>
          <li>kommuneplanens arealdel</li>
          <li>kommunale vedtekter</li>
        </ul>
        <p>
          Sett deg godt inn i disse dokumentene før du starter byggingen. De gir blant annet svar på
        </p>
        <ul>
          <li>hva du har lov til å bygge på eiendommen din</li>
          <li>hvor du har lov til å bygge på eiendommen din</li>
          <li>hvor mye du har lov til å bygge på eiendommen din</li>
        </ul>
        <p>
          Husk at det er du som er ansvarlig for at alle lover og regler blir fulgt når du bygger.
          Kontakt kommunen om du er usikker på om du kan bygge uten å søke.
        </p>
        <Primitives.Heading.H3>Start nå og fullfør senere</Primitives.Heading.H3>
        <p>
          De første spørsmålene kan du svare på uten å ha situasjonskart eller reguleringsplan
          tilgjengelig. Du kan komme tilbake og fullføre veiviseren når du har fått alt du trenger
          fra kommunen. Er du usikker på hva du skal svare, kan du gå videre i veiviseren ved å
          klikke ”Neste”.
        </p>
        <Primitives.Heading.H3>Oppsummering</Primitives.Heading.H3>
        <p>
          Når du er ferdig får du vite om du må søke eller ikke. For å se hva du har svart på de
          ulike spørsmålene kan du gå til &quot;Vis alle spørsmål&quot;. Hvis du ønsker, kan du
          skrive ut denne oversikten. Den gjør det også enkelt å se om det er spørsmål du bør ta opp
          med kommunen.
        </p>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
