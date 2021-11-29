import Image from 'next/image'

import styles from './FlexibleContent.module.scss'

const destination = (content: any): JSX.Element => {
  console.log(content)
  return (
    <section>
      <h5 className={styles.destinationCTA}>
        Pick yor destination
      </h5>
      <div>
        <ul>
          {/* Add button element to li */}
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>
        <div>
          <Image src='/destination/image-moon.png' width={300} height={300} />
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before.
            A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
          <div>
            <span>
              <p>
                Avg. Distance
              </p>
            </span>
            <span>
              <p>
                Est. Travel Time
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

const FlexibleContent = ({ pathname, dataContent }: any): JSX.Element => {
  console.log(pathname, dataContent)
  return (
    <div className={styles.flexibleLayout}>
      hi, this will display content for destination, crew, and technology
      {destination(dataContent)}
    </div>
  )
}

export default FlexibleContent
