import { Link } from 'react-router-dom';
function Information() {
	return (
		<>
			<section id='information' className='action'>
				<div className='inner'>
					<div className='wrap'>
						<h1>ABOUT US</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quisquam fugit
							maiores, sedarchitectoLLorem ipsum dolor sit amet consectetur, adipisicing elit.
							Perferendarchitectolor sit amet consectetur, adipisicingarchitectolor sit amet
							consectetur, adipisicing elit. Perferendis quisquam fugit maiores, sed architectosequi
							officia iusto expedita cum
						</p>
						<Link to='/department'>MORE</Link>
					</div>

					<div className='QiuckJoin'>
						<form action='/result2' method='get' id='form'>
							<h1>ASK FOR INFORMATION</h1>
							<fieldset>
								<legend className='hidden'>빠른 상담 신청</legend>
								<table>
									<caption className='hidden'>정보 입력 양식 테이블</caption>
									{/* 이름 */}
									<tr>
										<th scope='row'>
											<label htmlFor='name'>NAME</label>
										</th>
										<td>
											<input type='text' name='name' id='name' />
										</td>
									</tr>
									{/* 번호 */}
									<tr>
										<th scope='row'>
											<label htmlFor='tell'>PhoneNumber</label>
										</th>
										<td>
											<select name='tell1' id='tell'>
												<option value='010'>010</option>
												<option value='070'>070</option>
												<option value='032'>032</option>
											</select>
											<span className='inputSpan'>-</span>
											<input type='tel' name='tellMiddle' id='tell' />
											<span className='inputSpan'>-</span>
											<input type='tel' name='tellEnd' id='tell' />
										</td>
									</tr>
									{/* 이메일 */}
									<tr>
										<th scope='row'>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												name='email'
												id='email'
												placeholder='이메일 주소를 입력해 주세요'
											/>
										</td>
									</tr>
									<tr>
										<th colSpan={2}>
											<input type='checkbox' name='agree' id='agree' />
											<label htmlFor='agree'>약관에 동의합니다 </label>
											<input type='submit' value='SUBMIT' />
										</th>
									</tr>
								</table>
							</fieldset>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default Information;
