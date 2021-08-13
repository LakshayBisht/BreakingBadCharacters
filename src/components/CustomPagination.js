import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const CustomPagination = ({
	length,
	pageNumber,
	setPageNumber,
	totalPages,
}) => {
	return (
		<div className='pagination'>
			<Pagination aria-label='Page navigation example'>
				<PaginationItem disabled={pageNumber === 1}>
					<PaginationLink first href='#' onClick={() => setPageNumber(1)} />
				</PaginationItem>
				<PaginationItem disabled={pageNumber <= 1}>
					<PaginationLink
						previous
						href='#'
						onClick={() => setPageNumber((prev) => prev - 1)}
					/>
				</PaginationItem>
				{[...Array(totalPages)].map((page, i) => (
					<PaginationItem active={i + 1 === pageNumber} key={i}>
						<PaginationLink onClick={() => setPageNumber(i + 1)} href='#'>
							{i + 1}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem disabled={pageNumber >= totalPages}>
					<PaginationLink
						next
						href='#'
						onClick={() => setPageNumber((prev) => prev + 1)}
					/>
				</PaginationItem>
				<PaginationItem disabled={pageNumber === totalPages}>
					<PaginationLink
						last
						href='#'
						onClick={() => setPageNumber(totalPages)}
					/>
				</PaginationItem>
			</Pagination>
		</div>
	);
};

export default CustomPagination;
