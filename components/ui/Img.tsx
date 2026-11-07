/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";

/**
 * Plain <img> wrapper for the ported static assets.
 * The original site serves pre-sized images, so Next Image optimization is not
 * required to preserve the layout.
 */
export function Img({ alt = "", loading = "lazy", decoding = "async", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} loading={loading} decoding={decoding} {...props} />;
}
