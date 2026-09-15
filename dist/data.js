const SCHEMAS = [
  {
    "title": "Le squelette",
    "page": 20,
    "image": "assets/20_0.png",
    "points": [
      {
        "name": "Crâne",
        "description": "Ensemble osseux de la tête qui protège le cerveau.",
        "box": [
          19.0,
          3.0,
          8.0,
          5.0
        ],
        "focus": [
          19,
          20
        ]
      },
      {
        "name": "Vertèbres cervicales",
        "description": "Portion de la colonne vertébrale située dans le cou.",
        "box": [
          28.0,
          8.0,
          12.0,
          9.0
        ],
        "focus": [
          26,
          29
        ]
      },
      {
        "name": "Vertèbres thoraciques",
        "description": "Portion de la colonne vertébrale à laquelle se rattachent les côtes.",
        "box": [
          42.0,
          8.0,
          13.0,
          9.0
        ],
        "focus": [
          47,
          36
        ]
      },
      {
        "name": "Vertèbres lombaires",
        "description": "Portion de la colonne située entre le thorax et le bassin.",
        "box": [
          58.0,
          3.0,
          13.0,
          9.0
        ],
        "focus": [
          59,
          35
        ]
      },
      {
        "name": "Vertèbres sacrées",
        "description": "Vertèbres soudées dans la région du bassin.",
        "box": [
          65.0,
          17.0,
          12.0,
          10.0
        ],
        "focus": [
          65,
          39
        ]
      },
      {
        "name": "Ilion",
        "description": "Partie supérieure de l’os du bassin indiquée sur ce schéma.",
        "box": [
          72.0,
          31.0,
          8.0,
          6.0
        ],
        "focus": [
          66,
          41
        ]
      },
      {
        "name": "Vertèbres caudales",
        "description": "Vertèbres constituant la queue.",
        "box": [
          83.0,
          31.0,
          12.0,
          10.0
        ],
        "focus": [
          78,
          48
        ]
      },
      {
        "name": "Mandibule",
        "description": "Os de la mâchoire inférieure.",
        "box": [
          1.0,
          35.0,
          13.0,
          6.0
        ],
        "focus": [
          14,
          30
        ]
      },
      {
        "name": "Omoplate",
        "description": "Os plat de l’épaule, également appelé scapula.",
        "box": [
          7.0,
          42.0,
          11.0,
          7.0
        ],
        "focus": [
          34,
          41
        ]
      },
      {
        "name": "Humérus",
        "description": "Os du bras, entre l’épaule et le coude.",
        "box": [
          8.0,
          56.0,
          10.0,
          6.0
        ],
        "focus": [
          33,
          58
        ]
      },
      {
        "name": "Radius",
        "description": "Un des deux os de l’avant-bras.",
        "box": [
          10.0,
          65.0,
          8.0,
          6.0
        ],
        "focus": [
          32,
          73
        ]
      },
      {
        "name": "Ulna (cubitus)",
        "description": "Os de l’avant-bras associé au radius.",
        "box": [
          7.0,
          72.0,
          12.0,
          9.0
        ],
        "focus": [
          34,
          74
        ]
      },
      {
        "name": "Carpe",
        "description": "Ensemble des petits os entre l’avant-bras et le métacarpe.",
        "box": [
          18.0,
          79.0,
          8.0,
          5.0
        ],
        "focus": [
          33,
          81
        ]
      },
      {
        "name": "Métacarpe",
        "description": "Région osseuse de la patte antérieure entre le carpe et les doigts.",
        "box": [
          6.0,
          84.0,
          12.0,
          6.0
        ],
        "focus": [
          31,
          85
        ]
      },
      {
        "name": "Phalanges antérieures",
        "description": "Os des doigts de la patte antérieure.",
        "box": [
          13.0,
          90.0,
          13.0,
          5.0
        ],
        "focus": [
          29,
          90
        ]
      },
      {
        "name": "Sternum",
        "description": "Ensemble osseux sur la face ventrale du thorax.",
        "box": [
          41.0,
          73.0,
          10.0,
          6.0
        ],
        "focus": [
          40,
          59
        ]
      },
      {
        "name": "Os pénien",
        "description": "Os associé à l’appareil génital du mâle, indiqué sous l’abdomen.",
        "box": [
          50.0,
          67.0,
          12.0,
          5.0
        ],
        "focus": [
          62,
          54
        ]
      },
      {
        "name": "Pubis",
        "description": "Partie ventrale du bassin indiquée sur la planche.",
        "box": [
          58.0,
          73.0,
          7.0,
          5.0
        ],
        "focus": [
          66,
          44
        ]
      },
      {
        "name": "Rotule",
        "description": "Petit os situé à l’avant de l’articulation du genou.",
        "box": [
          58.0,
          78.0,
          8.0,
          5.0
        ],
        "focus": [
          70,
          64
        ]
      },
      {
        "name": "Ischion",
        "description": "Partie postérieure de l’os du bassin.",
        "box": [
          82.0,
          47.0,
          11.0,
          6.0
        ],
        "focus": [
          68,
          46
        ]
      },
      {
        "name": "Fémur",
        "description": "Os de la cuisse, entre la hanche et le genou.",
        "box": [
          89.0,
          57.0,
          9.0,
          6.0
        ],
        "focus": [
          69,
          55
        ]
      },
      {
        "name": "Tibia",
        "description": "Os principal de la jambe, entre le genou et le tarse.",
        "box": [
          82.0,
          66.0,
          7.0,
          5.0
        ],
        "focus": [
          76,
          70
        ]
      },
      {
        "name": "Fibula (péroné)",
        "description": "Os fin de la jambe associé au tibia.",
        "box": [
          89.0,
          73.0,
          10.0,
          9.0
        ],
        "focus": [
          77,
          74
        ]
      },
      {
        "name": "Tarse",
        "description": "Ensemble osseux du jarret.",
        "box": [
          82.0,
          78.0,
          7.0,
          5.0
        ],
        "focus": [
          80,
          80
        ]
      },
      {
        "name": "Métatarse",
        "description": "Région osseuse du membre postérieur entre le tarse et les doigts.",
        "box": [
          88.0,
          85.0,
          12.0,
          6.0
        ],
        "focus": [
          79,
          85
        ]
      },
      {
        "name": "Phalanges postérieures",
        "description": "Os des doigts de la patte postérieure.",
        "box": [
          63.0,
          90.0,
          12.0,
          5.0
        ],
        "focus": [
          77,
          90
        ]
      }
    ],
    "note": "",
    "number": 1
  },
  {
    "title": "Les types de tête",
    "page": 23,
    "image": "assets/23_0.png",
    "points": [
      {
        "name": "Dolichocéphale",
        "description": "Tête allongée, plus longue que large.",
        "box": [
          1.0,
          38.0,
          34.0,
          14.0
        ],
        "focus": [
          18,
          68
        ]
      },
      {
        "name": "Brachycéphale",
        "description": "Tête courte et large, décrite sur le schéma comme aussi large que longue.",
        "box": [
          37.0,
          38.0,
          32.0,
          14.0
        ],
        "focus": [
          52,
          66
        ]
      },
      {
        "name": "Mésocéphale",
        "description": "Tête de proportions intermédiaires entre les deux autres types.",
        "box": [
          71.0,
          38.0,
          28.0,
          15.0
        ],
        "focus": [
          82,
          64
        ]
      }
    ],
    "note": "Compare les proportions des trois têtes. En interrogation, les noms et les explications sont masqués ensemble.",
    "number": 2
  },
  {
    "title": "La musculature",
    "page": 27,
    "image": "assets/27_0.png",
    "points": [
      {
        "name": "Fessiers",
        "description": "Groupe musculaire de la région de la croupe et de la hanche.",
        "box": [
          8.5,
          12.0,
          6.5,
          3.0
        ],
        "focus": [
          32,
          47
        ]
      },
      {
        "name": "Psoas",
        "description": "Muscle profond de la région lombaire, nommé au-dessus de l’arrière-train sur cette planche.",
        "box": [
          17.0,
          12.0,
          5.0,
          3.0
        ],
        "focus": [
          35,
          48
        ]
      },
      {
        "name": "Abdominaux",
        "description": "Muscles constituant la paroi de l’abdomen.",
        "box": [
          25.2,
          12.0,
          9.5,
          3.0
        ],
        "focus": [
          46,
          52
        ]
      },
      {
        "name": "Masse commune des lombes",
        "description": "Masse musculaire longeant la région lombaire.",
        "box": [
          35.0,
          12.0,
          12.5,
          6.0
        ],
        "focus": [
          46,
          41
        ]
      },
      {
        "name": "Grand dorsal",
        "description": "Large muscle du dos, représenté en arrière de l’épaule.",
        "box": [
          47.8,
          12.0,
          4.7,
          6.0
        ],
        "focus": [
          53,
          44
        ]
      },
      {
        "name": "Trapèze",
        "description": "Muscle superficiel de la région dorsale de l’épaule.",
        "box": [
          52.4,
          12.0,
          6.0,
          3.0
        ],
        "focus": [
          60,
          43
        ]
      },
      {
        "name": "Brachio-céphalique",
        "description": "Muscle allongé reliant la région de la tête et du cou au membre antérieur.",
        "box": [
          59.0,
          12.0,
          7.3,
          6.0
        ],
        "focus": [
          69,
          38
        ]
      },
      {
        "name": "Masséter",
        "description": "Muscle de la joue associé à la fermeture de la mâchoire.",
        "box": [
          67.5,
          12.0,
          6.5,
          3.0
        ],
        "focus": [
          77,
          35
        ]
      },
      {
        "name": "Temporal",
        "description": "Muscle situé sur la région temporale de la tête.",
        "box": [
          87.5,
          12.0,
          7.5,
          3.5
        ],
        "focus": [
          80,
          28
        ]
      },
      {
        "name": "Sternocéphalique",
        "description": "Muscle de la face ventrale du cou.",
        "box": [
          82.0,
          44.0,
          13.0,
          3.3
        ],
        "focus": [
          73,
          43
        ]
      },
      {
        "name": "Supraépineux",
        "description": "Muscle de la région supérieure de la scapula indiqué par le trait.",
        "box": [
          84.5,
          48.2,
          10.5,
          3.2
        ],
        "focus": [
          68,
          45
        ]
      },
      {
        "name": "Pectoral descendant",
        "description": "Muscle pectoral superficiel indiqué à l’avant du thorax.",
        "box": [
          79.8,
          52.3,
          15.0,
          3.2
        ],
        "focus": [
          70,
          54
        ]
      },
      {
        "name": "Deltoïde",
        "description": "Muscle superficiel situé sur l’épaule.",
        "box": [
          87.8,
          56.2,
          7.0,
          3.2
        ],
        "focus": [
          66,
          57
        ]
      },
      {
        "name": "Pectoral transverse",
        "description": "Muscle pectoral indiqué dans la région ventrale du thorax.",
        "box": [
          79.5,
          60.2,
          15.3,
          3.2
        ],
        "focus": [
          68,
          62
        ]
      },
      {
        "name": "Triceps brachial",
        "description": "Groupe musculaire situé à l’arrière du bras.",
        "box": [
          83.4,
          63.8,
          11.5,
          3.2
        ],
        "focus": [
          64,
          65
        ]
      },
      {
        "name": "Extenseur radial du carpe",
        "description": "Muscle de l’avant-bras dont le nom indique une action d’extension au niveau du carpe.",
        "box": [
          70.0,
          69.7,
          12.0,
          5.6
        ],
        "focus": [
          65,
          72
        ]
      },
      {
        "name": "Extenseur commun des doigts",
        "description": "Muscle de l’avant-bras associé à l’extension de plusieurs doigts.",
        "box": [
          68.0,
          76.5,
          14.0,
          5.5
        ],
        "focus": [
          64,
          79
        ]
      },
      {
        "name": "Extenseur latéral des doigts",
        "description": "Muscle extenseur des doigts situé latéralement sur l’avant-bras.",
        "box": [
          69.0,
          83.4,
          13.0,
          5.6
        ],
        "focus": [
          65,
          85
        ]
      },
      {
        "name": "Antébrachiaux craniaux",
        "description": "Groupe de muscles de la face crâniale de l’avant-bras, réuni par l’accolade.",
        "box": [
          84.4,
          76.5,
          11.0,
          5.6
        ],
        "focus": [
          65,
          78
        ]
      },
      {
        "name": "Ulnaire latéral",
        "description": "Muscle latéral de l’avant-bras indiqué au bas de la planche.",
        "box": [
          47.3,
          86.5,
          11.0,
          3.4
        ],
        "focus": [
          63,
          85
        ]
      },
      {
        "name": "Fléchisseur ulnaire du carpe",
        "description": "Muscle de l’avant-bras associé à la flexion du carpe.",
        "box": [
          49.0,
          76.7,
          9.0,
          8.8
        ],
        "focus": [
          62,
          79
        ]
      },
      {
        "name": "Antébrachiaux caudaux",
        "description": "Groupe de muscles de la face caudale de l’avant-bras, réuni par l’accolade.",
        "box": [
          34.5,
          78.5,
          10.5,
          6.0
        ],
        "focus": [
          62,
          79
        ]
      },
      {
        "name": "Pectoral ascendant",
        "description": "Muscle pectoral profond indiqué sous la partie arrière du thorax.",
        "box": [
          44.0,
          72.9,
          13.8,
          3.5
        ],
        "focus": [
          59,
          65
        ]
      },
      {
        "name": "Tenseur du fascia lata",
        "description": "Muscle de la région latérale de la cuisse agissant sur le fascia lata.",
        "box": [
          36.0,
          66.7,
          11.5,
          5.5
        ],
        "focus": [
          37,
          55
        ]
      },
      {
        "name": "Biceps fémoral",
        "description": "Large muscle superficiel de la face latérale de la cuisse.",
        "box": [
          3.0,
          52.8,
          11.0,
          3.6
        ],
        "focus": [
          28,
          55
        ]
      },
      {
        "name": "Fascia lata recouvrant le quadriceps fémoral",
        "description": "Enveloppe fibreuse indiquée sur la face latérale de la cuisse, au-dessus du quadriceps.",
        "box": [
          3.0,
          58.5,
          15.5,
          6.0
        ],
        "focus": [
          34,
          61
        ]
      },
      {
        "name": "Gastrocnémiens",
        "description": "Muscles de l’arrière de la jambe participant à la région du mollet.",
        "box": [
          3.0,
          66.4,
          12.0,
          3.5
        ],
        "focus": [
          25,
          70
        ]
      },
      {
        "name": "Jambiers caudaux",
        "description": "Groupe musculaire de la face caudale de la jambe.",
        "box": [
          3.0,
          70.9,
          7.0,
          5.6
        ],
        "focus": [
          24,
          76
        ]
      },
      {
        "name": "Jambiers craniaux",
        "description": "Groupe musculaire de la face crâniale de la jambe.",
        "box": [
          3.0,
          80.0,
          7.0,
          5.8
        ],
        "focus": [
          26,
          79
        ]
      },
      {
        "name": "Tendon calcanéen commun",
        "description": "Tendon également appelé « corde du jarret » sur le schéma.",
        "box": [
          32.2,
          92.0,
          30.5,
          3.6
        ],
        "focus": [
          30,
          79
        ]
      }
    ],
    "note": "Les muscles sont nommés comme sur le cours. Certains repères désignent un groupe musculaire ou un tendon.",
    "number": 3
  },
  {
    "title": "Le parcours des odeurs",
    "page": 41,
    "image": "assets/41_1.png",
    "points": [
      {
        "name": "Cavités nasales",
        "description": "Espaces internes du nez traversés par l’air inspiré.",
        "box": [
          3.7,
          40.0,
          23.5,
          10.5
        ],
        "focus": [
          39,
          53
        ]
      },
      {
        "name": "Narines",
        "description": "Ouvertures par lesquelles l’air entre et sort ; l’infographie illustre les flux d’air.",
        "box": [
          4.0,
          71.0,
          29.0,
          13.0
        ],
        "focus": [
          26,
          50
        ]
      },
      {
        "name": "Organe de Jacobson",
        "description": "Autre organe olfactif, aussi appelé voméronasal, associé à la reconnaissance des phéromones.",
        "box": [
          18.0,
          86.5,
          26.5,
          11.0
        ],
        "focus": [
          33,
          57
        ]
      },
      {
        "name": "Muqueuses olfactives",
        "description": "Surfaces sensorielles nasales dont l’étendue est comparée entre espèces.",
        "box": [
          69.0,
          47.0,
          30.0,
          6.0
        ],
        "focus": [
          47,
          57
        ]
      },
      {
        "name": "Épithéliums olfactifs",
        "description": "Tissus portant les récepteurs qui détectent les molécules odorantes.",
        "box": [
          73.5,
          59.5,
          25.5,
          8.0
        ],
        "focus": [
          49,
          58
        ]
      },
      {
        "name": "Bulbe olfactif",
        "description": "Structure nerveuse recevant les informations olfactives.",
        "box": [
          68.5,
          86.5,
          30.5,
          9.0
        ],
        "focus": [
          52,
          55
        ]
      }
    ],
    "note": "Les descriptions reprennent les notions de l’infographie. Les repères numérotés au centre permettent de suivre les structures.",
    "number": 4
  },
  {
    "title": "L’œil · vue en coupe",
    "page": 44,
    "image": "assets/44_0.png",
    "points": [
      {
        "name": "Corps ciliaire",
        "description": "Structure située près de la base de l’iris, dans la coupe de l’œil.",
        "box": [
          32.5,
          1.9354838709677464,
          14.0,
          3.064516129032258
        ],
        "focus": [
          39,
          27.419354838709676
        ]
      },
      {
        "name": "Sclérotique",
        "description": "Enveloppe externe résistante du globe oculaire.",
        "box": [
          48.5,
          1.9354838709677464,
          13.0,
          3.064516129032258
        ],
        "focus": [
          55,
          17.741935483870968
        ]
      },
      {
        "name": "Choroïde",
        "description": "Couche située entre l’enveloppe externe du globe et la rétine.",
        "box": [
          63.0,
          1.9354838709677464,
          11.0,
          3.064516129032258
        ],
        "focus": [
          68,
          22.580645161290324
        ]
      },
      {
        "name": "Rétine",
        "description": "Couche sensible à la lumière tapissant le fond de l’œil.",
        "box": [
          75.0,
          1.9354838709677464,
          8.0,
          3.064516129032258
        ],
        "focus": [
          79,
          29.032258064516128
        ]
      },
      {
        "name": "Nerf optique",
        "description": "Voie nerveuse sortant à l’arrière de l’œil pour transmettre l’information visuelle.",
        "box": [
          85.0,
          1.9354838709677464,
          14.0,
          3.064516129032258
        ],
        "focus": [
          91,
          41.935483870967744
        ]
      },
      {
        "name": "Conjonctive supérieure",
        "description": "Membrane indiquée à la jonction avec la paupière supérieure dans la coupe.",
        "box": [
          2.0,
          23.2258064516129,
          24.0,
          3.064516129032258
        ],
        "focus": [
          33,
          25.806451612903228
        ]
      },
      {
        "name": "Paupière supérieure (coupe)",
        "description": "Repli protecteur supérieur visible sur la coupe de l’œil.",
        "box": [
          2.0,
          27.419354838709676,
          22.0,
          3.064516129032258
        ],
        "focus": [
          31,
          29.032258064516128
        ]
      },
      {
        "name": "Iris (coupe)",
        "description": "Diaphragme situé devant le cristallin et entourant l’ouverture pupillaire.",
        "box": [
          12.5,
          32.096774193548384,
          5.0,
          3.064516129032258
        ],
        "focus": [
          34,
          37.096774193548384
        ]
      },
      {
        "name": "Cornée",
        "description": "Surface transparente bombée à l’avant du globe oculaire.",
        "box": [
          8.5,
          36.12903225806451,
          9.0,
          3.064516129032258
        ],
        "focus": [
          24,
          38.70967741935484
        ]
      },
      {
        "name": "Pupille",
        "description": "Ouverture centrale de l’iris laissant entrer la lumière.",
        "box": [
          9.0,
          40.16129032258064,
          8.0,
          3.064516129032258
        ],
        "focus": [
          31,
          41.935483870967744
        ]
      },
      {
        "name": "Cristallin (coupe)",
        "description": "Lentille interne située derrière l’iris.",
        "box": [
          7.0,
          44.19354838709678,
          10.0,
          3.064516129032258
        ],
        "focus": [
          38,
          43.54838709677419
        ]
      },
      {
        "name": "Humeur aqueuse",
        "description": "Liquide présent dans la partie antérieure de l’œil.",
        "box": [
          7.0,
          48.38709677419355,
          10.0,
          4.838709677419355
        ],
        "focus": [
          28,
          45.16129032258065
        ]
      },
      {
        "name": "Ligaments suspenseurs",
        "description": "Fibres de soutien du cristallin indiquées dans la coupe.",
        "box": [
          5.0,
          54.35483870967742,
          16.0,
          4.838709677419355
        ],
        "focus": [
          38,
          56.45161290322581
        ]
      },
      {
        "name": "Paupière inférieure (coupe)",
        "description": "Repli protecteur inférieur visible sur la coupe de l’œil.",
        "box": [
          2.0,
          60.64516129032257,
          21.0,
          3.2258064516129035
        ],
        "focus": [
          31,
          62.903225806451616
        ]
      },
      {
        "name": "Membrane nictitante",
        "description": "Structure aussi appelée troisième paupière sur la planche.",
        "box": [
          2.0,
          64.6774193548387,
          24.0,
          4.838709677419355
        ],
        "focus": [
          34,
          66.12903225806451
        ]
      },
      {
        "name": "Conjonctive inférieure",
        "description": "Membrane indiquée à la jonction avec la paupière inférieure.",
        "box": [
          28.0,
          84.19354838709678,
          23.0,
          3.7096774193548385
        ],
        "focus": [
          36,
          70.96774193548387
        ]
      },
      {
        "name": "Humeur vitrée",
        "description": "Contenu transparent occupant la grande cavité derrière le cristallin.",
        "box": [
          52.0,
          84.19354838709678,
          15.0,
          3.7096774193548385
        ],
        "focus": [
          60,
          46.774193548387096
        ]
      },
      {
        "name": "Vaisseaux sanguins",
        "description": "Réseau ramifié représenté au fond de l’œil.",
        "box": [
          69.5,
          84.19354838709678,
          22.0,
          3.7096774193548385
        ],
        "focus": [
          77,
          50.0
        ]
      }
    ],
    "note": "La coupe de l’œil permet de repérer ses enveloppes, ses milieux transparents et ses structures internes.",
    "number": 5,
    "crop": {
      "top": 38,
      "width": 578,
      "height": 1072
    }
  },
  {
    "title": "L’oreille",
    "page": 49,
    "image": "assets/49_0.png",
    "points": [
      {
        "name": "Oreille externe",
        "description": "Région située à gauche de la limite en pointillés.",
        "box": [
          55.5,
          16.0,
          11.0,
          3.0
        ],
        "focus": [
          51,
          48
        ]
      },
      {
        "name": "Oreille moyenne et interne",
        "description": "Régions situées au-delà de la limite en pointillés.",
        "box": [
          70.5,
          15.5,
          13.0,
          5.5
        ],
        "focus": [
          73,
          81
        ]
      },
      {
        "name": "Pavillon auriculaire",
        "description": "Partie visible de l’oreille qui recueille les sons.",
        "box": [
          15.0,
          41.5,
          13.5,
          3.0
        ],
        "focus": [
          40,
          43
        ]
      },
      {
        "name": "Conduit auditif vertical",
        "description": "Premier segment du conduit, descendant depuis le pavillon.",
        "box": [
          12.0,
          71.5,
          16.5,
          3.0
        ],
        "focus": [
          48,
          74
        ]
      },
      {
        "name": "Conduit auditif horizontal",
        "description": "Segment du conduit qui se dirige vers le tympan après le coude.",
        "box": [
          10.0,
          80.9,
          18.5,
          3.0
        ],
        "focus": [
          59,
          83
        ]
      },
      {
        "name": "Tympan",
        "description": "Membrane située au fond du conduit auditif.",
        "box": [
          21.5,
          84.5,
          7.0,
          3.0
        ],
        "focus": [
          69,
          86
        ]
      },
      {
        "name": "Bulle tympanique",
        "description": "Structure osseuse entourant une partie de l’oreille moyenne.",
        "box": [
          15.5,
          90.0,
          13.0,
          3.0
        ],
        "focus": [
          72,
          93
        ]
      }
    ],
    "note": "Le trajet du conduit auditif dessine un L : un segment vertical, puis un segment horizontal.",
    "number": 6
  }
];
