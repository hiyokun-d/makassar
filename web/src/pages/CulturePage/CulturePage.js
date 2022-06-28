import { MetaTags } from '@redwoodjs/web'

const CulturePage = () => {
  return (
    <>
      <MetaTags title="Culture" description="Culture page" />

      <div id="article">
        <main>
          <h1>culture</h1>
          <article>
            <ul>
              <li>
                Atraksi permainan tradisional &quot;Ma&apos;raga&quot;,
                Merupakan pertunjukan permainan bola raga yang dipindahkan dari
                kaki ke kaki atau ke tangan, pertunjukan ini dimainkan dengan
                suka cita. Para pemain menggunakan pakaian adat seperti passapu
                dan sarung, biasanya dimainkan oleh 6 orang pemain. Pertunjukan
                ini akan semakin menarik ketika para pemain mulai saling
                menopang hingga semakin tinggi dan tetap lihai memainkan bola
                dan tidak terjatuh ke tanah.
              </li>
              <br></br>
              <li>Atraksi permainan rakyat &quot;Mappadendang&quot;.</li>
              <br></br>
              <li>Tarian magis &quot;Pepe-pepeki ri Makka&quot;.</li>
              <br></br>
              <li>Tarian ritual Bissu &quot;Ma&apos;giri&quot;.</li>
              <br></br>
              <li>Pemain gendang &quot;Gandrang Bulo&quot;.</li>
              <br></br>
              <li>Tarian-tarian tradisional seperti Tari Pakarena.</li>
            </ul>
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

export default CulturePage
