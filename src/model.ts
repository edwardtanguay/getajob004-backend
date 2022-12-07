import fs from 'fs';
import * as model from './model.js';

type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

type RawJob = {
	id: number,
	title: string,
	company: string,
	url: string,
	description: string,
	skillList: string,
	todo: string,
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

const rawJobs: RawJob[] = JSON.parse(fs.readFileSync('./src/data/jobs.json', 'utf8'));
const skillInfos: any = (JSON.parse(fs.readFileSync('./src/data/skillInfos.json', 'utf8')));

export const getJobs = () => {
	const jobs: Job[] = [];
	rawJobs.forEach((rawJob: RawJob) => {
		const job: Job = {
			...rawJob,
			skills: model.buildSkills(rawJob.skillList) 
		};
		jobs.push(job);
	})
	return jobs;
}

export const buildSkills = (skillList: string) => {
	return [];
}

export const getTodos = () => {
	return rawJobs.map((job: Job) => {
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