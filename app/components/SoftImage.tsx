"use client";

import { useEffect, useRef, useState } from "react";

type SoftImageProps = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  emoji?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function SoftImage({
  src,
  fallbackSrc,
  alt,
  emoji = "🦷",
  width,
  height,
  priority = false,
  className = "",
}: SoftImageProps) {
  const [stage, setStage] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  const current =
    stage === 0 ? src : stage === 1 && fallbackSrc ? fallbackSrc : null;

  const fail = () => setStage((s) => (s === 0 && fallbackSrc ? 1 : 2));

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) fail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-mint to-white ${className}`}
    >
      {current ? (
        <img
          key={current}
          ref={ref}
          src={current}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={fail}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center text-7xl"
        >
          {emoji}
        </div>
      )}
    </div>
  );
}
