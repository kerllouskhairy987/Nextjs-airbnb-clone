import Link from 'next/link';

const Footer = () => {
    const links = [
        {
            title: 'ABOUT',
            links: [
                'How Airbnb works',
                'Newsroom',
                'Investors',
                'Airbnbn Plus',
                'Airbnb Luxe',
            ],
        },
        {
            title: 'COMMUNITY',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
        {
            title: 'HOST',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
        {
            title: 'SUPPORT',
            links: [
                'Accessbility',
                'This is not a real site',
                'Its a pretty awesome clone',
                'Referrals accepted',
                'Papafam',
            ],
        },
    ];
    return (
        <footer>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-32 py-5 bg-gray-200 text-gray-600 space-between-sections'>
                {links.map((link) => (
                    <div key={link.title} className='space-y-4 text-xs text-gray-800'>
                        <h5 className='font-bold'>{link.title}</h5>
                        {link.links.map((item) => (
                            <Link href={item} key={item} className='block '>
                                {item}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;