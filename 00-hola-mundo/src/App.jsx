import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernández',
    isFollowing: false
  },
  {
    userName: 'd4nidev',
    name: 'Dani Salgado',
    isFollowing: true
  }
]

export function App () {
    return (
        <section className='App'>
          {
            users.map(({ userName, name, isFollowing }) => (
              <TwitterFollowCard 
                initialIsFollowing={isFollowing} 
                userName={userName}
                key={userName}
                >
                  {name}
              </TwitterFollowCard>
            )
          )}
        </section>
    );
}