// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TraditionalCuisinPage = () => {
  return (
    <>
      <MetaTags
        title="TraditionalCuisin"
        description="TraditionalCuisin page"
      />

      <div id="article">
        <main>
          <h1>traditional cuisine</h1>
          <article>
            <h2>indonesia</h2>
            <p>
              Makassar memiliki beberapa makanan tradisional yang terkenal, yang
              paling terkenal adalah yang{' '}
              <a href="https://id.wikipedia.org/wiki/Coto_makassar">
                coto makassar
              </a>
              . Ini adalah sebuah{' '}
              <a href="https://id.wikipedia.org/wiki/Soto_(food)">soto</a>{' '}
              (rebusan) terbuat dari campuran kacang-kacangan, rempah-rempah,
              dan jeroan pilihan yang dapat termasuk otak sapi, lidah dan usus.{' '}
              <a href="https://id.wikipedia.org/wiki/Konro">Konro</a>, hidangan
              iga, juga merupakan makanan tradisional yang populer di Makassar.
              Keduanya{' '}
              <a href="https://id.wikipedia.org/wiki/Coto_makassar">
                coto makassar
              </a>{' '}
              dan <a href="https://id.wikipedia.org/wiki/Konro">konro</a> adalah
              biasanya dikonsumsi dengan{' '}
              <a href="https://id.wikipedia.org/wiki/Burasa">burasa</a> atau{' '}
              <a href="https://id.wikipedia.org/wiki/Ketupat">ketupat</a>, a kue
              beras ketan. Hidangan terkenal lainnya dari Makassar adalah{' '}
              <a href="https://id.wikipedia.org/wiki/Ayam_goreng">
                {' '}
                ayam goreng
              </a>{' '}
              sulawesi (ayam goreng Celebes); ayamnya diasinkan dengan a resep
              kecap tradisional hingga 24 jam sebelum digoreng menjadi warna
              emas. Hidangan ini biasanya disajikan dengan kaldu ayam, nasi dan
              spesial <a href="https://id.wikipedia.org/wiki/Sambal">
                sambal
              </a>{' '}
              (cabai saus).
              <br></br>
              <br></br>
              Selain itu, Makassar adalah rumah dari pisang epe (pisang tekan),
              as serta pisang ijo (pisang hijau). Pisang epe adalah pisang yang
              ditekan, dipanggang, dan ditutup dengan saus gula aren dan
              kadang-kadang dikonsumsi dengan{' '}
              <a href="https://id.wikipedia.org/wiki/Durian">durian</a>. Banyak
              PKL menjual pisang epe, terutama di sekitar daerah Losari Pantai.
              Pisang ijo adalah pisang yang dilapisi tepung berwarna hijau,
              santan, dan sirup. Pisang ijo terkadang disajikan dengan es dan
              sering dikonsumsi saat buka puasa saat{' '}
              <a href="https://id.wikipedia.org/wiki/Ramadhan">Ramadhan</a>.
            </p>
            <br></br>

            <h2>english</h2>
            <p>
              Makassar has several famous traditional foods, the most famous of
              which is{' '}
              <a href="https://en.wikipedia.org/wiki/Coto_makassar">
                coto makassar
              </a>
              . It is a{' '}
              <a href="https://en.wikipedia.org/wiki/Soto_(food)">soto</a>{' '}
              (stew) made from a mixture of nuts, spices, and selected offal
              which may include beef brain, tongue and intestine.{' '}
              <a href="https://en.wikipedia.org/wiki/Konro">Konro</a>, a rib
              dish, is also a popular traditional food in Makassar. Both{' '}
              <a href="https://en.wikipedia.org/wiki/Coto_makassar">
                coto makassar
              </a>{' '}
              and <a href="https://en.wikipedia.org/wiki/Konro">konro</a> are
              usually consumed with{' '}
              <a href="https://en.wikipedia.org/wiki/Burasa">burasa</a> or{' '}
              <a href="https://en.wikipedia.org/wiki/Ketupat">ketupat</a>, a
              glutinous rice cake. Another famous dish from Makassar is{' '}
              <a href="https://en.wikipedia.org/wiki/Ayam_goreng">
                {' '}
                ayam goreng
              </a>{' '}
              sulawesi (Celebes fried chicken); the chicken is marinated with a
              traditional soy sauce recipe for up to 24 hours before being fried
              to a golden color. The dish is usually served with chicken broth,
              rice and special{' '}
              <a href="https://en.wikipedia.org/wiki/Sambal">sambal</a> (chilli
              sauce).
              <br></br>
              <br></br>
              In addition, Makassar is the home of pisang epe (pressed banana),
              as well as pisang ijo (green banana). Pisang epe is a banana which
              is pressed, grilled, and covered with palm sugar sauce and
              sometimes consumed with{' '}
              <a href="https://en.wikipedia.org/wiki/Durian">durian</a>. Many
              street vendors sell pisang epe, especially around the area of
              Losari Beach. Pisang ijo is a banana covered with green colored
              flour, coconut milk, and syrup. Pisang ijo is sometimes served
              iced and often consumed at iftar during{' '}
              <a href="https://en.wikipedia.org/wiki/Ramadan">Ramadan</a>.
            </p>
          </article>
        </main>

        <footer>
          <p>
            source by: <a href="https://id.wikipedia.org/">wikipedia</a>
          </p>

          <aside>
            <h3>
              <a href="https://id.wikipedia.org/">
                <img
                  src="https://id.wikipedia.org/static/images/mobile/copyright/wikipedia.png"
                  alt="wikipedia"
                />
              </a>
            </h3>
          </aside>
        </footer>
      </div>
    </>
  )
}

export default TraditionalCuisinPage
