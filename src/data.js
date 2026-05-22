export const SERVICES = [
  {
    n: '01',
    title: 'Coupe & Coiffage',
    items: ['Coupe', 'Coiffage', 'Brushing', 'Chignon', 'Tresse'],
  },
  {
    n: '02',
    title: 'Coloration',
    items: [
      'Coloration Davines',
      'Mineral Colours',
      'Coloration végétale',
      'Sans ammoniaque',
      'Placement de couleur',
      'Mèche - balayage',
      'Ombre Hair',
      'Tye & Die',
      'Gloss color',
    ],
  },
  {
    n: '03',
    title: 'Soin',
    items: ['Botox capillaire', 'Plasma'],
  },
  {
    n: '04',
    title: 'Forme',
    items: ['Beach Waves', 'Permanente', 'Ondulation'],
  },
  {
    n: '05',
    title: 'Lissage',
    items: ['Brésilien à la Kératine', 'X tenso', 'Japonais'],
  },
  {
    n: '06',
    title: 'Extension',
    items: ['Extensions Great Lengths'],
  },
];

export const PRESENTATION =
  'Fondé à Genève à la fin des années 2000 par Federico Renda dans le quartier de Plainpalais, FR Coiffure s\'est rapidement démarqué grâce à son style moderne, son approche personnalisée et son expertise en coupes, colorations et soins capillaires. Aujourd\'hui, le salon est reconnu à Genève pour son ambiance contemporaine et son savoir-faire.';

export const SALON = {
  name: 'FR Coiffure Plainpalais',
  address1: 'Rue de Carouge 25',
  address2: '1205 Genève · Suisse',
  phone: '+41 (0)22 320 00 00',
  hoursWeek: 'Lundi — Samedi : 9h00 — 19h00',
  hoursSun: 'Dimanche : Fermé',
  email: 'contact@frcoiffure.ch',
  instagram: '@frcoiffure',
  facebook: 'fr.coiffure',
};

export const TEAM = [
  { name: 'Federico Renda', role: 'Fondateur · Coloriste signature', photo: 'portrait 1.jpg',  since: '2008' },
  { name: 'Lana',            role: 'Styliste senior',                 photo: 'portrait 2.jpg',  since: '2014' },
  { name: 'Charles',         role: 'Barbier · Coupe homme',           photo: 'Portrait 3.jpg',  since: '2016' },
  { name: 'Inès',            role: 'Coloration végétale',             photo: 'Portrait 4.jpg',  since: '2019' },
  { name: 'Maël',            role: 'Mèches & balayage',               photo: 'portrait 5.jpg',  since: '2021' },
  { name: 'Selma',           role: 'Soins & rituels capillaires',      photo: 'Portrait 6.jpg',  since: '2022' },
];

export const MENU_SECTIONS = [
  {
    title: 'Le Salon',
    items: [
      { label: 'Accueil',          href: '#accueil' },
      { label: 'Notre histoire',   href: '#/salon' },
      { label: 'Galeries photos',  href: '#/salon' },
    ],
  },
  {
    title: 'Prestations',
    items: [
      { label: 'Nos prestations',  href: '#prestations' },
      { label: 'Tarifs',           href: '#/tarifs' },
      { label: 'Réservation',      href: '#reservation' },
    ],
  },
  {
    title: "L'équipe",
    items: [
      { label: 'Federico Renda',   href: '#/equipe' },
      { label: "Toute l'équipe",   href: '#/equipe' },
      { label: 'Nous rejoindre',   href: '#' },
    ],
  },
];

export const TARIFS = [
  {
    cat: 'Femme',
    items: [
      { name: 'Coupe brushing',      price: '88 / 95 / 105 CHF' },
      { name: 'Brushing',            price: '50 / 57 / 65 CHF' },
      { name: 'Brushing steampod',   price: '+10 CHF' },
      { name: 'Séchage',             price: '30 / 40 CHF' },
      { name: 'Frange',              price: '10 CHF' },
    ],
  },
  {
    cat: 'Coloration',
    items: [
      { name: 'Coloration Minérale',  price: 'dès 75 CHF' },
      { name: 'Couleur racine',       price: '65 / 70 CHF' },
      { name: 'Couleur globale',      price: '75 / 85 / 90 CHF' },
      { name: 'Couleur placement',    price: '80 / 90 / 100 CHF' },
      { name: 'Gloss color',          price: '60 / 70 / 80 CHF' },
      { name: 'Dose supp. color',     price: '10 CHF' },
      { name: 'Balayage',             price: 'de 80 à 120 CHF' },
      { name: 'Mèches',               price: 'de 80 à 150 CHF' },
      { name: 'Tie and Dye / ombré',  price: 'dès 120 CHF' },
      { name: 'Décoloration',         price: 'dès 80 CHF' },
    ],
  },
  {
    cat: 'Coiffage',
    items: [
      { name: 'Tresse (30min)',           price: '35 / 40 CHF' },
      { name: 'Chignon',                  price: 'dès 80 CHF' },
      { name: 'Coiffure de mariée',       price: 'de 120 à 150 CHF' },
      { name: 'Essai coiffure de mariée', price: '80 / 90 CHF' },
      { name: 'Make up',                  price: 'selon devis' },
    ],
  },
  {
    cat: 'Homme',
    items: [
      { name: 'Coupe homme',       price: '55 CHF' },
      { name: 'Taille de la barbe', price: '10 CHF' },
    ],
  },
  {
    cat: 'Soin',
    items: [
      { name: 'Soin glam cabir',          price: '10 / 20 / 30 CHF' },
      { name: 'Soin botox capillaire',    price: '20 / 30 / 40 CHF' },
      { name: 'Soin restructuring',       price: '10 / 15 / 25 CHF' },
      { name: '+ Forfait brushing/soin',  price: '45 CHF' },
      { name: 'Soin plasma',             price: '20 / 30 / 40 CHF' },
    ],
  },
  {
    cat: 'Lissage',
    items: [
      { name: 'Brésilien à la Kératine (KERASILK)', price: 'selon devis' },
      { name: 'Lissage (Xl-Tenso)',                  price: 'de 90 à 120 CHF' },
      { name: 'X-Tenso avec plaque',                 price: 'selon devis' },
      { name: 'Japonais permanent (izeme)',           price: 'selon devis' },
      { name: 'Beach waves',                         price: 'dès 100 CHF' },
      { name: 'Permanente',                          price: 'dès 100 CHF' },
    ],
  },
  {
    cat: 'Fille',
    items: [
      { name: '-21 ans', price: '-20% sur les tarifs normaux' },
      { name: '-16 ans', price: '65 CHF' },
      { name: '-11 ans', price: '45 CHF' },
      { name: '-6 ans',  price: '30 CHF' },
    ],
  },
  {
    cat: 'Garçon',
    items: [
      { name: '-21 ans', price: '45 CHF' },
      { name: '-16 ans', price: '40 CHF' },
      { name: '-11 ans', price: '40 CHF' },
      { name: '-6 ans',  price: '30 CHF' },
    ],
  },
];
