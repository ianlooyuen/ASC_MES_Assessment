# ASC_MES_Assessment
Manufacturing Execution System modules for a company assessment.

## Clone repository into your local machine
```
git clone https://github.com/ianlooyuen/ASC_MES_Assessment.git
```

## Run Vue project
```
cd asc-mes-assessment
npm run dev
```
```npm run dev``` will run the Vue frontend

## Run backend server
```
cd backend
npm start
```
```npm start``` will boot the LoopbackJS and run off port 3000. Upon restarting the server, the default values will be loaded and all changes to it will be lost.

# Notes
This application has been built on a Vue and TailwindCSS front end and a LoopbackJS back end. The UIs aren't reactive (updates are shown upon changes) so refreshing is required to see the changes.
Given a (very) basic understanding of how Manufacturing Execution Systems work, I made the following design choices. 
## Dashboard
I didn't have the time or understanding of how to fit in Chart.js to display metrics meaningfully, so I discarded it. I connected the metrics to a REST API endpoint ```/dashboard-metrics``` so it should update according to the backend.
In reality, they should be connected to sensors that can live-feed that information in. 
## Production Tracking
This module monitors and schedules production orders, going off a specific dataset I found online. As mentioned, the UIs aren't reactive so a refresh is needed to see changes. Clicking the buttons will display their respective forms and submitting them will amend the in-memory data.
## Quality Control
Similar to Production Tracking, but monitors and schedules Inspection Records.
