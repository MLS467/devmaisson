import styled from "styled-components";
import type { PaletteType } from "../../constants/colors";

export const TimelineContainer = styled.div<{ $palette: PaletteType }>`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;

  .timelineHeader {
    text-align: center;
    margin-bottom: 3rem;
  }

  .timelineMainTitle {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ $palette }) => $palette.fontPrimary};
    margin-bottom: 1rem;
  }

  .timelineMainDescription {
    padding: 1%;
    font-size: 1.125rem;
    color: ${({ $palette }) => $palette.fontSeconry};
    margin: 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .timelineList {
    position: relative;
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .timelineMainTitle {
      font-size: 2rem;
    }

    .timelineMainDescription {
      font-size: 1rem;
    }

    .timelineList {
      padding-left: 1rem;
    }
  }

  @media (max-width: 480px) {
    .timelineMainTitle {
      font-size: 1.75rem;
    }

    .timelineList {
      padding-left: 0.5rem;
    }
  }
`;
