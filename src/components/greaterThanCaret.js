import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from "gatsby-image";

import icon from '../images/greater-than-xxl.png';
import '../styles/greater-than-caret.scss';

// const GreaterThanCaret = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "greater-than-xxl.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 200) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// );

const GreaterThanCaret = () => (
  <img src={icon} className="greater-than-caret" alt="greater than caret" />
);

export default GreaterThanCaret;
