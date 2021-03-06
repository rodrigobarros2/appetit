import React from 'react';

export const UserIcon: React.FC = (props) => {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
			<path d="M10 1C12.7614 1 15 3.23858 15 6C15 8.76142 12.7614 11 10 11C7.23858 11 5 8.76142 5 6C5 4.52057 5.64253 3.19121 6.66377 2.27575M1 19C1 16.2386 5.02944 14 10 14C14.9706 14 19 16.2386 19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path fillRule="evenodd" clipRule="evenodd" d="M7.17065 7H12.8292C12.4174 8.16519 11.3062 9 9.99995 9C8.69373 9 7.58249 8.16519 7.17065 7Z" fill="white" />
		</svg>

	);
};

export default UserIcon;
