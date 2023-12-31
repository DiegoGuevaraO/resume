"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {
        name: 'Résumé',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
]

const NavLinks: React.FC = () => {
    const pathname = usePathname();
    
    return(
        <>
            {links.map((link) => {
                return(
                    <Link 
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        "text-left border-b-2 border-transparent md:hover:text-active-link md:hover:border-main rounded-md border-main",
                        {
                            "text-active-link": pathname === link.href 
                        }
                    )}
                    >
                        <li key={link.name}>{link.name}</li>
                    </Link>
                );
            })

            }
        </>
    );
}

export default NavLinks;