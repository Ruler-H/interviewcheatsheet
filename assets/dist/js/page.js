const firstPage = `
<p class="card-group-title">여러분의 경력은?</p>
<div class="card-container">
	<div class="card fP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">주니어 개발자</h5>
			<button data-title="Junior" class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card career-second-card">
		<img src="./assets/dist/images/ormi.jpg" alt="미드 레벨 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">미드 레벨 개발자</h5>
			<button data-title="Middle Level" class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card fP-card fP-thirdCard">
		<img src="./assets/dist/images/ormi.jpg" alt="시니어 개발자 이미지" class="card-img">
		<div class="card-body fP-cardBody">
			<h5 class="card-title fP-cardTitle">시니어 개발자</h5>
			<button data-title="Senior" class="btn btn-primary career-select-btn">선택하기</button>
		</div>
	</div>
</div>
`;

const jobSelectPage = `
<p class="card-group-title">여러분의 분야는?</p>
<div class="card-container">
	<div class="card jSP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body jSP-cardBody">
			<h5 class="card-title jSP-cardTitle">백엔드 개발자</h5>
			<button data-title="BackEnd" class="btn btn-primary job-select-btn">선택하기</button>
		</div>
	</div>
	<div class="card job-second-card jSP-card">
		<img src="./assets/dist/images/ormi.jpg" alt="주니어 개발자 이미지" class="card-img">
		<div class="card-body  jSP-cardBody">
			<h5 class="card-title jSP-cardTitle">프론트엔드 개발자</h5>
			<button data-title="FrontEnd" class="btn btn-primary job-select-btn">선택하기</button>
		</div>
	</div>
</div>
<button type="button" class="btn btn-secondary btn-lg pre-btn">이전으로</button>
`;

const interviewStartPage = (str1, str2) => `
<p class="start-desc">당신은 ${str1} ${str2} 개발자입니다.<br> 맞다면 모의 면접 시작 버튼을 눌러주세요.</p>
    
<div class="group-btn">
    <a type="button" class="btn btn-secondary btn-lg job-select-btn">이전으로</a>
    <a type="button" class="btn btn-primary btn-lg interview-start-btn">시작하기</a>
</div>
`;

const interviewPage = (str1, str2, str3) => `
<div class="card text-center iP-container">
	<div class="card-header iP-cardHeader">
		<p>난이도 : ${str1}</p>
		<p>${str2} / 10</p>
	</div>
	<div class="card-body">
		<div class="iP-question">
			<p class="card-text">
				${str3}
			</p>
		</div>
		<div class="input-group iP-inputGroup">
			<span class="input-group-text">답변</span>
			<textarea class="form-control iP-textarea" aria-label="With textarea"></textarea>
			<button class="btn btn-outline-secondary submit-btn" type="button"button-addon2">제출하기</button>
		</div>
	</div>
	<div class="card-footer text-muted iP-cardFooter">
		<span class=min>00</span>:<span class=sec>00</span>.<span class=micro>00</span>
	</div>
</div>
`;

const resultPage = (str1, str2, str3, str4) => `
<div class="card text-center rP-container">
<div class="card-header rP-cardHeader">
	<p>난이도 : ${str1}</p>
	<div class="rP-rightHeader">
		<p>${str2} / 10</p>
		<img src="./assets/dist/images/empty-star.png" class="rP-star" alt="빈 별">
	</div>
</div>
<div class="card-body rP-cardBody">
	<div class="rP-cardContent">
		<h5 class="card-title rP-questionPurpose">질문 의도</h5>
		<hr class="rP-hr">
		<p class="card-text rP-cardText">
			${str3}
		</p>
	</div>
	<div class="rP-cardContent">
		<h5 class="card-title rP-questionAnswer">만점 답안</h5>
		<hr class="rP-hr">
		<p class="card-text rP-cardText">
			${str4}
		</p>
	</div>
</div>
</div>
<a type="button" class="btn btn-primary btn-lg rP-nextBtn">다음 문제</a>
`;

const finalResultPage = `
<div class="card text-center fRP-container">
<div class="card-header fRP-cardHeader">
	<p>총점 : 8.5점</p>
</div>
<div class="card-body fRP-cardBody">
	<div class="fRP-cardContent">
		<h5 class="card-title fRP-redeem">보완점</h5>
		<hr class="fRP-hr">
		<p class="card-text">
			웹 통신에 대한 개념을 보완하여...
		</p>
	</div>
</div>
</div>
<a type="button" class="btn btn-primary btn-lg fRP-restartBtn">다시하기</a>
`

const BEPage = (str1, str2, str3, str4, str5, str6, str7, str8) => `
<div class="BEP-title">
			<p class="h1 BEP-h1">BE Cheat Sheet</p>
		</div>
		<div class="BEP-cardGroup">
			<div class="card text-center BEP-container">
				<div class="card-header BEP-cardHeader">
					<p>난이도 : ${str1}</p>
					<img src="./assets/dist/images/empty-star.png" class="BEP-star BEP-star1" alt="빈 별">
				</div>
				<div class="card-body BEP-cardBody">
					<div class="BEP-cardContent">
						<p class="card-text">
							${str2}
						</p>
						<h5 class="card-title BEP-subHeading">질문 의도</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							${str3}
						</p>
						<h5 class="card-title BEP-subHeading">만점 답안</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							${str4}
						</p>
					</div>
				</div>
			</div>
			<div class="card text-center BEP-container">
				<div class="card-header BEP-cardHeader">
					<p>난이도 : ${str5}</p>
					<img src="./assets/dist/images/empty-star.png" class="BEP-star BEP-star2" alt="빈 별">
				</div>
				<div class="card-body BEP-cardBody">
					<div class="BEP-cardContent">
						<p class="card-text">
							${str6}
						</p>
						<h5 class="card-title BEP-subHeading">질문 의도</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							${str7}
						</p>
						<h5 class="card-title BEP-subHeading">만점 답안</h5>
						<hr class="BEP-hr">
						<p class="card-text">
							${str8}
						</p>
					</div>
				</div>
			</div>
			<button class=BEP-arrowContainer>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right BEP-arrow" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</button>
		</div>
`

const FEPage = (str1, str2, str3, str4, str5, str6, str7, str8) => `
<div class="FEP-title">
<p class="h1 FEP-h1">FE Cheat Sheet</p>
</div>
<div class="FEP-cardGroup">
<div class="card text-center FEP-container">
	<div class="card-header FEP-cardHeader">
		<p>난이도 : ${str1}</p>
		<img src="./assets/dist/images/empty-star.png" class="FEP-star FEP-star1" alt="빈 별">
	</div>
	<div class="card-body FEP-cardBody">
		<div class="FEP-cardContent">
			<p class="card-text">
				${str2}
			</p>
			<h5 class="card-title FEP-subHeading">질문 의도</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				${str3}
			</p>
			<h5 class="card-title FEP-subHeading">만점 답안</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				${str4}
			</p>
		</div>
	</div>
</div>
<div class="card text-center FEP-container">
	<div class="card-header FEP-cardHeader">
		<p>난이도 : ${str5}</p>
		<img src="./assets/dist/images/empty-star.png" class="FEP-star FEP-star2" alt="빈 별">
	</div>
	<div class="card-body FEP-cardBody">
		<div class="FEP-cardContent">
			<p class="card-text">
				${str6}
			</p>
			<h5 class="card-title FEP-subHeading">질문 의도</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				${str7}
			</p>
			<h5 class="card-title FEP-subHeading">만점 답안</h5>
			<hr class="FEP-hr">
			<p class="card-text">
				${str8}
			</p>
		</div>
	</div>
</div>
<button class=FEP-arrowContainer>
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right FEP-arrow" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
	</svg>
</button>
</div>
`

const OFMPage = (str1) => `
<div class="OFMP-title">
<p class="h1 OFMP-h1">Only For Me</p>
</div>
<div class="OFMP-cardGroup">
	${str1}
</div>
`

const $main = document.querySelector('.main');
const $navBE = document.querySelector('.nav-BE');
const $navFE = document.querySelector('.nav-FE');
const $navOFM = document.querySelector('.nav-OFM');
const $navBrand = document.querySelector('.navbar-brand');

let questionLevel;
let questionField;
let timer_micro;
let timer_sec;
let timer_min;
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const data = [{
	"role": "system",
	"content": ""
}, {
	"role": "user",
	"content": ""
}];

const questionList = [];
let favoriteQuestion = [];

function loadingWithMask(gif) {
	//화면의 높이와 너비를 구합니다.
	var maskHeight = $(document).height();
	var maskWidth  = window.document.body.clientWidth;
	 
	//화면에 출력할 마스크를 설정해줍니다.
	var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
	var loadingSpinner = `
	<div class="spinner-border text-secondary" role="status" style='position: absolute; display: block; margin-top: 10rem;' id="loading-spinner">
		<span class="visually-hidden">Loading...</span>
	</div>
	`;

	//화면에 레이어 추가
	$('body')
			.append(mask)

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
	$('#mask').css({
					'width' : maskWidth,
					'height': maskHeight,
					'opacity' : '0.3'
	}); 

	//마스크 표시
	$('#mask').show();

	//로딩중 이미지 표시
	
	$('main').append(loadingSpinner);
	$('#loading-spinner').show();
}

function closeLoadingWithMask() {
	$('#mask, #loadingSpinner').hide();
	$('#mask, #loadingSpinner').empty();  
}

// 모의 면접 타이머 정지
function stopTimer() {
	clearInterval(timer_micro);
	clearInterval(timer_sec);
	clearInterval(timer_min);
}

// 클릭 시 BE Cheat Sheet 페이지로 이동
function BEPPageRender() {
	stopTimer();
	data[0]['content'] = "assistant는 백엔드 기술 면접 전문가이다.";
	data[1]['content'] = "백엔드 기술 면접 예시 질문 2개를 질문, 모범 답변, 질문 의도, 질문 난이도로 정리해서 한글로 답해줘. 질문 난이도는 상, 중, 하로 답변해주고, 오직 json 형태로만 응답주고, key 값으로는 question, answer, intent, difficulty로 응답해줘.";
	loadingWithMask();
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		redirect: "follow",
	}).then((res) => res.json()
	).then((res) => res.choices[0].message.content
	).then((res) => {
		const queList = res.split('}');
		const reformList = []
		queList.forEach(que => {
			queInfo = que.split("\n")
			if (queInfo.length != 1) {
				const queReform = {};
				queInfo.forEach(info => {
					if (info.includes(":")) {
						console.log(info);
						queContent = info.split(":")[1].trim().replaceAll('"', '').replaceAll(',', '');
						if (info.includes("question")) {
							queReform['question'] = queContent;
						} else if(info.includes("answer")){
							queReform['perfectAnswer'] = queContent;
						} else if(info.includes("intent")){
							queReform['intent'] = queContent;
						} else if(info.includes("difficulty")){
							queReform['difficulty'] = queContent;
						}
					}
				})
				queReform['part'] = 'BackEnd';
				reformList.push(queReform);
			}
		})
		closeLoadingWithMask();
		pageRender(BEPage(reformList[0]['difficulty'], reformList[0]['question'], reformList[0]['intent'], reformList[0]['perfectAnswer'], reformList[1]['difficulty'], reformList[1]['question'], reformList[1]['intent'], reformList[1]['perfectAnswer']));

		// 즐겨찾기 별 변경
		const $BEPStar1 = $main.querySelector('.BEP-star1');
		$BEPStar1.addEventListener('click', () => {
			const starSrc = $BEPStar1.getAttribute('src')
			if (starSrc.includes('empty-star.png')) {
				$BEPStar1.setAttribute('src', "./assets/dist/images/star.png");
				favoriteQuestion.push(reformList[0]);
			}
			else {
				$BEPStar1.setAttribute('src', "./assets/dist/images/empty-star.png");
				favoriteQuestion = favoriteQuestion.filter((favQue) => favQue['question'] !== reformList[0]['question'])
			}
		})
		const $BEPStar2 = $main.querySelector('.BEP-star2');
		$BEPStar2.addEventListener('click', () => {
			const starSrc = $BEPStar2.getAttribute('src')
			if (starSrc.includes('empty-star.png')) {
				$BEPStar2.setAttribute('src', "./assets/dist/images/star.png");
				favoriteQuestion.push(reformList[1]);
			}
			else {
				$BEPStar2.setAttribute('src', "./assets/dist/images/empty-star.png");
				favoriteQuestion = favoriteQuestion.filter((favQue) => favQue['question'] !== reformList[1]['question'])
			}
		})
		// 화살표 클릭 시 BEPage 다시 렌더링
		const $BEPArrowContainer = $main.querySelector('.BEP-arrowContainer');
		pageRenderByButton($BEPArrowContainer, BEPPageRender);
	}).catch((err) => {
		console.log(err);
	})
};
pageRenderByButton($navBE, BEPPageRender);

// 클릭 시 FE Cheat Sheet 페이지로 이동
function FEPageRender() {
	stopTimer();
	data[0]['content'] = "assistant는 프론트엔드 기술 면접 전문가이다.";
	data[1]['content'] = "프론트엔드 기술 면접 예시 질문 2개를 질문, 모범 답변, 질문 의도, 질문 난이도로 정리해서 한글로 답해줘. 질문 난이도는 상, 중, 하로 답변해주고, 오직 json 형태로만 응답주고, key 값으로는 question, answer, intent, difficulty로 응답해줘.";
	loadingWithMask();
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		redirect: "follow",
	}).then((res) => res.json()
	).then((res) => res.choices[0].message.content
	).then((res) => {
		const queList = res.split('}');
		const reformList = []
		queList.forEach(que => {
			queInfo = que.split("\n")
			if (queInfo.length != 1) {
				const queReform = {};
				queInfo.forEach(info => {
					if (info.includes(":")) {
						queContent = info.split(":")[1].trim().replaceAll('"', '').replaceAll(',', '');
						if (info.includes("question")) {
							queReform['question'] = queContent;
						} else if(info.includes("answer")){
							queReform['perfectAnswer'] = queContent;
						} else if(info.includes("intent")){
							queReform['intent'] = queContent;
						} else if(info.includes("difficulty")){
							queReform['difficulty'] = queContent;
						}
					}
				})
				queReform['part'] = 'FrontEnd';
				reformList.push(queReform);
			}
		})
		closeLoadingWithMask();
		pageRender(FEPage(reformList[0]['difficulty'], reformList[0]['question'], reformList[0]['intent'], reformList[0]['perfectAnswer'], reformList[1]['difficulty'], reformList[1]['question'], reformList[1]['intent'], reformList[1]['perfectAnswer']));

		// 즐겨찾기 별 변경
		const $FEPStar1 = $main.querySelector('.FEP-star1');
		$FEPStar1.addEventListener('click', () => {
			const starSrc = $FEPStar1.getAttribute('src')
			if (starSrc.includes('empty-star.png')) {
				$FEPStar1.setAttribute('src', "./assets/dist/images/star.png");
				favoriteQuestion.push(reformList[0]);
			}
			else {
				$FEPStar1.setAttribute('src', "./assets/dist/images/empty-star.png");
				favoriteQuestion = favoriteQuestion.filter((favQue) => favQue['question'] !== reformList[0]['question'])
			}
		})
		const $FEPStar2 = $main.querySelector('.FEP-star2');
		$FEPStar2.addEventListener('click', () => {
			const starSrc = $FEPStar2.getAttribute('src')
			if (starSrc.includes('empty-star.png')) {
				$FEPStar2.setAttribute('src', "./assets/dist/images/star.png");
				favoriteQuestion.push(reformList[1]);
			}
			else {
				$FEPStar2.setAttribute('src', "./assets/dist/images/empty-star.png");
				favoriteQuestion = favoriteQuestion.filter((favQue) => favQue['question'] !== reformList[1]['question'])
			}
		})
		// 화살표 클릭 시 FEPage 다시 렌더링
		const $FEPArrowContainer = $main.querySelector('.FEP-arrowContainer');
		pageRenderByButton($FEPArrowContainer, FEPageRender);
	}).catch((err) => {
		console.log(err);
	})
};
pageRenderByButton($navFE, FEPageRender);

// 클릭 시 Only For Me 페이지로 이동
function OFMRender() {
	stopTimer();
	let addHTML = ``;
	let starId = 0;
	const starIdList = [];
	const questionBox = [];
	favoriteQuestion.forEach(que => {
		addHTML += `
		<div class="card text-center OFMP-container">
			<div class="card-header OFMP-cardHeader">
				<p>난이도 : ${que['difficulty']}</p>
				<img src="./assets/dist/images/star.png" class="OFMP-star OFM-star${starId}" alt="별" data-que=${que['question']}>
			</div>
			<div class="card-body OFMP-cardBody">
				<div class="OFMP-cardContent">
					<p class="card-text">
						${que['question']}
					</p>
					<h5 class="card-title OFMP-subHeading">질문 의도</h5>
					<hr class="OFMP-hr">
					<p class="card-text">
						${que['intent']}
					</p>
					<h5 class="card-title OFMP-subHeading">만점 답안</h5>
					<hr class="OFMP-hr">
					<p class="card-text">
						${que['perfectAnswer']}
					</p>
				</div>
			</div>
		</div>
		`
		starIdList.push(".OFM-star" + starId);
		starId += 1
	});


	pageRender(OFMPage(addHTML));

	starIdList.forEach(id => {
		const $star = $main.querySelector(id);
		const queData = $star.dataset['que'];
		$star.addEventListener('click', () => {
			const starSrc = $star.getAttribute('src')
			if (starSrc.includes('empty-star.png')) {
				$star.setAttribute('src', "./assets/dist/images/star.png");
				for(let i = 0; i < questionBox.length; i++){
					if (questionBox[i]['question'] == queData){
						favoriteQuestion.push(questionBox.pop(i));
						break;
					}
				}
			}
			else {
				$star.setAttribute('src', "./assets/dist/images/empty-star.png");
				for(let i = 0; i < favoriteQuestion.length; i++){
					if (favoriteQuestion[i]['question'] == queData){
						questionBox.push(favoriteQuestion.pop(i));
						break;
					}
				}
			}
			console.log('questionBox', questionBox);
			console.log('favoriteQuestion', favoriteQuestion);
		})
	})
}
pageRenderByButton($navOFM, OFMRender);

// main 태그 안 page 렌더링
function pageRender(page) {
	$main.innerHTML = page;
}

// 버튼에 pageRender 메서드를 클릭 이벤트 할당
function pageRenderByButton(btn, renderFunction) {
	btn.addEventListener('click', () => {
		renderFunction();
	});
}

// 메인 화면, 경력 선택 페이지 렌더링
function firstPageRender() {
	stopTimer();
	pageRender(firstPage);

	const $careerSelectBtn = $main.querySelectorAll('.career-select-btn');
	$careerSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, () => {
			jobSelectPageRender();
			questionLevel = btn.dataset['title'];
		});
	});
};
pageRenderByButton($navBrand, firstPageRender)

// 직무 선택 페이지 렌더링 메서드
function jobSelectPageRender() {

	pageRender(jobSelectPage);

	const $jobSelectBtn = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtn.forEach((btn) => {
		pageRenderByButton(btn, () => {
			questionField = btn.dataset['title'];
			interviewStartPageRender();
		});
	})

	const $homeBtn = $main.querySelector('.pre-btn')
	pageRenderByButton($homeBtn, firstPageRender);
}

// 모의 면접 시작 페이지 렌더링 메서드
function interviewStartPageRender() {
	pageRender(interviewStartPage(questionField, questionLevel));

	const $jobSelectBtns = $main.querySelectorAll('.job-select-btn');
	$jobSelectBtns.forEach((btn) => {
		pageRenderByButton(btn, jobSelectPageRender);
	});

	const $interViewStartBtn = $main.querySelector('.interview-start-btn');
	pageRenderByButton($interViewStartBtn, interviewPageRender);
}

// 모의 면접 문제 페이지 렌더링 메서드
function interviewPageRender() {

	data[0]['content'] = "assistant는 " + questionLevel + " " + questionField + " 기술 면접 전문가이다.";
	data[1]['content'] = questionLevel + " " + questionField + " 기술 면접 예시 질문 1개를 질문, 모범 답변, 질문 의도, 질문 난이도로 정리해서 한글로 답해줘. 질문 난이도는 상, 중, 하로 답변해주고, 오직 json 형태로만 응답주고, key 값으로는 question, answer, intent, difficulty로 응답해줘.";
	loadingWithMask();
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		redirect: "follow",
	}).then((res) => res.json()
	).then((res) => res.choices[0].message.content
	).then((res) => {
		const resList = res.split('\n');
		const reformList = {
			"question": resList[1].split(":")[1].trim().replace('"', '').slice(0, -2),
			"perfectAnswer": resList[2].split(":")[1].trim().replace('"', '').slice(0, -2),
			"intent": resList[3].split(":")[1].trim().replace('"', '').slice(0, -2),
			"difficulty": resList[4].split(":")[1].trim().replace('"', '').slice(0, 1),
			"part": questionField
		};
		closeLoadingWithMask();
		pageRender(interviewPage(reformList['difficulty'], questionList.length + 1, reformList['question']));

		let timer = 0;

		let micro = parseInt(document.querySelector(".micro").innerText);
		let sec = parseInt(document.querySelector(".sec").innerText);
		let min = parseInt(document.querySelector(".min").innerText);

		timer_micro = setInterval(() => {
			micro++;
			if (micro == 100) {
				micro = "00";
			} else if (micro < 10) {
				micro = "0" + micro;
			}
			document.querySelector(".micro").innerText = micro;
		}, 10);

		//start seconds
		timer_sec = setInterval(() => {
			sec++;
			if (sec == 60) {
				sec = "00";
			} else if (sec < 10) {
				sec = "0" + sec;
			}
			document.querySelector(".sec").innerText = sec;
		}, 1000);

		//start minutes
		timer_min = setInterval(() => {
			min++;

			if (min == 60) {
				min = 0;
			} else if (min < 10) {
				min = "0" + min;
			}

			document.querySelector(".min").innerText = min;
		}, 60000);

		const $submitBtn = $main.querySelector('.submit-btn');
		pageRenderByButton($submitBtn, () => {
			stopTimer();
			reformList['answer'] = $main.querySelector('.iP-textarea').value;
			questionList.push(reformList);
			resultPageRender();
		});

	}).catch((err) => {
		console.log(err);
	})
}

// 모의 면접 단위 결과 페이지 렌더링
function resultPageRender() {
	pageRender(resultPage(questionList[questionList.length - 1]['difficulty'], questionList.length, questionList[questionList.length - 1]['intent'], questionList[questionList.length - 1]['perfectAnswer']));

	// 즐겨찾기 별 변경
	const $rPStar = $main.querySelector('.rP-star');
	$rPStar.addEventListener('click', () => {
		starSrc = $rPStar.getAttribute('src')
		if (starSrc.includes('empty-star.png')) {
			$rPStar.setAttribute('src', "./assets/dist/images/star.png");
			favoriteQuestion.push(questionList[questionList.length - 1]);
		}
		else {
			$rPStar.setAttribute('src', "./assets/dist/images/empty-star.png");
			favoriteQuestion.pop();
		}
	});

	// 다음 문제 버튼
	const $nextBtn = $main.querySelector('.rP-nextBtn')
	if (questionList.length == 10) {
		$nextBtn.innerText = "다시하기"
		pageRenderByButton($nextBtn, firstPageRender);
	} else {
		pageRenderByButton($nextBtn, interviewPageRender);
	}

}

firstPageRender();
