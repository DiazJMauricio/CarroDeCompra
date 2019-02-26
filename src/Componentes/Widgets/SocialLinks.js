import React from "react";

const SocialLink = () => {
  return <div id="socialLinks" />;
};

export default SocialLink;

export const Facebook = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-facebook" />
    </a>
  );
};

export const Twitter = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-twitter" />
    </a>
  );
};

export const Instagram = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-instagram" />
    </a>
  );
};

export const Github = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-github" />
    </a>
  );
};
export const LinkedIn = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-linkedin" />
    </a>
  );
};
