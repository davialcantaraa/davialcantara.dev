import { CONTACT } from "@/config/contact";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerItems = CONTACT.map((item, index) => {
    const isLastItem = index === CONTACT.length - 1;
    return (
      <>
        <li className="underline underline-offset-2 text-muted-foreground">
          <a href={item.url} target={item.external ? "_blank" : "_self"}>
            {item.label}
          </a>
        </li>
        {!isLastItem && <span>·</span>}
      </>
    );
  });

  return (
    <footer className="flex flex-col border-t">
      <ul className="container mx-auto flex max-w-3xl space-x-1 py-10">
        {footerItems}
      </ul>
      <div className="prose container mx-auto max-w-3xl py-10">
        <small>{currentYear} © Davi Alcântara</small>
      </div>
    </footer>
  );
};
