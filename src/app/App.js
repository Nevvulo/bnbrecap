import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Credits from './pages/credits/Credits';
import './App.css';

import { MessagesIntro, MessagesTotal, View, UserMessages,
  MostPinned, UserPinned, Nickname, Commands, CommandsUser, AstralModIntro, ChatIntro, Attachments, Swears, 
  vicr123, SquidGrill, reflectronic, projsh, NTF, Jelle, Craig, Alee, Fallback, Nitro,
  Aren, cylex, Vrabbers, Ashifter, Promotions } from './pages/views';

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();
const secrets = require('./../secrets.json');

/* Search query data
* Name: Every single message in every channel accessible by all roles
* during: 2019 in: general in: off-topic in: techgeeks in: sharing-is-caring in: bot in: epic-gamers in: minecraft in: the-sims in: switch
* Count: 757,949 messages
*
* Name: Every single message in every channel accessible by regulars
* during: 2019 in: general in: off-topic in: techgeeks in: sharing-is-caring in: bot in: epic-gamers in: minecraft in: the-sims in: switch in: regular-zone 
* Count: 773,671 messages
*
* Name: Every single message in every channel accessible by veterans
* during: 2019 in: general in: off-topic in: techgeeks in: sharing-is-caring in: bot in: epic-gamers in: minecraft in: the-sims in: switch in: regular-zone in: veteran-zone
* Count: 828,925 messages
*/

/*
TODO: Finalized List of Views (in order):
* Personalized
* * Swing
- - 89 mentions of "furry"
* * ThePixelPolygon
- - 44 mentions of "iidx"
* * lily
- - Beat maniac
- - 22+ mentions of "beatmania"
*/

window.user = localStorage.getItem('user');
if (window.user) {
  try {
    window.user = JSON.parse(window.user);
  } catch (e) {
    window.user = undefined;
  }
}

const id = window.user ? window.user.id : 0;
const CUSTOM_IDS = [
  '189412734050238464', '278805875978928128', '384454726512672768',
  '250726367849611285', '241299743869894667', '199958849094942721',
  '204820571656028161', '242775871059001344', '191290329985581069',
  '279378942400528385', '209393457574313984', '210794545015685121'
]
const ROUTES = [
  { name: 'Home', class: 'home', component: Home, path: '', noView: true },

  { name: 'MessagesIntro', class: 'messages-intro', component: MessagesIntro, path: 'mesi' },
  { name: 'MessagesTotal', class: 'messages-total', component: MessagesTotal, path: 'mt' },
  { name: 'UserMessages', class: 'user-messages', component: UserMessages, path: 'um', id },

  { name: 'AstralModIntro', class: 'astralmod-intro', component: AstralModIntro, path: 'ami' },
  { name: 'MostPinned', class: 'most-pinned', component: MostPinned, path: 'mp' },
  { name: 'UserPinned', class: 'user-pinned', component: UserPinned, path: 'up' },
  { name: 'Nickname', class: 'nickname', component: Nickname, path: 'nick' },
  { name: 'Commands', class: 'commands', component: Commands, path: 'cmds' },
  { name: 'CommandsUser', class: 'commands-user', component: CommandsUser, path: 'cmdsuser', id },

  { name: 'ChatIntro', class: 'chat-intro', component: ChatIntro, path: 'ci' },
  { name: 'Attachments', class: 'attachments', component: Attachments, path: 'atchmts' },
  { name: 'Swears', class: 'swears', component: Swears, path: 'swrs' },

  { name: 'Promotions', class: 'promotions', component: Promotions, path: 'promos' },

  { name: 'SquidGrill', class: 'squid-grill', component: SquidGrill, path: 'custom-sg', id: '189412734050238464' },
  { name: 'vicr123', class: 'vicr123', component: vicr123, path: 'custom-vic', id: '278805875978928128' },
  { name: 'reflectronic', class: 'reflectronic', component: reflectronic, path: 'custom-flec', id: '384454726512672768' },
  { name: 'projsh', class: 'projsh', component: projsh, path: 'custom-projsh', id: '250726367849611285' },
  { name: 'NTF', class: 'ntf', component: NTF, path: 'custom-ntf', id: '241299743869894667' },
  { name: 'Jelle', class: 'jelle', component: Jelle, path: 'custom-jelle', id: '199958849094942721' },
  { name: 'Craig', class: 'craig', component: Craig, path: 'custom-craig', id: '204820571656028161' },
  { name: 'Alee', class: 'alee', component: Alee, path: 'custom-alee', id: '242775871059001344' },
  { name: 'Aren', class: 'aren', component: Aren, path: 'custom-aren', id: '191290329985581069' },
  { name: 'cylex', class: 'cylex', component: cylex, path: 'custom-cylex', id: '279378942400528385' },
  { name: 'Vrabbers', class: 'vrabbers', component: Vrabbers, path: 'custom-vrabbers', id: '209393457574313984' },
  { name: 'Ashifter', class: 'ashifter', component: Ashifter, path: 'custom-ashifter', id: '210794545015685121' },

  { name: 'Fallback', class: 'fallback', component: Fallback, path: 'custom', id: CUSTOM_IDS.includes(id) ? 1 : id },

  { name: 'Nitro', class: 'nitro', component: Nitro, path: 'nitro', id: secrets.DISCORD_NITRO_CODES[window.user ? window.user.id : 0] ? id : 1 },

  { name: 'Credits', class: 'credits', component: Credits, path: 'credits', noView: true },
]

let CURRENT_ROUTE = ROUTES.find(route => window.location.pathname === `/${route.path}`); // if null, we're on the landing page

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route render={({ location }) => (
          <Switch location={location}>
            {ROUTES.filter(e => e.id ? !!window.user : true).map((route, i) => { // eslint-disable-line
              if (route.id !== undefined || route.id === null) {
                if (route.id === null && CURRENT_ROUTE && CURRENT_ROUTE.path === route.path) {
                  return window.routeHandler();
                }
                if ((route.id !== null && route.id === id) || id === '246574843460321291') {
                  return (
                    <Route path={`/${route.path}`} key={i} exact render={() => route.noView 
                      ? <>{React.createElement(route.component)}</> 
                      : <View className={`view-${route.class}`}>{React.createElement(route.component)}</View>} />)
                }
              } else {
                return (
                  <Route path={`/${route.path}`} key={i} exact render={() => route.noView 
                    ? <>{React.createElement(route.component)}</> 
                    : <View className={`view-${route.class}`}>{React.createElement(route.component)}</View>} />)
              }
            })}
            
            <Route path='/signout' component={Home} />
          </Switch>
      )}/>
      </div>
    </BrowserRouter>
  )
}

const routeHandler = (event, returnString = false) => {
  const list = ROUTES.filter(e => e.id ? !!window.user : true).filter(e => !e.id || e.id === id)
  const direction = event ? (event.deltaY > 1 ? 1 : -1) : 1;
  change++;

  if (change && !scrollingDisabled) {
    if (!returnString) {
      change = 0;
      scrollingDisabled = true;
    }
    
    const position = list.indexOf(CURRENT_ROUTE) === -1 ? 0 : list.indexOf(CURRENT_ROUTE);

    if (list[position + direction]) {
      let previous = CURRENT_ROUTE;
      CURRENT_ROUTE = list[position + direction];
      if (previous === CURRENT_ROUTE) {
        console.log('[ ROUTE ] Duplicate found')
        return;
      }

      if (CURRENT_ROUTE) {
        if (CURRENT_ROUTE.id !== undefined && CURRENT_ROUTE.id !== id) {
          if (CURRENT_ROUTE.id !== 0 && id) {
            console.log('[ ROUTE ] ID based route hit but not authorized')
            return routeHandler();
          }
        }
        if (returnString) {
          // this is literllly so cooked but whatever
          console.log('[ ROUTE ] Next route is ', CURRENT_ROUTE)
          return CURRENT_ROUTE;
        }
        if (CURRENT_ROUTE.class.includes('intro')) {
          document.location.pathname = `/${CURRENT_ROUTE.path}`;
        } else {
          document.body.classList.add('view-exit', 'view-exit-active')
          setTimeout(() => {
            document.location.pathname = `/${CURRENT_ROUTE.path}`;
          }, 120);
        }
      }
    }
  }
  setInterval(() => {
    change = 0;
    scrollingDisabled = false;
  }, 350)
}

window.routeHandler = routeHandler;

// Scroll Handler
let change = 0;
let scrollingDisabled = false;
document.addEventListener('wheel', routeHandler)

const ACCESS_TOKEN = window.location.search.split('access_token=')[1]
if (ACCESS_TOKEN && !window.user) {
  console.log('[ OAUTH ] Requesting user object')
  oauth.getUser(ACCESS_TOKEN).then((user) => {
    console.log('[ OAUTH ] Logged in as ' + user.id)
    window.user = user;
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = window.location.origin + window.location.pathname;
  });
}

export default App;
