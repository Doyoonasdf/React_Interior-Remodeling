import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faX, faCheck } from '@fortawesome/free-solid-svg-icons';

// <FontAwesomeIcon icon="fa-solid fa-pen" />
// <FontAwesomeIcon icon="fa-solid fa-trash-can" />
function Community() {
	//메인에서 로컬스토리지에 저장된 값을 가져와서 리턴
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	//폼 초기화 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//글 저장 함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	//글 삭제 함수
	const deletePost = (index) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	//글 수정함수
	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);

		setAllowed(true);
	};

	//글 수정모드 변경함수
	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//글 출력모드 변경함수
	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
		// 	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [Posts]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}, 1000);
	}, []);

	return (
		<Layout name={'community'} h1name={'COMMUNITY'}>
			<div className='inputBox'>
				<label for>TITLE</label>
				<input type='text' placeholder='Please enter a title' ref={input} />

				<br />

				<label for>COMMENTS</label>
				<textarea
					cols='30'
					rows='4'
					placeholder='Please enter the contents'
					ref={textarea}
				></textarea>
				<br />
				<div className='btnSet'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//수정 모드
								<>
									<div className='txt'>
										<h2>
											<input type='text' defaultValue={post.title} ref={inputEdit} />
											<br />
											<textarea
												cols='30'
												rows='4'
												defaultValue={post.content}
												ref={textareaEdit}
											></textarea>
											<br />
										</h2>
									</div>

									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>
											<FontAwesomeIcon icon={faX} />
										</button>
										<button onClick={() => updatePost(idx)}>
											<FontAwesomeIcon icon={faCheck} />
										</button>
									</div>
								</>
							) : (
								//출력 모드
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>
											<FontAwesomeIcon icon={faPen} />
										</button>
										<button onClick={() => deletePost(idx)}>
											<FontAwesomeIcon icon={faTrashCan} />
										</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
