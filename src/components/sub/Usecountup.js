import React from 'react';
import Department from './Department';
function Usecountup({ end, start, duration }) {
	return <b>{Department(end, start, duration)}</b>;
}

export default Usecountup;
