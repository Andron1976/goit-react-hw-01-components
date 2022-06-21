// import tvShows from "database.json";
// import {Tv} from './Tv/Tv.jsx';

// export const App = () => {
  
//   const {name, type, image} = tvShows; 
//   return (
//     <Tv name = {name} type = {type} image = {image} />
//   );
// };
import user from "user.json";
import data from "data.json";
import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';

export const App = () => {
  const {username, tag, location, avatar, stats} = user;
  return (
    <div>
      <Profile
      username = {username}
      tag = {tag}
      location={location}
      avatar={avatar}
      stats={stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
    </div>
  );
};
