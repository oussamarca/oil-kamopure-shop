import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found (404) — Oil Kamo";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      const created = !el;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("href");
      el.setAttribute("href", href);
      return () => {
        if (created) el?.remove();
        else if (prev !== null) el?.setAttribute("href", prev);
      };
    };

    const restoreDesc = setMeta('meta[name="description"]', "name", "description", "The page you are looking for does not exist. Return to Oil Kamo's home.");
    const restoreOgTitle = setMeta('meta[property="og:title"]', "property", "og:title", "Page Not Found (404) — Oil Kamo");
    const restoreOgDesc = setMeta('meta[property="og:description"]', "property", "og:description", "The page you are looking for does not exist.");
    const restoreOgUrl = setMeta('meta[property="og:url"]', "property", "og:url", `https://oil-kamopure-shop.lovable.app${location.pathname}`);
    const restoreCanonical = setLink("canonical", `https://oil-kamopure-shop.lovable.app${location.pathname}`);
    const restoreRobots = setMeta('meta[name="robots"]', "name", "robots", "noindex");

    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
      restoreOgUrl();
      restoreCanonical();
      restoreRobots();
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
