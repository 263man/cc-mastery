export function TaskBadge({ count }: { count: number }) {
  return (
    <span className="ml-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-2 py-0.5 text-sm font-medium text-white">
      {count}
    </span>
  )
}
