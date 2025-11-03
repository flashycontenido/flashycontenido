/**
 * Optimizes Cloudinary image URLs with automatic format and quality transformations
 * @param url - Original Cloudinary URL
 * @param width - Optional max width (default: 1200)
 * @param quality - Optional quality setting (default: 'auto')
 * @returns Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(
  url: string,
  width: number = 1200,
  quality: 'auto' | 'auto:low' | 'auto:good' | 'auto:best' = 'auto'
): string {
  // Check if it's a valid Cloudinary URL
  if (!url.includes('res.cloudinary.com')) {
    return url;
  }

  // Split URL at /upload/
  const parts = url.split('/upload/');
  if (parts.length !== 2) {
    return url;
  }

  // Add transformations: f_auto (format), q_auto (quality), w_XXX (width)
  const transformations = `f_auto,q_${quality},w_${width}`;

  // Reconstruct URL with transformations
  return `${parts[0]}/upload/${transformations}/${parts[1]}`;
}

/**
 * Presets for common use cases
 */
export const CloudinaryPresets = {
  hero: (url: string) => optimizeCloudinaryUrl(url, 1920, 'auto:good'),
  card: (url: string) => optimizeCloudinaryUrl(url, 800, 'auto'),
  thumbnail: (url: string) => optimizeCloudinaryUrl(url, 400, 'auto'),
  thumbnail_small: (url: string) => optimizeCloudinaryUrl(url, 200, 'auto'),
};
