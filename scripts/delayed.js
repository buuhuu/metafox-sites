// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
function analyticsTracking() {
  const adobeDtm = window.adobeDataLayer;
  console.log(adobeDtm.version);
  alloy('setConsent', {
    consent: [{
      standard: 'Adobe',
      version: '2.0',
      value: {
        collect: {
          val: 'y',
        },
        metadata: {
          time: '2024-04-29T15:48:42-07:00',
        },
      },
    }],
  });
}
analyticsTracking();
