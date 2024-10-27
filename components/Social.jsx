import Link from "next/link";
import { FaGithub, FaArtstation, FaYoutube, FaBehance } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const socials = [
  {icon: <FaGithub />, path: "https://github.com/Faon1331"},
  {icon: <FaArtstation />, path: "https://www.artstation.com/dimov_konstantin"},
  {icon: <FaUpwork />, path: ""},
  {icon: <FaBehance />, path: "https://www.behance.net/wanglung"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social;
