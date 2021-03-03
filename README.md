<p align="center">
<img src="https://angular.io/assets/images/logos/angular/angular.svg" width="60px" height="100px"/>
</p>
<h2 align="center">Angular 11 + Scully JAMstack</h2>

This project explores the following concepts that include 
1. Async data with Observables, 
2. Object/Array destructuring, 
3. Content Projection (Transclusion),  
4. Intersection Observe for lazy loading, 
5. DRY components,
6. SCSS architecture + BEM,
7. Minimalism in Design + Glassmorphism,
8. Performant CSS3 Animations,
9. Mobile-first responsive fluid design and
10. Scully static site generator for Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Please make sure you have a CORS plugin (of whitelist the domain API) as the Api has not whitelisted localhost domains. Please use device emulation for mobile as there are touch events.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Scully Build

Run `npm run scully` AFTER you have a fresh ng build. The artifacts are stored in the `dist/static` folder. Always deploy the static site to production.

