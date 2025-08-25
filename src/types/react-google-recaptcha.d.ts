declare module "react-google-recaptcha" {
  import { Component, RefObject } from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    theme?: "light" | "dark";
    type?: "image" | "audio";
    tabindex?: number;
    onLoad?: () => void;
    size?: "compact" | "normal" | "invisible";
    badge?: "bottomright" | "bottomleft" | "inline";
    hl?: string;
    isolated?: boolean;
  }

  class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): void;
    executeAsync(): Promise<string>;
    getValue(): string | null;
  }

  export default ReCAPTCHA;
}
