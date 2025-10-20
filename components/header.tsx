import Image from 'next/image';
import { HeaderConfig } from '@/lib/types';

interface HeaderProps {
  config: HeaderConfig;
}

export function Header({ config }: HeaderProps) {
  return (
    <header
      className="w-full py-12 text-center"
      style={{ backgroundColor: config.backgroundColor }}
    >
      <div className="container mx-auto px-6">
        <Image
          src={config.logo.src}
          alt={config.logo.alt}
          width={config.logo.width}
          height={config.logo.height}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-4xl font-bold text-brand-navy font-heading">
          {config.heading}
        </h1>
        {config.subheading && (
          <p className="text-lg text-brand-text mt-2 font-body">
            {config.subheading}
          </p>
        )}
        {config.avatar && (
          <div className="mt-6">
            <Image
              src={config.avatar.src}
              alt={config.avatar.alt}
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
          </div>
        )}
      </div>
    </header>
  );
}
