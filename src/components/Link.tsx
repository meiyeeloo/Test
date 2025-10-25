/* Library Link Component */

interface LinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ href, children, target, rel, onClick }: LinkProps) {
  return (
    <a 
      href={href} 
      className="lib-link"
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}