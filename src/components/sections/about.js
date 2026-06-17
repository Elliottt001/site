import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage } from '@i18n';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'LangChain',
    'Spring Boot',
    'Node.js',
    'React Native',
    'Docker / K8s',
    'Claude Code',
    'Codex',
  ];

  const renderParagraph = (key, linkMap) => {
    const text = t(key);
    const tokens = Object.keys(linkMap);
    if (tokens.length === 0) {
      return <p>{text}</p>;
    }
    const splitRegex = new RegExp(`(${tokens.join('|')})`, 'g');
    const parts = text.split(splitRegex);
    return (
      <p>
        {parts.map((part, i) => {
          const link = linkMap[part];
          if (link) {
            return (
              <a key={i} href={link.href}>
                {link.label}
              </a>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    );
  };

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{t('about.heading')}</h2>

      <div className="inner">
        <StyledText>
          <div>
            {renderParagraph('about.p1', {
              __ZJU__: { href: 'https://www.zju.edu.cn/', label: t('about.zju') },
            })}

            {renderParagraph('about.p2', {})}

            {renderParagraph('about.p3', {
              __H3C__: { href: 'https://www.h3c.com/', label: t('about.h3c') },
              __Sealos__: { href: 'https://sealos.io/', label: t('about.sealos') },
              __Huanjie__: {
                href: 'https://github.com/Elliottt001/IntelliDeploy',
                label: t('about.huanjie'),
              },
            })}

            <p>{t('about.p4')}</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
