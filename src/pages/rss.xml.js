import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const fallacies = await getCollection('fallacy');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: fallacies.map((fallacy) => ({
			...fallacy.data,
			link: `/fallacies/${fallacy.id}/`,
		})),
	});
}
