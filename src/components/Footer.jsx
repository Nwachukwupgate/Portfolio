import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
