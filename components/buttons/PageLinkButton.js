import React from "react";
import Link from 'next/link'

// THIRD PARTY
// ICONS
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { ButtonWrapper, ButtonLabel } from "./";

export default function PageLinkButton(props) {
  const { to, text } = props
  return (
    <Link to={to} style={{ textDecoration: 'none', width: "100%" }} >
      <ButtonWrapper id="link-to-page-button-wrapper" >
        <ButtonLabel text={text} endIcon={faArrowCircleRight} />
      </ButtonWrapper>
    </Link>
  );
};