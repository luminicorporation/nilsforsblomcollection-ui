import React from 'react';
// import { Link } from 'gatsby';
// import { css } from '@emotion/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout
    header={{
      siteTitle: 'Nils Forsblom Collection',
      lead: 'The need and the search for balance. A singular view.',
    }}
  >
    <SEO
      title="Home"
      keywords={[`nils forsblom`, `fondazione`, `collection`]}
    />
    <article>
      <header>
        <img src="" alt="" />
        <p>
          The Nils Forsblom collection is based on deep philosophical,
          scientific, and visual interests in Arte Povera, Conceptual, Earth and
          Land, Light and Space, Post-minimalism, Political, and Text-based art.
          A singular aesthetic perspective lead to significant, challenging, and
          monumental-scale works from artists such as:
        </p>
      </header>
      <p>
        Pier Paolo Calzolari • Jannis Kounellis • Mario Merz • Christian
        Boltanski • Richard Long • Joseph Kosuth • Daniel Buren • Tara Donavan •
        Robert Rauschenberg  • John Davies • Giuseppe Penone • Thomas Ruff • Ola
        Kolehmainen •  Meg Webster • Jacob Hashimoto • Ron Gorchov • Hans
        Hofmann • Manolo Millares • Arman • Sam Francis • Mark Hagen • Eric
        Freeman • Richard Dupont • Conrand Atkinson • Bard Breivik • Gerhard
        Merz • Valerie Krause  • Davide Balliano • Gian Maria Tosatti • Marzia
        Migliora • Jacob Kassay • Vladimir Velickovic • John Millei • Alexander
        Calder • Michelangelo Pistoletto • Mark Francis • Ron Janowich • Gerhard
        Byrne • Kristjan Gudmundsson • Jasmin Sian • James Busby • Leonid Lamm •
        Eric Bainbridge • James Brown • Shimon Okshteyn • Ma­ri­jke van
        War­mer­dam • Gabriela Fridriksdottir • Julian Schnabel • Adrian Schiess
        • Mary Lucier • Gisela Colon • Lee Jaffe • José María Sicilia • David
        Amico • Ross Bleckner • Charles Fine • Aaron Young • Randy Wray • Ara
        Dymond • Graham Collins • Doug and Mike Starn • Petra Kralicova • Dieter
        Hacker • Tim Ebner • Georgia Papageorge • Robert Morris • John LeKay •
        Mimmo Paladino • Takaharu Fukuchi • Susan Hutchinson • Antoni Tàpies,
        among many others. 
      </p>
      <p>
        <b>The Nils Forsblom Collection</b> represent passage of time and space
        and the personal need to search for balance. This sentiment is perhaps
        best expressed by an artist represented in the collection, Pier Paolo
        Calzolari once noting "When the dreamer dies, what happens to the
        dream?"
      </p>
    </article>
  </Layout>
);

export default IndexPage;
