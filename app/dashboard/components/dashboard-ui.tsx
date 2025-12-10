'use client';
import { ReactNode, Suspense, useState, useEffect, use } from "react";

/*
 * Suspense를 사용하여 데이터를 불러오는 대시보드 구현
 * use hook을 사용하여 버튼 클릭 시 리로드 가능
 */

// 공통 카드 레이아웃
export function Card({ title, children, onReload }:
  { title: string; children: ReactNode; onReload?: () => void }) {
  return (
    <div className="
      border border-gray-200 rounded-xl p-6 shadow-sm bg-white relative
      hover:bg-gray-50 hover:shadow-md transition-all duration-200
    ">
      {onReload && (
        <button
          type="button"
          onClick={onReload}
          className="absolute top-[10px] right-[10px] w-[22px] h-[22px] p-[4px]
            hover:bg-slate-200/75 rounded-[6px] flex items-center justify-center cursor-pointer
            transition-all duration-200
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" />
          </svg>
        </button>
      )}
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-gray-900">{children}</div>
    </div>
  );
}

// 내부 컨텐츠 스켈레톤 (제목 + 값)
function ContentSkeleton() {
  return (
    <>
      <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse mb-[10px]" />
      <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
    </>
  );
}

// use hook으로 Promise 값을 표시하는 컴포넌트
function DataDisplay({ title, promise, formatter }: {
  title: string;
  promise: Promise<number>;
  formatter: (value: number) => string;
}) {
  const value = use(promise);
  return (
    <>
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-gray-900">{formatter(value)}</div>
    </>
  );
}

// 리로드 가능한 카드 컴포넌트
export function ReloadableCard({
  title,
  fetcher,
  formatter,
}: {
  title: string;
  fetcher: () => Promise<number>;
  formatter: (value: number) => string;
}) {
  const [promise, setPromise] = useState<Promise<number> | null>(null);

  // 클라이언트 마운트 후 fetch 시작
  useEffect(() => {
    setPromise(fetcher());
  }, [fetcher]);

  const handleReload = () => {
    setPromise(fetcher());
  };

  return (
    <div className="
      border border-gray-200 rounded-xl p-6 shadow-sm bg-white relative
      hover:bg-gray-50 hover:shadow-md transition-all duration-200
    ">
      <button
        type="button"
        onClick={handleReload}
        className="absolute top-[10px] right-[10px] w-[22px] h-[22px] p-[4px]
          hover:bg-slate-200/75 rounded-[6px] flex items-center justify-center cursor-pointer
          transition-all duration-200
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" />
        </svg>
      </button>
      {promise ? (
        <Suspense fallback={<ContentSkeleton />}>
          <DataDisplay title={title} promise={promise} formatter={formatter} />
        </Suspense>
      ) : (
        <ContentSkeleton />
      )}
    </div>
  );
}
