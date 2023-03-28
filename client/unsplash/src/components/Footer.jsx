import React from 'react';

const Footer = () => {
	return (
		<footer>
			<p>
				created by{' '}
				<a className={classes.a} href='https://github.com/Kehindecodes'>
					<span style={{ fontWeight: 600 }}>Oki kehinde</span>
				</a>
				-{' '}
				<a className={classes.a} href='devChallenges.io'>
					devChallenges.io
				</a>
			</p>
		</footer>
	);
};

export default Footer;
