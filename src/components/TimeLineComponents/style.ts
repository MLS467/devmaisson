import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const TimelineItemContainer = styled.div<{ palette: PaletteType }>`
  display: flex;
  position: relative;
  margin-bottom: 3rem;

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

    svg {
      width: 28px;
      height: 28px;
      color: white;
    }
  }

  .timelineContent {
    flex: 1;
    padding-left: 1rem;
  }

  .timelineHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .timelineTitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ palette }) => palette.fontPrimary};
    margin: 0;
    /* cursor: pointer; */
    transition: color 0.3s ease;

    &:hover {
      color: ${({ palette }) => palette.blueDefault};
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
  }

  .timelineSubtitle {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ palette }) => palette.blueDefault};
    margin-bottom: 0.5rem;
  }

  .timelineLocal {
    font-size: 1rem;
    color: ${({ palette }) => palette.fontSeconry};
    margin-bottom: 1rem;
  }

  .timelineDescription {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ palette }) => palette.fontSeconry};
    margin: 0;
    max-width: none;
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
