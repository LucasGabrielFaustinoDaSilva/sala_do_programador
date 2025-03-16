import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [videos, setVideos] = useState([]);

  //Função para buscar os vídeos no Youtube
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=cursos&key=yCpnJVZAY_n3i04WnmHVYYq_idKVI3hGUQ'); // Correção: adicionada aspas simples e fechado parêntese.
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Erro ao buscar vídeos', error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Cursos Gratuitos</h2>
      <div style={styles.platforms}>
        {/* Plataforma Aprendamais (MEC) */}
        <div style={styles.platforms}>
          <h3>Aprendamais (MEC)</h3>
          <p>Encontre cursos gratuitos oferecidos pelo MEC</p>
          <a
            href="https://aprendamais.mec.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Acessar Aprendamais
          </a>
        </div>

        {/* Plataforma Udemy */}
        <div style={styles.platforms}>
          <h3>Udemy</h3>
          <p>Confira os cursos gratuitos e pagos disponíveis na Udemy</p>
          <a
            href="https://www.udemy.com/?utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=zErSluD8o3g&ranMID=47901&ranEAID=zErSluD8o3g&ranSiteID=zErSluD8o3g-GacqZC70jCHe98m8RA8OPw"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Acessar Udemy
          </a>
        </div>

        {/* Curso em vídeo (YouTube) */}
        <div style={styles.videos}>
          {videos.map((video) => (
            <div key={video.id.videoId} style={styles.video}>
              <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p style={styles.videoTitle}>{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Estilos para a pagina
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  platforms: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  platform: {
    width: '30%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  videos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  video: {
    margin: '1rem',
    textAlign: 'center',
  },
  videoTitle: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#333',
  },
};

export default Courses;