/**
 * @author    Wolfgang L. J. Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2020 © Wolfgang L. J. Kowarschick
 * @license   MIT
 */

import util from 'util';

const inspectConfig = {compact: true, depth: 10, breakLength: 80, colors: true};

export default
{ title: 
    function(p_title)
    { console.log('============================================================================================');
      console.log(`== ${p_title}`);
      console.log('============================================================================================');
      console.group();
      console.log('------------------------------------------------------------------------------------------');
    },
  
  transform: 
    function(p_transform, p_json)
    { console.log(util.inspect(p_json, inspectConfig).replace(/'/g,'"'));
      console.log("→");
      console.log(util.inspect(p_transform.transform({ value: p_json }), inspectConfig).replace(/'/g,'"'));
      console.log('------------------------------------------------------------------------------------------');
    }, 
  
  end:
    function()
    { console.groupEnd(); 
      console.log();
    }
}