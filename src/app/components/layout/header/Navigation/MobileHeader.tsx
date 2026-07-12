

import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';

const MobileHeader: React.FC<{ item: HeaderItem }> = ({ item }) => {

    return (
        <>
            <Link href={item.href} className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium ">
                <li className={`rounded-md w-full p-2 px-4`}>
                    {item.label}
                </li>
            </Link>
        </>
    );
};

export default MobileHeader;
