// WebP-first image with automatic fallback to the original format.
// Usage: <Picture src="/profile.jpg" webp="/profile.webp" alt="…" />
export default function Picture({ src, webp, alt, className, loading = 'lazy', ...rest }) {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} className={className} loading={loading} decoding="async" {...rest} />
    </picture>
  );
}