export default function CommonBanner({img, title}) {
  return (
    <>
        <section style={{background: `url(${img.src}) no-repeat fixed top`, backgroundSize: 'cover'}}>
            <h2 className='md:py-32 py-20 text-5xl text-center bg-black bg-opacity-60 text-white'>{title}</h2>
        </section>
    </>
  )
}
