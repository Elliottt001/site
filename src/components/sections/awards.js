import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage, translations } from '@i18n';

const StyledAwardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 50px;
  }

  .carousel-wrapper {
    position: relative;
    width: 100%;
  }

  .carousel-track {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    gap: 20px;
    padding: 10px 4px 24px;
    scrollbar-width: none;
    list-style: none;
    margin: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .carousel-list {
    display: contents;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--light-navy);
    border: 1px solid var(--lightest-navy);
    color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: var(--transition);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      background-color: var(--lightest-navy);
      transform: translateY(-50%) scale(1.05);
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    svg {
      width: 18px;
      height: 18px;
    }

    &.prev {
      left: -22px;
    }
    &.next {
      right: -22px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;

    button {
      width: 8px;
      height: 8px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background-color: var(--lightest-navy);
      cursor: pointer;
      transition: var(--transition);

      &.active {
        background-color: var(--green);
        transform: scale(1.3);
      }
    }
  }
`;

const StyledAward = styled.li`
  flex: 0 0 calc((100% - 40px) / 3);
  scroll-snap-align: start;
  list-style: none;

  @media (max-width: 1080px) {
    flex: 0 0 calc((100% - 20px) / 2);
  }

  @media (max-width: 600px) {
    flex: 0 0 100%;
  }

  .award-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.75rem 1.5rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
    }
  }

  .award-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;

    span {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      color: var(--green);
      background-color: var(--green-tint);
      padding: 3px 8px;
      border-radius: var(--border-radius);
      line-height: 1.4;
    }
  }

  .award-date {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--light-slate);
    margin-bottom: 10px;
  }

  .award-title {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 12px;
  }

  .award-body {
    color: var(--green);
    font-size: var(--fz-xxl);
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
  }
`;

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Awards = () => {
  const data = useStaticQuery(graphql`
    query {
      awards: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/awards/" }
          frontmatter: { showInAwards: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              tags
            }
            html
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealCarousel = useRef(null);
  const trackRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t, lang } = useLanguage();

  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const awards = data.awards.edges.filter(({ node }) => node);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealCarousel.current, srConfig(150));
  }, []);

  const recompute = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const pageW = track.clientWidth;
    const scrollW = track.scrollWidth;
    const totalPages = Math.max(1, Math.ceil(scrollW / pageW));
    setPageCount(totalPages);
    const current = Math.round(track.scrollLeft / pageW);
    setActivePage(Math.min(current, totalPages - 1));
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + pageW < scrollW - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    recompute();
    track.addEventListener('scroll', recompute, { passive: true });
    window.addEventListener('resize', recompute);
    return () => {
      track.removeEventListener('scroll', recompute);
      window.removeEventListener('resize', recompute);
    };
  }, [recompute, awards.length]);

  const scrollByPage = dir => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
  };

  const scrollToPage = i => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <StyledAwardsSection id="awards">
      <h2 ref={revealTitle}>{t('awards.heading')}</h2>

      <div className="carousel-wrapper" ref={revealCarousel}>
        <button
          className="nav-btn prev"
          onClick={() => scrollByPage(-1)}
          disabled={!canPrev}
          aria-label={t('awards.prev')}>
          <ChevronLeft />
        </button>

        <div
          className="carousel-track"
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={t('awards.heading')}>
          <ul className="carousel-list">
            {awards.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { date, title, tags } = frontmatter;
              const slug = node.parent && node.parent.name;
              const localizedTitle = translations[`award.${slug}.title`]
                ? t(`award.${slug}.title`)
                : title;
              const localizedBody = translations[`award.${slug}.body`]
                ? `<p>${t(`award.${slug}.body`)}</p>`
                : html;
              const localizedTags = tags
                ? tags.map((label, ti) =>
                  translations[`award.${slug}.tags.${ti}`]
                    ? t(`award.${slug}.tags.${ti}`)
                    : label,
                )
                : tags;
              const year = date ? new Date(date).getFullYear() : '';

              return (
                <StyledAward key={i}>
                  <div className="award-inner">
                    {localizedTags && localizedTags.length > 0 && (
                      <div className="award-tags">
                        {localizedTags.map((tag, ti) => (
                          <span key={ti}>{tag}</span>
                        ))}
                      </div>
                    )}
                    {year && <div className="award-date">{year}</div>}
                    <h3 className="award-title">{localizedTitle}</h3>
                    <div
                      key={lang}
                      className="award-body"
                      dangerouslySetInnerHTML={{ __html: localizedBody }}
                    />
                  </div>
                </StyledAward>
              );
            })}
          </ul>
        </div>

        <button
          className="nav-btn next"
          onClick={() => scrollByPage(1)}
          disabled={!canNext}
          aria-label={t('awards.next')}>
          <ChevronRight />
        </button>
      </div>

      {pageCount > 1 && (
        <div className="dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={i === activePage ? 'active' : ''}
              onClick={() => scrollToPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </StyledAwardsSection>
  );
};

export default Awards;
