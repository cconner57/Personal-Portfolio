import React from 'react';
import './project.css';

function PythonProjects() {
	const python = [
		{
			name: 'Counter',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/flask/flask_fundamentals/counter'
        },
        {
			name: 'Survey Validation',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/flask/flask_mysql/dojo_survey_validation'
        },
        {
			name: 'Random Word Generator',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/django/django_intro/random_word_gen'
        },
        {
			name: 'Clock',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/django/django_intro/time_display'
        },
        {
			name: 'Login/Registration',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/django/django_full_stack/login_registration'
		},
		{
			name: 'User Database',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/flask/flask_mysql/users'
        },
        {
			name: 'Trip Planner',
			github: 'https://github.com/cconner57/Coding-Dojo/tree/master/Python%20projects/django/django_full_stack/exam/trip_buddy'
		},
	];

	const pythonProjects = python.map((python, i) => {
		return (
			<div key={i} className="card center-align hoverable grow">
				<p className="project-title">
					{python.name}
				</p>
				<div className="project-links">
					<a className="light-blue accent-2 card-link waves-effect waves-light btn" href={python.github}>
						Github
					</a>
				</div>
			</div>
		);
	});

	return <div className="project-container">{pythonProjects}</div>;
}

export default PythonProjects;
