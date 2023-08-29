# Cat-API + React

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-blueviolet)
![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-red)
![React-Icons](https://img.shields.io/badge/React--Icons-4.10.1-green)
![Axios](https://img.shields.io/badge/Axios-1.4.0-yellow)
![Styled-Components](https://img.shields.io/badge/Styled--Components-6.0.5-orange)

> Explore the fascinating world of cat breeds with Cat-App crafted using React.js, React-DOM, Styled-Components, React Icons, Axios and Vite. Discover a wide variety of cat breeds, each with its own unique characteristics and traits.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [CatAPI](#catapi)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Demo

<img width = "500px" src="https://github.com/emektarkubra/Cat-API/assets/124355274/3ab2a871-e981-4365-85aa-9558e8c18593"/>

## Features

- Browse through a diverse collection of cat breeds.
- Learn about the history, appearance, and temperament of each breed.
- Enjoy high-quality images showcasing the beauty of each cat.
- A user-friendly interface designed for an engaging experience.

## CatAPI

the Cat API that returns information about speeds, their traits and images. 

the main url of this API (that comes by default with json-server): 
https://api.thecatapi.com/v1


### Endpoints

* All speeds:
https://api.thecatapi.com/v1/breeds

* A specific breed, based on their unique ID:
https://api.thecatapi.com/v1/breeds/breedId

* Cat images of specific breed, based on their unique ID:
https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=breedId&api_key=REPLACE_ME

 > Use it as either the x-api-key in the Header OR as the api_key Query Parameter

## Installation

1. Clone the repository:

```javascript
git clone https://github.com/emektarkubra/Cat-API.git
cd Cat-API
```

2. Install dependencies:

```
npm install
```

## Usage

Run the app locally:

```
npm run dev
```

The app will be accessible at `http://localhost:3000`.

## Build

Create a production build:

```
npm run build
```

## Technologies

- Vite: A fast and minimalistic development build tool.
- React.js: A JavaScript library for building user interfaces.
- React-DOM: Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements.
- Styled-Components: A CSS-in-JS library for styling React components.
- React Icons: A library of popular icon packs for React.
- Axios: Fetching data from the Cat API.

## Contributing

Contributions are welcome! If you encounter issues or have suggestions for improvements, feel free to open an issue or create a pull request.


## Show your support

If you find this project interesting, consider giving it a ⭐️ to show your support.

---
