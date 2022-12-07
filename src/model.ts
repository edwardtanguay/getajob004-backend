import fs from 'fs';

type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

type Job = {
	id: number,
	title: string,
	company: string,
	url: string,
	description: string,
	skillList: string,
	skills: Skill[]
	todo: string,
}

const _jobs: any[] = JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf8'));
const skillInfos: any = (JSON.parse(fs.readFileSync('./src/data/skillInfos.json', 'utf8')));

export const getJobs = () => {
	const jobs: Job[] = [];
	_jobs.forEach((_job: any) => {
		const job: Job = {
			..._job,
			skills: []
		};
		jobs.push(job);
	})
	return jobs;
}

export const getTodos = () => {
	return _jobs.map((job: Job) => {
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