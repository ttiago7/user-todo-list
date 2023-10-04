import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Footer>
			<Nav>
				<ul className='pagination'>
					{pageNumbers.map((number) => (
						<li key={number} className='page-item'>
							<a
								onClick={() => paginate(number)}
								href='!#'
								className='page-link'
							>
								{number}
							</a>
						</li>
					))}
				</ul>
			</Nav>

			<div className='footer-copyright text-center py-3'>
				Santiago Calizaya:
				<a href='https://www.linkedin.com/in/ttiago7/' target='_blank'>
					{' '}
					LinkedIn
				</a>
			</div>
		</Footer>
	);
};

export default Pagination;

export const Footer = styled.div`
    background-color: #f6f5f7;
    padding: 1em;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    `;

export const Nav = styled.nav`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-left: 45%;
    `;
