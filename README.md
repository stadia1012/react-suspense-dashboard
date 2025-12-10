# React Suspense Dashboard
<img width="600" alt="image" src="https://github.com/user-attachments/assets/d7af1868-c69a-4434-b106-8ff21cafdb3d" />

React 19의 `use` hook과 `Suspense`를 활용한 모던 대시보드 구현 예제

## 주요 특징

- **React Suspense 기반 데이터 로딩**: 선언적이고 직관적인 로딩 상태 관리 (isLoading, setData 미사용)
- **React 19 use Hook**: Promise를 컴포넌트에서 직접 처리
- **독립적 리로드**: 각 카드별 개별 리로드 + 전체 리로드 지원
- **스켈레톤 UI**: 로딩 상태를 시각적으로 표현

## 기술 스택
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0
- **State Management**: React Hooks (useState, useEffect, use)

## 프로젝트 구조
```bash
app
├─api
│  ├─sales
│  │  ├─daily
│  │  │      route.ts
│  │  └─weekly
│  │         route.ts
│  └─users
│      ├─today
│      │     route.ts
│      └─total
│            route.ts
└─dashboard
   │  page.tsx              # 대시보드 메인 페이지
   ├─components
   │      dashboard-ui.tsx  # 재사용 가능한 카드 컴포넌트
   │      metric-cards.tsx  # 메트릭별 카드 구현
   └─lib
          api.ts           # API fetch 함수 & 타입 정의
```

## 재사용 가능한 카드 컴포넌트
```typescript
// app/dashboard/components/dashboard-ui.tsx
export function ReloadableCard({
  title,
  fetcher,
  formatter,
}: {
  title: string;
  fetcher: () => Promise<MetricData>;
  formatter: (value: number) => ReactNode;
}) {
  const [promise, setPromise] = useState<Promise<MetricData> | null>(null);

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
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
          <path d="M20 4v5h-5" />
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
```
