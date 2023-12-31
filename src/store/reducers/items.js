import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import assistenteVirtual from 'assets/itens/assistente-virtual.png';
import airpod from 'assets/itens/airpod.png';
import assistenteVirtualTela from 'assets/itens/assistente-virtual-tela.png';
import leitorLivros from 'assets/itens/leitor-livros.png';
import almofadaAssento from 'assets/itens/assento.png';
import capaVolanteCouro from 'assets/itens/capa-volante-couro.png';
import organizadorLateral from 'assets/itens/organizador-lateral.png';
import capaVolanteCristais from 'assets/itens/capa-volante-cristais.png';
import suporteVeicular from 'assets/itens/suporte-veicular.png';
import console1 from 'assets/itens/console-1.png';
import jogo1 from 'assets/itens/jogo-1.png';
import console2 from 'assets/itens/console-2.png';
import manete from 'assets/itens/manete.png';
import jogo2 from 'assets/itens/jogo-2.png';
import guardaTreco from 'assets/itens/guarda-treco.png';
import caderno from 'assets/itens/caderno.png';
import cadeira from 'assets/itens/cadeira.png';
import organizadorPastas from 'assets/itens/organizador-pastas.png';
import papel from 'assets/itens/papel.png';
import tv50 from 'assets/itens/tv-50.png';
import tv60 from 'assets/itens/tv-60.png';
import caixaSom from 'assets/itens/caixa-som.png';
import caixaSomBluetooth from 'assets/itens/caixa-som-bluetooth.png';
import miniSystem from 'assets/itens/mini-system.png';
import tablet from 'assets/itens/tablet.png';

const initialState = [{
  title: 'Assistente virtual',
  description: 'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
  image: assistenteVirtual,
  isFavorite: false,
  price: 285,
  id: uuid(),
  category: 'eletronicos'
}, {
  title: 'AirPods com Estojo de Recarga',
  description: 'Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.',
  image: airpod,
  isFavorite: false,
  price: 900,
  id: uuid(),
  category: 'eletronicos'
}, {
  title: 'Tablet Wi-Fi',
  description: 'Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.',
  image: tablet,
  isFavorite: false,
  price: 637,
  id: uuid(),
  category: 'eletronicos'
}, {
  title: 'Assistente virtual com tela',
  description: 'Desenvolvido para se mover com você: com um display HD de 10,1" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem som direcional premium e de alta qualidade.',
  image: assistenteVirtualTela,
  isFavorite: false,
  price: 1600,
  id: uuid(),
  category: 'eletronicos'
}, {
  title: 'Leitor de livros digitais',
  description: 'O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.',
  image: leitorLivros,
  isFavorite: false,
  price: 447,
  id: uuid(),
  category: 'eletronicos'
}, {
  title: 'Almofada de assento',
  description: 'Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.',
  image: almofadaAssento,
  isFavorite: false,
  price: 45.90,
  id: uuid(),
  category: 'automotivos'
}, {
  title: 'Capa de volante de couro',
  description: 'Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.',
  image: capaVolanteCouro,
  isFavorite: false,
  price: 150,
  id: uuid(),
  category: 'automotivos'
}, {
  title: 'Organizador lateral',
  description: 'Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.',
  image: organizadorLateral,
  isFavorite: false,
  price: 149.90,
  id: uuid(),
  category: 'automotivos'
}, {
  title: 'Capa de volante de cristais',
  description: 'Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ',
  image: capaVolanteCristais,
  isFavorite: false,
  price: 290,
  id: uuid(),
  category: 'automotivos'
}, {
  title: 'Suporte Veicular',
  description: 'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
  image: suporteVeicular,
  isFavorite: false,
  price: 59.90,
  id: uuid(),
  category: 'automotivos'
}, {
  title: 'Console',
  description: 'O console que está em pré-venda oferece novas possibilidades de jogabilidade que você nunca imaginou. Além disso, você também pode baixar jogos digitais, Experimente o carregamento extremamente rápido do SSD de 825GB com ultra-velocidade, uma imersão mais profunda com suporte à resposta tátil, gatilhos adaptáveis e áudio 3D.',
  image: console1,
  isFavorite: false,
  price: 4300,
  id: uuid(),
  category: 'jogos'
}, {
  title: 'Jogo para console',
  description: 'Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.',
  image: jogo1,
  isFavorite: false,
  price: 299.90,
  id: uuid(),
  category: 'jogos'
}, {
  title: 'Console',
  description: 'Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.',
  image: console2,
  isFavorite: false,
  price: 4349,
  id: uuid(),
  category: 'jogos'
}, {
  title: 'Controle joystick sem fio',
  description: 'Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.',
  image: manete,
  isFavorite: false,
  price: 279,
  id: uuid(),
  category: 'jogos'
}, {
  title: 'Jogo para console',
  description: 'Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.',
  image: jogo2,
  isFavorite: false,
  price: 349.90,
  id: uuid(),
  category: 'jogos'
}, {
  title: 'Organizador de Mesa',
  description: 'Moderno, funcional e versátil com acabamento em plástico de alta qualidade e construção robusta que se adapta a qualquer ambiente. (5 compartimentos e 1 divisão na parte traseira). Em sua área de trabalho, mantenha tudo limpo e organizado, como caneta, lápis, tesoura, clipes, notas adesivas, acessórios e muito mais para economizar espaço com estilo.',
  image: guardaTreco,
  isFavorite: false,
  price: 19.90,
  id: uuid(),
  category: 'escritorio'
}, {
  title: 'Caderno Inteligente',
  description: 'Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes',
  image: caderno,
  isFavorite: false,
  price: 285,
  id: uuid(),
  category: 'escritorio'
}, {
  title: 'Cadeira de Escritório',
  description: 'Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.',
  image: cadeira,
  isFavorite: false,
  price: 629,
  id: uuid(),
  category: 'escritorio'
}, {
  title: 'Papel Sulfite A4 75g 500 folhas',
  description: 'Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.',
  image: papel,
  isFavorite: false,
  price: 27.60,
  id: uuid(),
  category: 'escritorio'
}, {
  title: 'Arquivo Estreito com Furação',
  description: 'Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.',
  image: organizadorPastas,
  isFavorite: false,
  price: 44.90,
  id: uuid(),
  category: 'escritorio'
}, {
  title: 'TV Smart 50"',
  description: 'A Smart TV LED 50" equipada com a tecnologia de Business TV que permite configurar a TV tanto para o modo residencial quanto para o modo hotel, trazendo uma maior variedade de configurações e personalizações para sua TV. Além de possui uma ótima qualidade de imagem 4K.',
  image: tv50,
  isFavorite: false,
  price: 2600,
  id: uuid(),
  category: 'som'
}, {
  title: 'Smart TV 60" 4K UHD',
  description: 'Smart TV LG 60" 4K UHD WiFi Bluetooth Inteligência Artificial, Painel de Controle, Processamento Natural de Linguagem, AI Recommendation, Otimizador de Games, Channels, Edição Inteligente de Apps e Media Player.',
  image: tv60,
  isFavorite: false,
  price: 3359,
  id: uuid(),
  category: 'som'
}, {
  title: 'Caixa de Som',
  description: 'A caixa de som 710 à prova de respingos transforma seu próximo evento em uma verdadeira festa, show ou balada. Show de luzes único e colorido sincronizado com seu aparelho de celular. Botões minimalistas e intuitivos no painel superior e o aplicativo permitem criar experiências musicais e visuais de alto nível. Com luzes estroboscópicas piscantes personalizáveis e o som incrível do conjunto duplo de tweeters e woofers ricos em graves.',
  image: caixaSom,
  isFavorite: false,
  price: 5817.33,
  id: uuid(),
  category: 'som'
}, {
  title: 'Caixa de Som Bluetooth',
  description: 'Caixa de som oferece o ousado som com driver de longa excursão otimizado, tweeter separado e dois radiadores de graves. Até 20 horas de reprodução e um prático powerbank para manter carregados os dispositivos que fazem a festa a noite toda.',
  image: caixaSomBluetooth,
  isFavorite: false,
  price: 1199,
  id: uuid(),
  category: 'som'
}, {
  title: 'Mini System com Função karaokê',
  description: 'Moderno e superpotente, o Mini System vai reproduzir suas músicas com qualidade máxima nos mais diversos formatos, como MP3, WMA CD, CD-R e CD-RW. E, se a ideia for promover festas e encontros animados, a função karaokê, a conexão Bluetooth e as duas portas USB serão bastante úteis.',
  image: miniSystem,
  isFavorite: false,
  price: 782.91,
  id: uuid(),
  category: 'som'
}];

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState
})

export default itemsSlice.reducer;