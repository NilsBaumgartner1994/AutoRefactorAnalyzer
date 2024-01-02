export default {
	id: 'gitDownload',
	name: 'Git Download',
	icon: 'box',
	description: 'Download git repos',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
		},
	],
	options: [
/**
		{
				field: 'collection',
				name: '$t:collection',
				type: 'string',
				meta: {
					width: 'half',
					interface: 'system-collection',
				},
			},
			*/
			{
				field: 'trigger',
				name: '{{$trigger}}',
				type: 'string',
				meta: {
					width: 'half',
					interface: 'tags',
					options: {
						iconRight: 'vpn_key',
					},
				},
			},
	],
};
