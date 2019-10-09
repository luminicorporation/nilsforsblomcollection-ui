import React from 'react';
// import { Link } from 'gatsby';
// import { css } from '@emotion/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import headerImage from '../images/NFC_Artwork_Desktop_01.png';
import '../styles/index.scss';

const NoBreak = ({ children }) => (
  <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
);

const IndexPage = () => (
  <Layout
    header={{
      siteTitle: (
        <>
          Nils
          <br />
          Forsblom
          <br />
          Collection
        </>
      ),
      lead: 'The need and the search for balance. A singular view.',
    }}
  >
    <SEO
      title="Home"
      keywords={[`nils forsblom`, `fondazione`, `collection`]}
    />
    <article className="index">
      <header>
        <img
          className="index_header-image"
          src={headerImage}
          alt="nils forsblom collection intro"
        />
        <p className="index_header-heading">
          The Nils Forsblom Collection is based on deep philosophical,
          scientific, and visual interests in Arte Povera, Conceptual, Earth and
          Land, Light and Space, Post-minimalism, Political, and Text-based art.
          A singular aesthetic perspective lead to significant, challenging, and
          monumental-scale works from artists such as:
        </p>
      </header>
      <p className="index_artists">
        Pier Paolo Calzolari • Jannis Kounellis • Mario Merz • Christian
        Boltanski • Richard Long • Joseph Kosuth • Daniel Buren • Tara Donavan •
        Robert Rauschenberg • Robert Longo • John Davies • Giuseppe Penone •
        Thomas Ruff • Ola Kolehmainen • Meg Webster • Callum Innes • Jacob
        Hashimoto • Ron Gorchov • Manolo Millares • Arman • Mark Hagen • Garth
        Weiser • Eric Freeman • Richard Dupont • Conrand Atkinson • Bard Breivik
        • Gerhard Merz • Valerie Krause  • Davide Balliano • Gian Maria Tosatti
        • Marzia Migliora • Jacob Kassay • Vladimir Velickovic • John Millei •
        Alexander Calder • Michelangelo Pistoletto • Mark Francis • Ron Janowich
        • Gerhard Byrne • Kristjan Gudmundsson • Jasmin Sian • Fiona Banner •
        James Busby • Leonid Lamm • Eric Bainbridge • James Brown • Shimon
        Okshteyn • Ma­ri­jke van War­mer­dam • Gabriela Fridriksdottir • Julian
        Schnabel • Adrian Schiess • Mary Lucier • Gisela Colon • Lee Jaffe •
        José María Sicilia • David Amico • Ross Bleckner • Charles Fine • Aaron
        Young • Randy Wray • Ara Dymond • Graham Collins • Doug and Mike Starn •
        Petra Kralicova • Dieter Hacker • Tim Ebner • Robert Petersen • John
        Laddie Dill • Katy Scimert • Sanchez Rubio • Joel Shapiro • Sterling
        Ruby • Mariko Mori • Joe Goode • Liam Gillick • Antonio Saura • Georgia
        Papageorge • Robert Morris • John LeKay • Mimmo Paladino • Takaharu
        Fukuchi • Susan Hutchinson • Antoni Tàpies • Andrea Marie Breiling •
        George Segal • Franco Angeli • Joseph Beuys • Valerio Adami • Dennis
        Oppenheim • Nicole Eisenman • Robert Graham • Jorg Sasse • Annette
        Lemieux • Gerard Titus-Carmel • Rostislav Lebedev • Robert Combas • Hans
        Peter Adamski • Anton Lamazares • Mark Cooper,{' '}
        <NoBreak>among many others.</NoBreak>
      </p>
      <p className="index_summary">
        <b>The Nils Forsblom Collection</b> represent passage of time and space
        and <NoBreak>Dr. Forsblom's</NoBreak> personal need to search for
        balance. This sentiment is perhaps best expressed by an artist
        represented in the collection, Pier Paolo Calzolari once noting{' '}
        <i>"When the dreamer dies, what happens to the dream?"</i>. The
        collection expands upon the exploration on a personal scale, engaging
        art that offers an enveloping <NoBreak>site-specific</NoBreak>{' '}
        experiences.
      </p>
    </article>
  </Layout>
);

export default IndexPage;
