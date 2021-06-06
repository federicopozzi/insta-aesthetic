import Helmet from 'react-helmet';

import cover from '../images/icon.png';

export default function Seo() {
  const title = 'arfilters-aesthetic';
  return (
    <div className="App">
      <Helmet>

        <title>
          {title}
        </title>
        <meta
          name={title}
          content={title}
        />
        <meta
          name="description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://videosummarisationtoolkit.it/" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />
        <meta property="og:image" content={cover} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://videosummarisationtoolkit.it/" />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content="Which visual methods can be designed to facilitate the analysis and synthesis of video collections from the web? How can these methods be communicated so that they can be replicated by other researchers? In response to these questions comes Video summarisation toolkit, an opensource platform created to collect and communicate nine different methods designed for the analysis and visualisation of video collections from the web. "
        />
        <meta property="twitter:image" content={cover} />

      </Helmet>
    </div>
  );
}
