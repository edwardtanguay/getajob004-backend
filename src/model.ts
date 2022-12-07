import fs from 'fs';

type Job = {
	id: number,
	title: string,
	company: string,
	url: string,
	description: string,
	skillList: string,
	todo: string,
}

const jobs = (JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf8')) as Job[]);

export const getJobs = () => {
	return jobs;
}

export const getTodos = () => {
	return jobs.map((job: Job) => {
		return {
			todo: job.todo,
			company: job.company,
			title: job.title
		};
	})
}

export const getApiDocumentationHtml = () => {
	return `
<h1>GETAJOB API</h1>	
<ul>
	<li><a href="jobs">/jobs</a> - returns an array of job objects</li>
</ul>
`;
}