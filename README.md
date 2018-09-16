# Python business logic presentation

This repository contains a presentation presented on PyWaw and PyKonik Poland meetups 

## Plan

1. About me + pvpc 
2. What is a business logic
  - examples from pvpc
3. Where to put it in Django (MVT framework)?
  - views layer? Problems because of poor reusability
  - models layer? Problems because business logic is often cross-models
  - for sure not templates
  - forms?
4. Application layer
5. Common requirements
  - check if user is eligible to perform action (object-level permissions is not enough)
  - understand and react depending on why user can't perform action
  - perform action
  - test easily
6. My ideal solution

## Usage

Install the dependencies (they will only be downloaded in a local folder):
```bash
cd eaglejs-demo
npm install
```

Then run ```npm run dev``` to start the server, and open your browser at [http://localhost:8080](http://localhost:8080) to see the slideshows.
