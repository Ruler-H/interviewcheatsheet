const firstPage = `
	<p class="card-group-title">여러분의 경력은?</p>
	<div class="card-container">
		<div class="card">
			<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
			<div class="card-body">
				<h5 class="card-title">주니어 개발자</h5>
				<button class="btn btn-primary career-select-btn">선택하기</button>
			</div>
		</div>
		<div class="card career-second-card">
			<img src="./assets/dist/images/ormi.jpg" alt="미드 레벨 개발자 이미지" class="card-img">
			<div class="card-body">
				<h5 class="card-title">미드 레벨 개발자</h5>
				<button class="btn btn-primary career-select-btn">선택하기</button>
			</div>
		</div>
		<div class="card">
			<img src="./assets/dist/images/ormi.jpg" alt="시니어 개발자 이미지" class="card-img">
			<div class="card-body">
				<h5 class="card-title">시니어 개발자</h5>
				<button class="btn btn-primary career-select-btn">선택하기</button>
			</div>
		</div>
	</div>
`;

const jobSelectPage = `
	<p class="card-group-title">여러분의 분야는?</p>
	<div class="card-container">
		<div class="card">
			<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
			<div class="card-body">
				<h5 class="card-title">백엔드 개발자</h5>
				<button class="btn btn-primary job-select-btn">선택하기</button>
			</div>
		</div>
		<div class="card job-second-card">
			<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
			<div class="card-body">
				<h5 class="card-title">프론트엔드 개발자</h5>
				<button class="btn btn-primary job-select-btn">선택하기</button>
			</div>
		</div>
	</div>
	<button type="button" class="btn btn-secondary btn-lg pre-btn">이전으로</button>
`;

const interviewStartPage = `
	<p class="start-desc">당신은 BackEnd Junior 개발자입니다.<br> 맞다면 모의 면접 시작 버튼을 눌러주세요.</p>
    
	<div class="group-btn">
		<a type="button" class="btn btn-secondary btn-lg job-select-btn">이전으로</a>
		<a type="button" class="btn btn-primary btn-lg interview-start-btn">시작하기</a>
	</div>
`;

const interviewPage = `
	<div class="card text-center cd-container">
	<div class="card-header">
		<p>난이도 : 하</p>
		<p>1 / 10</p>
	</div>
	<div class="card-body">
		<div class="question">
			<p class="card-text">
				Python에서의 메모리 관리 기법에 대해 설명해 보세요.
			</p>
		</div>
		<div class="input-group">
			<span class="input-group-text">답변</span>
			<textarea class="form-control" aria-label="With textarea"></textarea>
			<button class="btn btn-outline-secondary submit-btn" type="button"button-addon2">제출하기</button>
		</div>
	</div>
	<div class="card-footer text-muted">
		00:00
	</div>
	</div>
`;

const resultPage = `
	<div class="card text-center cd-container">
	<div class="card-header">
		<p>난이도 : 하</p>
		<p>1 / 10</p>
	</div>
	</div>
`;


const $main = document.querySelector('.main');

function pageRender(page) {
	$main.innerHTML = page;
}

function pageRenderByButton(btn, renderFunction){
	btn.addEventListener('click', () => {
		renderFunction();
	});
}

// 메인 화면, 경력 선택 페이지 렌더링 메서드
function firstPageRender() {
	pageRender(firstPage);

	const $careerSelectBtn = $main.querySelectorAll('.career-select-btn');
	$careerSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, jobSelectPageRender);
	});
	
};

// 직무 선택 페이지 렌더링 메서드
function jobSelectPageRender() {

	pageRender(jobSelectPage);

	const $jobSelectBtn = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, interviewStartPageRender);
	})

	const $homeBtn = $main.querySelector('.pre-btn')
	pageRenderByButton($homeBtn, firstPageRender);
}

// 모의 면접 시작 페이지 렌더링 메서드
function interviewStartPageRender(){
	pageRender(interviewStartPage);

	const $jobSelectBtns = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtns.forEach((btn) => {
		pageRenderByButton(btn, jobSelectPageRender);
	});
	
	const $interViewStartBtn = $main.querySelector('.interview-start-btn');
	pageRenderByButton($interViewStartBtn, interviewPageRender);
}

// 모의 면접 문제 페이지 렌더링 메서드
function interviewPageRender(){
	pageRender(interviewPage);

	const $submitBtn = $main.querySelector('.submit-btn');
	pageRenderByButton($submitBtn, resultPageRender);
}

// 모의 면접 단위 결과 페이지 렌더링 메서드
function resultPageRender(){
	pageRender(resultPage);
}

firstPageRender();