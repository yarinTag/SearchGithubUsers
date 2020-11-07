Starter Project

css provided (global styles, styled components)
folders/files already setup
all imports included (warnings)
index.js for easier imports
Styled Components
Styled-Components - Main Docs

import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
React Icons
React Icons - Main Docs

import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
React Router Dom
version used - "react-router-dom": "^5.2.0",

react-router-dom - Main Docs

renders the first child that matches

A always matches

Gihthub API
Root Endpoint

Get User

Repos

Followers

Rate Limit

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

Fusion Charts
Fusion Charts - Main Docs
First React Chart
List Of Charts
Themes
Auth0
Auth0 - Main Docs

Create Application

Choose : Single Page Web Applications

Choose : React

Go to Settings Tab

Copy/Paste Domain, ClientID - can be public (or use .env)

Add Domain - for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

Allowed Callback URLs
Allowed Logout URLs
Allowed Web Origins
SAVE CHANGES!!!!!!!!!!!!!!!
Connections email,social

React SDK Docs

REACT SDK API Docs

Deployment
Netlify

Additional Info
Redirects with react-router-dom
In order for routing to work on netlify, redirects was added to the public folder

_redirects file in public

/*    /index.html   200

Redirects Blog Post

Warnings and create-react-app
package.json

"build": "CI= react-scripts build",