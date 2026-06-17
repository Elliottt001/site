import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage } from '@i18n';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>{t('hero.greeting')}</h1>;
  const two = <h2 className="big-heading">{t('hero.name')}</h2>;
  const three = <h3 className="big-heading">{t('hero.tagline')}</h3>;

  const bioParts = t('hero.bio').split(/(__ZJU__|__H3C__)/);
  const four = (
    <>
      <p>
        {bioParts.map((part, i) => {
          if (part === '__ZJU__') {
            return (
              <a key={i} href="https://www.zju.edu.cn/" target="_blank" rel="noreferrer">
                {t('hero.zju')}
              </a>
            );
          }
          if (part === '__H3C__') {
            return (
              <a key={i} href="https://www.h3c.com/" target="_blank" rel="noreferrer">
                {t('hero.h3c')}
              </a>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="mailto:rzzhangzju@gmail.com" target="_blank" rel="noreferrer">
      {t('hero.cta')}
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection key={lang}>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
