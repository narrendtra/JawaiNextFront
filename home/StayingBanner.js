import Image from 'next/image'

const StayingBanner = () => {
  return (
    <div id="explorearea">
      <Image
        src="/images/explorebg.webp"
        width="1920"
        height="1028"
        style={{ width: '100%', height: 'auto' }}
        className="img-fullwidth"
        alt="explorebg"
      />
      <div id="exploretxt">
        <h1>Staying true to our words</h1>
        <p>
          "We set our activities to make you feel your bare feet and calmness in
          the beds of nature"
        </p>
      </div>
    </div>
  )
}

export default StayingBanner
