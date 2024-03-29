// import '../stock-locator/stockcar.aem.min.js';
import { getMetadata } from '../../scripts/aem.js';
import {launcSL} from  '../../scripts/scripts.js';
export function generateStockLocatorDOM() {
  // Extract properties, always same order as in model, empty string if not set

  // Build DOM
  const stockLocatorDOM = document.createRange().createContextualFragment(`
  <div id="stockcar" data-loader="amdLoader" data-component-path="StockcarAem">
  <stockcar></stockcar>
  </div>
  <div class="tw-w-full" id="_js-stockcar-disclaimers">
    <div class="tw-container">
        <div class="tw-w-full tw-px-400 tw-mb-300">
            <div class="tw-text-grey-500 tw-text-300 tw-leading-800 disclaimer">
                <div id="generic-disclaimer">
                    <p>
                        Sve BMW automobile je moguće naručiti u jednom od preporučenih paketa dodatne opreme, ali i konfigurisati u potpunosti prema željama klijenta.<br/>
                        Sve cene su informativnog karaktera. Proizvođač/prodavac zadržava pravo da bez prethodne najave promeni opremu ili cene.<br/>
                        Cene su sa uračunatim PDV-om, izražene u EUR. Plaćanje se vrši po srednjem kursu NBS na dan uplate.<br/>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
  `);

  // add final teaser DOM and classes if used as child component
  return stockLocatorDOM;
}

export default function decorate(block) {
  // get the first and only cell from each row
  const stockLocatorDOM = generateStockLocatorDOM();
  block.textContent = '';
  block.append(stockLocatorDOM);
  document.querySelector('stockcar').setAttribute('i18n', decodeURI(getMetadata("stockcari18n")));
  document.querySelector('stockcar').setAttribute('config', decodeURI(getMetadata("stockcarconfig")));
  document.querySelector('stockcar').setAttribute('generic-disclaimer', decodeURI(getMetadata("stockcargen")));
  document.querySelector('stockcar').setAttribute('data-tracking-component', decodeURI(getMetadata("stocktracking")));
  launcSL();
}





