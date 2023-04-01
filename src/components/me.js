import * as React from "react"
import {
  wrapper,
  flexUl,
  flexLi
} from './me.module.css'

const links_main = [
  {
    text: 'Twitter',
    url: 'https://twitter.com/wata_hari',
  },
  {
    text: 'Blog',
    url: 'https://blog.watahari.com/',
  },
  {
    text: 'Instagram - Cooking diary',
    url: 'https://www.instagram.com/meshi_today/',
  },
]
const links_sub = [
  {
    text: 'GitHub',
    url: 'https://github.com/watahari',
  },
  {
    text: 'Qiita',
    url: 'https://qiita.com/watahari',
  },
  {
    text: 'Keybase',
    url: 'https://keybase.io/watahari/',
  },
  {
    text: 'Foursquare',
    url: 'https://ja.foursquare.com/wata_hari',
  },
  {
    text: 'Bookmeter',
    url: 'https://bookmeter.com/users/1913',
  },
  {
    text: 'Visit history in Japan(経県値)',
    url: 'https://uub.jp/kkn/km_new.cgi?MAP=43453434424454424244445434434444241340441343004&NAM=watahari&CAT=%E7%94%9F%E6%B6%AF%E7%B5%8C%E7%9C%8C%E5%80%A4',
  },
  {
    text: 'myFlightradar24',
    url: 'https://my.flightradar24.com/watahari',
  },

]
const links_key = [
  {
    text: 'id_rsa.pub',
    url: 'https://github.com/watahari.keys',
  },
]

const Me = () => {
  return (
    <div className={wrapper}>
      <h2>
        It's me.
      </h2>
      <ul className={flexUl}>
        {links_main.map(link => (
          <li className={flexLi} key={link.url}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
      <ul className={flexUl}>
        {links_sub.map(link => (
          <li className={flexLi} key={link.url}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
      <ul className={flexUl}>
        {links_key.map(link => (
          <li className={flexLi} key={link.url}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Me
