// components/reload-button.tsx
'use client';

import { useState } from 'react';

const RotateCw = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 2v6h-6" />
    <path d="M2.5 22v-6h6" />
    <path d="M20.4 12.9a9 9 0 0 0-1.8-1.7l-1.3-1.4" />
    <path d="M12 21a9 9 0 0 0 6.4-2.6l1.3-1.4" />
    <path d="M11 3a9 9 0 0 0-7.8 4.7l-1.4 1.3" />
    <path d="M3.6 11.1a9 9 0 0 0 1.8 1.7l1.3 1.4" />
  </svg>
);

interface ReloadButtonProps {
  onReload: () => Promise<void>;
  title: string;
}

export function ReloadButton({ onReload, title }: ReloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onReload();
    } catch (error) {
      console.error(`Failed to reload ${title}:`, error);
      // 사용자에게 에러 메시지를 표시하는 로직 추가 가능
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      aria-label={`${title} 새로고침`}
      className={`p-1 rounded-full text-gray-500 hover:bg-gray-100 transition duration-150 ease-in-out ${
        isLoading ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
    </button>
  );
}