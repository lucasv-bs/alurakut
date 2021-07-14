import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons.js';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(properties) {
  return (
    <Box>
      <img src={`https://github.com/${properties.gitHubUser}.png`} style={{borderRadius: '8px'}}/>
    </Box>
  );
}

export default function Home() {
  const aleatoryUser = 'lucasv-bs';
  const favoritePeople = [
    'omariosouto', 
    'marcobrunodev', 
    'paes', 
    'akitaonrails'
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar gitHubUser={aleatoryUser} />
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
            Bem vindo
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favoritePeople.length})
            </h2>
            
            <ul>
            {favoritePeople.map((actualItem) => {
              return (
                <li>
                  <a href={`/users/${actualItem}`} key={actualItem}>
                    <img src={`https://github.com/${actualItem}.png`} />
                    <span>{actualItem}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>          
        </div>
      </MainGrid>
    </>
  )
}
