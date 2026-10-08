type AddSelectedBarProps = {
  count: number;
  onAdd: () => void;
  onClear: () => void;
};

// Sticks to the bottom of the screen while the collection is in view, then
// settles at the end of it, so it never covers the footer.
export function AddSelectedBar({ count, onAdd, onClear }: AddSelectedBarProps) {
  if (count === 0) return null;

  return (
    <div className="sticky bottom-0 z-30 border-t border-line bg-surface pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4">
        <p className="text-sm" aria-live="polite">
          <span className="font-semibold">{count}</span> selected
        </p>
        <button
          type="button"
          onClick={onClear}
          className="h-11 px-2 text-sm font-medium text-muted underline-offset-4 hover:underline"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={onAdd}
          className="ml-auto h-12 rounded-full bg-accent px-5 text-sm font-semibold text-on-accent hover:bg-accent-hover sm:px-6"
        >
          Add selected to cart
        </button>
      </div>
    </div>
  );
}
