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
        <Primitives.Heading.H1>Bygg uten å søke: Frittliggende bygning</Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Skal du bygge garasje, hagebod eller en annen frittliggende bygning? Svar på spørsmålene i denne veiviseren for å finne ut om du:
          <ul>
            <li>må sende byggesøknad til kommunen</li>
            <li>må søke om dispensasjon</li>
            <li>kan tilpasse bygningen slik at du slipper å søke</li>
          </ul>
          Du vil bruke omtrent 20-30 minutter.
        </Primitives.Paragraphs.P>

        <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Før du begynner er det lurt å kontakte kommunen for å få tak i:
          <ol>
            <li>Situasjonskart for din eiendom</li>
            <li>Reguleringsplan</li>
            <li>Kommuneplanens arealdel</li>
            <li>Kommunale vedtekter</li>
          </ol>
          Sett deg godt inn i disse dokumentene før du starter byggingen. De gir blant annet svar på:
          <ul>
            <li>hva du har lov til å bygge på eiendommen din</li>
            <li>hvor du har lov til å bygge på eiendommen din</li>
            <li>hvor mye du har lov til å bygge på eiendommen din</li>
          </ul>
          Husk at det er du som er ansvarlig for at alle lover og regler blir fulgt når du bygger.
          Kontakt kommunen om du er usikker på om du kan bygge uten å søke.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
         Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere. Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Har du funnet ut det du trenger?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren! Du får hjelp til hvert spørsmål underveis.
        </Primitives.Paragraphs.P>
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
