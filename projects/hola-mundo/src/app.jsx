import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const formatUsername = (username) => `@${username}`;
  return (
    <div className="App">
      <TwitterFollowCard
        formatUsername={formatUsername}
        username={"pheralb"}
        name={"Pablo Hernandez"}
        initialIsFollowing
      />
      <TwitterFollowCard
        formatUsername={formatUsername}
        username={"midudev"}
        names={"Miguel Angel Duran"}
        initialIsFollowing
      />
      <TwitterFollowCard
        formatUsername={formatUsername}
        username={"vxnder"}
        name={"Wilcar Ortiz"}
        initialIsFollowing={false}
      />
    </div>
  );
}
