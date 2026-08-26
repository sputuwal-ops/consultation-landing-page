export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 px-5 py-6">
      <div className="mx-auto flex max-w-7xl justify-center">
        <a className="brand-logo" href="/" aria-label="Digital Saroz home">
          <span className="brand-logo__mark" aria-hidden="true">
            DS
          </span>
          <span className="brand-logo__name">Digital Saroz</span>
        </a>
      </div>
    </header>
  );
}
