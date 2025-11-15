import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © 2025 Harley Welsby (BSD 3-Clause) |{" "}
        <FooterLink
          href="https://github.com/harleywelsby/Portfolio-Site"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 0.5rem;
  min-height: 2rem;

  background-color: var(--deep-black);
`;

const FooterLink = styled.a`
  color: var(--soft-white);
  text-decoration: none;

  &:hover {
    color: var(--title-orange);
  }
`;

export default Footer;
