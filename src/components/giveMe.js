import * as React from "react"
import {
  flexUl,
  flexLi
} from './giveMe.module.css'

const links = [
  {
    text: 'WishList(Amazon.co.jp)',
    url: 'https://www.amazon.co.jp/hz/wishlist/ls/2HUCQ913ZG8WX',
  },
  {
    text: 'Buy me a coffee',
    url: 'https://www.buymeacoffee.com/watahari',
  },
]

const GiveMe = () => {
  return (
    <div>
      <h2>
        Thank you for a lot!
      </h2>
      <ul className={flexUl}>
        {links.map(link => (
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

export default GiveMe
