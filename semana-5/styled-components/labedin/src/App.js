import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="EvertonÍndio" 
          descricao="Olá, me chamo Everton Guedes, estou cursando minha última disciplina da graduação em bacharelado em Geologia pela UNIPAMPA, 
          entretanto, antes mesmo de concluir o curso, estou em processo de transição de carreira. Migrando para área tech, 
          devido as excelentes perspectivas atuais e futuras do mercado. Conhecer uma instituição de ensino como a Labenu foi 
          essencial para essa tomada de decisão, devido a sua metodologia de ensino que estimula o aprendizado e ao excelente 
          suporte oferecido pelos educadores. Na Labenu ao longo de vinte e seis semanas os estudantes saem aptos a entrarem no
          mercado de trabalho como Full Stack Web Developers Jr, isso quer dizer, com conhecimento básico de tecnologias para o 
          desenvolvimento Web de Frontend e Backend."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
      <cardPequeno
        
        />
      </div>

    </div>
  );
}

export default App;
