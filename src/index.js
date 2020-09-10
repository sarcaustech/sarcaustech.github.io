import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  Arwes,
  Puffs,
  Heading,
  Frame,
  Content,
  Image,
  Words,
  Link,
  Button,
} from 'arwes';
import { Icon } from '@mdi/react';
import {
  mdiTelegram,
  mdiLinkedin,
  mdiXing,
  mdiEmailEdit,
  mdiGithub,
} from '@mdi/js';
import './index.css';

const sounds = {
  shared: { volume: 1 },
  players: {
    information: { sound: { src: ['/sound/information.mp3'] } },
    ask: { sound: { src: ['/sound/ask.mp3'] } },
    warning: { sound: { src: ['/sound/warning.mp3'] } },
    error: { sound: { src: ['/sound/error.mp3'] } },
    click: {
      sound: { src: ['/sound/click.mp3'] },
    },
    typing: {
      sound: { src: ['/sound/typing.mp3'] },
      settings: { oneAtATime: true },
    },
    deploy: {
      sound: { src: ['/sound/deploy.mp3'] },
      settings: { oneAtATime: true },
    },
  },
};

const App = () => (
  <ThemeProvider theme={createTheme({ fontFamily: 'Monaco' })}>
    <SoundsProvider sounds={createSounds(sounds)}>
      <Arwes animate background="/img/background.jpg" pattern="/img/glow.png">
        <Puffs>
          <div
          >
            <Frame
              animate
              show
              level={3}
              corners={4}
              layer="primary"
              style={{ margin: '3%' }}
            >
              <Content className="content">
                <Image
                  resources="/img/Foto.JPG"
                  alt=""
                  className="profile-picture"
                />
                <Heading
                  node="h1"
                  style={{ fontFamily: '"Electrolize"', marginBottom: 0 }}
                >
                  Mikel Jason Münnekhoff
                </Heading>
                <p style={{ fontSize: '60%' }}>
                  <Words animate>
                    CS student, automation enthusiast, pizza addict, resisting
                    MS Excel
                  </Words>
                </p>
                <div className="buttons">
                  <Link href="mailto:mmuennekhoff@gmail.com" target="_blank">
                    <Button animate>
                      <Icon path={mdiEmailEdit} size={1}></Icon>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.xing.com/profile/MikelJason_Muennekhoff/cv"
                    target="_blank"
                  >
                    <Button animate>
                      <Icon path={mdiXing} size={1}></Icon>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mikel-jason-münnekhoff-ab47a5140/"
                    target="_blank"
                  >
                    <Button animate>
                      <Icon path={mdiLinkedin} size={1}></Icon>
                    </Button>
                  </Link>
                  <Link href="https://telegram.me/sarcaustech" target="_blank">
                    <Button animate>
                      <Icon path={mdiTelegram} size={1}></Icon>
                    </Button>
                  </Link>
                  <Link href="https://github.com/sarcaustech" target="_blank">
                    <Button animate>
                      <Icon path={mdiGithub} size={1}></Icon>
                    </Button>
                  </Link>
                </div>
              </Content>
            </Frame>
          </div>
        </Puffs>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
