var o={id:"gitDownload",handler:async({collection:o,keys:e,trigger:l},{services:r,database:c,accountability:s,getSchema:a})=>{console.log("----------------"),console.log("API CALL STARTED 4"),console.log("trigger"),console.log(l),o||(o=l?.collection),e||(e=l?.keys||l?.key),console.log("collection"),console.log(o),console.log("keys"),console.log(e),Array.isArray(e)||!1!==e.includes("[")||(e=[e]),e=Array.isArray(e)?e:JSON.parse(Array.isArray(e));for await(const o of e)try{console.log("Key: "+o)}catch(o){return o}}};export{o as default};