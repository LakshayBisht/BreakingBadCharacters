import React from 'react';
// import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = ({ query, handleChange }) => {
	return (
		<section className='search'>
			<Form>
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for='character-name'>Character Name</Label>
							<Input
								id='character-name'
								type='text'
								name='name'
								placeholder='Walter White'
								value={query.name}
								onChange={handleChange}
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for='category'>Category</Label>
							<Input
								id='category'
								type='text'
								name='category'
								placeholder='Breaking Bad'
								value={query.category}
								onChange={handleChange}
							/>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		</section>
	);
};

export default SearchBar;
