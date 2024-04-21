import Link from "next/link"
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

const Social = ({containerStyles}) => {
  return (
    <ul className={`${containerStyles}`}>
        <li>
            <Link href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="text-3xl hover:text-soft_green duration-300" />
            </Link>
        </li>      
        <li>
            <Link href='https://www.facebook.com/?locale=es_LA' target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="text-3xl hover:text-soft_green duration-300" />
            </Link>
        </li>      
        <li>
            <Link href='https://twitter.com/home' target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="text-3xl hover:text-soft_green duration-300" />
            </Link>
        </li>      
    </ul>
  )
}

export default Social
