import type { TextSegment } from "@/config/content";

/** Renders config text segments, including highlighted words. */
export function Segments({ segments }: { segments: readonly TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => (
        <span key={`${segment.text}-${index}`} className={segment.className}>
          {segment.text}
        </span>
      ))}
    </>
  );
}
