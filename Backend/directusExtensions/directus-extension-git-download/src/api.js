export default {
	id: 'gitDownload',
	handler: async ( {collection, keys, trigger}, { services, database, accountability, getSchema }) => {
		console.log("----------------");
		console.log("API CALL STARTED 4");
		console.log("trigger");
		console.log(trigger);

		/**
		 * trigger on update
autorefactoranalyzer-directus-1  | {
autorefactoranalyzer-directus-1  |   event: 'repositories.items.update',
autorefactoranalyzer-directus-1  |   payload: { name: 'sefsefsef' },
autorefactoranalyzer-directus-1  |   keys: [ 'adf' ],
autorefactoranalyzer-directus-1  |   collection: 'repositories'
autorefactoranalyzer-directus-1  | }
*/


/**
 * autorefactoranalyzer-directus-1  | trigger on create
autorefactoranalyzer-directus-1  | {
autorefactoranalyzer-directus-1  |   event: 'repositories.items.create',
autorefactoranalyzer-directus-1  |   payload: {
autorefactoranalyzer-directus-1  |     id: 'sefsef',
autorefactoranalyzer-directus-1  |     url: 'https://github.com/FireboltCasters/directus-extension-auto-translation',
autorefactoranalyzer-directus-1  |     name: 'sefsef'
autorefactoranalyzer-directus-1  |   },
autorefactoranalyzer-directus-1  |   key: 'sefsef',
autorefactoranalyzer-directus-1  |   collection: 'repositories'
autorefactoranalyzer-directus-1  | }
*/


		if(!collection){
			collection = trigger?.collection;
		}
		if(!keys){
			keys = trigger?.keys || trigger?.key;
		}

		console.log("collection");
		console.log(collection);
		console.log("keys");
		console.log(keys);

		if (!Array.isArray(keys) && keys.includes('[') === false) {
			keys = [keys];
		}

		keys = Array.isArray(keys) ? keys : JSON.parse(Array.isArray(keys));

		let results = [];
		let activity = null;

		for await (const key of keys) {
			try {
				console.log("Key: "+key);
			} catch (error) {
				return error;
			}
		};
		//return results;
	},
};
