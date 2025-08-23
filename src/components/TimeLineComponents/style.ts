import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const TimelineItemContainer = styled.div<{ palette: PaletteType }>`
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background: ${({ palette }) => palette.background};
    border: 1px solid ${({ palette }) => `${palette.fontSeconry}30`};
    border-radius: 12px;
    box-shadow: 0 4px 12px ${({ palette }) => `${palette.fontSeconry}20`};
    transition: all 0.3s ease;
    max-width: 100%;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${({ palette }) => `${palette.blueDefault}30`};
      border-color: ${({ palette }) => `${palette.blueDefault}50`};
    }
  }

  .timelineIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: ${({ palette }) => palette.blueDefault};
    border-radius: 50%;
    margin-right: 2rem;
    z-index: 2;
    flex-shrink: 0;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin: 5% 0 !important;
      align-self: center;
      position: relative;
      z-index: 3;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0;
    }

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }

    svg {
      width: 28px;
      height: 28px;
      color: white;

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
      }

      @media (max-width: 480px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  .timelineContent {
    flex: 1;

    @media (max-width: 768px) {
      text-align: justify;
      width: 100%;
      max-width: 100%;
    }
  }

  .timelineHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      width: 100%;
      text-align: center;
    }
  }

  .timelineTitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ palette }) => palette.fontPrimary};
    margin: 0;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ palette }) => palette.blueDefault};
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  &:hover .timelineIcon {
    box-shadow: 0 0 20px ${({ palette }) => palette.greenDefault}40,
      0 0 40px ${({ palette }) => palette.blueDefault}30;
    transform: scale(1.1);
  }

  .timelineDates {
    font-size: 1rem;
    color: ${({ palette }) => palette.greenDefault};
    font-weight: 500;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
      padding: 0.5rem 1rem;
      background: ${({ palette }) => `${palette.greenDefault}15`};
      border-radius: 20px;
      display: inline-block;
      margin: 0 auto;
      width: fit-content;
    }
  }

  .timelineSubtitle {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ palette }) => palette.blueDefault};
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: center;
      margin-bottom: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .timelineLocal {
    font-size: 1rem;
    color: ${({ palette }) => palette.fontSeconry};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      text-align: center;
      margin-bottom: 1.25rem;
      font-style: italic;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .timelineDescription {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ palette }) => palette.fontSeconry};
    margin: 0;
    max-width: none;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
      text-align: justify;
      padding: 0 0.5rem;
      margin: 0 auto;
      max-width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .timelineLine {
    position: absolute;
    left: 30px;
    top: 60px;
    bottom: -3rem;
    width: 3px;
    background: ${({ palette }) => palette.fontSeconry};
    opacity: 0.3;
    border-radius: 2px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:last-child .timelineLine {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    .timelineHeader {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .timelineContent {
      padding-left: 0.5rem;
    }

    .timelineIcon {
      width: 50px;
      height: 50px;
      margin-right: 1.5rem;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .timelineTitle {
      font-size: 1.25rem;
    }

    .timelineDates {
      font-size: 0.875rem;
    }

    .timelineSubtitle {
      font-size: 1rem;
    }

    .timelineLocal {
      font-size: 0.875rem;
    }

    .timelineDescription {
      font-size: 0.925rem;
    }

    .timelineLine {
      left: 25px;
      top: 50px;
      width: 2px;
    }
  }
`;
