import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className='App'>
          <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
          <TwitterFollowCard userName="pheralb" name="Pablo Hernandez"/>
          <TwitterFollowCard userName="vxnder" name="Vanderhart"/>
        </section>
    );
}