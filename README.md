# Chainalysis Take Home Test

The app is also deployed on Heroku and can be viewed [here](https://btc-eth-exchange.herokuapp.com).

### Instructions to build
```
git clone https://github.com/virajshastri97/chainalysis-test.git
cd chainalysis-test
# Run the server
npm install && npm start
# Open in a new terminal tab/window and build react app (this will run the dev build)
cd client && npm install && npm start
```
Open `localhost:3000` in a browser to view.

Answers to the given questionnaire.

*1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?*
There were some shortcuts taken, mostly in the server side code. Firstly, instead of using the API directly from a particular exchange, I've used an integrated API from [CoinAPI](https://www.coinapi.io). While this did make the request parsing easier, there are harsher usage limits on this. Secondly, there is a security vulnerability, in that, the API key is exposed in the server code for now, instead of being hidden.

*2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)*
The front-end uses redux for state management. While not completely necessary for an application of this size, I find it easier to use than passing states between parent and child components natively in React.

*3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?*
The Node.js server makes the API call to the integrated exchange on its own and just forwards the data whenever the React app requests it. This is designed so that it doesn't overload the exchange server. As for scaling to multiple users per second, I would add more listening ports. Additionally, I could cache the exchange data so that the listeners can multiple listeners can read from it.

*4. What are some other enhancements you would have made, if you had more time to do this implementation*
The rates displayed update dynamically every 30 minutes (this time limit is chosen to keep the app under the API call limit). But the number of exchanges used are hardcoded. I would update the redux store such that I can add multiple exchanges and display information from those dynamically.
