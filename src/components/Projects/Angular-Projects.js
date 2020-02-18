import React from 'react';
import './project.css';

function AngularProjects() {
	const angular = [
        {
			name: 'Express.JS Counter',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/MEAN%20projects/express/counter'
        },
        {
			name: 'Survey Form',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/MEAN%20projects/express/survey_form'
		},
		{
			name: 'Favorite Quotes Manager',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/MEAN%20projects/Angular/Authors'
        },
        {
			name: 'Authors/Quotes Manager',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/MEAN%20projects/Angular/Authors_demo'
		},
		{
			name: 'Pet Adoptions',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/MEAN%20projects/Angular/Belt_exam%20copy'
		},
	];

	const angularProjects = angular.map((angular, i) => {
		return (
			<div key={i} className="card center-align hoverable grow">
				<p className="project-title">
					{angular.name}
				</p>
				<div className="project-links">
					<a className="light-blue accent-2 card-link waves-effect waves-light btn" href={angular.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return <div className="project-container">{angularProjects}</div>;
}

export default AngularProjects;
