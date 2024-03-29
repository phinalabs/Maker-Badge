import { FaGithub, FaTwitter } from "react-icons/fa";
const socialMenu = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/phinalabs',
        icon: FaTwitter,
    },
    {
        name: 'Github',
        href: 'https://github.com/phinalabs/Maker-Badge',
        icon: FaGithub,
    },

]

export default function SocialIcons() {
    return (
        <>
            {socialMenu.map((item) =>
                <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                ><item.icon className="text-lg"></item.icon></a>
            )}
        </>
    )
}
