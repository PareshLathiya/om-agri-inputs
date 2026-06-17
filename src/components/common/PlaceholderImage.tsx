import { ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  className?: string;
  alt?: string;
}

export default function PlaceholderImage({ className = '', alt = 'Placeholder' }: PlaceholderImageProps) {
  return (
    <div className={`bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden ${className}`} role="img" aria-label={alt}>
      <div className="text-center text-gray-400 p-4">
        <ImageIcon className="mx-auto h-10 w-10 mb-2" />
        <span className="text-xs font-medium">{alt}</span>
      </div>
    </div>
  );
}