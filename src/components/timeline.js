import * as React from 'react'
import { Chrono } from "react-chrono";

export const data = [
  {
    color: 'green lighten-2',
    icon: 'mdi-baby',
    cardSubtitle: 'Born at Sendai',
    cardDetailedText: 'Hello, world!',
  },
  {
    color: 'green darken-2',
    icon: 'mdi-human-child',
    cardSubtitle: 'Moved to Tokyo',
    cardDetailedText: '',
  },
  {
    color: 'blue lighten-2',
    icon: 'mdi-school',
    cardSubtitle: 'TNCT(J)',
    cardDetailedText: 'In 5years.',
  },
  {
    color: 'blue-grey lighten-2',
    icon: 'mdi-pac-man',
    cardSubtitle: 'Sole proprietorship',
    cardDetailedText: 'Management of web media for the purpose of advertising revenue. With teams of several people.',
  },
  {
    color: 'black darken-1',
    icon: 'mdi-school',
    cardSubtitle: 'TUT(7)',
    cardDetailedText: 'In 2 years.',
  },
  {
    color: 'red lighten-1',
    icon: 'mdi-run',
    cardSubtitle: 'Web engineer in Tokyo',
    cardDetailedText: 'Front-end & batch (PHP, Java Spring-boot, Node.js), Settlement (ApplePay etc.), Back-end (Information Retrieval, Apache Solr, PHP, Java Spring-boot), SRE (DevOps, CI/CD, System operator, monitoring and page), and more...',
  },
  {
    color: 'red darken-4 lighten-1',
    icon: 'mdi-heart',
    cardSubtitle: 'WUGner',
    cardDetailedText: 'THIS IS "Wake Up, Girls!"',
  },
  {
    color: 'amber darken-2 lighten-1',
    icon: 'mdi-ring',
    cardSubtitle: 'Married',
    cardDetailedText: '',
  },
];

const Timeline = () => {
  return (
    <div>
      <h2>
        My history
      </h2>
      <div>
        <Chrono
          items={data} 
          mode="VERTICAL_ALTERNATING"
          cardHeight="1rem"
          hideControls
          theme={{
            primary: 'black',
            secondary: 'black',
            cardBgColor: 'white',
            cardForeColor: 'black',
          }}
        />
      </div>
    </div>
  )
}

export default Timeline
