import { WizardDefinition } from 'losen';

const data: WizardDefinition = {
  meta: {
    title: 'Bygg uten å søke',
    name: 'bus',
  },
  schema: [
    {
      id: 'page4',
      type: 'Page',
      heading: 'Bruk av bygningen',
      children: [
        {
          id: 'usesType',
          property: 'usesType',
          type: 'Radio',
          heading: 'Hvilken type bygning skal du bygge?',
          options: [
            {
              id: 'usesType.garasje',
              type: 'Answer',
              heading: 'Garasje eller carport',
              value: 'garasje',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/garasje.png',
                alt: 'Garasje',
              },
            },
            {
              id: 'usesType.bod',
              type: 'Answer',
              heading: 'Hagestue, bod eller drivhus',
              value: 'bod',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/anneks_flerbruk.png',
                alt: 'Bod',
              },
            },
            {
              id: 'usesType.hobby',
              type: 'Answer',
              heading: 'Verksted, atelier eller kontor',
              value: 'hobby',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/anneks.png',
                alt: 'Verksted, atelier eller kontor',
              },
            },
            {
              id: 'usesType.pergola',
              type: 'Answer',
              heading: 'Frittliggende pergola',
              value: 'pergola',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/lysthus.png',
                alt: 'Pergola ',
              },
            },
            {
              id: 'usesType.hytte',
              type: 'Answer',
              heading: 'Hytte, fritidsbolig eller anneks ',
              value: 'hytte',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/anneks.png',
                alt: 'Hytte, fritidsbolig eller anneks ',
              },
            },
          ],
        },
        {
          type: 'Branch',
          id: 'usesType.garasje',
          branches: [
            {
              test: {
                field: 'usesType',
                operator: 'eq',
                value: 'hytte',
              },
              children: [
                {
                  id: 'usesType.hytte.result',
                  type: 'Result',
                  heading: {
                    complete: 'Du må søke',
                    incomplete: 'Du må søke',
                    completeWithError: '',
                    incompleteWithError: '',
                  },
                  lead: {
                    complete:
                      'Hvis du skal bygge hytte, fritidsbolig eller et anneks som noen kan bo eller sove i, er du nødt til å søke. Det samme gjelder hvis du skal ha kjøkken, stue, bad, våtrom eller soverom i bygningen. Du kan få tips og råd om søknadsprosessen i vår veiledning <a target=\'_blank\' href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.',
                    incomplete:
                      'Hvis du skal bygge hytte, fritidsbolig eller et anneks som noen kan bo eller sove i, er du nødt til å søke. Det samme gjelder hvis du skal ha kjøkken, stue, bad, våtrom eller soverom i bygningen.Du kan få tips og råd om søknadsprosessen i vår veiledning <a target=\'_blank\' href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.',
                    completeWithError: '',
                    incompleteWithError: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'usesType.garasje.result',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'usesType',
                operator: 'eq',
                value: 'pergola',
              },
              children: [
                {
                  id: 'usesType.pergola.result',
                  type: 'Result',
                  heading: 'Frittliggende pergola',
                  lead: '<p><strong>Hva er en pergola?</strong></br>Begrepet pergola har ikke en klar definisjon. Tradisjonelt var pergola et byggverk med åpne tak og vegger, som skulle bli overgrodd av slyngplanter. Nå brukes pergola også om konstruksjoner med tak og vegger.</p><p><strong>Skal pergolaen ha tak og vegger, for eksempel skyvbare lameller eller i glass?</strong></br>En pergola med tak og vegger som er inntil 50 kvm, kan være unntatt søknadsplikt. <a href="https://dibk.no/garasje/">For å finne ut om du må søke, start veiviseren på nytt og velg stien «Hagestue, bod eller drivhus».</a></p><strong>Når får en pergola bebygd areal (BYA)?</strong><p>En klassisk pergola med bjelker, men uten tak, regnes aldri med i bebygd areal (BYA). Skal du sette opp en pergola med tak, vegger eller skyvbare lameller, skal arealet etter dagens regler regnes med i bebygd areal (BYA). Er reguleringsplanen for eiendommen fra før 1987, kan du i enkelte tilfeller likevel slippe å telle med dette arealet. Hør med kommunen om hva som gjelder deg.</p><strong>Usikker på om du må søke?</strong><p>Sjekk alltid kommunens planbestemmelser siden disse kan påvirke hva du kan bygge. Planene finner du på kommunens nettside. Spør alltid kommunen om du er usikker på om du må søke, eller hva planene betyr for ditt byggeprosjekt.</p>',
                },
              ],
            },
          ],
        },
        {
          id: 'sleep',
          property: 'sleep',
          type: 'Radio',
          heading: 'Skal noen bo eller sove i bygningen?',
          text: '<p>Du må søke hvis du skal ha kjøkken, stue, bad, våtrom eller soverom i bygningen. Du kan ikke bo eller sove i bygningen.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/13A_garasje_600x275.png',
            alt: 'Garasjebygning og boligbygning',
          },
          options: [
            {
              id: 'sleep.yes',
              type: 'Answer',
              heading: 'Ja, noen skal bo eller sove der',
              text: 'Ja, noen skal bo eller sove der',
              value: 'yes',
            },
            {
              id: 'sleep.no',
              type: 'Answer',
              heading: 'Nei, ingen skal bo eller sove der',
              text: 'Nei, ingen skal bo eller sove der',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'sleep.no',
          branches: [
            {
              test: {
                field: 'sleep',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'sleep.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'sleep.error.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du må sende byggesøknad til kommunen. Du kan ikke bygge før søknaden er godkjent.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'Branch',
          id: 'usesType.hobby',
          branches: [
            {
              test: {
                field: 'usesType',
                operator: 'eq',
                value: 'garasje',
              },
              children: [
                {
                  id: 'garasjeMoreRoom',
                  property: 'garasjeMoreRoom',
                  type: 'Radio',
                  heading: 'Skal det bli en bygning med flere rom?',
                  options: [
                    {
                      id: 'garasjeMoreRoom.yes',
                      type: 'Answer',
                      text: 'Ja',
                      heading: 'Ja',
                      value: 'yes',
                    },
                    {
                      id: 'garasjeMoreRoom.no',
                      type: 'Answer',
                      text: 'Nei',
                      heading: 'Nei',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'extraRoomHobbyGarasje',
                  property: 'extraRoomHobbyGarasje',
                  type: 'Radio',
                  heading:
                    'Skal noen av rommene være enten kontor, atelier, hobby, arbeidsrom eller treningsrom?',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'not',
                      },
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  options: [
                    {
                      id: 'extraRoomHobbyGarasje.yes',
                      type: 'Answer',
                      heading: 'Ja',
                      text: 'Ja',
                      value: 'yes',
                    },
                    {
                      id: 'extraRoomHobbyGarasje.no',
                      type: 'Answer',
                      text: 'Nei',
                      heading: 'Nei',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'opplysningSkillevegg',
                  type: 'Group',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'garasje',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'extraRoomHobbyGarasje',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'garasje',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        field: 'extraRoomHobbyGarasje',
                        operator: 'not',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'opplysningSkilleveggText',
                      type: 'Information',
                      text: 'Opplysning: Du må lage en gasstett skillevegg mellom garasjen og dette rommet, for å beskytte de som skal bruke rommet mot gass og eksos',
                    },
                  ],
                },
                {
                  id: 'distanceNabo',
                  property: 'distanceNabo',
                  type: 'Radio',
                  heading:
                    'Er det mindre enn 8,0 meter til nærmeste bygning på naboeiendommen?',
                  text: '<p>Da kan det være du må brannsikre de delene som er nærmere naboen enn 8,0 meter. Dette gjelder hvis f.eks. nabobygningen brukes som for eksempel hus, hytte, verksted, atelier eller kontor. Be om hjelp fra fagperson om du er usikker på om du trenger brannsikring.</p>',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'extraRoomHobbyGarasje',
                        operator: 'not',
                      },
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'eq',
                        value: 'no',
                      },
                      {
                        field: 'extraRoomHobbyGarasje',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  options: [
                    {
                      heading:
                        'Ja, det er mindre enn 8,0 meter til bygning på naboeiendommen',
                      id: 'distanceNabo.yes',
                      type: 'Answer',
                      text: 'Ja, det er mindre enn 8,0 meter til bygning på naboeiendommen',
                      value: 'yes',
                    },
                    {
                      heading:
                        'Nei, det er minst 8,0 meter til bygning på naboeiendommen',
                      id: 'distanceNabo.no',
                      type: 'Answer',
                      text: 'Nei, det er minst 8,0 meter til bygning på naboeiendommen',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'distanceNaboNotice',
                  type: 'Group',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'garasje',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'extraRoomHobbyGarasje',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'distanceNabo',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'extraRoomHobbyGarasje',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'garasje',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        field: 'distanceNabo',
                        operator: 'not',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'distanceNaboNoticeText',
                      type: 'Information',
                      text: 'Det gjelder strengere brannkrav om det blir under 8,0 meter til for eksempel et bolighus eller et verksted på naboeiendom. I så fall må du brannsikre de delene av de du bygger som blir nærmere enn 8,0 meter fra naboen bygning. Brannmotstanden må være på minst El 30 (motstandsdyktig mot brann i 30 minutter).',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'Branch',
          id: 'usesType.bod',
          branches: [
            {
              test: {
                field: 'usesType',
                operator: 'eq',
                value: 'bod',
              },
              children: [
                {
                  id: 'garasjeMoreRoom',
                  property: 'garasjeMoreRoom',
                  type: 'Radio',
                  heading: 'Skal bygningen ha flere rom?',
                  options: [
                    {
                      heading: 'Ja',
                      id: 'garasjeMoreRoom.yes',
                      type: 'Answer',
                      text: 'Ja',
                      value: 'yes',
                    },
                    {
                      heading: 'Nei',
                      id: 'garasjeMoreRoom.no',
                      type: 'Answer',
                      text: 'Nei',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'extraRoomHobbyGarasje',
                  property: 'extraRoomHobbyGarasje',
                  type: 'Radio',
                  heading:
                    'Skal noen av rommene være enten kontor, atelier, hobby, arbeidsrom eller treningsrom?',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'not',
                      },
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  options: [
                    {
                      heading: 'Ja',
                      id: 'extraRoomHobbyGarasje.yes',
                      type: 'Answer',
                      text: 'Ja',
                      value: 'yes',
                    },
                    {
                      heading: 'Nei',
                      id: 'extraRoomHobbyGarasje.no',
                      type: 'Answer',
                      text: 'Nei',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'distanceNabo',
                  property: 'distanceNabo',
                  type: 'Radio',
                  heading:
                    'Er det mindre enn 8,0 meter til nærmeste bygning på naboeiendommen?',
                  text: '<p>Da kan det være du må brannsikre de delene som er nærmere naboen enn 8,0 meter. Dette gjelder hvis f.eks. nabobygningen brukes som for eksempel hus, hytte, verksted, atelier eller kontor. Be om hjelp fra fagperson om du er usikker på om du trenger brannsikring.</p>',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'extraRoomHobbyGarasje',
                        operator: 'not',
                      },
                      {
                        field: 'garasjeMoreRoom',
                        operator: 'eq',
                        value: 'no',
                      },
                      {
                        field: 'extraRoomHobbyGarasje',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  options: [
                    {
                      heading:
                        'Ja, det er mindre enn 8,0 meter til bygning på naboeiendommen',
                      id: 'distanceNabo.yes',
                      type: 'Answer',
                      text: 'Ja, det er mindre enn 8,0 meter til slike bygninger på naboeiendommen',
                      value: 'yes',
                    },
                    {
                      heading:
                        'Nei, det er minst 8,0 meter til bygning på naboeiendommen',
                      id: 'distanceNabo.no',
                      type: 'Answer',
                      text: 'Nei, det er minst 8,0 meter til slike bygninger på naboeiendommen',
                      value: 'no',
                    },
                  ],
                },
                {
                  id: 'distanceNaboNotice',
                  type: 'Group',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'bod',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'extraRoomHobbyGarasje',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'distanceNabo',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'usesType',
                            operator: 'eq',
                            value: 'bod',
                          },
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        type: 'and',
                        clauses: [
                          {
                            field: 'garasjeMoreRoom',
                            operator: 'eq',
                            value: 'yes',
                          },
                          {
                            field: 'extraRoomHobbyGarasje',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                      {
                        field: 'distanceNabo',
                        operator: 'not',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'distanceNaboNoticeText',
                      type: 'Information',
                      text: 'Det kan gjelde strengere brannkrav for slike bygninger. Plasserer du bygningen din minst 8,0 meter fra bygning på naboeiendom er brannsikring ivaretatt. Plasseres den nærmere må du brannsikre de delene av bygningen som er nærmere naboen enn 8,0 meter. Brannmotstanden må være på minst El 30 (motstandsdyktig mot brann i 30 minutter)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'distanceNaboSmall',
          property: 'distanceNaboSmall',
          type: 'Radio',
          heading: 'Er det mindre enn 2,0 meter til bygning på naboeiendom?',
          text: '<p>Det er strengere brannkrav, hvis det på noe som helst punkt er mindre enn 2,0 meter fra det du bygger, til nærmeste bygning på naboeiendom. Da må du brannsikre de delene av bygningen som er nærmere naboen enn 2,0 meter. Dette kan gjelde både tak og vegger.</p>',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'garasjeMoreRoom',
                operator: 'not',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'hobby',
              },
              {
                type: 'and',
                clauses: [
                  {
                    field: 'garasjeMoreRoom',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'extraRoomHobbyGarasje',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
            ],
          },
          options: [
            {
              heading:
                'Ja, det er mindre enn 2,0 meter til bygning på naboeiendom',
              id: 'distanceNaboSmall.yes',
              type: 'Answer',
              text: 'Ja, det er mindre enn 2,0 meter til bygning på naboeiendom',
              value: 'yes',
            },
            {
              heading: 'Nei, det er minst 2,0 meter til bygning på naboeiendom',
              id: 'distanceNaboSmall.no',
              type: 'Answer',
              text: 'Nei, det er minst 2,0 meter til bygning på naboeiendom',
              value: 'no',
            },
          ],
        },
        {
          id: 'distanceNaboSmallNotice',
          type: 'Group',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'distanceNaboSmall',
                operator: 'not',
              },
              {
                field: 'distanceNaboSmall',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'hobby',
              },
              {
                type: 'and',
                clauses: [
                  {
                    field: 'garasjeMoreRoom',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'extraRoomHobbyGarasje',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
            ],
          },
          children: [
            {
              id: 'distanceNaboSmallNoticeText',
              type: 'Information',
              text: 'Du må plassere bygningen minst 2,0 meter fra andre bygninger på naboeiendommen, eller brannsikre de delene av bygningen som er nærmere naboen enn 2,0 meter. Brannmotstanden må være minst EI 30 (motstandsdyktig mot brann i 30 minutter).',
            },
          ],
        },
        {
          id: 'usesNabo',
          property: 'usesNabo',
          type: 'Radio',
          heading:
            'Er det mindre enn 8,0 meter til nærmeste bygning på naboeiendommen?',
          text: '<p>Da kan det være du må brannsikre de delene som er nærmere naboen enn 8,0 meter. Dette gjelder hvis f.eks. nabobygningen brukes som for eksempel hus, hytte, verksted, atelier eller kontor. Be om hjelp fra fagperson om du er usikker på om du trenger brannsikring.</p>',
          options: [
            {
              heading:
                'Ja, det er mindre enn 8,0 meter til bygning på naboeiendom',
              id: 'usesNabo.yes',
              type: 'Answer',
              text: 'Ja, det er mindre enn 8,0 meter til bygning på naboeiendom',
              value: 'yes',
            },
            {
              heading: 'Nei, det er minst 8,0 meter til bygning på naboeiendom',
              id: 'usesNabo.no',
              type: 'Answer',
              text: 'Nei, det er minst 8,0 meter til bygning på naboeiendom',
              value: 'no',
            },
          ],
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'usesType',
                operator: 'not',
              },
              {
                field: 'usesType',
                operator: 'neq',
                value: 'hobby',
              },
            ],
          },
        },
        {
          type: 'Branch',
          id: 'usesNabo.no',
          branches: [
            {
              test: {
                type: 'and',
                clauses: [
                  {
                    field: 'usesNabo',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'usesType',
                    operator: 'eq',
                    value: 'hobby',
                  },
                ],
              },
              children: [
                {
                  id: 'usesNabo.group',
                  type: 'Group',
                  children: [
                    {
                      id: 'usesNabo.msg',
                      type: 'Information',
                      text: 'Det kan gjelde strengere brannkrav for slike bygninger. Plasserer du bygningen din minst 8,0 meter fra bygning på naboeiendom er brannsikring ivaretatt. Plasseres den nærmere må du brannsikre de delene av bygningen som er nærmere naboen enn 8,0 meter. Brannmotstanden må være på minst El 30 (motstandsdyktig mot brann i 30 minutter)',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page1',
      type: 'Page',
      heading: 'Om eiendommen',
      children: [
        {
          id: 'bebygd',
          property: 'bebygd',
          type: 'Radio',
          heading: 'Er eiendommen bebygd?',
          text: '<p>For å slippe å søke må eiendommen din være bebygd. Eiendommen din er bebygd hvis det for eksempel er et bolighus eller hytte på eiendommen fra før.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/05_garasje_600x275.png',
            alt: 'Illustrasjon av et hus',
          },
          options: [
            {
              id: 'bebygd.yes',
              type: 'Answer',
              heading: 'Ja, eiendommen er bebygd',
              value: 'yes',
            },
            {
              id: 'bebygd.no',
              type: 'Answer',
              heading: 'Nei, eiendommen er ikke bebygd',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'bebygd.no',
          branches: [
            {
              test: {
                field: 'bebygd',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'ikkeBebygd',
                  type: 'Error',
                  children: [
                    {
                      id: 'ikkeBebygd',
                      type: 'Text',
                      warning: true,
                      text: 'Du må sende byggesøknad til kommunen. Du kan ikke bygge før søknaden er godkjent.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'regplan',
          property: 'regplan',
          type: 'Radio',
          heading: 'Er eiendommen regulert?',
          text: '<p>Sjekk med kommunen om eiendommen din er regulert i enten kommuneplan, kommunedelplan eller reguleringsplan. Du kan som regel finne ut dette på kommunens nettsted.</p>',
          options: [
            {
              id: 'regplan.yes',
              type: 'Answer',
              heading: 'Ja, det finnes en reguleringsplan',
              value: 'yes',
            },
            {
              id: 'regplan.no',
              type: 'Answer',
              heading: 'Nei, det finnes ikke en reguleringsplan',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'regplan.no',
          branches: [
            {
              test: {
                field: 'regplan',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'regplan.yes.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'regplan.yes.error.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du trenger som regel en dispensasjon for å bygge noe på en eiendom hvor det ikke finnes en reguleringsplan. Hør med kommunen om hva det er lov å gjøre på eiendommen.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'lnfArea',
          property: 'lnfArea',
          type: 'Radio',
          heading:
            'Skal du bygge i et område regulert til landbruks-, natur- og friluftsformål eller reindrift? (LNF-område)',
          text: 'Det er begrensninger på hva du kan bygge i områder som er regulerte til landbruk, natur og friluftsformål samt reindrift. Dette kalles LNF-områder eller LNFR-områder. Du finner som regel informasjon om dette i kommuneplanens arealdel.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/17_garasje_600x275.png',
            alt: 'Fire sauer',
          },
          options: [
            {
              id: 'lnfArea.yes',
              type: 'Answer',
              heading: 'Ja, jeg skal bygge i et LNF-område',
              value: 'yes',
            },
            {
              id: 'lnfArea.no',
              type: 'Answer',
              heading: 'Nei, jeg skal ikke bygge i et LNF-område',
              value: 'no',
            },
          ],
        },
        {
          id: 'lnfBuilding',
          property: 'lnfBuilding',
          type: 'Radio',
          heading: 'Skal du sette opp en landbruksbygning?',
          text: '<p>I LNF-områder er det bare tillatt å sette opp bygninger som har direkte tilknytning til landbruk eller stedbunden næring (tradisjonell landbruksvirksomhet).</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/18_garasje_600x275.png',
            alt: 'Garasje med traktor inni',
          },
          summary: 'Se eksempler',
          details:
            '<p>Landbruksbygninger som kan være tillatt er:</p><ul><li>Naust eller rorbu som er nødvendige for landbruk</li><li>Hageveksthus som er knyttet til produksjon på gårdsbruk</li><li>Salgslokale som i hovedsak brukes til salg av egne gårdsprodukter</li><li>Garasje som bare brukes til landbruksformål</li></ul><p>Er du usikker på om bygningen din er en landbruksbygning, må du kontakte kommunen. Er det ikke en landbruksbygning, kan du også høre med kommunen om det er mulig å søke om dispensasjon.</p>',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'lnfArea',
                operator: 'not',
              },
              {
                field: 'lnfArea',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          options: [
            {
              heading: 'Ja, jeg skal sette opp landbruksbygning',
              id: 'lnfBuilding.yes',
              type: 'Answer',
              text: 'Ja, jeg skal sette opp landbruksbygning',
              value: 'yes',
            },
            {
              heading: 'Nei, jeg skal ikke sette opp landbruksbygning',
              id: 'lnfBuilding.no',
              type: 'Answer',
              text: 'Nei, jeg skal ikke sette opp en landbruksbygning',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'lnfBuilding.no',
          branches: [
            {
              test: {
                field: 'lnfBuilding',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'lnfBuilding.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'lnfBuilding.error.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du trenger dispensasjon. Dispensasjonen må være innvilget før du kan bygge det du ønsker i et LNF-område. Ta kontakt med kommunen for å høre om mulighetene for å få dispensasjon.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page2',
      type: 'Page',
      heading: 'Størrelse på bygningen',
      children: [
        {
          id: 'buildingSize',
          property: 'buildingSize',
          type: 'Radio',
          heading: 'Hvor stort blir det nye du skal bygge?',
          text: 'Du må søke hvis det du bygger får et samlet bruksareal (BRA) eller bebygd areal (BYA) som er større enn 50 kvadratmeter.',
          options: [
            {
              heading: 'Større enn 70 m<sup>2</sup>',
              id: 'buildingSize.yesand',
              type: 'Answer',
              text: 'Større enn 70 m<sup>2</sup>',
              value: 'yesand',
            },
            {
              heading: 'Mellom 50-70 m<sup>2</sup>',
              id: 'buildingSize.yesbut',
              type: 'Answer',
              text: 'Mellom 50-70 m<sup>2</sup>',
              value: 'yesbut',
            },
            {
              heading: 'Under 50 m<sup>2</sup>',
              id: 'buildingSize.no',
              type: 'Answer',
              text: 'Under 50 m<sup>2</sup>',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'buildingSize.no',
          branches: [
            {
              test: {
                field: 'buildingSize',
                operator: 'eq',
                value: 'yesand',
              },
              children: [
                {
                  id: 'tooBigbuildingSize.msg1',
                  type: 'Result',
                  heading: 'Du må søke',
                  lead: '<p>Er bygningen større enn 70 kvadratmeter må du bruke ansvarlige foretak i hele søknads- og byggeprosessen. Du kan ikke bygge før søknaden er godkjent. </p><p>Du kan lese mer om søknadsprosessen i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.</p>',
                },
              ],
            },
            {
              test: {
                field: 'buildingSize',
                operator: 'eq',
                value: 'yesbut',
              },
              children: [
                {
                  id: 'tooBigbuildingSize.msg2',
                  type: 'Result',
                  heading: 'Du må søke',
                  lead: '<p>Er bygningen mellom 50-70 kvadratmeter må du sende byggesøknad til kommunen. Du kan ikke bygge før søknaden er godkjent. <br> Du kan få tips og råd til søknadsprosessen i <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">denne kortfilmen</a> og i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>. </p><p>Skjema for nabovarsling byggesøknad finner du på siden <a target=‘blank’ href="https://dibk.no/bygge-selv/soknadsskjema-for-mindre-byggeprosjekter-pa-boligeiendom/">“Søknadsskjemaer for mindre byggeprosjekter på boligeiendom“</a>.</p>',
                },
              ],
            },
          ],
        },
        {
          id: 'buildingFloors',
          property: 'buildingFloors',
          type: 'Radio',
          heading: 'Skal bygningen ha kjeller, loft eller takterrasse?',
          text: '<p>Du har kun lov å bygge én etasje uten å søke. Du må søke hvis du vil ha kjeller, loft eller takterrasse. Du kan likevel ha et lite kryploft uten at du trenger å søke.</p><p>Bygningen kan ikke ligge under terreng.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/12_garasje_600x275.png',
            alt: 'Kun en etasje',
          },
          options: [
            {
              id: 'buildingFloors.yes',
              type: 'Answer',
              heading: 'Ja',
              value: 'yes',
            },
            {
              id: 'buildingFloors.no',
              type: 'Answer',
              heading: 'Nei',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'buildingFloors.yes',
          branches: [
            {
              test: {
                field: 'buildingFloors',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'buildingFloors.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'buildingFloors.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du må sende byggesøknad til kommunen om du vil ha kjeller, loft, takterrasse eller hvis bygningen skal ligge under terreng. Du kan ikke bygge før søknaden er godkjent.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page3',
      type: 'Page',
      heading: 'Plassering på tomten',
      children: [
        {
          id: 'buildingsDistance',
          property: 'buildingsDistance',
          type: 'Radio',
          heading:
            'Skal bygningen plasseres minst 1,0 meter fra andre bygninger på eiendommen din?',
          text: '<p>Det du bygger må plasseres minst 1,0 meter fra andre bygninger på eiendommen din.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/07_garasje_600x275.png',
            alt: 'Illustrasjon av et hus',
          },
          options: [
            {
              id: 'buildingsDistance.yes',
              type: 'Answer',
              heading:
                'Ja, det blir minst 1,0 meter til andre bygninger på eiendommen min',
              value: 'yes',
            },
            {
              id: 'buildingsDistance.no',
              type: 'Answer',
              heading: 'Nei, det blir mindre enn 1,0 meter til andre bygninger',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'buildingsDistance.no',
          branches: [
            {
              test: {
                field: 'buildingsDistance',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'buildingsDistance.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'buildingsDistance.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du må plassere det du bygger minst 1,0 meter fra andre bygninger på eiendommen din.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'neighborDistance',
          property: 'neighborDistance',
          type: 'Radio',
          heading:
            'Skal det du bygger plasseres minst 1,0 meter fra nabogrensa?',
          text: '<p>Du må søke hvis det du bygger på noe som helst punkt er nærmere enn 1,0 meter fra nabogrensa.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/08_garasje_600x275.png',
            alt: 'Illustrasjon av et hus',
          },
          options: [
            {
              id: 'neighborDistance.yes',
              type: 'Answer',
              heading:
                'Ja, det jeg bygger skal plasseres minst 1,0 meter fra nabogrensa',
              value: 'yes',
            },
            {
              id: 'neighborDistance.no',
              type: 'Answer',
              heading:
                'Nei, det jeg bygger skal plasseres nærmere enn 1,0 meter fra nabogrensa',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'neighborDistance.no',
          branches: [
            {
              test: {
                field: 'neighborDistance',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'neighborDistance.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'neighborDistance.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du må plassere det du bygger minst 1,0 fra nabogrensa eller sende byggesøknad til kommunen. Du kan ikke bygge før søknaden er godkjent.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'drainagePlacement',
          property: 'drainagePlacement',
          type: 'Radio',
          heading: 'Skal du bygge over vann- og avløpsledninger?',
          text: '<p>Du kan ikke plassere det du bygger over vann- og avløpsledninger. Kommunen må ha tilgang til disse ledningene for vedlikehold og reparasjon.</p>Du må derfor passe på: <ul><li>at du bruker et oppdatert kart hvor alle ledninger vises</li><li>å sjekke om det finnes lokale regler som fastsetter hvor langt unna ledninger det er lov å bygge</li></ul><p>Ta kontakt med kommunen om du er usikker på hvor ledningene er.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/16_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              id: 'drainagePlacement.yes',
              type: 'Answer',
              heading: 'Ja, jeg skal bygge over vann- og avløpsledninger',
              value: 'yes',
            },
            {
              id: 'drainagePlacement.no',
              type: 'Answer',
              heading: 'Nei, jeg skal ikke bygge over vann- og avløpsledninger',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'drainagePlacement.yes',
          branches: [
            {
              test: {
                field: 'drainagePlacement',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'drainagePlacement.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'drainagePlacement.msg',
                      type: 'Text',
                      text: 'Du kan ikke bygge over vann- og avløpsledninger. Du må plassere det du bygger et annet sted eller kontakte kommunen for hjelp til å finne alternativ plassering.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page5',
      type: 'Page',
      heading: 'Avstander og høyder',
      children: [
        {
          id: 'road',
          type: 'Group',
          heading: 'Nærhet til offentlig vei',
          text: '<p>Du bygger i nærheten av offentlig vei hvis det er mindre enn:<ul><li>15 meter til gang- og sykkelvei</li><li>15 meter til kommunal vei</li><li>50 meter til fylkesvei</li><li>100 meter til riksvei (50 meter hvis området er uregulert)</li></ul>Avstanden måles fra midtlinjen i kjørebanen.</p>',
          children: [
            {
              id: 'roadDistanceImage',
              type: 'Image',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/40_garasje_600x275.png',
                alt: 'Illustrasjon som viser avstand til veien',
              },
            },
            {
              id: 'roadDistance',
              property: 'roadDistance',
              type: 'Radio',
              heading: 'Skal du bygge i nærheten av offentlig vei?',
              options: [
                {
                  heading: 'Ja',
                  id: 'roadDistance.yes',
                  type: 'Answer',
                  text: 'Ja',
                  value: 'yes',
                },
                {
                  heading: 'Nei',
                  id: 'roadDistance.no',
                  type: 'Answer',
                  text: 'Nei',
                  value: 'no',
                },
              ],
            },
            {
              type: 'Branch',
              id: 'roadDistance.no',
              branches: [
                {
                  test: {
                    field: 'roadDistance',
                    operator: 'eq',
                    value: 'yes',
                  },
                  children: [
                    {
                      id: 'roadDistanceWithRegplan',
                      property: 'roadDistanceWithRegplan',
                      type: 'Radio',
                      heading:
                        'Kan du likevel velge plasseringen du ønsker deg?',
                      text: 'Se etter byggegrense mot vei i reguleringsplan eller i kommuneplanens arealdel. Hvis plasseringen til bygningen ikke er i strid med denne byggegrensa, kan du plassere bygningen der du ønsker.</p><p>Er det ikke oppgitt byggegrense mot vei i planene? Sjekk hvilket årstall reguleringsplanen din er vedtatt, og finn byggegrensen i tabellen under. Vil du bygge nærmere enn dette, må du søke om dispensasjon.</p><p>Du kan lese mer om byggegrense mot offentlig vei i <a href="https://lovdata.no/dokument/NL/lov/1963-06-21-23#KAPITTEL_5">kapittel 5 i veglova</a>.</p><table> <thead> <tr> <th>Tidsrom</th> <th>Avstand til kommunal vei</th> <th>Avstand til fylkesvei</th> <th>Avstand til riksvei</th> <th>Avstanden måles fra</th> </tr> </thead> <tbody> <tr> <td>1912 - 1931</td> <td>3,5 meter</td> <td>3,5 meter</td> <td>3,5 meter</td> <td>Veikant</td> </tr> <tr> <td>1931 - 1938</td> <td>5,0 meter</td> <td>5,0 meter</td> <td>5,0 meter</td> <td>Veikant</td> </tr> <tr> <td>1938 - 1964</td> <td>7,5 meter</td> <td>7,5 meter</td> <td>7,5 meter</td> <td>Veikant</td> </tr> <tr> <td>1964 - 31. juni 1996</td> <td>12,5 meter</td> <td>12,5 meter</td> <td>30,0 meter</td> <td>Veiens midtlinje</td> </tr> <tr> <td>1. juli 1996 - 31. desember 2009</td> <td>15,0 meter</td> <td>15,0 meter</td> <td>50,0 meter</td> <td>Veiens midtlinje</td> </tr> <tr> <td>1. januar 2010 - nå</td> <td>15,0 meter</td> <td>50,0 meter</td> <td>50,0 meter</td> <td>Veiens midtlinje</td> </tr> </tbody></table>',
                      options: [
                        {
                          heading: 'Ja, jeg bygger langt nok unna vei',
                          id: 'roadDistanceWithRegplan.yes',
                          type: 'Answer',
                          text: 'Ja, jeg bygger langt nok unna vei',
                          value: 'yes',
                        },
                        {
                          heading: 'Nei, jeg bygger ikke langt nok unna vei',
                          id: 'roadDistanceWithRegplan.no',
                          type: 'Answer',
                          text: 'Nei, jeg bygger ikke langt nok unna vei',
                          value: 'no',
                        },
                      ],
                      hidden: {
                        type: 'or',
                        clauses: [
                          {
                            field: 'roadDistance',
                            operator: 'not',
                          },
                          {
                            field: 'roadDistance',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'Branch',
              id: 'roadDistanceWithRegplan.no',
              branches: [
                {
                  test: {
                    type: 'and',
                    clauses: [
                      {
                        field: 'roadDistance',
                        operator: 'eq',
                        value: 'yes',
                      },
                      {
                        field: 'roadDistanceWithRegplan',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'roadDistanceWithRegplan.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'roadDistanceWithRegplan.msg',
                          type: 'Text',
                          warning: true,
                          text: 'Du må søke om dispensasjon fra byggegrense mot offentlig vei. Gjelder det en fylkesvei eller en riksvei, kan du <a target=\'_blank\' href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/soknad-om-dispensasjon-fra-byggegrenser/send-inn-soknad-om-dispensasjon-fra-byggegrenser">søke digitalt til Statens Vegvesen</a>. Gjelder det en kommunal vei, sender du inn søknad til kommunen din.  ',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'Branch',
              id: 'roadDistanceWithRegplan.yes',
              branches: [
                {
                  test: {
                    field: 'regplan',
                    operator: 'eq',
                    value: 'no',
                  },
                  children: [
                    {
                      id: 'roadDistanceWithoutRegplan.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'roadDistanceWithoutRegplan.msg',
                          type: 'Text',
                          warning: true,
                          text: 'Ønsker du å bygge nærmere offentlig vei i uregulert område enn avstandene som er nevnt, må du søke om dispensasjon.',
                        },
                      ],
                      hidden: {
                        type: 'or',
                        clauses: [
                          {
                            field: 'roadDistance',
                            operator: 'not',
                          },
                          {
                            field: 'roadDistance',
                            operator: 'eq',
                            value: 'no',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'flood',
          property: 'flood',
          type: 'Radio',
          heading: 'Skal du bygge i et flom- eller skredutsatt område?',
          text: '<p>Det kan være begresninger på hva du kan bygge i områder hvor det er fare forfor eksempel ras, flom, stormflo og skred. For eksempel kan et kvikkleireskred bli utløst av veldig små terrenginngrep. Usikker på om du bor i et slikt område? Sjekk reguleringsplan, kommuneplan og hør med kommunen.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/25_garasje_600x275.png',
            alt: 'Illustrasjon som viser avstand til veien',
          },
          options: [
            {
              heading: 'Ja',
              id: 'flood.yes',
              type: 'Answer',
              text: 'Ja',
              value: 'yes',
            },
            {
              heading: 'Nei',
              id: 'flood.no',
              type: 'Answer',
              text: 'Nei',
              value: 'no',
            },
          ],
        },
        {
          id: 'floodarea',
          property: 'floodarea',
          type: 'Radio',
          heading: 'Kan du likevel velge plasseringen du ønsker deg?',
          text: 'Sjekk reguleringsplanen eller kommuneplanens arealdel for informasjon om du likevel kan bygge der du ønsker. Finner du ikke informasjonen der, må du høre med kommunen.',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'flood',
                operator: 'not',
              },
              {
                field: 'flood',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          options: [
            {
              heading:
                'Ja, jeg har avklart med kommunen at jeg likevel kan bygge der jeg ønsker',
              id: 'floodarea.yes',
              type: 'Answer',
              text: 'Ja, jeg har avklart med kommunen at jeg likevel kan bygge der jeg ønsker',
              value: 'yes',
            },
            {
              heading: 'Nei, det er fare for flom- eller skred i området',
              id: 'floodarea.no',
              type: 'Answer',
              text: 'Nei, det er fare for flom- eller skred i området',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'floodarea.no',
          branches: [
            {
              test: {
                type: 'and',
                clauses: [
                  {
                    field: 'flood',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'floodarea',
                    operator: 'eq',
                    value: 'no',
                  },
                ],
              },
              children: [
                {
                  id: 'flood.group.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'flood.group.error.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Det kan være begrensninger på hva du har lov til å bygge i et slikt område. Ta kontakt med kommunen for informasjon om hva du har lov å bygge på eiendommen.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'sea',
          type: 'Group',
          heading: 'Nærhet til sjøen',
          text: '<p>Det er i utgangspunktet forbudt å bygge nærmere enn 100 meter fra sjøen. Dette området kalles 100-metersbeltet. Avstanden måles fra alminnelig høyvannsstand.</p><p>Det kan også være begrensninger på hva du kan bygge nærmere enn 100 meter fra elver og innsjøer (vassdrag).</p><p>Svaret finner du i reguleringsplan eller i kommuneplanens arealdel.</p>',
          children: [
            {
              id: 'seaDistanceImage',
              type: 'Image',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/19_garasje_600x275.png',
                alt: 'Illustrasjon som viser avstand til sjøen',
              },
            },
            {
              id: 'seaDistance',
              property: 'seaDistance',
              type: 'Radio',
              heading: 'Skal du bygge nærmere enn 100 meter fra sjøen?',
              options: [
                {
                  heading: 'Ja, jeg skal bygge nærmere sjøen',
                  id: 'seaDistance.yes',
                  type: 'Answer',
                  text: 'Ja, jeg skal bygge nærmere sjøen',
                  value: 'yes',
                },
                {
                  heading: 'Nei, jeg skal bygge minst 100 meter fra sjøen',
                  id: 'seaDistance.no',
                  type: 'Answer',
                  text: 'Nei, jeg skal bygge minst 100 meter fra sjøen',
                  value: 'no',
                },
              ],
            },
            {
              id: 'seaDistanceOk',
              property: 'seaDistanceOk',
              type: 'Radio',
              heading: 'Kan du likevel velge plasseringen du ønsker deg?',
              text: 'Kommunen kan ha fastsatt en annen byggegrense i 100-metersbeltet. Denne finner du i reguleringsplanen eller i kommuneplanens arealdel. Hvis plasseringen til bygningen ikke er i strid med denne byggegrensa, kan du bygge. Ta kontakt med kommunen om du er usikker på hva og hvor du kan bygge.',
              options: [
                {
                  heading:
                    'Ja, det finnes en annen byggegrense for 100-metersbeltet som jeg holder meg innenfor',
                  id: 'seaDistanceOk.yes',
                  type: 'Answer',
                  text: 'Ja, det finnes en annen byggegrense for 100-metersbeltet som jeg holder meg innenfor',
                  value: 'yes',
                },
                {
                  heading:
                    'Nei, jeg kan ikke plassere bygningen der jeg ønsker',
                  id: 'seaDistanceOk.no',
                  type: 'Answer',
                  text: 'Nei, jeg kan ikke plassere bygningen der jeg ønsker',
                  value: 'no',
                },
              ],
              hidden: {
                type: 'or',
                clauses: [
                  {
                    field: 'seaDistance',
                    operator: 'not',
                  },
                  {
                    field: 'seaDistance',
                    operator: 'eq',
                    value: 'no',
                  },
                ],
              },
            },
            {
              type: 'Branch',
              id: 'seaDistanceOk.no',
              branches: [
                {
                  test: {
                    type: 'and',
                    clauses: [
                      {
                        field: 'seaDistance',
                        operator: 'eq',
                        value: 'yes',
                      },
                      {
                        field: 'seaDistanceOk',
                        operator: 'eq',
                        value: 'no',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'seaDistanceOk.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'seaDistanceOk.msg',
                          type: 'Text',
                          warning: true,
                          text: 'Du må søke om dispensasjon. Dispensasjonen må være innvilget før du kan bygge i 100-metersbeltet. Ta kontakt med kommunen for å høre om mulighetene for å få innvilget en slik dispensasjon.',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'railroad',
          type: 'Group',
          heading: 'Nærhet til jernbanespor',
          children: [
            {
              id: 'railroadDistance',
              property: 'railroadDistance',
              type: 'Radio',
              heading:
                'Skal du bygge nærmere enn 30 meter til et jernbanespor?',
              text: '<p>Det må være minst 30 meter til nærmeste jernbanespor. Dette gjelder både togspor, t-banespor og trikkespor. Avstanden måles fra nærmeste spors midtlinje.</p>',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/26_garasje_600x275.png',
                alt: 'Illustrasjon',
              },
              options: [
                {
                  heading:
                    'Ja, jeg skal bygge nærmere enn 30 meter til et jernbanespor',
                  id: 'railroadDistance.no',
                  type: 'Answer',
                  text: 'Ja, jeg skal bygge nærmere enn 30 meter til et jernbanespor',
                  value: 'no',
                },
                {
                  heading:
                    'Nei, jeg skal ikke bygge nærmere enn 30 meter til et jernbanespor',
                  id: 'railroadDistance.yes',
                  type: 'Answer',
                  text: 'Nei, jeg skal ikke bygge nærmere enn 30 meter til et jernbanespor',
                  value: 'yes',
                },
              ],
            },
            {
              id: 'railroadDistanceOk',
              property: 'railroadDistanceOk',
              type: 'Radio',
              heading:
                'Har du fått tillatelse til å bygge nærmere enn 30 meter?',
              text: '<p>For å bygge nærmere enn 30 meter fra nærmeste spors midtlinje, må du søke Bane NOR om tillatelse. Dette må du gjøre selv om det finnes en nærmere byggegrense mot jernbane i reguleringsplan.</p><p>Les mer om byggegrense mot jernbane hos <a href="http://www.banenor.no/Sikkerhet/Byggegrense/">Bane NOR.</a></p></p>',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/27_garasje_600x275.png',
                alt: 'Illustrasjon',
              },
              options: [
                {
                  heading:
                    'Ja, jeg har fått tillatelse til å bygge nærmere enn 30 meter',
                  id: 'railroadDistanceOk.yes',
                  type: 'Answer',
                  text: 'Ja, jeg har fått tillatelse til å bygge nærmere enn 30 meter',
                  value: 'yes',
                },
                {
                  heading: 'Nei, jeg må søke om tillatelse for å bygge nærmere',
                  id: 'railroadDistanceOk.no',
                  type: 'Answer',
                  text: 'Nei, jeg må søke om tillatelse for å bygge nærmere',
                  value: 'no',
                },
              ],
              hidden: {
                type: 'or',
                clauses: [
                  {
                    field: 'railroadDistance',
                    operator: 'not',
                  },
                  {
                    field: 'railroadDistance',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
            },
            {
              id: 'railroadDistanceOk.error',
              type: 'Group',
              hidden: {
                type: 'or',
                clauses: [
                  {
                    field: 'railroadDistanceOk',
                    operator: 'not',
                  },
                  {
                    field: 'railroadDistance',
                    operator: 'eq',
                    value: 'yes',
                  },
                  {
                    field: 'railroadDistanceOk',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
              children: [
                {
                  heading: 'Du må søke om tillatelse for å bygge nærmere',
                  id: 'railroadDistanceOk.msg',
                  type: 'Information',
                  text: 'Du må kontakte <a href="http://www.banenor.no/Om-oss/Kontakt-oss/">Bane NOR</a> og søke om tillatelse til å bygge nærmere enn 30 meter fra nærmeste spors midtlinje.',
                },
              ],
            },
          ],
        },
        {
          id: 'exitRoad',
          property: 'exitRoad',
          type: 'Radio',
          heading: 'Trenger du ny eller endret avkjørsel mot vei?',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'usesType',
                operator: 'not',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'hytte',
              },
            ],
          },
          text: '<p>Du kan ha behov for ny eller endret avkjørsel mot vei hvis bygningen vil føre til dårligere siktforhold eller gi økt trafikk til eiendommen. Bygger du i nærheten av fylkesvei eller en riksvei, kan du <a target=\'_blank\' href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/soknad-om-avkjorsel/send-inn-soknad-om-avkjorsel">søke digitalt til Statens Vegvesen.</a> Gjelder det en kommunal vei, sender du inn søknad til kommunen din.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/41_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              heading: 'Ja, jeg trenger ny eller endret avkjørsel mot vei',
              id: 'exitRoad.yes',
              type: 'Answer',
              text: 'Ja, jeg trenger ny eller endret avkjørsel mot vei',
              value: 'yes',
            },
            {
              heading:
                'Nei, jeg trenger ikke ny eller endret avkjørsel mot vei',
              id: 'exitRoad.no',
              type: 'Answer',
              text: 'Nei, jeg trenger ikke ny eller endret avkjørsel mot vei',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'exitRoad.yes',
          branches: [
            {
              test: {
                field: 'exitRoad',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'exitRoad.error',
                  type: 'Error',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'usesType',
                        operator: 'not',
                      },
                      {
                        field: 'usesType',
                        operator: 'eq',
                        value: 'hytte',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'exitRoad.msg',
                      type: 'Text',
                      warning: true,
                      heading: 'Du må skaffe godkjent avkjørsel mot vei.',
                      text: '<p>Du kan ikke bygge før du har skaffet en godkjent avkjørsel mot vei. Bygger du i nærheten av fylkesvei eller en riksvei, kan du <a target=\'_blank\' href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/soknad-om-avkjorsel/send-inn-soknad-om-avkjorsel">søke digitalt til Statens vegvesen.</a> Gjelder det en kommunal vei, sender du inn søknad til kommunen din.</p>',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'exitRoad',
          property: 'exitRoad',
          type: 'Radio',
          heading: 'Trenger du ny eller endret avkjørsel mot vei?',
          hidden: {
            type: 'or',
            clauses: [
              {
                field: 'usesType',
                operator: 'not',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'garasje',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'bod',
              },
            ],
          },
          text: '<p>Du kan ha behov for avkjørsel mot vei hvis du har hobbyverksted, atelier eller kontor. Trenger du ny eller endret avkjørsel mot kommunal vei, kontakter du kommunen. Trenger du ny eller endret avkjørsel mot riks- eller fylkesvei kan du <a target=\'_blank\' href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/soknad-om-avkjorsel/send-inn-soknad-om-avkjorsel">søke digitalt til Statens Vegvesen</a>.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/41_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              heading: 'Ja, jeg trenger ny eller endret avkjørsel mot vei',
              id: 'exitRoad.yes',
              type: 'Answer',
              text: 'Ja, jeg trenger ny eller endret avkjørsel mot vei',
              value: 'yes',
            },
            {
              heading:
                'Nei, jeg trenger ikke ny eller endret avkjørsel mot vei',
              id: 'exitRoad.no',
              type: 'Answer',
              text: 'Nei, jeg trenger ikke ny eller endret avkjørsel mot vei',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'exitRoad.yes',
          branches: [
            {
              test: {
                field: 'exitRoad',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'exitRoad.error',
                  type: 'Error',
                  hidden: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'usesType',
                        operator: 'not',
                      },
                      {
                        field: 'usesType',
                        operator: 'eq',
                        value: 'garasje',
                      },
                      {
                        field: 'usesType',
                        operator: 'eq',
                        value: 'bod',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'exitRoad.msg',
                      type: 'Text',
                      warning: true,
                      heading: 'Du må skaffe godkjent avkjørsel mot vei.',
                      text: 'Du kan ikke bygge før du har skaffet en godkjent avkjørsel mot vei. Bygger du i nærheten av en fylkesvei eller en riksvei,  kan du <a target=\'_blank\' href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/soknad-om-avkjorsel/send-inn-soknad-om-avkjorsel">søke digitalt til Statens vegvesen.</a> Gjelder det en kommunal vei, sender du inn søknad til kommunen din.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'heights',
          property: 'heights',
          type: 'Radio',
          heading:
            'Er mønehøyde maksimalt 4,0 meter, og gesimshøyde maksimalt 3.0 meter?',
          text: '<p>Mønehøyde kan maksimalt være 4,0 meter og gesimshøyde maksimalt 3,0 meter. Høydene måles vanligvis i forhold til gjennomsnittsnivået av det ferdig planerte terrenget rundt bygningen.</p><b>Hva er gesimshøyde?</b><p>Gesimshøyde er høyde til skjæringspunktet mellom ytterklednings ytre flate og taktekkingens ytre flate, oppå taket. Gesimshøyde måles fra dette punktet og til terrengets utregnete gjennomsnittsnivå rundt bygget.</p><b>Hva er mønehøyde?</b> <p>Mønehøyde er vanligvis høyden mellom to skrå flater, som ofte vil være takets høyeste punkt. Mønehøyde måles fra dette punktet og til terrengets utregnete gjennomsnittsnivå rundt bygget.</p><b>Er du usikker på hvordan å måle høyden på bygningen?</b><p>Finn mer informasjon i kapittel 4 i <a  href="https://www.regjeringen.no/globalassets/upload/kmd/boby/grad_av_utnytting.pdf">Grad av utnytting - beregnings- og måleregler (PDF)</a></p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/14A_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              heading:
                'Ja, mønehøyden er maksimalt 4,0 meter og gesimshøyden er maksimalt 3,0 meter',
              id: 'heights.yes',
              type: 'Answer',
              text: 'Ja, mønehøyden er maksimalt 4,0 meter og gesimshøyden er maksimalt 3,0 meter',
              value: 'yes',
            },
            {
              heading: 'Nei, bygningen blir høyere enn dette',
              id: 'heights.no',
              type: 'Answer',
              text: 'Nei, bygningen blir høyere enn dette',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'heights.no',
          branches: [
            {
              test: {
                field: 'heights',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'heights.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'heights.msg',
                      type: 'Text',
                      warning: true,
                      text: 'Du må ha lavere mønehøyde og gesimshøyde, eller sende byggesøknad til kommunen. Du kan ikke bygge før søknaden er godkjent.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'page6',
      type: 'Page',
      heading: 'Hvor stort kan du bygge og andre forhold',
      children: [
        {
          id: 'areaAvailable',
          property: 'areaAvailable',
          type: 'Radio',
          heading:
            'Har eiendommen din stort nok areal til bygningen du ønsker å sette opp?',
          text: '<p>Eiendommen din har en begrensning på hvor mye areal eller volum du kan ha bygninger på. Dette er som regel oppgitt i situasjonskart eller reguleringsplan som:</p> <ul><li>BYA: Bebygd areal. Se etter prosent BYA eller antall kvadratmeter BYA</li><li>BRA: Bruksareal. Se etter prosent BRA eller antall kvadratmeter BRA</li><li>TU: Tomteutnyttelse. Se etter prosent TU. Finnes kun på eldre planer</li></ul></p>For å finne ut hvor mye plass du har igjen å bygge på, må du regne ut hvor mye plass de eksisterende bygningene opptar.</p><p>Du kan ta vår veiviser <a href="http://hvorstortkandubygge.dibk.no/">Hvor stort kan du bygge</a> for å få hjelp.',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/42_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              heading:
                'Ja, eiendommen min har stort nok areal til å bygge det jeg ønsker',
              id: 'areaAvailable.yes',
              type: 'Answer',
              text: 'Ja, eiendommen min har stort nok areal til å bygge det jeg ønsker',
              value: 'yes',
            },
            {
              heading:
                'Nei, eiendommen min har ikke stort nok areal til å bygge det jeg ønsker',
              id: 'areaAvailable.no',
              type: 'Answer',
              text: 'Nei, eiendommen min har ikke stort nok areal til å bygge det jeg ønsker',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'areaAvailable.no',
          branches: [
            {
              test: {
                field: 'areaAvailable',
                operator: 'eq',
                value: 'no',
              },
              children: [
                {
                  id: 'areaAvailable.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'areaAvailable.msg',
                      type: 'Text',
                      warning: true,
                      heading:
                        'Du må sette opp en mindre bygning, eller søke om dispensasjon om å kunne bygge større. Dispensasjonen må være innvilget før du kan bygge. Ta kontakt med kommunen for å høre om mulighetene for å få innvilget en slik dispensasjon.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'other',
          property: 'other',
          type: 'Radio',
          heading:
            'Begrenser kommunale planer eller andre forhold hva du kan bygge?',
          text: '<p>Kommunale planer og andre forhold kan begrense hva som er tillatt å gjøre på eiendommen din. Du må derfor sette deg godt inn i reguleringsplan, kommuneplanens arealdel, situasjonskartet og andre dokumenter om eiendommen.</p><p>Eksempler på begrensninger er:</p><ul><li>byggegrenser som bestemmer hvor på tomta du kan bygge</li><li>strengere krav til hvor høy eller stor bygningen din kan være</li><li>strengere krav til hvor langt unna nabogrensa du kan bygge</li><li>krav til bygningens utseende, for eksempel fargevalg, takvinkel, plassering og materialvalg</li><li>verneverdige kulturminner som begrenser hvor eller hva du kan bygge</li><li>sjeldne dyre- eller plantearter som begrenser hvor eller hva du kan bygge</li><li>avstand til kraftlinjer</li></ul><p>Kommunen kan hjelpe deg å finne frem til alle relevante dokumenter.</p>',
          image: {
            url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-garasje/43_garasje_600x275.png',
            alt: 'Illustrasjon',
          },
          options: [
            {
              heading: 'Ja, det finnes andre begrensninger',
              id: 'other.yes',
              type: 'Answer',
              text: 'Ja, det finnes andre begrensninger',
              value: 'yes',
            },
            {
              heading: 'Nei, det finnes ikke andre begrensninger',
              id: 'other.no',
              type: 'Answer',
              text: 'Nei, det finnes ikke andre begrensninger',
              value: 'no',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'other.yes',
          branches: [
            {
              test: {
                field: 'other',
                operator: 'eq',
                value: 'yes',
              },
              children: [
                {
                  id: 'other.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'other.msg',
                      type: 'Text',
                      warning: true,
                      heading:
                        'Ta kontakt med kommunen for å høre hva du kan gjøre uten å søke, og om mulighetene for dispensasjon.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Branch',
      id: 'page6',
      branches: [
        {
          test: {
            type: 'or',
            clauses: [
              {
                field: 'bebygd',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'buildingFloors',
                operator: 'eq',
                value: 'yes',
              },
              {
                field: 'buildingsDistance',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'neighborDistance',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'usesType',
                operator: 'eq',
                value: 'hytte',
              },
              {
                field: 'sleep',
                operator: 'eq',
                value: 'yes',
              },
              {
                field: 'floodarea',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'heights',
                operator: 'eq',
                value: 'no',
              },
            ],
          },
          children: [
            {
              id: 'applicationResult',
              type: 'Result',
              heading: {
                complete: 'Du må søke',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError: 'Du har ikke svart på alle spørsmålene',
                completeWithError: 'Du har ikke svart på alle spørsmålene',
              },
              lead: {
                complete:
                  '<p>Svarene dine viser at du må søke. Sjekk oppsummeringen under for å finne ut om du trenger å sende inn byggesøknad, dispensasjon eller om du trenger andre tillatelser.</p><p>Er du i tvil om du har svart riktig? Ta en utskrift av svarene dine og kontakt kommunen. De kan også fortelle deg mer om søknadsprosessen.</p><p>Husk at det er ditt ansvar at du bygger lovlig. Dersom bygningen er ulovlig kan den i verste fall rives.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke fortelle deg hva du trenger av søknader og dispensasjoner. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p><p>Du kan få tips og råd om søknadsprosessen i <a target=‘blank’ href="https://www.youtube.com/watch?v=s6oTf12Q-rY&feature=youtu.be">denne kortfilmen</a> og i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p><p>Du kan få tips og råd om søknadsprosessen i <a target=‘blank’ href="https://www.youtube.com/watch?v=s6oTf12Q-rY&feature=youtu.be">denne kortfilmen</a> og i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>.</p>',
                completeWithError:
                  '<p>Svarene dine viser at du må søke. Sjekk oppsummeringen under for å finne ut om du trenger å sende inn byggesøknad, dispensasjon eller om du trenger andre tillatelser.</p><p>Er du i tvil om du har svart riktig? Ta en utskrift av svarene dine og kontakt kommunen. De kan også fortelle deg mer om søknadsprosessen.</p><p>Husk at det er ditt ansvar at du bygger lovlig. Dersom bygningen er ulovlig kan den i verste fall rives.</p>',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'Branch',
      id: 'page6',
      branches: [
        {
          test: {
            type: 'or',
            clauses: [
              {
                field: 'regplan',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'lnfBuilding',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'roadDistanceWithRegplan',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'seaDistanceOk',
                operator: 'eq',
                value: 'no',
              },
              {
                type: 'and',
                clauses: [
                  {
                    field: 'usesType',
                    operator: 'eq',
                    value: 'hobby',
                  },
                  {
                    field: 'exitRoad',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
              {
                type: 'and',
                clauses: [
                  {
                    field: 'usesType',
                    operator: 'eq',
                    value: 'garasje',
                  },
                  {
                    field: 'exitRoad',
                    operator: 'eq',
                    value: 'yes',
                  },
                ],
              },
              {
                field: 'areaAvailable',
                operator: 'eq',
                value: 'no',
              },
              {
                field: 'other',
                operator: 'eq',
                value: 'yes',
              },
            ],
          },
          children: [
            {
              id: 'dispResult',
              type: 'Result',
              heading: {
                complete: 'Du må søke',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError: 'Du har ikke svart på alle spørsmålene',
                completeWithError: 'Du har ikke svart på alle spørsmålene',
              },
              lead: {
                complete:
                  '<p>Svarene dine viser at du må søke. Sjekk oppsummeringen under for å finne ut om du trenger å sende inn byggesøknad, dispensasjon eller om du trenger andre tillatelser. Er du i tvil om du har svart riktig? Ta en utskrift av svarene dine og kontakt kommunen. De kan også fortelle deg mer om søknadsprosessen.</p><p>Du kan få tips og råd til søknadsprosessen i kortfilmen <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Hva må til for å sende inn byggesøknad?“</a> og i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>. Skjema for nabovarsling og byggesøknad finner du på siden <a target=‘blank’ href="https://dibk.no/bygge-selv/soknadsskjema-for-mindre-byggeprosjekter-pa-boligeiendom/">“Søknadsskjemaer for mindre byggeprosjekter på boligeiendom“</a>.<p>Husk at det er ditt ansvar at du bygger lovlig. Dersom bygningen er ulovlig kan den i verste fall rives.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'hooray',
      type: 'Result',
      heading: {
        complete: 'Du kan bygge uten å søke!',
        completeWithError: 'Du har ikke svart på alle spørsmålene',
        incompleteWithError: 'Du har ikke svart på alle spørsmålene',
        incomplete: 'Du har ikke svart på alle spørsmålene',
      },
      lead: {
        complete:
          '<p>Svarene dine viser at du kan bygge uten å søke. Sjekk oppsummeringen under for å finne ut om du har svart riktig. Dette gjelder særlig  spørsmålene om kommunale planer. Disse kan begrense hva du kan gjøre på eiendommen din uten å søke. </p><p>Er du i tvil om du har svart riktig? Ta en utskrift av svarene dine og kontakt kommunen.</p><p>Du trenger ikke varsle naboene om byggingen skriftlig, men vi anbefaler likevel å snakke med dem om byggeplanene dine i forkant.</p><p>Selv om du slipper å søke, er du nødt til å informere kommunen etter at bygget er ferdig. Bruk skjemaet <a href="https://dibk.no/globalassets/blanketter_utfyllbare/alle-blanketter/5188-melding-om-bygning-eller-tilbygg-som-er-unntatt-soknadsplikt.pdf">”Melding om bygning eller tilbygg som er unntatt søknadsplikt”</a>.</p><p>Husk at det er ditt ansvar at du bygger lovlig. Dersom bygningen er ulovlig kan den i verste fall rives.</p>',
        completeWithError:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incompleteWithError:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incomplete:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
      },
    },
  ],
};

export default data;
